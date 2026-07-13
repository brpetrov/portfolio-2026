// Identity, links and SEO — single source of truth for personal details.

export const profile = {
  name: "Boyan Petrov",
  role: "Full-Stack Software Developer",
  location: "Leeds, UK",
  email: "brpetrov@outlook.com",
  github: "https://github.com/brpetrov",
  linkedin: "https://www.linkedin.com/in/boyan-petrov-a64a2b199/",
  headline: "I help build web & mobile software used daily by 100+ UK councils.",
  intro:
    "Full-stack developer with 7+ years across C#/.NET, JavaScript and Flutter. At Bartec Municipal Technologies I work on the Collective suite — council web portals, a live fleet-operations platform, and an offline-first mobile app used by waste collection crews across the UK.",
  stats: [
    { value: "7+", label: "years building software" },
    { value: "100+", label: "UK councils served" },
    { value: "3,500+", label: "daily frontline users" },
  ],
  seo: {
    title: "Boyan Petrov — Full-Stack Software Developer",
    description:
      "Full-stack developer in Leeds, UK. C#/.NET, JavaScript, Flutter. Helping build web and mobile software used daily by 100+ UK councils.",
  },
} as const;
