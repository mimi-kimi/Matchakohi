import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base keeps the build portable across GitHub Pages project sites,
// custom domains, and local previews.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
});
