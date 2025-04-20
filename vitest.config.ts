import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:3000/',
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/', 'vitest.setup.ts'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
