export const getImageSrc = (image: string, fallback: string) => {
  return `${import.meta.env.BASE_URL}${image?.replace(/^\/+/, "") || fallback}`;
};
