// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages as a project site:
// https://brpetrov.github.io/portfolio-2026/
export default defineConfig({
  site: 'https://brpetrov.github.io',
  base: '/portfolio-2026',
  vite: {
    plugins: [tailwindcss()],
  },
});
