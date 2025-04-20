import { GameProgressResponse } from '../../retroachievements/types';

export const mockGameProgress: GameProgressResponse = {
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

export const mockEmptyGameProgress: GameProgressResponse = {
  Count: 0,
  Total: 0,
  Results: []
}; 