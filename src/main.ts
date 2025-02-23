



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
    // re-read this tomorrow and grok it better haha
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }
  return result;
}

document.querySelector<HTMLDivElement>('#title')!.innerHTML = `
  <h2 id="title""> ${emoji.emojify('Howdy :wave: :cowboy_hat_face: :cow:')}</h2>
`

document.querySelector<HTMLDivElement>('#copyright')!.innerHTML = emoji.emojify(`
© ${toRoman(new Date().getFullYear())} with :heart: by Dublin
`)