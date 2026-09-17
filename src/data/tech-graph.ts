/**
 * Knowledge about technologies used to build the project/technology graph.
 *
 * Project stacks in resume.tsx list the "visible" tools (Next.js, Expo…) but
 * rarely the foundations they imply (React, JavaScript…). IMPLIES fills that
 * gap so JavaScript is counted for every TypeScript/Next.js/Vue project, and
 * CATEGORY colors the nodes.
 */

export type TechCategory = "language" | "framework" | "database" | "cloud" | "library" | "service";

export const CATEGORY_LABEL: Record<TechCategory, { fr: string; en: string }> = {
  language: { fr: "Langages", en: "Languages" },
  framework: { fr: "Frameworks", en: "Frameworks" },
  database: { fr: "Bases de données", en: "Databases" },
  cloud: { fr: "Cloud & infra", en: "Cloud & infra" },
  library: { fr: "Bibliothèques", en: "Libraries" },
  service: { fr: "API & services", en: "APIs & services" },
};

/** Canonical names: the graph merges these variants into one node. */
const ALIAS: Record<string, string> = {
  "React 19": "React",
  "Expo SDK 54": "Expo",
  "Next.js 14": "Next.js",
  Typescript: "TypeScript",
  "OpenAI API": "OpenAI",
  "Gemini 2.5": "Gemini",
  "Tailwind CSS": "TailwindCSS",
  "Cloudflare FLUX": "Workers AI",
};

/** Using the key implies real, hands-on use of every value. */
const IMPLIES: Record<string, string[]> = {
  TypeScript: ["JavaScript"],
  "Next.js": ["React", "TypeScript", "Node.js"],
  React: ["JavaScript"],
  "React Native": ["React"],
  Expo: ["React Native"],
  "Expo Router": ["Expo"],
  "Expo Notifications": ["Expo"],
  NativeWind: ["React Native", "TailwindCSS"],
  "React Native Reanimated": ["React Native"],
  "Workers AI": ["Cloudflare Workers"],
  "Cloudflare D1": ["Cloudflare Workers"],
  "Expo Camera": ["Expo"],
  "Expo Haptics": ["Expo"],
  "React Navigation": ["React Native"],
  "react-native-svg": ["React Native"],
  AsyncStorage: ["React Native"],
  "Vue.js": ["JavaScript"],
  PrimeVue: ["Vue.js"],
  "Node.js": ["JavaScript"],
  Express: ["Node.js"],
  "ASP.NET": ["C#", ".NET"],
  "C#": [".NET"],
  TailwindCSS: ["CSS"],
  Bootstrap: ["CSS"],
  "Shadcn UI": ["React", "TailwindCSS"],
  "Lucide React": ["React"],
  "Framer Motion": ["React"],
  Drizzle: ["PostgreSQL"],
  Prisma: ["PostgreSQL"],
  Supabase: ["PostgreSQL"],
  Upstash: ["Redis"],
  Vite: ["JavaScript"],
  "Chart.js": ["JavaScript"],
  HTML: [],
  CSS: [],
};

export const CATEGORY: Record<string, TechCategory> = {
  JavaScript: "language", TypeScript: "language", "C#": "language", HTML: "language", CSS: "language",
  "Next.js": "framework", React: "framework", "React Native": "framework", Expo: "framework", "Vue.js": "framework",
  "ASP.NET": "framework", ".NET": "framework", "Node.js": "framework", Express: "framework", Vite: "framework",
  PostgreSQL: "database", "SQL Server": "database", MongoDB: "database", Redis: "database", "Local Storage": "database", AsyncStorage: "database",
  Azure: "cloud", Vercel: "cloud", Supabase: "cloud", Upstash: "cloud", "Cloudflare Workers": "cloud", "Workers AI": "cloud",
  "Cloudflare D1": "database", Zustand: "library", NativeWind: "library", "Expo Router": "library", "Expo Notifications": "library", "React Native Reanimated": "library", OpenStreetMap: "service",
  TailwindCSS: "library", "Shadcn UI": "library", Bootstrap: "library", PrimeVue: "library", "Framer Motion": "library",
  "Lucide React": "library", "Chart.js": "library", Drizzle: "library", Prisma: "library", "React Navigation": "library",
  "react-native-svg": "library", "Expo Camera": "library", "Expo Haptics": "library", i18n: "library", JWT: "library", WebSockets: "library",
  OpenAI: "service", Gemini: "service", Stripe: "service", "Zoho API": "service", "Google Maps API": "service", "Google Wallet API": "service", vCard: "service",
};

export function canonical(name: string) {
  return ALIAS[name] ?? name;
}

export function categoryOf(name: string): TechCategory {
  return CATEGORY[name] ?? "library";
}

/** Expands a project's stack with every implied technology, deduplicated. */
export function expandStack(stack: readonly string[]): string[] {
  const out = new Set<string>();
  const visit = (t: string) => {
    const c = canonical(t);
    if (out.has(c)) return;
    out.add(c);
    (IMPLIES[c] ?? []).forEach(visit);
  };
  stack.forEach(visit);
  return Array.from(out);
}
