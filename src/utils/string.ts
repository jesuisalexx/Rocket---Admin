export const getRandomString = (length = 7) => Math.random().toString(36).substring(length);

export const replaceAt = (
  str: string,
  index: number,
  char: string,
) => `${str.substring(0, index)}${char}${str.substring(index + 1)}`;
