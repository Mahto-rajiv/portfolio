// In Vite, anything under /public is served at the root at runtime.
// So /public/images/foo.png is accessible via /images/foo.png
export const getImageUrl = (name) => `/images/${name}`;
