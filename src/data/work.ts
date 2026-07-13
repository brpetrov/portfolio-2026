// Selected work. The Bartec feature block is professional (proprietary, no
// public demo). `builds` are public projects rendered as cards:
//  - images: 0 images → styled placeholder cover, 1 → static image,
//    2+ → horizontal scroll-snap gallery.
//  - liveUrl / repoUrl are optional — links render only when present.
// `earlier` renders as a compact text-only list.

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
      { src: "images/fade-room.jpg", alt: "The Fade Room — dark hero with gold accents" },
      { src: "images/fade-room-2.jpg", alt: "The Fade Room — photography gallery" },
      { src: "images/fade-room-3.jpg", alt: "The Fade Room — interactive booking slot-picker" },
    ],
    repoUrl: "https://github.com/brpetrov/fade-room",
    liveUrl: "",
  },
  {
    name: "Marsden & Son",
    kicker: "Demo build · trade services",
    text: "A call-first site for a plumbing & heating firm: trust strip, plain-English services, live service-area map and a callback form. Every design decision serves one job — making the phone ring.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    images: [
      { src: "images/marsden.jpg", alt: "Marsden & Son — navy and amber hero" },
      { src: "images/marsden-2.jpg", alt: "Marsden & Son — services grid" },
      { src: "images/marsden-3.jpg", alt: "Marsden & Son — contact section with callback form" },
    ],
    repoUrl: "https://github.com/brpetrov/marsden-plumbing",
    liveUrl: "",
  },
  {
    name: "Dun Bun Finance",
    kicker: "Desktop & mobile app · personal finance",
    text: "Personal finance app: expenses grouped by type, percentage-based savings pots, a debt-payoff planner and Gemini-powered bank-statement analysis. Firebase auth + Firestore, biometric login with Windows Hello or fingerprint, light & dark themes.",
    tech: ["Flutter", "Dart", "Firebase", "Gemini AI"],
    images: [],
    repoUrl: "https://github.com/brpetrov/dun_bun_finance",
    liveUrl: "",
  },
  {
    name: "LeanStreak",
    kicker: "Web & mobile app · health",
    text: "Habit and calorie-consistency tracker: a personalised calorie plan from onboarding (BMR/TDEE), meal logging by text or voice with Gemini AI calorie estimation, and green/yellow/red adherence days with weekly reviews. Riverpod + GoRouter architecture on Firebase.",
    tech: ["Flutter", "Riverpod", "Firebase", "Gemini AI"],
    images: [{ src: "images/leanstreak.jpg", alt: "LeanStreak — sign-in screen of the live web app" }],
    repoUrl: "https://github.com/brpetrov/lean_streak",
    liveUrl: "https://lean-streak-project.web.app/",
  },
  {
    name: "GlowGuard",
    kicker: "Browser extension · Chrome, Edge & Firefox",
    text: "A lightweight page dimmer: overlay-based dimming that never breaks layouts, four blue-light presets, an automatic day/evening/night mode, anti-flash protection injected before pages render, and keyboard shortcuts throughout.",
    tech: ["TypeScript", "WebExtension APIs", "Manifest V3"],
    images: [{ src: "images/glowguard.jpg", alt: "GlowGuard — extension popup with dim level and blue-light presets" }],
    repoUrl: "https://github.com/brpetrov/GlowGuard",
    liveUrl: "",
  },
  {
    name: "Alpha Mode",
    kicker: "Client website · e-commerce",
    text: "Marketing and e-commerce site for a supplement brand — product showcase, ingredient breakdown, bundle pricing, testimonial carousel and customer reviews, in Bulgarian.",
    tech: ["C#", "JavaScript", "SCSS"],
    images: [
      { src: "images/alphamode.jpg", alt: "Alpha Mode — product hero" },
      { src: "images/alphamode-2.jpg", alt: "Alpha Mode — product detail section" },
    ],
    repoUrl: "https://github.com/brpetrov/AlphaMode",
    liveUrl: "https://alphamode.netlify.app/",
  },
] as const;

export const earlier = [
  {
    name: "Brainwave",
    text: "AI-chat landing page with parallax design — React + Tailwind.",
    liveUrl: "https://brainwave-boyan-petrov.netlify.app",
    repoUrl: "https://github.com/brpetrov/brainwave",
  },
  {
    name: "iPhone 15 Pro page",
    text: "Apple-style product page — React, GSAP animations, Three.js 3D model.",
    liveUrl: "https://boyan-petrov-iphone15-clone.netlify.app",
    repoUrl: "https://github.com/brpetrov/apple_website",
  },
  {
    name: "Krustinka Kids",
    text: "Playful site for a Bulgarian children's playground — HTML & CSS.",
    liveUrl: "https://krystnikytkids.netlify.app",
    repoUrl: "https://github.com/brpetrov/children-playground-Bulgaria",
  },
] as const;
