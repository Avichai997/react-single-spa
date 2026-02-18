import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

declare const process: { env: Record<string, string | undefined> };
const forSingleSpa = process.env.SINGLE_SPA === 'true';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 4101,
      spaEntryPoints: 'src/spa.tsx',
      cssStrategy: 'singleMife',
    }),
  ],
  server: {
    port: 4101,
    hmr: !forSingleSpa,
    origin: 'http://localhost:4101',
    cors: true,
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
});
