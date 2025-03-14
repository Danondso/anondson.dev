import { beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

// Set up JSDOM environment for DOMPurify
beforeAll(() => {
  // Create a new JSDOM instance
  const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'http://localhost',
    runScripts: 'dangerously'
  });
  
  // Set up global objects for testing environment
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
  
  // Initialize DOMPurify with the JSDOM window
  const purify = DOMPurify(window);
  
  // Make DOMPurify available globally
  global.DOMPurify = purify;
}); 