# Boyan Petrov — Portfolio (2026)

Personal portfolio: [brpetrov.github.io/portfolio-2026](https://brpetrov.github.io/portfolio-2026/)

Built with **Astro 5** and **Tailwind CSS 4**. Static output, self-hosted fonts,
no client-side JavaScript. Deployed to GitHub Pages via GitHub Actions on every
push to `main`.

## Development

```
npm install
npm run dev       # local dev server
npm run build     # production build (must pass)
npm run preview   # preview the production build
```

All content lives in `src/data/*.ts` (profile, work, experience, skills) —
updating the portfolio is a data edit, not a component edit.

Because the site deploys under `/portfolio-2026/`, asset URLs go through
`withBase()` from `src/lib/url.ts`.
