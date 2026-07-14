// Skill groups. `core: true` marks daily-driver skills — rendered as
// highlighted chips. Icons map to entries in Icon.astro.

type Skill = { name: string; core?: boolean };

export const skills: readonly {
  group: string;
  icon: string;
  blurb: string;
  items: readonly Skill[];
}[] = [
  {
    group: "Backend",
    icon: "server",
    blurb: "My day-job core — .NET services used by 100+ UK councils.",
    items: [
      { name: "C#", core: true },
      { name: "ASP.NET Core", core: true },
      { name: "Blazor", core: true },
      { name: "SQL Server", core: true },
      { name: "PHP (Laravel)" },
      { name: "Python" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
  },
  {
    group: "Mobile",
    icon: "smartphone",
    blurb: "Cross-platform Flutter, with native Swift and Kotlin where it counts.",
    items: [
      { name: "Flutter", core: true },
      { name: "Dart", core: true },
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "Xamarin / MAUI" },
    ],
  },
  {
    group: "Frontend",
    icon: "monitor",
    blurb: "From design systems to animation — whatever the UI needs.",
    items: [
      { name: "JavaScript / TypeScript", core: true },
      { name: "Vue", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "React" },
      { name: "Astro" },
      { name: "Bootstrap" },
      { name: "Sass" },
      { name: "GSAP" },
      { name: "Three.js" },
    ],
  },
  {
    group: "Tools & Platforms",
    icon: "wrench",
    blurb: "The glue — cloud, delivery and the ecosystems around the code.",
    items: [
      { name: "Git", core: true },
      { name: "Azure", core: true },
      { name: "Azure DevOps" },
      { name: "AWS" },
      { name: "REST APIs" },
      { name: "Gemini AI" },
      { name: "Jira & Confluence" },
      { name: "Umbraco" },
      { name: "Shopify / WooCommerce" },
    ],
  },
] as const;
