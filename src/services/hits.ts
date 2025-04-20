/**
 * Hits counter service
 * 
 * This service tracks the number of visits to the website by making a request to a counter service.
 * It uses localStorage to avoid counting repeat visits from the same browser session.
 */

// Interface for the hits counter response
export interface HitsCounterResponse {
  count: number;
  lastUpdated: string;
}

// Cache key for localStorage
const HITS_COUNTER_CACHE_KEY = 'anondson_dev_hits_counter';
const SESSION_COUNTED_KEY = 'anondson_dev_session_counted';

/**
 * Get the current hit count from the server
 */
export const getHitCount = async (): Promise<HitsCounterResponse> => {
  try {
    // Check if there's a cached count in localStorage
    const cachedData = localStorage.getItem(HITS_COUNTER_CACHE_KEY);
    
    // Use cached data if it's been less than 5 minutes since last request
    if (cachedData) {
      const data = JSON.parse(cachedData) as HitsCounterResponse;
      const cacheTime = new Date(data.lastUpdated).getTime();
      const currentTime = new Date().getTime();
      
      // If cache is less than 5 minutes old, return the cached data
      if (currentTime - cacheTime < 5 * 60 * 1000) {
        return data;
      }
    }

    // Make a request to the counter API
    const response = await fetch(
      `${import.meta.env.VITE_HITS_COUNTER_API_URL}?site=${import.meta.env.VITE_SITE_ID}`,
      { method: 'GET' }
    );
    
    const data = await response.json() as HitsCounterResponse;
    
    // Cache the response in localStorage
    localStorage.setItem(HITS_COUNTER_CACHE_KEY, JSON.stringify({
      ...data,
      lastUpdated: new Date().toISOString()
    }));
    
    return data;
  } catch (error) {
    console.error('Error fetching hit count:', error);
    
    // Return a default response in case of error
    return {
      count: 0,
      lastUpdated: new Date().toISOString()
    };
  }
};

/**
 * Increment the hit counter
 */
export const incrementHitCount = async (): Promise<HitsCounterResponse> => {
  // Check if this session has already been counted
  if (sessionStorage.getItem(SESSION_COUNTED_KEY)) {
    return getHitCount();
  }
  
  try {
    // Make a request to the counter API
    const response = await fetch(
      `${import.meta.env.VITE_HITS_COUNTER_API_URL}?site=${import.meta.env.VITE_SITE_ID}`,
      { method: 'POST' }
    );
    
    const data = await response.json() as HitsCounterResponse;
    
    // Cache the response and mark this session as counted
    localStorage.setItem(HITS_COUNTER_CACHE_KEY, JSON.stringify({
      ...data,
      lastUpdated: new Date().toISOString()
    }));
    sessionStorage.setItem(SESSION_COUNTED_KEY, 'true');
    
    return data;
  } catch (error) {
    console.error('Error incrementing hit count:', error);
    return getHitCount();
  }
}; 