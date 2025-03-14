import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Polyfill for process.env in the browser
    'process.env': {}
  },
  resolve: {
    alias: {
      '@win95icons': '/public/windows_95_all_icons_by_vovan29_ddbo0ro/Windows 95 ALL ICONS v1.1/All [Without duplicates]'
    }
  },
  server: {
  }
}); 