import * as emoji from 'node-emoji';
import '98.css';
import { toRoman } from './utils/numbers';
import {
  displayUserSummary,
  displayGameProgress,
  loadRetroAchievements,
} from './retroachievements/retroachievements.renderer';
import { initHitsCounter, updateHitsCounter } from './components/HitsCounter';

// Set up window controls
document.addEventListener('DOMContentLoaded', () => {
  // Set up minimize buttons
  const windows = document.querySelectorAll('.window');
  windows.forEach((window) => {
    window
      .querySelectorAll('button[aria-label="Minimize"]')
      .forEach((minimizeBtn) => {
        minimizeBtn?.addEventListener('click', () => {
          if (window.classList.contains('maximized')) {
            window.classList.remove('maximized');
            window.classList.toggle('minimized');
          }
        });
      });
    window
      .querySelectorAll('button[aria-label="Maximize"]')
      .forEach((maximizeBtn) => {
        maximizeBtn?.addEventListener('click', () => {
          if (window.classList.contains('minimized')) {
            window.classList.remove('minimized');
            window.classList.toggle('maximized');
          }
        });
      });
  });

  // Set copyright year
  const copyright = document.getElementById('copyright');
  if (copyright) {
    copyright.textContent = emoji.emojify(
      `© ${toRoman(new Date().getFullYear())} with :heart: by Dublin`
    );
  }

  // Initialize RetroAchievements components
  displayUserSummary();
  displayGameProgress();
  loadRetroAchievements();
  
  // Initialize hits counter
  initHitsCounter();
  
  // Periodically update the hits counter (every 5 minutes)
  setInterval(() => {
    updateHitsCounter();
  }, 5 * 60 * 1000);
});
