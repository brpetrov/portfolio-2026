// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to two hosts from the same repo:
//  - GitHub Pages (project site, needs the /portfolio-2026 base)
//  - Cloudflare Pages (root of portfolio-2026.pages.dev; build with DEPLOY_TARGET=cf)
const forCloudflare = process.env.DEPLOY_TARGET === 'cf';

export default defineConfig({
  site: forCloudflare ? 'https://boyan-petrov.pages.dev' : 'https://brpetrov.github.io',
  base: forCloudflare ? undefined : '/portfolio-2026',
  vite: {
    plugins: [tailwindcss()],
  },
});
