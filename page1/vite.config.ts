import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

declare const process: { env: Record<string, string | undefined> };
const forSingleSpa = process.env.SINGLE_SPA === 'true';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 4102,
      spaEntryPoints: 'src/spa.tsx',
      cssStrategy: 'singleMife',
    }),
  ],
  server: {
    port: 4102,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hmr: !forSingleSpa,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
});
