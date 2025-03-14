export interface UserRecentAchievement {
    Date: string;
    HardcoreMode: number;
    AchievementID: number;
    Title: string;
    Description: string;
    BadgeName: string;
    Points: number;
    TrueRatio: number;
    Type: null | string;
    Author: string;
    GameTitle: string;
    GameIcon: string;
    GameID: number;
    ConsoleName: string;
    BadgeURL: string;
    GameURL: string;
  }

  interface LastActivity {
    ID: number;
    timestamp: string | null;
    lastupdate: string | null;
    activitytype: string | null;
    User: string;
    data: string | null;
    data2: string | null;
  }
  
  interface RecentlyPlayed {
    GameID: number;
    ConsoleID: number;
    ConsoleName: string;
    Title: string;
    ImageIcon: string;
    LastPlayed: string;
    MyVote: string | null;
    NumPossibleAchievements: number;
    PossibleScore: number;
    NumAchieved: number;
    ScoreAchieved: number;
    NumAchievedHardcore: number;
    ScoreAchievedHardcore: number;
  }
  
  interface AchievementEntry {
    ID: number;
    GameID: number;
    GameTitle: string;
    Title: string;
    Description: string;
    Points: number;
    TrueRatio: number;
    Author: string;
    DateAwarded: string;
    HardcoreAchieved: number;
  }
  
  interface AwardedCollection {
    [gameId: string]: {
      [achievementId: string]: AchievementEntry;
    };
  }
  
  interface RecentAchievementsCollection {
    [gameId: string]: {
      [achievementId: string]: AchievementEntry;
    };
  }
  
  export interface RetroUserSummary {
    User: string;
    MemberSince: string;
    LastActivity: LastActivity;
    RichPresenceMsg: string;
    LastGameID: number;
    ContribCount: number;
    ContribYield: number;
    TotalPoints: number;
    TotalSoftcorePoints: number;
    TotalTruePoints: number;
    Permissions: number;
    Untracked: number;
    ID: number;
    UserWallActive: number;
    Motto: string;
    Rank: number;
    RecentlyPlayedCount: number;
    RecentlyPlayed: RecentlyPlayed[];
    UserPic: string;
    TotalRanked: number;
    Awarded: AwardedCollection;
    RecentAchievements: RecentAchievementsCollection;
    Status: string;
  }