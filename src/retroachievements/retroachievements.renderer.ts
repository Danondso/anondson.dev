import {
  GameProgress,
  GameProgressResponse,
  RetroUserSummary,
  UserRecentAchievement,
} from 'src/retroachievements/types';
import {
  getUserProgress,
  getUserRecentAchievements,
  getUserSummary,
} from './retroachievements.api';

// Function to display the user summary
const displayUserSummary = async () => {
  const summary: RetroUserSummary = await getUserSummary();
  const container = document.getElementById('user-summary');
  if (!container) return;

  const memberSince = new Date(summary.MemberSince).toLocaleDateString();

  // Format the rich presence message if it exists
  const currentGameStatus = summary.RichPresenceMsg
    ? `<div class="status-bar" style="margin-top: 8px;">
           <div class="status-bar-field">${summary.RecentlyPlayed[0].Title} => ${summary.RichPresenceMsg}</div>
         </div>`
    : '';

  container.innerHTML = `
      <div class="window" style="margin-top: 16px;">
        <div class="title-bar">
          <div class="title-bar-text">User Profile: ${summary.User}</div>
        </div>
        <div class="window-body">
          <div class="profile-grid">
            <div class="profile-pic">
              <img src="${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}${summary.UserPic}" alt="${summary.User}'s profile picture" width="100">
              <div class="status ${summary.Status.toLowerCase()}">${summary.Status}</div>
            </div>
            <div class="profile-details">
              <table>
                <tr>
                  <td><strong>Rank:</strong></td>
                  <td>#${summary.Rank} of ${summary.TotalRanked}</td>
                </tr>
                <tr>
                  <td><strong>Points:</strong></td>
                  <td>${summary.TotalPoints} (${summary.TotalTruePoints} true points)</td>
                </tr>
                <tr>
                  <td><strong>Hardcore Points:</strong></td>
                  <td>${summary.TotalPoints - summary.TotalSoftcorePoints}</td>
                </tr>
                <tr>
                  <td><strong>Member Since:</strong></td>
                  <td>${memberSince}</td>
                </tr>
                ${
                  summary.Motto
                    ? `
                <tr>
                  <td><strong>Motto:</strong></td>
                  <td>${summary.Motto}</td>
                </tr>
                `
                    : ''
                }
              </table>
            </div>
          </div>
          ${currentGameStatus}
        </div>
      </div>
    `;
};

async function displayGameProgress() {
  try {
    const progress: GameProgressResponse = await getUserProgress();
    const container = document.getElementById('game-progress');
    if (!container) return;

    container.innerHTML = `
        <div class="progress-grid">
          ${progress.Results.sort(
            (a, b) => b.NumAwardedHardcore - a.NumAwardedHardcore
          )
            .map(
              (gameData: GameProgress) => `
            <div class="progress-item">
              <div class="progress-header">
                <img src="${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL}${gameData.ImageIcon}" alt="${gameData.Title}" width="32">
                <span class="progress-title">${gameData.Title} [${gameData.ConsoleName}]</span>
              </div>
              <div class="progress-stats">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${(gameData.NumAwardedHardcore / gameData.MaxPossible) * 100}%"></div>
                </div>
                <div class="progress-text">
                  ${gameData.NumAwardedHardcore}/${gameData.MaxPossible} achievements
                </div>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
  } catch (error) {
    console.error('Error loading game progress:', error);
    const container = document.getElementById('game-progress');
    if (container) {
      container.innerHTML =
        '<p>Error loading game progress. Please check your API configuration.</p>';
    }
  }
}

const loadRetroAchievements = async () => {
  try {
    const recentAchievements = await getUserRecentAchievements();

    const achievementsContainer = document.getElementById(
      'recent-achievements'
    );
    if (achievementsContainer && recentAchievements) {
      achievementsContainer.innerHTML = recentAchievements
        .map((achievement: UserRecentAchievement) => {
          return `
            <div class="achievement-item">
                <img class="achievement-icon" src="${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL + achievement.BadgeURL}" alt="${achievement.Title}">
                <div class="achievement-info">
                    <div class="achievement-title">${achievement.Title}</div>
                    <div class="achievement-description">${achievement.Description}</div>
                </div>
            </div>
          `;
        })
        .join('');
    }
  } catch (error) {
    console.error('Error loading RetroAchievements data:', error);
    const container = document.getElementById('retro-achievements-container');
    if (container) {
      container.innerHTML =
        '<p>Error loading RetroAchievements data. Please check your API configuration.</p>';
    }
  }
};

export { displayUserSummary, displayGameProgress, loadRetroAchievements };
