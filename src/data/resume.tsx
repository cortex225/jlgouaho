import React from "react";
import en from "@/app/locales/en";
import fr from "@/app/locales/fr";
import { Icons } from "@/components/icons";
import { BookOpen, Download, HomeIcon, NotebookIcon } from "lucide-react";

/**
 * Sélectionne le fichier de traduction en fonction de la locale.
 */
function getTranslation(locale: "en" | "fr" = "fr") {
  return locale === "fr" ? fr : en;
}

/**
 * Retourne l'objet DATA du resume en fonction de la locale.
 */
export function getData(locale: "en" | "fr" = "fr") {
  const t = getTranslation(locale);

  return {
    i18n: t,
    name: "Déto Jean-Luc Gouaho",
    initials: "jl",
    url: "https://www.jlgouaho.com",
    businessUrl: "https://business.jlgouaho.com",
    location: "CANADA",
    locationLink: "",
    description: t.sections.about,
    summary: t.sections.about,
    avatarUrl: "/me.png",
    skills: [
      // Langages de programmation
      { name: "C#", type: t.sections.skills.languages, icon: "/csharp.svg" },
      {
        name: "JavaScript",
        type: t.sections.skills.languages,
        icon: "/javaScript.svg",
      },
      {
        name: "TypeScript",
        type: t.sections.skills.languages,
        icon: "/typescript.svg",
      },
      { name: "Java", type: t.sections.skills.languages, icon: "/java.svg" },
      {
        name: "Python",
        type: t.sections.skills.languages,
        icon: "/python.svg",
      },
      {
        name: "Kotlin",
        type: t.sections.skills.languages,
        icon: "/kotlin.svg",
      },

      // Frameworks
      { name: ".NET", type: t.sections.skills.frameworks, icon: "/dotnet.svg" },
      { name: "React", type: t.sections.skills.frameworks, icon: "/react.svg" },
      {
        name: "Vue.js",
        type: t.sections.skills.frameworks,
        icon: "/vuejs.svg",
      },
      {
        name: "Grails",
        type: t.sections.skills.frameworks,
        icon: "/grails.svg",
      },
      {
        name: "Node.js",
        type: t.sections.skills.frameworks,
        icon: "/nodejs.svg",
      },

      // Bases de données
      {
        name: "PostgreSQL",
        type: t.sections.skills.databases,
        icon: "/postgresql.svg",
      },
      { name: "MySQL", type: t.sections.skills.databases, icon: "/mysql.svg" },
      {
        name: "MongoDB",
        type: t.sections.skills.databases,
        icon: "/mongodb.svg",
      },
      { name: "Redis", type: t.sections.skills.databases, icon: "/redis.svg" },
      {
        name: "SQL Server",
        type: t.sections.skills.databases,
        icon: "/sqlserver.svg",
      },

      // Cloud et DevOps
      { name: "AWS", type: t.sections.skills.cloudDevops, icon: "/aws.svg" },
      {
        name: "Azure",
        type: t.sections.skills.cloudDevops,
        icon: "/azure.svg",
      },
      {
        name: "Google Cloud",
        type: t.sections.skills.cloudDevops,
        icon: "/google-cloud.svg",
      },
      {
        name: "Docker",
        type: t.sections.skills.cloudDevops,
        icon: "/docker.svg",
      },

      // Outils
      { name: "Git", type: t.sections.skills.tools, icon: "/git.svg" },
      { name: "Figma", type: t.sections.skills.tools, icon: "/figma.svg" },
      { name: "VS Code", type: t.sections.skills.tools, icon: "/vscode.svg" },
      {
        name: "IntelliJ IDEA",
        type: t.sections.skills.tools,
        icon: "/intellij.svg",
      },

      // CMS
      {
        name: "WordPress",
        type: t.sections.skills.cms,
        icon: "/wordPress.svg",
      },
      { name: "Shopify", type: t.sections.skills.cms, icon: "/shopify.svg" },

      // Marketing
      { name: "SEO", type: t.sections.skills.marketing, icon: "" },
      { name: "Google Analytics", type: t.sections.skills.marketing, icon: "" },

      // Gestion de projet
      {
        name: "Project Management",
        type: t.sections.skills.projectManagement,
        icon: "",
      },
      {
        name: "Agile",
        type: t.sections.skills.projectManagement,
        icon: "",
      },
      { name: "Sales", type: t.sections.skills.projectManagement, icon: "" },
    ],
    navbar: [
      { href: "/", icon: HomeIcon, label: t.hero.greeting },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
      {
        href: "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/MyResume.pdf",
        icon: Download,
        label: locale === "fr" ? "Télécharger CV" : "Download Resume",
      },
    ],
    contact: {
      email: "jlgouaho@gmail.com",
      tel: "+14505211098",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/cortex225",
          icon: Icons.github,

          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jlgouaho/",
          icon: Icons.linkedin,

          navbar: true,
        },
        X: {
          name: "X",
          url: "https://x.com/jlgouaho",
          icon: Icons.x,

          navbar: true,
        },
        Instagram: {
          name: "Instagram",
          url: "https://www.instagram.com/jlgouaho/",
          icon: Icons.instagram,

          navbar: true,
        },
        // Youtube: {
        //   name: "Youtube",
        //   url: "https://dub.sh/dillion-youtube",
        //   icon: Icons.youtube,
        //   navbar: true,
        // },
        blog: {
          name: "Blog",
          url: "https://www.jlgouaho.com/blog",
          icon: BookOpen,

          navbar: true,
        },
        email: {
          name: "Send Email",
          url: "mailto:jlgouaho@gmail.com",
          icon: Icons.email,

          navbar: false,
        },
      },
    },

    work: [
      {
        company: t.sections.work.recruitEasy.company,
        href: "https://recruiteasy.ca",
        badges: [],
        location: t.sections.work.recruitEasy.location,
        title: t.sections.work.recruitEasy.title,
        logoUrl: "/recruiteasy.png",
        start: t.sections.work.recruitEasy.start,
        end: t.sections.work.recruitEasy.end,
        description: t.sections.work.recruitEasy.description,
      },
      {
        company: t.sections.work.evnia.company,
        href: "https://evnia.ca/",
        badges: [],
        location: t.sections.work.evnia.location,
        title: t.sections.work.evnia.title,
        logoUrl: "/evnia.jpeg",
        start: t.sections.work.evnia.start,
        end: t.sections.work.evnia.end,
        description: t.sections.work.evnia.description,
      },
      {
        company: t.sections.work.tractionDK.company,
        href: "https://www.tractiondk.com/",
        badges: [],
        location: t.sections.work.tractionDK.location,
        title: t.sections.work.tractionDK.title,
        logoUrl: "/traction.jpeg",
        start: t.sections.work.tractionDK.start,
        end: t.sections.work.tractionDK.end,
        description: t.sections.work.tractionDK.description,
      },
      {
        company: t.sections.work.royalBroker.company,
        href: "https://royalbrokersolutions.com/our-services",
        badges: [],
        location: t.sections.work.royalBroker.location,
        title: t.sections.work.royalBroker.title,
        logoUrl: "/royal.png",
        start: t.sections.work.royalBroker.start,
        end: t.sections.work.royalBroker.end,
        description: t.sections.work.royalBroker.description,
      },
      {
        company: t.sections.work.royalBrokerInternship.company,
        href: "https://royalbrokersolutions.com/our-services",
        badges: [t.sections.work.royalBrokerInternship.badge],
        location: t.sections.work.royalBrokerInternship.location,
        title: t.sections.work.royalBrokerInternship.title,
        logoUrl: "/royal.png",
        start: t.sections.work.royalBrokerInternship.start,
        end: t.sections.work.royalBrokerInternship.end,
        description: t.sections.work.royalBrokerInternship.description,
      },
      {
        company: t.sections.work.rogers.company,
        href: "https://www.rogers.com/",
        badges: [],
        location: t.sections.work.rogers.location,
        title: t.sections.work.rogers.title,
        logoUrl: "/rogers.jpeg",
        start: t.sections.work.rogers.start,
        end: t.sections.work.rogers.end,
        description: t.sections.work.rogers.description,
      },
    ],
    certifications: [
      {
        name: "Microsoft AZ-900",
        logoUrl: "/certifications/microsoft-900.png",
        href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
        date: null,
        description: t.sections.certifications.inProgress,
      },
      {
        name: "Microsoft AI-900",
        logoUrl: "/certifications/AI-900.png",
        href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
        date: null,
        description: t.sections.certifications.inProgress,
      },
    ],
    education: [
      {
        school: "Cégep de Granby",
        href: "https://www.cegepgranby.com/",
        degree: "DEC in Computer Science",
        description: t.sections.education.description,
        logoUrl: "/cegep.png",
        end: "Mai 2024",
      },
    ],
    projects: [
      {
        title: "SpinVibe",
        description: t.sections.projects.spinVibe.description,
        overview: t.sections.projects.spinVibe.overview,
        features: t.sections.projects.spinVibe.features,
        challenges: t.sections.projects.spinVibe.challenges,
        conclusion: t.sections.projects.spinVibe.conclusion,
        href: "https://spinvibe.app",
        dates: "Jan 2026 - Present",
        active: true,
        technologies: [
          "React Native",
          "Expo",
          "Expo Router",
          "TypeScript",
          "React 19",
          "NativeWind",
          "Zustand",
          "React Native Reanimated",
          "Cloudflare Workers",
          "Workers AI",
          "Cloudflare D1",
          "OpenStreetMap",
          "Expo Notifications",
          "Expo Haptics",
        ],
        video: "/projects/spinvibe/preview.mp4",
        images: [
          "/projects/spinvibe/01-roue-1.jpg",
          "/projects/spinvibe/03-resultat.jpg",
          "/projects/spinvibe/04-contexte.jpg",
          "/projects/spinvibe/06-envies.jpg",
          "/projects/spinvibe/05-affiner.jpg",
          "/projects/spinvibe/02-roue-2.jpg",
        ],
        links: [
          {
            type: "Website",
            href: "https://spinvibe.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
      {
        title: "FitTrack",
        description: t.sections.projects.fitTrack.description,
        overview: t.sections.projects.fitTrack.overview,
        features: t.sections.projects.fitTrack.features,
        challenges: t.sections.projects.fitTrack.challenges,
        conclusion: t.sections.projects.fitTrack.conclusion,
        href: "#",
        dates: "2026 - Present",
        active: true,
        technologies: [
          "React Native",
          "Expo SDK 54",
          "TypeScript",
          "React 19",
          "Gemini 2.5",
          "Cloudflare FLUX",
          "react-native-svg",
          "React Navigation",
          "AsyncStorage",
          "Expo Camera",
          "Expo Haptics",
        ],
        video:
          "https://pub-c0874d8393bb493ea002a55cbc71d1ab.r2.dev/portfolio/jl-fit-track.mp4",
        images: [
          "/projects/fittrack/Simulator Screenshot - iPhone 17 Pro - 2026-05-21 at 09.54.43.png",
          "/projects/fittrack/Simulator Screenshot - iPhone 17 Pro - 2026-05-21 at 09.54.52.png",
          "/projects/fittrack/Simulator Screenshot - iPhone 17 Pro - 2026-05-21 at 10.23.55.png",
          "/projects/fittrack/Simulator Screenshot - iPhone 17 Pro - 2026-05-21 at 10.29.36.png",
          "/projects/fittrack/Simulator Screenshot - iPhone 17 Pro - 2026-05-21 at 10.32.51.png",
        ],
        links: [
          {
            type: "Github",
            href: "https://github.com/cortex225/fittrack",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "MagicSearch",
        description: t.sections.projects.magicSearch.description,
        overview: t.sections.projects.magicSearch.overview,
        features: t.sections.projects.magicSearch.features,
        challenges: t.sections.projects.magicSearch.challenges,
        conclusion: t.sections.projects.magicSearch.conclusion,
        href: "https://magic-search.jlgouaho.com",
        dates: "Jan 2024 - Feb 2024",
        active: true,
        technologies: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Drizzle",
          "TailwindCSS",
          "Shadcn UI",
          "OpenAI",
        ],
        images: [
          "/projects/magic-search/magic-1.png",
          "/projects/magic-search/magic-2.png",
        ],
        video:
          "https://pub-c0874d8393bb493ea002a55cbc71d1ab.r2.dev/portfolio/magic-search.mp4",
        links: [
          {
            type: "Website",
            href: "https://magic-search.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Github",
            href: "https://github.com/cryptotrends/cryptotrends",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "RecruitEasy",
        description: t.sections.projects.recruitEase.description,
        overview: t.sections.projects.recruitEase.overview,
        features: t.sections.projects.recruitEase.features,
        challenges: t.sections.projects.recruitEase.challenges,
        conclusion: t.sections.projects.recruitEase.conclusion,
        href: "",
        dates: "April 2023 - March 2024",
        active: true,
        technologies: [
          "Next.js",
          "C#",
          "ASP.NET",
          "OpenAI",
          "Redis",
          "Upstash",
          "TypeScript",
          "PostgreSQL",
          "TailwindCSS",
          "Stripe",
        ],
        images: [
          "/projects/recruit-ease/landing2.gif",
          "/projects/recruit-ease/landing3.png",
          "/projects/recruit-ease/img1.png",
          "/projects/recruit-ease/img2.png",
          "/projects/recruit-ease/img3.png",
          "/projects/recruit-ease/img4.png",
        ],
        video:
          "https://pub-c0874d8393bb493ea002a55cbc71d1ab.r2.dev/portfolio/recruitease.mp4",
        links: [
          {
            type: "Website",
            href: "https://recruiteasy.ca",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
      {
        title: "InstaHR",
        description: t.sections.projects.instaHR.description,
        overview: t.sections.projects.instaHR.overview,
        features: t.sections.projects.instaHR.features,
        challenges: t.sections.projects.instaHR.challenges,
        conclusion: t.sections.projects.instaHR.conclusion,
        href: "https://myinstahr.ca",
        dates: "June 2023 - Present",
        active: true,
        technologies: [
          "ASP.NET",
          "C#",
          "SQL Server",
          "Vue.js",
          "Bootstrap",
          "Vite",
          "PrimeVue",
          "Zoho API",
          "Azure",
        ],
        images: [
          "/projects/instaHR/dash.png",
          "/projects/instaHR/login.png",
          "/projects/instaHR/factures.png",
          "/projects/instaHR/users.png",
        ],
        links: [
          {
            type: "Website",
            href: "https://myinstahr.ca",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Github",
            href: "https://github.com/cortex225/instaHR",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "PlayerConnect",
        description: t.sections.projects.playerConnect.description,
        overview: t.sections.projects.playerConnect.overview,
        features: t.sections.projects.playerConnect.features,
        challenges: t.sections.projects.playerConnect.challenges,
        conclusion: t.sections.projects.playerConnect.conclusion,
        href: "https://player-connect.jlgouaho.com",
        dates: "April 2023 - September 2023",
        active: true,
        technologies: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Better Auth",
          "TailwindCSS",
          "Shadcn UI",
          "Stripe",
          "Pusher",
          "Supabase",
        ],
        images: [
          "/projects/playerConnect/accueil.png",
          "/projects/playerConnect/ecrans-mobile.png",
          "/projects/playerConnect/fiche-athlete.png",
          "/projects/playerConnect/recruteur.png",
        ],
        links: [
          {
            type: "Website",
            href: "https://player-connect.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Github",
            href: "https://github.com/cortex225/playerConnect",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "LeadMapper",
        description: t.sections.projects.leadMapper.description,
        overview: t.sections.projects.leadMapper.overview,
        features: t.sections.projects.leadMapper.features,
        challenges: t.sections.projects.leadMapper.challenges,
        conclusion: t.sections.projects.leadMapper.conclusion,
        href: "https://lead-mapper.jlgouaho.com",
        dates: "Dec 2024 - Jan 2025",
        active: true,
        technologies: [
          "TypeScript",
          "React",
          "Vite",
          "TailwindCSS",
          "Express",
          "Leaflet",
          "Google Places API",
        ],
        images: [
          "/projects/LeadMapper/resultats.png",
          "/projects/LeadMapper/filtres.png",
          "/projects/LeadMapper/recherche.png",
          "/projects/LeadMapper/fiche-mobile.png",
        ],
        links: [
          {
            type: "Website",
            href: "https://lead-mapper.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Github",
            href: "https://github.com/cortex225/LeadMapper",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "AgentOS",
        description: t.sections.projects.agentOs.description,
        overview: t.sections.projects.agentOs.overview,
        features: t.sections.projects.agentOs.features,
        challenges: t.sections.projects.agentOs.challenges,
        conclusion: t.sections.projects.agentOs.conclusion,
        href: "#",
        dates: "2026",
        active: true,
        technologies: [
          "React 19",
          "TypeScript",
          "Vite",
          "TailwindCSS",
          "Zustand",
          "Node.js",
          "Express",
          "OpenRouter",
          "MCP",
        ],
        images: [
          "/projects/agent-os/chat-agent.jpg",
          "/projects/agent-os/conclusion-equipe.jpg",
          "/projects/agent-os/mobile.jpg",
        ],
        links: [],
      },
      {
        title: "Marie-Antoine",
        description: t.sections.projects.marieAntoine.description,
        overview: t.sections.projects.marieAntoine.overview,
        features: t.sections.projects.marieAntoine.features,
        challenges: t.sections.projects.marieAntoine.challenges,
        conclusion: t.sections.projects.marieAntoine.conclusion,
        href: "https://marie-antoine.jlgouaho.com",
        dates: "2026",
        active: true,
        technologies: ["React", "TypeScript", "Vite", "React Router", "GSAP"],
        images: [
          "/projects/marie-antoine/accueil.jpg",
          "/projects/marie-antoine/art-de-recevoir.jpg",
          "/projects/marie-antoine/artizan.jpg",
        ],
        links: [
          {
            type: "Website",
            href: "https://marie-antoine.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
      {
        title: "Portfolio",
        description: t.sections.projects.portfolio.description,
        overview: t.sections.projects.portfolio.overview,
        features: t.sections.projects.portfolio.features,
        challenges: t.sections.projects.portfolio.challenges,
        conclusion: t.sections.projects.portfolio.conclusion,
        href: "https://www.jlgouaho.com",
        dates: "Jan 2024 - Present",
        active: true,
        technologies: [
          "Next.js",
          "TypeScript",
          "TailwindCSS",
          "Shadcn UI",
          "Framer Motion",
          "i18n",
          "Vercel",
        ],
        images: [
          "/projects/portfolio/img1.png",
          "/projects/portfolio/img2.png",
          "/projects/portfolio/img3.png",
        ],
        links: [
          {
            type: "Website",
            href: "https://www.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Github",
            href: "https://github.com/cortex225/jlgouaho",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "Budget Buddy",
        description: t.sections.projects.budgetBuddy.description,
        overview: t.sections.projects.budgetBuddy.overview,
        features: t.sections.projects.budgetBuddy.features,
        challenges: t.sections.projects.budgetBuddy.challenges,
        conclusion: t.sections.projects.budgetBuddy.conclusion,
        href: "https://budget-buddy.jlgouaho.com",
        dates: "Aug 2023 - Nov 2023",
        active: true,
        technologies: [
          "React",
          "TypeScript",
          "Vite",
          "Vercel Functions",
          "Neon Postgres",
          "Plaid",
          "TailwindCSS",
        ],
        images: [
          "/projects/budgetBuddy/accueil.png",
          "/projects/budgetBuddy/prevu-vs-reel.png",
          "/projects/budgetBuddy/transactions.png",
          "/projects/budgetBuddy/objectifs.png",
          "/projects/budgetBuddy/cashflow.png",
          "/projects/budgetBuddy/accueil-mobile.png",
        ],
        links: [
          {
            type: "Website",
            href: "https://budget-buddy.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
      {
        title: "HVD",
        description: t.sections.projects.hvd.description,
        overview: t.sections.projects.hvd.overview,
        features: t.sections.projects.hvd.features,
        challenges: t.sections.projects.hvd.challenges,
        conclusion: t.sections.projects.hvd.conclusion,
        href: "https://hvd.jlgouaho.com",
        dates: "2024",
        active: true,
        technologies: [
          "Next.js",
          "TypeScript",
          "TailwindCSS",
          "Shadcn UI",
          "Vercel",
        ],
        images: [
          "/projects/hvd/img1.png",
          "/projects/hvd/img2.png",
          "/projects/hvd/img3.png",
          "/projects/hvd/img4.png",
        ],
        links: [
          {
            type: "Website",
            href: "https://hvd.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
      {
        title: "Akwaba",
        description: t.sections.projects.maCiv.description,
        overview: t.sections.projects.maCiv.overview,
        features: t.sections.projects.maCiv.features,
        challenges: t.sections.projects.maCiv.challenges,
        conclusion: t.sections.projects.maCiv.conclusion,
        href: "https://akwaba.jlgouaho.com",
        dates: "2019 - 2026",
        active: true,
        technologies: ["JavaScript", "Vite", "Three.js", "GSAP", "Lenis"],
        images: [
          "/projects/ma-civ/accueil.jpg",
          "/projects/ma-civ/abidjan.jpg",
          "/projects/ma-civ/grand-bassam.jpg",
        ],
        links: [
          {
            type: "Github",
            href: "https://github.com/cortex225/PWF",
            icon: <Icons.github className="h-4 w-4" />,
          },
          {
            type: "Website",
            href: "https://akwaba.jlgouaho.com",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
      {
        title: "Virtual Card Pro",
        description: t.sections.projects.virtualCardPro.description,
        overview: t.sections.projects.virtualCardPro.overview,
        features: t.sections.projects.virtualCardPro.features,
        challenges: t.sections.projects.virtualCardPro.challenges,
        conclusion: t.sections.projects.virtualCardPro.conclusion,
        href: "https://business.jlgouaho.com/",
        dates: "2024 - Present",
        active: true,
        technologies: [
          "React 19",
          "Vite",
          "TypeScript",
          "TailwindCSS",
          "Lucide React",
          "vCard",
          "Google Wallet API",
        ],
        images: [
          "/projects/virtualCardPro/CleanShot 2026-02-20 at 12.13.07@2x.png",
          "/projects/virtualCardPro/CleanShot 2026-02-20 at 12.13.21@2x.png",
          "/projects/virtualCardPro/CleanShot 2026-02-20 at 12.13.44@2x.png",
        ],
        links: [
          {
            type: "Github",
            href: "https://github.com/cortex225/virtual-card-pro",
            icon: <Icons.github className="h-4 w-4" />,
          },
          {
            type: "Website",
            href: "https://business.jlgouaho.com/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
    ],
    availability: {
      types: {
        fr: ["Temps plein", "Contrat"],
        en: ["Full-time", "Contract"],
      },
      modes: {
        fr: ["Télétravail", "Hybride"],
        en: ["Remote", "Hybrid"],
      },
    },
    currently: {
      certifications: ["Microsoft AZ-900", "Microsoft AI-900"],
      building: {
        fr: "Automatisation d'applications low-code chez Evnia",
        en: "Low-code application automation at Evnia",
      },
      reading: "Clean Architecture · System Design Interview",
    },
  } as const;
}
