import DOMPurify from 'dompurify';

/**
 * Safely creates HTML content by sanitizing it with DOMPurify
 * @param strings Template literal strings
 * @param values Values to interpolate
 * @returns Sanitized HTML string that's safe to insert into innerHTML
 */
export function sanitizeHTML(strings: TemplateStringsArray, ...values: any[]): string {
  // Interpolate the template literal
  const rawValues = values.map(value => {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value);
  });

  let result = strings[0];
  for (let i = 0; i < rawValues.length; i++) {
    result += rawValues[i] + strings[i + 1];
  }

  // Configure DOMPurify to allow our Windows 98-style UI elements
  return DOMPurify.sanitize(result, {
    ALLOWED_TAGS: [
      // Structure
      'div', 'span', 'p', 'br',
      // Headings
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      // Tables
      'table', 'tr', 'td', 'th', 'thead', 'tbody',
      // Lists
      'ul', 'ol', 'li',
      // Media
      'img',
      // Interactive
      'button', 'a',
      // Text formatting
      'strong', 'em'
    ],
    ALLOWED_ATTR: [
      // Common attributes
      'id', 'class', 'style',
      // Media attributes
      'src', 'alt', 'width', 'height',
      // Link attributes
      'href', 'target', 'rel',
      // Accessibility
      'aria-label', 'role',
      // Windows 98 specific
      'title'
    ],
    ADD_ATTR: ['target'], // Ensure target attribute is allowed for links
    ALLOW_DATA_ATTR: false, // Disable data attributes for security
    USE_PROFILES: { html: true }, // Use HTML profile for parsing
    RETURN_DOM: false, // Return string instead of DOM
    RETURN_DOM_FRAGMENT: false,
    WHOLE_DOCUMENT: false,
    SANITIZE_DOM: true
  });
} 