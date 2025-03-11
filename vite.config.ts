import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Polyfill for process.env in the browser
    'process.env': {}
  },
  server: {
  }
}); 