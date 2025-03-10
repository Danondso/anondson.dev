import * as emoji from "node-emoji";
import "98.css"

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
document.addEventListener('DOMContentLoaded', () => {
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
});