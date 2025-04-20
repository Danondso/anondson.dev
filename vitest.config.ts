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
      reporter: ['text', 'lcov', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'vitest.setup.ts',
        '**/*.{spec,test}.{js,ts}',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/eslint.config.js',
        '**/__tests__/**',
        '**/types.ts',
        'src/main.ts',
      ],
      include: ['src/**/*.{js,ts}'],
      all: true,
      // Report as 0% covered if no tests
      skipFull: false,
      // Threshold enforcement
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
        perFile: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
