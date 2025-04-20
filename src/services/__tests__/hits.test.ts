import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getHitCount, incrementHitCount } from '../hits';
import { mockHitsCounterResponse } from '../../__fixtures__/hits';

describe('Hits Counter Service', () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let originalLocalStorage: Storage;
  let originalSessionStorage: Storage;
  
  beforeEach(() => {
    // Save original localStorage and sessionStorage
    originalLocalStorage = global.localStorage;
    originalSessionStorage = global.sessionStorage;
    
    // Create mock localStorage and sessionStorage
    const mockStorage = (() => {
      let store: Record<string, string> = {};
      return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => {
          store[key] = value.toString();
        }),
        removeItem: vi.fn((key: string) => {
          delete store[key];
        }),
        clear: vi.fn(() => {
          store = {};
        })
      };
    })();
    
    // Replace localStorage and sessionStorage with mocks
    Object.defineProperty(global, 'localStorage', {
      value: mockStorage,
      writable: true
    });
    
    Object.defineProperty(global, 'sessionStorage', {
      value: mockStorage,
      writable: true
    });
    
    // Mock fetch
    fetchMock = vi.fn();
    global.fetch = fetchMock as unknown as typeof fetch;
    
    // Mock console.error
    console.error = vi.fn();
    
    // Mock environment variables
    vi.stubEnv('VITE_HITS_COUNTER_API_URL', 'https://api.example.com/counter');
    vi.stubEnv('VITE_SITE_ID', 'test-site');
  });
  
  afterEach(() => {
    // Restore original localStorage and sessionStorage
    Object.defineProperty(global, 'localStorage', {
      value: originalLocalStorage,
      writable: true
    });
    
    Object.defineProperty(global, 'sessionStorage', {
      value: originalSessionStorage,
      writable: true
    });
    
    // Clear all mocks
    vi.clearAllMocks();
    vi.unstubAllEnvs();
  });
  
  describe('getHitCount', () => {
    it('should fetch hit count from API', async () => {
      // Mock successful API response
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve(mockHitsCounterResponse)
      });
      
      // Call the function
      const result = await getHitCount();
      
      // Check that fetch was called with correct URL
      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.example.com/counter?site=test-site',
        { method: 'GET' }
      );
      
      // Check that result matches expected data
      expect(result).toEqual(mockHitsCounterResponse);
      
      // Check that result was cached in localStorage
      expect(localStorage.setItem).toHaveBeenCalled();
    });
    
    it('should use cached data if recent', async () => {
      // Set up mock cached data (recent)
      const now = new Date();
      const cachedData = {
        count: 100,
        lastUpdated: now.toISOString()
      };
      
      localStorage.getItem = vi.fn(() => JSON.stringify(cachedData));
      
      // Call the function
      const result = await getHitCount();
      
      // Check that fetch was not called
      expect(fetchMock).not.toHaveBeenCalled();
      
      // Check that result matches cached data
      expect(result).toEqual(cachedData);
    });
    
    it('should not use stale cached data', async () => {
      // Set up mock cached data (old)
      const oldDate = new Date();
      oldDate.setMinutes(oldDate.getMinutes() - 10); // 10 minutes old
      
      const cachedData = {
        count: 100,
        lastUpdated: oldDate.toISOString()
      };
      
      localStorage.getItem = vi.fn(() => JSON.stringify(cachedData));
      
      // Mock API response
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve(mockHitsCounterResponse)
      });
      
      // Call the function
      const result = await getHitCount();
      
      // Check that fetch was called (cached data was ignored)
      expect(fetchMock).toHaveBeenCalled();
      
      // Check that result matches API response
      expect(result).toEqual(mockHitsCounterResponse);
    });
    
    it('should handle API errors gracefully', async () => {
      // Mock failed API response
      fetchMock.mockRejectedValue(new Error('API error'));
      
      // Call the function
      const result = await getHitCount();
      
      // Check that error was logged
      expect(console.error).toHaveBeenCalled();
      
      // Check that a default response was returned
      expect(result).toEqual({
        count: 0,
        lastUpdated: expect.any(String)
      });
    });
  });
  
  describe('incrementHitCount', () => {
    it('should increment hit count if not counted in session', async () => {
      // Ensure session is not marked as counted
      sessionStorage.getItem = vi.fn(() => null);
      
      // Mock successful API response
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve(mockHitsCounterResponse)
      });
      
      // Call the function
      const result = await incrementHitCount();
      
      // Check that fetch was called with POST method
      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.example.com/counter?site=test-site',
        { method: 'POST' }
      );
      
      // Check that result matches expected data
      expect(result).toEqual(mockHitsCounterResponse);
      
      // Check that session was marked as counted
      expect(sessionStorage.setItem).toHaveBeenCalledWith('anondson_dev_session_counted', 'true');
    });
    
    it('should not increment hit count if already counted in session', async () => {
      // Mock both functions to confirm the right one is called
      const mockGetHitCount = vi.fn().mockResolvedValue(mockHitsCounterResponse);
      const realGetHitCount = getHitCount;
      
      // Replace the getHitCount function for this test
      // @ts-ignore - this is a hack for testing
      global.getHitCount = mockGetHitCount;
      
      // Mock that session has already been counted
      sessionStorage.getItem = vi.fn((key) => {
        if (key === 'anondson_dev_session_counted') return 'true';
        return null;
      });
      
      // We need to mock fetch to make sure it's NOT called with POST
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve(mockHitsCounterResponse)
      });
      
      // Since we can't easily modify the import, we just need to test that fetch 
      // is never called with POST (which verifies the early return)
      await incrementHitCount();
      
      // Assert fetch was never called with POST
      const postCalls = fetchMock.mock.calls.filter(call => 
        call[1] && call[1].method === 'POST'
      );
      expect(postCalls.length).toBe(0);
      
      // Restore the real function
      // @ts-ignore - this is a hack for testing
      global.getHitCount = realGetHitCount;
    });
    
    it('should handle API errors gracefully', async () => {
      // Ensure session is not marked as counted
      sessionStorage.getItem = vi.fn(() => null);
      
      // Mock failed API response
      fetchMock.mockRejectedValue(new Error('API error'));
      
      // Mock getHitCount to be called as fallback
      const mockGetHitCount = vi.fn().mockResolvedValue(mockHitsCounterResponse);
      const realGetHitCount = getHitCount;
      
      // Override getHitCount for this test
      // @ts-ignore - this is a hack for testing
      global.getHitCount = mockGetHitCount;
      
      // Call the function
      await incrementHitCount();
      
      // Check that error was logged
      expect(console.error).toHaveBeenCalled();
      
      // Restore the real function
      // @ts-ignore - this is a hack for testing
      global.getHitCount = realGetHitCount;
    });
  });
}); 