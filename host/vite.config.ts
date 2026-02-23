import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '4.2.0',
      imoUi: {
        variant: 'full',
        buttonPos: 'bottom-right',
      },
      importMaps: {
        dev: ['src/importMap.dev.json', 'src/importMap.shared.json'],
        build: ['src/importMap.json', 'src/importMap.shared.json'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 9000,
  },
});
