const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StandaloneSingleSpaPlugin =
  require("standalone-single-spa-webpack-plugin").default;

module.exports = (webpackConfigEnv = {}, argv) => {
  const isProduction = argv.mode === "production";
  const isStandalone = webpackConfigEnv.standalone;

  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.ejs"),
      inject: "body",
      scriptLoading: "module",
    }),
  ];

  if (!isProduction) {
    plugins.push(
      new StandaloneSingleSpaPlugin({
        appOrParcelName: "@chkp/page3",
        activeWhen: ["/page3"],
        HtmlWebpackPlugin,
        importMap: {
          imports: {
            react: "https://esm.sh/react@16",
            "react-dom":
              "https://esm.sh/react-dom@16",
          },
        },
      })
    );
  }

  return {
    mode: isProduction ? "production" : "development",
    entry: path.resolve(__dirname, "src/spa"),
    output: {
      filename: "spa.js",
      libraryTarget: "module",
      path: path.resolve(__dirname, "dist"),
      uniqueName: "page3",
      publicPath: "auto",
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
    externals: isStandalone ? [] : ["react", "react-dom"],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["@tailwindcss/postcss", {}]],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
      port: 4202,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: true,
    },
    plugins,
  };
};
