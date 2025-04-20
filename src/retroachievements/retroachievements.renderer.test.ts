import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  displayUserSummary,
  displayGameProgress,
  loadRetroAchievements,
} from './retroachievements.renderer';
import * as retroAPI from './retroachievements.api';
import { RetroUserSummary, GameProgressResponse, UserRecentAchievement } from './types';

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
      // Mock data
      const mockSummary: RetroUserSummary = {
        User: 'testUser',
        MemberSince: '2020-01-01',
        LastActivity: {
          ID: 123,
          timestamp: '2023-01-01',
          lastupdate: '2023-01-01',
          activitytype: 'GamePlayed',
          User: 'testUser',
          data: null,
          data2: null,
        },
        RichPresenceMsg: 'Playing Level 1',
        LastGameID: 456,
        ContribCount: 10,
        ContribYield: 5,
        TotalPoints: 1000,
        TotalSoftcorePoints: 200,
        TotalTruePoints: 800,
        Permissions: 1,
        Untracked: 0,
        ID: 789,
        UserWallActive: 1,
        Motto: 'Test Motto',
        Rank: 50,
        RecentlyPlayedCount: 1,
        RecentlyPlayed: [{
          GameID: 456,
          ConsoleID: 1,
          ConsoleName: 'NES',
          Title: 'Test Game',
          ImageIcon: '/Images/test.png',
          LastPlayed: '2023-01-01',
          MyVote: null,
          NumPossibleAchievements: 100,
          PossibleScore: 1000,
          NumAchieved: 50,
          ScoreAchieved: 500,
          NumAchievedHardcore: 30,
          ScoreAchievedHardcore: 300,
        }],
        UserPic: '/UserPic/test.png',
        TotalRanked: 1000,
        Awarded: {},
        RecentAchievements: {},
        Status: 'Online',
      };

      // Setup mock return value
      vi.mocked(retroAPI.getUserSummary).mockResolvedValue(mockSummary);

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
      // Mock data without motto and rich presence
      const mockSummary: RetroUserSummary = {
        User: 'testUser',
        MemberSince: '2020-01-01',
        LastActivity: {
          ID: 123,
          timestamp: '2023-01-01',
          lastupdate: '2023-01-01',
          activitytype: 'GamePlayed',
          User: 'testUser',
          data: null,
          data2: null,
        },
        RichPresenceMsg: '', // Empty rich presence
        LastGameID: 456,
        ContribCount: 10,
        ContribYield: 5,
        TotalPoints: 1000,
        TotalSoftcorePoints: 200,
        TotalTruePoints: 800,
        Permissions: 1,
        Untracked: 0,
        ID: 789,
        UserWallActive: 1,
        Motto: '', // Empty motto
        Rank: 50,
        RecentlyPlayedCount: 1,
        RecentlyPlayed: [{
          GameID: 456,
          ConsoleID: 1,
          ConsoleName: 'NES',
          Title: 'Test Game',
          ImageIcon: '/Images/test.png',
          LastPlayed: '2023-01-01',
          MyVote: null,
          NumPossibleAchievements: 100,
          PossibleScore: 1000,
          NumAchieved: 50,
          ScoreAchieved: 500,
          NumAchievedHardcore: 30,
          ScoreAchievedHardcore: 300,
        }],
        UserPic: '/UserPic/test.png',
        TotalRanked: 1000,
        Awarded: {},
        RecentAchievements: {},
        Status: 'Online',
      };

      // Setup mock return value
      vi.mocked(retroAPI.getUserSummary).mockResolvedValue(mockSummary);

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
      // Mock data
      const mockProgress: GameProgressResponse = {
        Count: 2,
        Total: 2,
        Results: [
          {
            GameID: 123,
            Title: 'Test Game 1',
            ImageIcon: '/Images/game1.png',
            ConsoleID: 1,
            ConsoleName: 'NES',
            MaxPossible: 100,
            NumAwarded: 80,
            NumAwardedHardcore: 60,
            MostRecentAwardedDate: '2023-02-01',
            HighestAwardKind: null,
            HighestAwardDate: null,
          },
          {
            GameID: 456,
            Title: 'Test Game 2',
            ImageIcon: '/Images/game2.png',
            ConsoleID: 2,
            ConsoleName: 'SNES',
            MaxPossible: 50,
            NumAwarded: 40,
            NumAwardedHardcore: 30,
            MostRecentAwardedDate: '2023-01-01',
            HighestAwardKind: null,
            HighestAwardDate: null,
          }
        ]
      };

      // Setup mock return value
      vi.mocked(retroAPI.getUserProgress).mockResolvedValue(mockProgress);

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
      // Mock data with empty results
      const mockProgress: GameProgressResponse = {
        Count: 0,
        Total: 0,
        Results: []
      };

      // Setup mock return value
      vi.mocked(retroAPI.getUserProgress).mockResolvedValue(mockProgress);

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
      // Mock data
      const mockAchievements: UserRecentAchievement[] = [
        {
          Date: '2023-01-01',
          HardcoreMode: 1,
          AchievementID: 123,
          Title: 'Test Achievement 1',
          Description: 'Test Description 1',
          BadgeName: 'badge1',
          Points: 10,
          TrueRatio: 1.5,
          Type: null,
          Author: 'Author1',
          GameTitle: 'Game1',
          GameIcon: '/game1.png',
          GameID: 456,
          ConsoleName: 'NES',
          BadgeURL: '/Badge/123.png',
          GameURL: '/Game/456',
        },
        {
          Date: '2023-01-02',
          HardcoreMode: 0,
          AchievementID: 789,
          Title: 'Test Achievement 2',
          Description: 'Test Description 2',
          BadgeName: 'badge2',
          Points: 20,
          TrueRatio: 2.0,
          Type: null,
          Author: 'Author2',
          GameTitle: 'Game2',
          GameIcon: '/game2.png',
          GameID: 789,
          ConsoleName: 'SNES',
          BadgeURL: '/Badge/789.png',
          GameURL: '/Game/789',
        }
      ];

      // Setup mock return value
      vi.mocked(retroAPI.getUserRecentAchievements).mockResolvedValue(mockAchievements);

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