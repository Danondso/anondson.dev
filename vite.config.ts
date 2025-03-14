import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  define: {
    // Ensure environment variables are properly handled
    // This is needed because Vite doesn't automatically expose process.env to the browser
    'process.env': {}
  },
  resolve: {
    alias: {
      // Use resolve for proper path resolution
      'src': resolve(__dirname, './src'),
      '@win95icons': resolve(__dirname, './public/windows_95_all_icons_by_vovan29_ddbo0ro/Windows 95 ALL ICONS v1.1/All [Without duplicates]')
    }
  },
  // Ensure build output is properly configured
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Improve build performance
    minify: 'terser',
    // Handle environment variables
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: [],
      output: {
        // Chunk size optimization
        manualChunks: {
          vendor: ['node-emoji', 'dompurify']
        }
      }
    }
  },
  // Ensure server is properly configured
  server: {
    port: 3000,
    open: true
  }
}); 