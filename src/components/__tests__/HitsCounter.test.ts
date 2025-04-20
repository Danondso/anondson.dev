import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initHitsCounter, updateHitsCounter } from '../HitsCounter';
import * as hitsService from '../../services/hits';
import { mockHitsCounterResponse } from '../../__fixtures__/hits';

// Mock the hits service
vi.mock('../../services/hits', () => ({
  getHitCount: vi.fn(),
  incrementHitCount: vi.fn(),
}));

// Mock sanitizeHTML
vi.mock('../../utils/sanitize', () => ({
  sanitizeHTML: vi.fn((strings, ...values) => {
    // Simple mock implementation that just joins the strings and values
    let result = strings[0];
    for (let i = 0; i < values.length; i++) {
      result += values[i] + strings[i + 1];
    }
    return result;
  }),
}));

describe('HitsCounter Component', () => {
  beforeEach(() => {
    // Set up HTML structure
    document.body.innerHTML = `
      <div id="hits-counter"></div>
    `;
    
    // Reset mocks
    vi.resetAllMocks();
    
    // Set up console.error mock
    console.error = vi.fn();
    
    // Use fake timers
    vi.useFakeTimers();
  });
  
  afterEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    vi.useRealTimers();
  });
  
  describe('initHitsCounter', () => {
    it('should initialize the hits counter correctly', async () => {
      // Mock incrementHitCount to return test data
      vi.mocked(hitsService.incrementHitCount).mockResolvedValue(mockHitsCounterResponse);
      
      // Call the function
      await initHitsCounter();
      
      // Get the container element
      const container = document.getElementById('hits-counter');
      const counterField = container?.querySelector('.hits-counter-field');
      
      // Check that the counter was initialized correctly
      expect(container).not.toBeNull();
      expect(container?.querySelector('.counter-value')?.textContent).toBe('Visitors: 42');
      expect(counterField?.classList.contains('counter-loaded')).toBe(true);
      
      // Verify service was called
      expect(hitsService.incrementHitCount).toHaveBeenCalledTimes(1);
      
      // Fast-forward time to check class removal
      vi.advanceTimersByTime(1000);
      expect(counterField?.classList.contains('counter-loaded')).toBe(false);
    });
    
    it('should handle missing container gracefully', async () => {
      // Remove the container
      document.body.innerHTML = '';
      
      // Call the function
      await expect(initHitsCounter()).resolves.not.toThrow();
      
      // Verify service was still called
      expect(hitsService.incrementHitCount).toHaveBeenCalledTimes(1);
    });
    
    it('should handle service errors gracefully', async () => {
      // Mock service to throw an error
      vi.mocked(hitsService.incrementHitCount).mockRejectedValue(new Error('Service error'));
      
      // Call the function
      await initHitsCounter();
      
      // Check that error was logged
      expect(console.error).toHaveBeenCalled();
      
      // Get the container element
      const container = document.getElementById('hits-counter');
      
      // Check that the fallback message was displayed
      expect(container).not.toBeNull();
      expect(container?.querySelector('.counter-value')?.textContent).toBe('--');
    });
  });
  
  describe('updateHitsCounter', () => {
    it('should update the hits counter correctly', async () => {
      // First initialize the counter with correct structure matching component
      document.getElementById('hits-counter')!.innerHTML = `
        <div class="hits-counter">
          <div class="hits-counter-field">
            <span class="counter-value" title="Total site visitors">Visitors: 10</span>
          </div>
        </div>
      `;
      
      // Mock getHitCount to return test data with updated count
      vi.mocked(hitsService.getHitCount).mockResolvedValue({
        count: 100,
        lastUpdated: new Date().toISOString()
      });
      
      // Call the function
      await updateHitsCounter();
      
      // Get the counter element
      const counterValue = document.querySelector('#hits-counter .counter-value');
      const counterField = document.querySelector('#hits-counter .hits-counter-field');
      
      // Check that the counter was updated correctly
      expect(counterValue).not.toBeNull();
      expect(counterValue?.textContent).toBe('Visitors: 100');
      expect(counterField?.classList.contains('counter-loaded')).toBe(true);
      
      // Verify service was called
      expect(hitsService.getHitCount).toHaveBeenCalledTimes(1);
      
      // Fast-forward time to check class removal
      vi.advanceTimersByTime(1000);
      expect(counterField?.classList.contains('counter-loaded')).toBe(false);
    });
    
    it('should handle missing container gracefully', async () => {
      // Remove the container
      document.body.innerHTML = '';
      
      // Call the function
      await expect(updateHitsCounter()).resolves.not.toThrow();
      
      // Verify service was still called
      expect(hitsService.getHitCount).toHaveBeenCalledTimes(1);
    });
    
    it('should handle service errors gracefully', async () => {
      // Mock service to throw an error
      vi.mocked(hitsService.getHitCount).mockRejectedValue(new Error('Service error'));
      
      // Call the function
      await updateHitsCounter();
      
      // Check that error was logged
      expect(console.error).toHaveBeenCalled();
    });
  });
}); 