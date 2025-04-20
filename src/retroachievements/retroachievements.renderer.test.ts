import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  displayUserSummary,
  displayGameProgress,
  loadRetroAchievements,
} from './retroachievements.renderer';
import * as retroAPI from './retroachievements.api';
import { RetroUserSummary } from './types';
import { 
  mockUserSummary, 
  mockUserSummaryWithoutMottoAndRichPresence,
  mockGameProgress,
  mockEmptyGameProgress,
  mockRecentAchievements
} from '../__fixtures__';

// Mock the RetroAchievements API functions
vi.mock('./retroachievements.api', () => ({
  getUserSummary: vi.fn(),
  getUserProgress: vi.fn(),
  getUserRecentAchievements: vi.fn(),
}));

describe('RetroAchievements Renderer', () => {
  // Setup DOM elements before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="user-summary"></div>
      <div id="game-progress"></div>
      <div id="recent-achievements"></div>
      <div id="retro-achievements-container"></div>
    `;
  });

  // Clean up after each test
  afterEach(() => {
    vi.resetAllMocks();
    document.body.innerHTML = '';
  });

  describe('displayUserSummary', () => {
    it('should display user summary correctly', async () => {
      // Setup mock return value
      vi.mocked(retroAPI.getUserSummary).mockResolvedValue(mockUserSummary);

      // Call the function
      await displayUserSummary();

      // Assertions
      const summaryContainer = document.getElementById('user-summary');
      expect(summaryContainer).not.toBeNull();
      expect(summaryContainer?.innerHTML).toContain('User Profile: testUser');
      expect(summaryContainer?.innerHTML).toContain('Test Game =&gt; Playing Level 1');
      expect(summaryContainer?.innerHTML).toContain('#50 of 1000');
      expect(summaryContainer?.innerHTML).toContain('1000 (800 true points)');
      expect(summaryContainer?.innerHTML).toContain('800');
      expect(summaryContainer?.innerHTML).toContain('Test Motto');
      expect(summaryContainer?.innerHTML).toContain('https://retroachievements.org/UserPic/test.png');
      expect(summaryContainer?.innerHTML).toContain('class="status online"');
      
      // Verify API was called
      expect(retroAPI.getUserSummary).toHaveBeenCalledTimes(1);
    });

    it('should display user summary without motto and rich presence', async () => {
      // Setup mock return value
      vi.mocked(retroAPI.getUserSummary).mockResolvedValue(mockUserSummaryWithoutMottoAndRichPresence);

      // Call the function
      await displayUserSummary();

      // Assertions
      const summaryContainer = document.getElementById('user-summary');
      expect(summaryContainer).not.toBeNull();
      expect(summaryContainer?.innerHTML).toContain('User Profile: testUser');
      expect(summaryContainer?.innerHTML).not.toContain('Test Game =&gt;'); // Should not contain rich presence
      expect(summaryContainer?.innerHTML).not.toContain('Motto'); // Should not contain motto
      
      // Verify API was called
      expect(retroAPI.getUserSummary).toHaveBeenCalledTimes(1);
    });

    it('should handle missing container', async () => {
      // Remove the container
      document.body.innerHTML = '';
      
      // Setup mock return value
      vi.mocked(retroAPI.getUserSummary).mockResolvedValue({} as RetroUserSummary);

      // Call the function (should not throw)
      await expect(displayUserSummary()).resolves.not.toThrow();
      
      // Verify API was called
      expect(retroAPI.getUserSummary).toHaveBeenCalledTimes(1);
    });
  });

  describe('displayGameProgress', () => {
    it('should display game progress correctly', async () => {
      // Setup mock return value
      vi.mocked(retroAPI.getUserProgress).mockResolvedValue(mockGameProgress);

      // Call the function
      await displayGameProgress();

      // Assertions
      const progressContainer = document.getElementById('game-progress');
      expect(progressContainer).not.toBeNull();
      expect(progressContainer?.innerHTML).toContain('Test Game 1');
      expect(progressContainer?.innerHTML).toContain('Test Game 2');
      expect(progressContainer?.innerHTML).toContain('[NES]');
      expect(progressContainer?.innerHTML).toContain('[SNES]');
      expect(progressContainer?.innerHTML).toContain('60/100 achievements');
      expect(progressContainer?.innerHTML).toContain('30/50 achievements');
      expect(progressContainer?.innerHTML).toContain('https://retroachievements.org/Images/game1.png');
      
      // Verify API was called
      expect(retroAPI.getUserProgress).toHaveBeenCalledTimes(1);
    });

    it('should handle empty results in game progress', async () => {
      // Setup mock return value
      vi.mocked(retroAPI.getUserProgress).mockResolvedValue(mockEmptyGameProgress);

      // Call the function
      await displayGameProgress();

      // Assertions
      const progressContainer = document.getElementById('game-progress');
      expect(progressContainer).not.toBeNull();
      expect(progressContainer?.innerHTML).toContain('<div class="progress-grid">');
      expect(progressContainer?.innerHTML).not.toContain('Test Game');
      // The container should just have an empty progress grid
      
      // Verify API was called
      expect(retroAPI.getUserProgress).toHaveBeenCalledTimes(1);
    });

    it('should handle API errors', async () => {
      // Setup mock to throw an error
      vi.mocked(retroAPI.getUserProgress).mockRejectedValue(new Error('API error'));

      // Call the function
      await displayGameProgress();

      // Assertions
      const progressContainer = document.getElementById('game-progress');
      expect(progressContainer).not.toBeNull();
      expect(progressContainer?.innerHTML).toContain('Error loading game progress');
    });
  });

  describe('loadRetroAchievements', () => {
    it('should load recent achievements correctly', async () => {
      // Setup mock return value
      vi.mocked(retroAPI.getUserRecentAchievements).mockResolvedValue(mockRecentAchievements);

      // Call the function
      await loadRetroAchievements();

      // Assertions
      const achievementsContainer = document.getElementById('recent-achievements');
      expect(achievementsContainer).not.toBeNull();
      expect(achievementsContainer?.innerHTML).toContain('Test Achievement 1');
      expect(achievementsContainer?.innerHTML).toContain('Test Achievement 2');
      expect(achievementsContainer?.innerHTML).toContain('Test Description 1');
      expect(achievementsContainer?.innerHTML).toContain('Test Description 2');
      expect(achievementsContainer?.innerHTML).toContain('https://retroachievements.org/Badge/123.png');
      expect(achievementsContainer?.innerHTML).toContain('https://retroachievements.org/Badge/789.png');
      
      // Verify API was called
      expect(retroAPI.getUserRecentAchievements).toHaveBeenCalledTimes(1);
    });

    it('should handle API errors', async () => {
      // Setup mock to throw an error
      vi.mocked(retroAPI.getUserRecentAchievements).mockRejectedValue(new Error('API error'));

      // Call the function
      await loadRetroAchievements();

      // Assertions
      const container = document.getElementById('retro-achievements-container');
      expect(container?.innerHTML).toContain('Error loading RetroAchievements data');
    });
  });
}); 