import { describe, it, expect } from 'vitest';
import { createIconHTML } from './icon';

describe('Icon Utility', () => {
  describe('createIconHTML', () => {
    it('should create HTML for an icon with correct attributes', () => {
      const iconPath = '/path/to/icon.png';
      const altText = 'Icon description';
      const size = 24;

      const result = createIconHTML(iconPath, altText, size);
      
      expect(result).toBe(
        '<img src="/path/to/icon.png" alt="Icon description" style="width: 24px; height: 24px;">'
      );
    });
    
    it('should handle different sizes', () => {
      const iconPath = '/path/to/icon.png';
      const altText = 'Icon description';
      
      expect(createIconHTML(iconPath, altText, 16)).toContain('width: 16px; height: 16px;');
      expect(createIconHTML(iconPath, altText, 32)).toContain('width: 32px; height: 32px;');
      expect(createIconHTML(iconPath, altText, 48)).toContain('width: 48px; height: 48px;');
    });
    
    it('should include special characters in alt text', () => {
      const iconPath = '/path/to/icon.png';
      const altText = 'Special & "characters" <test>';
      const size = 24;
      
      const result = createIconHTML(iconPath, altText, size);
      
      // The function passes through special characters as-is
      expect(result).toContain(`alt="${altText}"`);
    });
    
    it('should work with absolute URLs', () => {
      const iconPath = 'https://example.com/icon.png';
      const altText = 'Remote icon';
      const size = 24;
      
      const result = createIconHTML(iconPath, altText, size);
      
      expect(result).toBe(
        '<img src="https://example.com/icon.png" alt="Remote icon" style="width: 24px; height: 24px;">'
      );
    });
    
    it('should handle size zero correctly', () => {
      const iconPath = '/path/to/icon.png';
      const altText = 'Zero size icon';
      const size = 0;
      
      const result = createIconHTML(iconPath, altText, size);
      
      expect(result).toContain('width: 0px; height: 0px;');
    });
  });
}); 