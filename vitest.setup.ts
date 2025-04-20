import { beforeAll, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

// Mock import.meta.env for RetroAchievements API
beforeAll(() => {
  // Create a new JSDOM instance
  const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'http://localhost',
    runScripts: 'dangerously',
  });

  // Set up global objects for testing environment
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;

  // Initialize DOMPurify with the JSDOM window
  const purify = DOMPurify(window);

  // Make DOMPurify available globally
  global.DOMPurify = purify;

  // Mock the import.meta.env variables for RetroAchievements API
  vi.mock('import.meta.env', () => ({
    VITE_RETRO_ACHIEVEMENTS_USERNAME: 'test_user',
    VITE_RETRO_ACHIEVEMENTS_API_KEY: 'test_api_key_12345',
    VITE_RETRO_ACHIEVEMENTS_BASE_URL: 'https://retroachievements.org',
  }));
});
