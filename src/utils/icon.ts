export const createIconHTML = (icon: string, alt: string, size: number) => {
  return `<img src="${icon}" alt="${alt}" style="width: ${size}px; height: ${size}px;">`;
};
