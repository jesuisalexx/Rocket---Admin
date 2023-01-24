export const getImageUrl = (path: string) => new URL(`/src/assets/img/${path}`, import.meta.url).href;
