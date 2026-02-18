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
        appOrParcelName: "@chkp/page2",
        activeWhen: ["/page2"],
        HtmlWebpackPlugin,
        importMap: {
          imports: {
            react: "https://esm.sh/react@19",
            "react-dom": "https://esm.sh/react-dom@19?external=react",
            "react-dom/client":
              "https://esm.sh/react-dom@19/client?external=react,react-dom",
          },
        },
      })
    );
  }

  return {
    mode: isProduction ? "production" : "development",
    entry: path.resolve(__dirname, "src/chkp-page2"),
    output: {
      filename: "chkp-page2.js",
      libraryTarget: "module",
      path: path.resolve(__dirname, "dist"),
      uniqueName: "page2",
      publicPath: "auto",
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
    externals: isStandalone ? [] : ["react", "react-dom", "react-dom/client"],
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
      port: 4201,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: true,
    },
    plugins,
  };
};
