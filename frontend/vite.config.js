import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Avoid Railpack/Nixpacks EBUSY issues around node_modules/.vite by moving Vite cache
  // outside node_modules.
  cacheDir: '.vite-cache',
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
