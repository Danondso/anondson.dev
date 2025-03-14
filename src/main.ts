import * as emoji from "node-emoji";
import "98.css"
import { RetroUserSummary, UserRecentAchievement } from "./types";
import { getUserRecentAchievements, getUserSummary } from "./retroachievements.api";

const toRoman = (num: number): string => {
  const romanNumerals: { [key: number]: string } = {
    1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
    100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
    10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
  };
  let result = '';
  const keys = Object.keys(romanNumerals)
    .map(Number)
    .sort((a, b) => b - a);
  for (const value of keys) {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }
  return result;
}

function createLoader(containerId: string, message: string = 'Loading...') {
  const container = document.getElementById(containerId);
  console.log(":PP", container);
  if (!container) return;

  container.innerHTML = `
    <div class="loader-window">
      <div class="title-bar">
        <div class="title-bar-text">${message}</div>
      </div>
      <div class="loader-content">
        <div class="loader-animation">
          <div class="hourglass"></div>
        </div>
        <p class="loader-text">${message}</p>
      </div>
    </div>
  `;
}



// Function to display the user summary
async function displayUserSummary() {
  const summary: RetroUserSummary = await getUserSummary();
  // createLoader('user-summary', 'Loading user summary...');
  // return;
  const container = document.getElementById('user-summary');
  if (!container) return;

  const memberSince = new Date(summary.MemberSince).toLocaleDateString();
  console.log(summary);

  // Format the rich presence message if it exists
  const currentGameStatus = summary.RichPresenceMsg
    ? `<div class="status-bar" style="margin-top: 8px;">
         <div class="status-bar-field">${summary.RecentlyPlayed[0].Title} => ${summary.RichPresenceMsg}</div>
       </div>`
    : '';

  container.innerHTML = `
    <div class="window" style="width: 100%; margin-top: 16px;">
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
              ${summary.Motto ? `
              <tr>
                <td><strong>Motto:</strong></td>
                <td>${summary.Motto}</td>
              </tr>
              ` : ''}
            </table>
          </div>
        </div>
        ${currentGameStatus}
      </div>
    </div>
  `;
}


// Set up window controls
document.addEventListener('DOMContentLoaded', async () => {
  // Set up minimize buttons
  const windows = document.querySelectorAll('.window');
  windows.forEach(window => {
    window.querySelectorAll('button[aria-label="Minimize"]').forEach((minimizeBtn) => {
      minimizeBtn?.addEventListener('click', () => {
        if (window.classList.contains('maximized')) {
          window.classList.remove('maximized');
          window.classList.toggle('minimized');
        }
      });
    });
    window.querySelectorAll('button[aria-label="Maximize"]').forEach((maximizeBtn) => {
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
    copyright.textContent = emoji.emojify(`© ${toRoman(new Date().getFullYear())} with :heart: by Dublin`);
  }

  // Set title with emojis
  const title = document.getElementById('title');
  if (title) {
    title.innerHTML = emoji.emojify('Howdy :cowboy_hat_face: :cow:');
  }

  // Set Cool free stuff title with emoji
  const coolStuffTitle = document.getElementById('cool-stuff-title');
  if (coolStuffTitle) {
    coolStuffTitle.innerHTML = emoji.emojify('Cool free stuff :shopping:');
  }

  // Set GitHub link with octocat emoji
  const githubLink = document.getElementById('github-link');
  if (githubLink) {
    githubLink.innerHTML = emoji.emojify(':computer:');
  }
  // RetroAchievements Integration
  const loadRetroAchievements = async () => {
    try {
      const recentAchievements = await getUserRecentAchievements();

      const achievementsContainer = document.getElementById('recent-achievements');
      if (achievementsContainer && recentAchievements) {
        achievementsContainer.innerHTML = recentAchievements.map((achievement: UserRecentAchievement) => {
          return `
                    <div class="achievement-item">
                        <img class="achievement-icon" src="${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL + achievement.BadgeURL}" alt="${achievement.Title}">
                        <div class="achievement-info">
                            <div class="achievement-title">${achievement.Title}</div>
                            <div class="achievement-description">${achievement.Description}</div>
                        </div>
                    </div>
                `;
        }).join('');
      }
    } catch (error) {
      console.error('Error loading RetroAchievements data:', error);
      const container = document.getElementById('retro-achievements-container');
      if (container) {
        container.innerHTML = '<p>Error loading RetroAchievements data. Please check your API configuration.</p>';
      }
    }
  };


  await displayUserSummary();
  // // Load RetroAchievements data
  await loadRetroAchievements();
});

