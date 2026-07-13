// GitHub Pages serves this site under /portfolio-2026/, so every asset URL
// must be prefixed with the configured base. Use withBase() for all
// public/ assets referenced from components.
const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + "/";

export const withBase = (path: string): string => base + path.replace(/^\//, "");
