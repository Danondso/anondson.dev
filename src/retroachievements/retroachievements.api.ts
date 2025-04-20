import {
  type GameProgressResponse,
  type RetroUserSummary,
  type UserRecentAchievement,
} from './types';
const auth = {
  username: import.meta.env.VITE_RETRO_ACHIEVEMENTS_USERNAME,
  webApiKey: import.meta.env.VITE_RETRO_ACHIEVEMENTS_API_KEY,
};

export const getUserRecentAchievements = async (): Promise<
  UserRecentAchievement[]
> => {
  const response = await fetch(
    `${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}/API/API_GetUserRecentAchievements.php?y=${auth.webApiKey}&u=${auth.username}&m=${24 * 60 * 7}`
  );
  return response.json();
};

export const getUserProgress = async (): Promise<GameProgressResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}/API/API_GetUserCompletionProgress.php?y=${auth.webApiKey}&u=${auth.username}&c=10`
  );
  return response.json();
};

export const getUserSummary = async (): Promise<RetroUserSummary> => {
  const response = await fetch(
    `${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}/API/API_GetUserSummary.php?z=${auth.username}&y=${auth.webApiKey}&u=${auth.username}&g=1`
  );
  return response.json();
};
