import { UserRecentAchievement } from "./types";
const auth = {
    username: import.meta.env.VITE_RETRO_ACHIEVEMENTS_USERNAME,
    webApiKey: import.meta.env.VITE_RETRO_ACHIEVEMENTS_API_KEY
}

export const getUserRecentAchievements = async (): Promise<UserRecentAchievement[]> => {
    const response = await fetch(`${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}/API/API_GetUserRecentAchievements.php?y=${auth.webApiKey}&u=${auth.username}&m=${24 * 60 * 7}`);
    return response.json();
}

export const getUserProgress = async () => {
    const response = await fetch(`${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}/API/API_GetUserProgress.php?y=${auth.webApiKey}&u=${auth.username}`);
    return response.json();
}

export const getUserSummary = async () => {
    const response = await fetch(`${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}/API/API_GetUserSummary.php?z=${auth.username}&y=${auth.webApiKey}&u=${auth.username}&g=1`);
    return response.json();
}

