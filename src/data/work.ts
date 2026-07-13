// Selected work. The Bartec feature block is professional (proprietary, no
// public demo); the cards are public builds with repos. Add `liveUrl` to a
// card when its deployment exists — the link renders automatically.

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

export const builds = [
  {
    name: "The Fade Room",
    kicker: "Demo build · barbershop",
    text: "A booking-first barbershop site: dark, photography-led, with an interactive slot-picker that respects opening hours. Static output, zero framework JS shipped — built for instant load on 4G.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    image: "images/fade-room.jpg",
    imageAlt: "The Fade Room — dark barbershop website with gold accents",
    repoUrl: "https://github.com/brpetrov/fade-room",
    liveUrl: "",
  },
  {
    name: "Marsden & Son",
    kicker: "Demo build · trade services",
    text: "A call-first site for a plumbing & heating firm: trust strip, plain-English services, live service-area map and a callback form. Every design decision serves one job — making the phone ring.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    image: "images/marsden.jpg",
    imageAlt: "Marsden & Son — navy and amber plumbing website",
    repoUrl: "https://github.com/brpetrov/marsden-plumbing",
    liveUrl: "",
  },
] as const;
