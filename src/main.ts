import * as emoji from "node-emoji";
import "98.css"
import { AuthObject, buildAuthorization, getUserRecentAchievements, UserRecentAchievement } from "@retroachievements/api";

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


// Set up window controls
document.addEventListener('DOMContentLoaded', async () => {
    // Set up minimize buttons
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        const minimizeBtn = window.querySelector('button[aria-label="Minimize"]');
        minimizeBtn?.addEventListener('click', () => {
            window.classList.toggle('minimized');
        });
    });

    // Set copyright year
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.textContent = emoji.emojify(`© ${toRoman(new Date().getFullYear())} with :heart: by Dublin`)  ;
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
          const retroAchievementAuth: AuthObject = buildAuthorization({
            username: import.meta.env.VITE_RETRO_ACHIEVEMENTS_USERNAME,
            webApiKey: import.meta.env.VITE_RETRO_ACHIEVEMENTS_API_KEY
          });  
            const recentAchievements = await getUserRecentAchievements(retroAchievementAuth, { username: 'pinknobody', recentMinutes: 60 * 24 * 7, });
            const achievementsContainer = document.getElementById('recent-achievements');
            if (achievementsContainer && recentAchievements) {
                achievementsContainer.innerHTML = recentAchievements.map((achievement: UserRecentAchievement) => {
                  console.log(achievement);
                  return `
                    <div class="achievement-item">
                        <img class="achievement-icon" src="${import.meta.env.VITE_RETRO_ACHIEVEMENTS_BASE_URL + achievement.badgeUrl}" alt="${achievement.title}">
                        <div class="achievement-info">
                            <div class="achievement-title">${achievement.title}</div>
                            <div class="achievement-description">${achievement.description}</div>
                        </div>
                    </div>
                `;}).join('');
            }
        } catch (error) {
            console.error('Error loading RetroAchievements data:', error);
            const container = document.getElementById('retro-achievements-container');
            if (container) {
                container.innerHTML = '<p>Error loading RetroAchievements data. Please check your API configuration.</p>';
            }
        }
    };

    // // Load RetroAchievements data
     await loadRetroAchievements();
});

