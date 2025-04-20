import { describe, test, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest';
import {
  getUserRecentAchievements,
  getUserProgress,
  getUserSummary,
} from '../retroachievements.api';
import {
  GameProgressResponse,
  RetroUserSummary,
  UserRecentAchievement,
} from '../types';

// Note: Environment variables are already mocked in vitest.setup.ts

describe('RetroAchievements API', () => {
  // Sample mock data
  const mockRecentAchievements: UserRecentAchievement[] = [
    {
      Date: '2023-01-01 12:00:00',
      HardcoreMode: 1,
      AchievementID: 12345,
      Title: 'Test Achievement',
      Description: 'This is a test achievement',
      BadgeName: 'test_badge',
      Points: 10,
      TrueRatio: 1.5,
      Type: null,
      Author: 'TestAuthor',
      GameTitle: 'Test Game',
      GameIcon: 'test_game_icon.png',
      GameID: 678,
      ConsoleName: 'NES',
      BadgeURL: '/Badge/12345.png',
      GameURL: '/Game/678',
    },
  ];

  const mockGameProgress: GameProgressResponse = {
    Count: 1,
    Total: 1,
    Results: [
      {
        GameID: 678,
        Title: 'Test Game',
        ImageIcon: 'test_game_icon.png',
        ConsoleID: 7,
        ConsoleName: 'NES',
        MaxPossible: 100,
        NumAwarded: 25,
        NumAwardedHardcore: 20,
        MostRecentAwardedDate: '2023-01-01 12:00:00',
        HighestAwardKind: null,
        HighestAwardDate: null,
      },
    ],
  };

  const mockUserSummary: RetroUserSummary = {
    User: 'test_user',
    MemberSince: '2020-01-01',
    LastActivity: {
      ID: 12345,
      timestamp: '2023-01-01 12:00:00',
      lastupdate: '2023-01-01 12:00:00',
      activitytype: 'Played',
      User: 'test_user',
      data: 'Test Game',
      data2: null,
    },
    RichPresenceMsg: 'Playing Test Game',
    LastGameID: 678,
    ContribCount: 0,
    ContribYield: 0,
    TotalPoints: 1000,
    TotalSoftcorePoints: 800,
    TotalTruePoints: 1200,
    Permissions: 1,
    Untracked: 0,
    ID: 54321,
    UserWallActive: 1,
    Motto: 'Test Motto',
    Rank: 1000,
    RecentlyPlayedCount: 1,
    RecentlyPlayed: [
      {
        GameID: 678,
        ConsoleID: 7,
        ConsoleName: 'NES',
        Title: 'Test Game',
        ImageIcon: 'test_game_icon.png',
        LastPlayed: '2023-01-01 12:00:00',
        MyVote: null,
        NumPossibleAchievements: 100,
        PossibleScore: 1000,
        NumAchieved: 25,
        ScoreAchieved: 250,
        NumAchievedHardcore: 20,
        ScoreAchievedHardcore: 200,
      },
    ],
    UserPic: 'test_user.png',
    TotalRanked: 5000,
    Awarded: {},
    RecentAchievements: {},
    Status: 'Online',
  };

  // Setup fetch mock
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = vi.fn() as unknown as typeof global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.resetAllMocks();
  });

  describe('getUserRecentAchievements', () => {
    test('should fetch recent achievements successfully', async () => {
      // Mock the fetch response
      (global.fetch as unknown as MockInstance).mockResolvedValueOnce({
        json: async () => mockRecentAchievements,
      });

      const result = await getUserRecentAchievements();

      // Assert fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://retroachievements.org/API/API_GetUserRecentAchievements.php?y=test_api_key_12345&u=test_user&m=10080'
      );

      // Assert the result is correct
      expect(result).toEqual(mockRecentAchievements);
      expect(result[0].Title).toBe('Test Achievement');
      expect(result[0].GameTitle).toBe('Test Game');
    });

    test('should handle fetch errors', async () => {
      // Mock fetch to throw an error
      (global.fetch as unknown as MockInstance).mockRejectedValueOnce(new Error('API error'));

      // Assert that the function throws the error
      await expect(getUserRecentAchievements()).rejects.toThrow('API error');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUserProgress', () => {
    test('should fetch user progress successfully', async () => {
      // Mock the fetch response
      (global.fetch as unknown as MockInstance).mockResolvedValueOnce({
        json: async () => mockGameProgress,
      });

      const result = await getUserProgress();

      // Assert fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://retroachievements.org/API/API_GetUserCompletionProgress.php?y=test_api_key_12345&u=test_user&c=10'
      );

      // Assert the result is correct
      expect(result).toEqual(mockGameProgress);
      expect(result.Count).toBe(1);
      expect(result.Results[0].Title).toBe('Test Game');
      expect(result.Results[0].NumAwardedHardcore).toBe(20);
    });

    test('should handle fetch errors', async () => {
      // Mock fetch to throw an error
      (global.fetch as unknown as MockInstance).mockRejectedValueOnce(new Error('API error'));

      // Assert that the function throws the error
      await expect(getUserProgress()).rejects.toThrow('API error');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUserSummary', () => {
    test('should fetch user summary successfully', async () => {
      // Mock the fetch response
      (global.fetch as unknown as MockInstance).mockResolvedValueOnce({
        json: async () => mockUserSummary,
      });

      const result = await getUserSummary();

      // Assert fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://retroachievements.org/API/API_GetUserSummary.php?z=test_user&y=test_api_key_12345&u=test_user&g=1'
      );

      // Assert the result is correct
      expect(result).toEqual(mockUserSummary);
      expect(result.User).toBe('test_user');
      expect(result.TotalPoints).toBe(1000);
      expect(result.RecentlyPlayedCount).toBe(1);
    });

    test('should handle fetch errors', async () => {
      // Mock fetch to throw an error
      (global.fetch as unknown as MockInstance).mockRejectedValueOnce(new Error('API error'));

      // Assert that the function throws the error
      await expect(getUserSummary()).rejects.toThrow('API error');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  test('should handle malformed JSON response', async () => {
    // Mock the fetch response with a response that will cause a JSON parse error
    (global.fetch as unknown as MockInstance).mockResolvedValueOnce({
      json: async () => {
        throw new Error('Invalid JSON');
      },
    });

    // Assert that the function throws the error
    await expect(getUserSummary()).rejects.toThrow('Invalid JSON');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
}); 