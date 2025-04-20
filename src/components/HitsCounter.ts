import { sanitizeHTML } from '../utils/sanitize';
import { getHitCount, incrementHitCount } from '../services/hits';

/**
 * Initialize the hits counter component
 * This counts visitors to the site and displays the count
 */
export const initHitsCounter = async (): Promise<void> => {
  try {
    // Increment hit count for new visits
    const hitsData = await incrementHitCount();
    
    // Find the container element
    const container = document.getElementById('hits-counter');
    if (!container) return;
    
    // Format the hits count with commas for thousands
    const formattedCount = new Intl.NumberFormat().format(hitsData.count);
    
    // Render the counter - more compact for footer
    container.innerHTML = sanitizeHTML`
      <div class="hits-counter">
        <div class="hits-counter-field counter-loaded">
          <span class="counter-value" title="Total site visitors">Visitors: ${formattedCount}</span>
        </div>
      </div>
    `;
    
    // Find the counter field element and add animation
    const counterField = container.querySelector('.hits-counter-field');
    if (counterField) {
      // Remove animation class after animation completes
      setTimeout(() => {
        counterField.classList.remove('counter-loaded');
      }, 1000);
    }
    
  } catch (error) {
    console.error('Error initializing hits counter:', error);
    
    // Show a fallback message if there's an error
    const container = document.getElementById('hits-counter');
    if (container) {
      container.innerHTML = sanitizeHTML`
        <div class="hits-counter">
          <div class="hits-counter-field">
            <span class="counter-value" title="Error loading visitor count">--</span>
          </div>
        </div>
      `;
    }
  }
};

/**
 * Update the hits counter display
 * Can be called periodically to refresh the count
 */
export const updateHitsCounter = async (): Promise<void> => {
  try {
    // Get the current hit count
    const hitsData = await getHitCount();
    
    // Find the container element
    const container = document.getElementById('hits-counter');
    if (!container) return;
    
    // Format the hits count with commas for thousands
    const formattedCount = new Intl.NumberFormat().format(hitsData.count);
    
    // Update the counter text only (to avoid unnecessary DOM changes)
    const counterValue = container.querySelector('.counter-value');
    if (counterValue) {
      // Find the parent element that will have the counter-loaded class
      const counterField = container.querySelector('.hits-counter-field');
      if (counterField) {
        // Add animation class to the counter field
        counterField.classList.add('counter-loaded');
        
        // Update the counter value
        counterValue.textContent = `Visitors: ${formattedCount}`;
        
        // Remove animation class after animation completes
        setTimeout(() => {
          counterField.classList.remove('counter-loaded');
        }, 1000);
      }
    }
  } catch (error) {
    console.error('Error updating hits counter:', error);
  }
}; 