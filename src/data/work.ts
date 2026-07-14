// Selected work. The Bartec feature block is professional (proprietary, no
// public demo). `builds` are client/demo/learning cards; `sideProjects` are
// the personal apps, rendered in their own section.
//  - images live in public/images/<project>/ — one folder per project.
//  - 0 images → styled placeholder cover, 1 → static image, 2+ → thumbnail gallery.
//  - repoUrl / liveUrl are optional; with neither, the card shows
//    "Private client project" instead of links.

export const bartec = {
  kicker: "Professional work · Bartec Municipal Technologies",
  title: "The Collective suite",
  description:
    "Waste-management software used daily by 100+ UK councils and 3,500+ frontline crews to run bin collections and environmental services for millions of households.",
  note: "Proprietary systems — happy to talk through the architecture in person.",
  projects: [
    {
      name: "Council Web Portal",
      tech: "ASP.NET Core · SQL Server",
      text: "Forms- and rules-driven workflows for bin collections, assisted collections and bin lifts, with integrated mapping and payments. The company's most widely adopted product.",
    },
    {
      name: "Live Operations Platform",
      tech: "Blazor Server · Syncfusion · Mapbox",
      text: "Real-time tracking of collection vehicles on live maps, fed by the in-cab mobile app — plus route planning, service requests, premises and workpack management.",
    },
    {
      name: "Collective Mobile",
      tech: "Flutter · Dart · Swift · Kotlin · SQLite",
      text: "Offline-first in-cab app for collection crews: automatic database sync, live maps, GPS, scanner and Bluetooth hardware integration, with native iOS and Android code where it counts.",
    },
  ],
} as const;

type BuildImage = { src: string; alt: string };

export type Build = {
  name: string;
  kicker: string;
  text: string;
  tech: readonly string[];
  images: readonly BuildImage[];
  repoUrl: string;
  liveUrl: string;
};

export const builds: readonly Build[] = [
  {
    name: "The Fade Room",
    kicker: "Demo build · barbershop",
    text: "A booking-first barbershop site: dark, photography-led, with an interactive slot-picker that respects opening hours. Static output, zero framework JS shipped — built for instant load on 4G.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    images: [
      { src: "images/fade-room/hero.jpg", alt: "The Fade Room — dark hero with gold accents" },
      { src: "images/fade-room/gallery.jpg", alt: "The Fade Room — photography gallery" },
      { src: "images/fade-room/booking.jpg", alt: "The Fade Room — interactive booking slot-picker" },
      { src: "images/fade-room/team.jpg", alt: "The Fade Room — meet the team cards" },
    ],
    repoUrl: "https://github.com/brpetrov/fade-room",
    liveUrl: "https://brpetrov.github.io/fade-room/",
  },
  {
    name: "Marsden & Son",
    kicker: "Demo build · trade services",
    text: "A call-first site for a plumbing & heating firm: trust strip, plain-English services, live service-area map and a callback form. Every design decision serves one job — making the phone ring.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    images: [
      { src: "images/marsden/hero.jpg", alt: "Marsden & Son — navy and amber hero" },
      { src: "images/marsden/services.jpg", alt: "Marsden & Son — services grid" },
      { src: "images/marsden/service-area.jpg", alt: "Marsden & Son — service area with live map" },
      { src: "images/marsden/contact.jpg", alt: "Marsden & Son — contact section with callback form" },
    ],
    repoUrl: "https://github.com/brpetrov/marsden-plumbing",
    liveUrl: "https://brpetrov.github.io/marsden-plumbing/",
  },
  {
    name: "Emlaak — Property Marketplace",
    kicker: "Web platform · real estate",
    text: "A Rightmove-style property portal built for Algeria — a market that had no listings site at the time. Buy, rent and sale listings, agent profiles, listing plans and multilingual UI: an ASP.NET Core API behind a Blazor front end with a SQL database, built end-to-end, though the venture never went to market.",
    tech: ["Blazor", "ASP.NET Core", "SQL Server"],
    images: [
      { src: "images/algeria-property-marketplace/site-1.jpg", alt: "Emlaak — homepage hero with property search" },
      { src: "images/algeria-property-marketplace/site-2.jpg", alt: "Emlaak — property marketplace screenshot" },
      { src: "images/algeria-property-marketplace/site-3.jpg", alt: "Emlaak — listings view" },
      { src: "images/algeria-property-marketplace/site-4.jpg", alt: "Emlaak — property details" },
      { src: "images/algeria-property-marketplace/site-5.jpg", alt: "Emlaak — agents and plans" },
    ],
    repoUrl: "",
    liveUrl: "",
  },
  {
    name: "Alpha Mode",
    kicker: "Client website · e-commerce",
    text: "Marketing and e-commerce site for a Bulgarian supplement brand selling and delivering nationwide — product showcase, ingredient breakdown, bundle pricing, testimonial carousel and customer reviews.",
    tech: ["C#", "JavaScript", "SCSS"],
    images: [
      { src: "images/alphamode/hero.jpg", alt: "Alpha Mode — product hero" },
      { src: "images/alphamode/product.jpg", alt: "Alpha Mode — product studio shot" },
      { src: "images/alphamode/details.jpg", alt: "Alpha Mode — product detail section" },
    ],
    repoUrl: "https://github.com/brpetrov/AlphaMode",
    liveUrl: "https://alphamode.netlify.app/",
  },
  {
    name: "Denis Milkov Coaching",
    kicker: "Client website · personal training",
    text: "Photography-led site for a Bulgarian personal trainer with an active coaching client base — training plans, online coaching and contact, built to turn Instagram followers into paying clients.",
    tech: ["C#", "ASP.NET Core", "SCSS"],
    images: [
      { src: "images/denis-milkov/site-1.jpg", alt: "Denis Milkov — photography-led hero" },
      { src: "images/denis-milkov/site-2.jpg", alt: "Denis Milkov — site screenshot" },
      { src: "images/denis-milkov/site-3.jpg", alt: "Denis Milkov — site screenshot" },
      { src: "images/denis-milkov/site-4.jpg", alt: "Denis Milkov — site screenshot" },
      { src: "images/denis-milkov/site-5.jpg", alt: "Denis Milkov — site screenshot" },
      { src: "images/denis-milkov/site-6.jpg", alt: "Denis Milkov — site screenshot" },
    ],
    repoUrl: "",
    liveUrl: "",
  },
  {
    name: "Divine",
    kicker: "Client website · wine brand",
    text: "Dramatic dark landing page for a Bulgarian wine brand — product story, tasting notes and ordering, designed to feel like the label it sells.",
    tech: ["C#", "ASP.NET Core", "SCSS"],
    images: [
      { src: "images/divine/site-1.jpg", alt: "Divine — dark hero with order call-to-action" },
      { src: "images/divine/site-2.jpg", alt: "Divine — product story section" },
    ],
    repoUrl: "",
    liveUrl: "",
  },
  {
    name: "Krustinka Kids",
    kicker: "Client website · kids' play centre",
    text: "Website for Krustinka, the most popular children's play centre in Ruse, Bulgaria — games, birthday parties, menu, FAQs and gallery, built to be instantly readable for busy parents.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: [{ src: "images/krustinka/hero.jpg", alt: "Krustinka Kids — colourful hero with playful navigation" }],
    repoUrl: "https://github.com/brpetrov/children-playground-Bulgaria",
    liveUrl: "https://krystnikytkids.netlify.app",
  },
  {
    name: "Brainwave",
    kicker: "Learning build · landing page",
    text: "AI-chat landing page with a parallax hero, bento feature grid and a polished dark design system — built to sharpen modern React and Tailwind patterns.",
    tech: ["React", "Tailwind CSS", "Vite"],
    images: [{ src: "images/brainwave/hero.jpg", alt: "Brainwave — dark AI landing page hero" }],
    repoUrl: "https://github.com/brpetrov/brainwave",
    liveUrl: "https://brainwave-boyan-petrov.netlify.app",
  },
  {
    name: "iPhone 15 Pro page",
    kicker: "Learning build · product page",
    text: "Apple-style product page for the iPhone 15 Pro — GSAP scroll animations, a video carousel and an interactive 3D model rendered with Three.js.",
    tech: ["React", "GSAP", "Three.js"],
    images: [{ src: "images/iphone-15/hero.jpg", alt: "iPhone 15 Pro page — titanium hero with 3D phone model" }],
    repoUrl: "https://github.com/brpetrov/apple_website",
    liveUrl: "https://boyan-petrov-iphone15-clone.netlify.app",
  },
] as const;

export const sideProjects: readonly Build[] = [
  {
    name: "Dun Bun Finance",
    kicker: "Personal project · finance app",
    text: "Personal finance app I built for myself and use to run my own money every month: expenses grouped by type, percentage-based savings pots, a debt-payoff planner and Gemini-powered bank-statement analysis. Firebase auth + Firestore, biometric login with Windows Hello or fingerprint, light & dark themes.",
    tech: ["Flutter", "Dart", "Firebase", "Gemini AI"],
    images: [
      { src: "images/dun-bun-finance/hero.jpg", alt: "Dun Bun Finance — brand hero with dashboard and savings pots" },
      { src: "images/dun-bun-finance/history.jpg", alt: "Dun Bun Finance — monthly spending history chart" },
      { src: "images/dun-bun-finance/debt-payoff.jpg", alt: "Dun Bun Finance — debt payoff plan on desktop and mobile" },
    ],
    repoUrl: "https://github.com/brpetrov/dun_bun_finance",
    liveUrl: "",
  },
  {
    name: "LeanStreak",
    kicker: "Personal project · health app",
    text: "Habit and calorie-consistency tracker I use every day to keep my own weight on track: a personalised calorie plan from onboarding (BMR/TDEE), meal logging by text or voice with Gemini AI calorie estimation, and green/yellow/red adherence days with weekly reviews. Riverpod + GoRouter architecture on Firebase.",
    tech: ["Flutter", "Riverpod", "Firebase", "Gemini AI"],
    images: [
      { src: "images/lean-streak/hero.jpg", alt: "LeanStreak — brand hero with light and dark phones" },
      { src: "images/lean-streak/log-meal.jpg", alt: "LeanStreak — meal logging by voice with AI estimation" },
      { src: "images/lean-streak/progress.jpg", alt: "LeanStreak — weight progress and day streak" },
      { src: "images/lean-streak/app-1.jpg", alt: "LeanStreak — real app screens: Today dashboard and progress calendar" },
      { src: "images/lean-streak/app-4.jpg", alt: "LeanStreak — real app screen: progress calendar" },
    ],
    repoUrl: "https://github.com/brpetrov/lean_streak",
    liveUrl: "",
  },
  {
    name: "GlowGuard",
    kicker: "Personal project · browser extension",
    text: "A lightweight page dimmer: overlay-based dimming that never breaks layouts, four blue-light presets, an automatic day/evening/night mode, anti-flash protection injected before pages render, and keyboard shortcuts throughout.",
    tech: ["TypeScript", "WebExtension APIs", "Manifest V3"],
    images: [
      { src: "images/glow-guard/hero.jpg", alt: "GlowGuard — browser page half-dimmed with the extension popup open" },
      { src: "images/glow-guard/popup.jpg", alt: "GlowGuard — real extension popup with dim level and blue-light presets" },
      { src: "images/glow-guard/shot-1.jpg", alt: "GlowGuard — screenshot" },
      { src: "images/glow-guard/shot-2.jpg", alt: "GlowGuard — screenshot" },
      { src: "images/glow-guard/shot-3.jpg", alt: "GlowGuard — screenshot" },
    ],
    repoUrl: "https://github.com/brpetrov/GlowGuard",
    liveUrl: "",
  },
] as const;
