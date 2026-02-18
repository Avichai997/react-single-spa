import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

const forSingleSpa = process.env.SINGLE_SPA === 'true';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 4102,
      spaEntryPoints: 'src/spa.tsx',
      cssStrategy: 'none',
    }),
  ],
  server: {
   port: 4102,
    cors: true,
    hmr: !forSingleSpa,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
});
