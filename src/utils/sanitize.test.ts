import { describe, it, expect } from 'vitest';
import { sanitizeHTML } from './sanitize';

describe('sanitizeHTML', () => {
  it('should interpolate values correctly', () => {
    const value1 = 'Hello';
    const value2 = 'World';

    const result = sanitizeHTML`<div>${value1} ${value2}</div>`;

    expect(result).toContain('Hello');
    expect(result).toContain('World');
    expect(result).toContain('<div>');
  });

  it('should handle null and undefined values', () => {
    const value1 = null;
    const value2 = undefined;

    const result = sanitizeHTML`<div>${value1} ${value2}</div>`;

    // The result should contain a div with spaces where the null/undefined values were
    expect(result).toMatch(/<div>\s+<\/div>/);
  });

  it('should convert non-string values to strings', () => {
    const value1 = 123;
    const value2 = { toString: () => 'object' };

    const result = sanitizeHTML`<div>${value1} ${value2}</div>`;

    expect(result).toContain('123');
    expect(result).toContain('object');
  });

  it('should sanitize dangerous HTML', () => {
    const dangerous = '<script>alert("XSS")</script>';
    const result = sanitizeHTML`<div>${dangerous}</div>`;

    expect(result).not.toContain('<script>');
    expect(result).not.toContain('alert');
  });

  it('should preserve safe HTML structure', () => {
    const result = sanitizeHTML`
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">Window Title</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
          </div>
        </div>
      </div>
    `;

    expect(result).toContain('class="window"');
    expect(result).toContain('class="title-bar"');
    expect(result).toContain('class="title-bar-text"');
    expect(result).toContain('Window Title');
    expect(result).toContain('button');
    expect(result).toContain('aria-label="Minimize"');
  });
});
