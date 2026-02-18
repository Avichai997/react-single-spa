import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    tailwindcss(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '4.2.0',
      imoUi: {
        variant: 'full',
        buttonPos: 'bottom-right',
      },
      importMaps: {
        type: 'overridable-importmap',
        dev: ['src/importMap.json', 'src/importMap.shared.json'],
        build: ['src/importMap.json', 'src/importMap.shared.json'],
      },
    }),
  ],
  server: {
    port: 9000,
  },
});
