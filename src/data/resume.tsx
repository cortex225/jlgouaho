import React from "react";
import en from "@/app/locales/en";
import fr from "@/app/locales/fr";
import { Icons } from "@/components/icons";
import { Download, HomeIcon, NotebookIcon } from "lucide-react";

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
    name: "Déto Jean-Luc Gouaho",
    initials: "DV",
    url: "https://dillion.io",
    location: "Quebec, CA",
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
        icon: "/javascript.svg",
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
      {
        href: "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/MyResume.pdf",
        icon: Download,
        label: "Download Resume",
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
        // Youtube: {
        //   name: "Youtube",
        //   url: "https://dub.sh/dillion-youtube",
        //   icon: Icons.youtube,
        //   navbar: true,
        // },
        email: {
          name: "Send Email",
          url: "#",
          icon: Icons.email,

          navbar: false,
        },
      },
    },

    work: [
      {
        company: "Traction DK",
        href: "https://www.tractiondk.com/",
        badges: [],
        location: "Remote",
        title: "Full-Stack Developer",
        logoUrl: "/traction.jpeg",
        start: t.sections.work.tractionDK.start,
        end: t.sections.work.tractionDK.end,
        description: t.sections.work.tractionDK.description,
      },
      {
        company: "Royal Broker Solutions",
        badges: [],
        href: "https://royalbrokersolutions.com/our-services",
        location: "Remote",
        title: "Full-Stack Developer",
        logoUrl: "/royal.png",
        start: t.sections.work.royalBroker.start,
        end: t.sections.work.royalBroker.end,
        description: t.sections.work.royalBroker.description,
      },
      {
        company: "Royal Broker Solutions",
        badges: [t.sections.work.royalBrokerInternship.badge],
        href: "https://royalbrokersolutions.com/our-services",
        location: "Remote",
        title: t.sections.work.royalBrokerInternship.title,
        logoUrl: "/royal.png",
        start: t.sections.work.royalBrokerInternship.start,
        end: t.sections.work.royalBrokerInternship.end,
        description: t.sections.work.royalBrokerInternship.description,
      },
      {
        company: "Rogers Communications",
        href: "https://www.bestbuy.com/",
        badges: [],
        location: "Granby, CA",
        title: "Sales Specialist",
        logoUrl: "/rogers.png",
        start: "January 2019",
        end: "April 2019",
        description: t.sections.work.rogers.description,
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
        title: "MagicSearch",
        description: t.sections.projects.magicSearch.description,
        overview: t.sections.projects.magicSearch.overview,
        features: t.sections.projects.magicSearch.features,
        challenges: t.sections.projects.magicSearch.challenges,
        conclusion: t.sections.projects.magicSearch.conclusion,
        href: "https://magic-search-psi.vercel.app",
        dates: "Jan 2024 - Feb 2024",
        active: true,
        technologies: [
          "Next.js",
          "Typescript",
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
          "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/magic-search.mp4",
        links: [
          {
            type: "Website",
            href: "https://magic-search-psi.vercel.app",
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
        href: "#",
        dates: "April 2023 - September 2023",
        active: true,
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "Stripe",
          "WebSockets",
          "Supabase",
          "OpenAI",
        ],
        images: [
          "/projects/playerConnect/player.png",
          "/projects/playerConnect/recruiter.png",
        ],
        video:
          "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video//playerConnect1.mp4",
        links: [
          // {
          //   type: "Website",
          //   href: "#",
          //   icon: <Icons.globe className="size-3" />,
          // },
          {
            type: "Github",
            href: "https://github.com/cortex225/playerConnect",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
      {
        title: "RecruitEase",
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
          "OpenAI API",
          "Redis",
          "Upstash",
          "Typescript",
          "PostgreSQL",
          "TailwindCSS",
          "Stripe",
        ],
        images: [
          "/projects/recruitEase/landing2.gif",
          "/projects/recruitEase/jobs.png",
          "/projects/recruitEase/landing.png",
          "/projects/recruitEase/recommendations.png",
        ],
        video:
          "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video//recruitease.mp4",
        links: [
          {
            type: "Website",
            href: "https://magic-search-psi.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Github",
            href: "https://github.com/cryptotrends/cryptotrends",
            icon: <Icons.github className="h-4 w-4" />,
          },
        ],
      },
    ],
  } as const;
}
