import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

const forSingleSpa = process.env.SINGLE_SPA === 'true';

export default defineConfig({
  plugins: [
    react({ fastRefresh: !forSingleSpa }), // ✅ key line
    tailwindcss(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 4101,
      spaEntryPoints: 'src/spa.tsx',
      cssStrategy: 'none',
    }),
  ],
  server: {
    port: 4101,
    origin: 'http://localhost:4101',
    cors: true,
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
});
