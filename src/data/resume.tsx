import { Icons } from "@/components/icons";
import { Download, HomeIcon, NotebookIcon } from "lucide-react";

export const TRANSLATIONS = {
  en: {
    description:
      "A full-stack developer passionate about creating innovative web and mobile solutions.",
    summary:
      "I'm a young and passionate Full-Stack developer with expertise in ASP.NET, SQL, JavaScript, and DevOps, including Azure DevOps. I thrive on creating innovative solutions, solving complex problems, and collaborating in dynamic environments. Dedicated to continuous learning, I aim to deliver exceptional user experiences and make a meaningful impact through technology.",
    navbar: {
      home: "Home",
      downloadResume: "Download my resume",
    },
    present: "Present",
    skills: {
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      cloudDevops: "Cloud & DevOps",
      tools: "Tools",
      cms: "CMS",
      marketing: "Marketing",
      projectManagement: "Project Management",
    },
    work: {
      tractionDK: {
        description:
          "Development and integration of functionalities on the enterprise platform with Java, Groovy and Grails",
      },
      royalBroker: {
        description: `
          On-line training and regular practice of the proprietary language of the company's platform.
          Development and integration of functionalities on the enterprise platform with .NET.
          Creation and maintenance of PHP websites, specializing in landing page development with WordPress.
          Collaboration with business teams to draw up technical specifications.
          Efficient project management: on time, on budget, quality assurance.
          Active contribution to architectural and technological choices, in collaboration with the team for innovative solutions.
        `,
      },
      rogers: {
        description: `Enhance the in-store experience by offering outstanding service and value-added solutions to our customers.
          Promote the Rogers and Fido brands, including the Rogers Mastercard.
          Customer engagement: Build relationships with customers by sending personalized communications via calls and text messages.
          Adaptability and creativity: Ability to evolve in a changing environment with a creative mindset, while being motivated to achieve sales targets.`,
      },
    },
    projects: {
      magicSearch: {
        description:
          "A beautifully designed, hybrid search engine that enhances search accuracy by querying semantically related results.",
        overview:
          "MagicSearch is a search engine that leverages semantic understanding to deliver more accurate and context-aware results. It is designed for users who want faster, smarter, and more meaningful search experiences.",
        features: [
          "Semantic search powered by OpenAI embeddings.",
          "Cross-platform compatibility with responsive design.",
          "Advanced filtering and ranking algorithms.",
          "Support for multi-language queries.",
        ],
        challenges: {
          crossBrowser: {
            title: "Cross-browser compatibility",
            description:
              "Faced issues with Safari due to differences in CSS handling. Solved using Autoprefixer and testing on real devices.",
          },
          performance: {
            title: "Performance optimization",
            description:
              "Reduced API response time by implementing efficient database indexing and caching.",
          },
        },
        conclusion:
          "Building MagicSearch was a rewarding experience that enhanced my understanding of search algorithms and frontend/backend optimization. It taught me how to balance user experience with performance.",
      },
      instaHR: {
        description:
          "An intelligent recruitment platform designed to match candidates with job opportunities using AI-powered algorithms.",
        overview:
          "InstaHR streamlines the recruitment process by leveraging machine learning to analyze resumes, job descriptions, and match candidates efficiently.",
        features: [
          "Automated resume analysis and job matching.",
          "Integration with third-party APIs for enhanced functionality.",
          "Secure payment system for premium features.",
          "Real-time notifications for recruiters and candidates.",
        ],
        challenges: {
          scalability: {
            title: "Scalability",
            description:
              "Ensuring the platform could handle a large number of users simultaneously. Implemented optimized database queries and load balancing.",
          },
          payment: {
            title: "Payment integration",
            description:
              "Integrating Stripe for secure payments while maintaining a seamless user experience.",
          },
        },
        conclusion:
          "InstaHR allowed me to explore the integration of AI into the recruitment industry and provided valuable insights into building scalable, user-friendly platforms.",
      },
      llmReport: {
        description:
          "An open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        overview:
          "llm.report helps developers optimize their usage of OpenAI's GPT models by providing detailed insights into API usage and costs.",
        features: [
          "Detailed API request logging.",
          "Cost analysis and optimization suggestions.",
          "Prompt performance tracking.",
          "Real-time data visualization dashboards.",
        ],
        challenges: {
          dataPrivacy: {
            title: "Data privacy",
            description:
              "Ensuring user data remains secure while providing detailed analytics. Implemented encryption and anonymization techniques.",
          },
          realTimeUpdates: {
            title: "Real-time updates",
            description:
              "Integrating WebSocket support for live updates without overloading the backend.",
          },
        },
        conclusion:
          "llm.report provided a deep dive into building data analytics platforms and solving challenges around real-time data handling.",
      },
      automaticChat: {
        description:
          "An AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        overview:
          "Automatic Chat aims to reduce customer support workload by providing instant, AI-generated responses for common issues.",
        features: [
          "AI-powered responses for customer support tickets.",
          "Easy integration with existing customer support platforms.",
          "Multi-language support for global users.",
          "Advanced analytics to track chatbot performance.",
        ],
        challenges: {
          gptFineTuning: {
            title: "GPT fine-tuning",
            description:
              "Customizing GPT models for domain-specific knowledge while maintaining response accuracy.",
          },
          integrationComplexity: {
            title: "Integration complexity",
            description:
              "Ensuring seamless integration with third-party tools like Zendesk and Freshdesk.",
          },
        },
        conclusion:
          "Developing Automatic Chat taught me the intricacies of integrating AI solutions into real-world business processes.",
      },
    },
  },
  fr: {
    description:
      "Un développeur full-stack passionné par la création de solutions web et mobiles innovantes.",
    summary:
      "Je suis un jeune développeur Full-Stack passionné avec une expertise en ASP.NET, SQL, JavaScript et DevOps, notamment Azure DevOps. Je m'épanouis dans la création de solutions innovantes, la résolution de problèmes complexes et la collaboration dans des environnements dynamiques. Dédié à l'apprentissage continu, je vise à offrir des expériences utilisateur exceptionnelles et à avoir un impact significatif grâce à la technologie.",
    navbar: {
      home: "Accueil",
      downloadResume: "Télécharger mon CV",
    },
    present: "Présent",
    skills: {
      languages: "Langages",
      frameworks: "Frameworks",
      databases: "Bases de données",
      cloudDevops: "Cloud & DevOps",
      tools: "Outils",
      cms: "CMS",
      marketing: "Marketing",
      projectManagement: "Gestion de projet",
    },
    work: {
      tractionDK: {
        description:
          "Développement et intégration de fonctionnalités sur la plateforme d'entreprise avec Java, Groovy et Grails",
      },
      royalBroker: {
        description: `
          Formation en ligne et pratique régulière du langage propriétaire de la plateforme de l'entreprise.
          Développement et intégration de fonctionnalités sur la plateforme d'entreprise avec .NET.
          Création et maintenance de sites web PHP, spécialisé dans le développement de landing pages avec WordPress.
          Collaboration avec les équipes métier pour l'élaboration des spécifications techniques.
          Gestion efficace des projets : respect des délais, du budget, assurance qualité.
          Contribution active aux choix architecturaux et technologiques, en collaboration avec l'équipe pour des solutions innovantes.
        `,
      },
      rogers: {
        description: `Améliorer l'expérience en magasin en offrant un service exceptionnel et des solutions à valeur ajoutée à nos clients.
          Promouvoir les marques Rogers et Fido, y compris la Mastercard Rogers.
          Engagement client : Construire des relations avec les clients en envoyant des communications personnalisées via des appels et des messages texte.
          Adaptabilité et créativité : Capacité à évoluer dans un environnement changeant avec un esprit créatif, tout en étant motivé pour atteindre les objectifs de vente.`,
      },
    },
    projects: {
      magicSearch: {
        description:
          "Un moteur de recherche hybride magnifiquement conçu qui améliore la précision des recherches en interrogeant des résultats sémantiquement liés.",
        overview:
          "MagicSearch est un moteur de recherche qui exploite la compréhension sémantique pour fournir des résultats plus précis et contextuels. Il est conçu pour les utilisateurs qui souhaitent des expériences de recherche plus rapides, plus intelligentes et plus significatives.",
        features: [
          "Recherche sémantique alimentée par les embeddings OpenAI.",
          "Compatibilité multiplateforme avec design responsive.",
          "Algorithmes avancés de filtrage et de classement.",
          "Support des requêtes multilingues.",
        ],
        challenges: {
          crossBrowser: {
            title: "Compatibilité cross-browser",
            description:
              "Problèmes rencontrés avec Safari en raison des différences de gestion CSS. Résolu en utilisant Autoprefixer et en testant sur des appareils réels.",
          },
          performance: {
            title: "Optimisation des performances",
            description:
              "Réduction du temps de réponse API en implémentant un indexage et une mise en cache efficaces de la base de données.",
          },
        },
        conclusion:
          "La construction de MagicSearch a été une expérience enrichissante qui a amélioré ma compréhension des algorithmes de recherche et de l'optimisation frontend/backend. Cela m'a appris à équilibrer l'expérience utilisateur avec les performances.",
      },
      instaHR: {
        description:
          "Une plateforme de recrutement intelligente conçue pour mettre en relation les candidats avec les opportunités d'emploi en utilisant des algorithmes alimentés par l'IA.",
        overview:
          "InstaHR simplifie le processus de recrutement en utilisant le machine learning pour analyser les CV, les descriptions de poste et mettre en relation les candidats de manière efficace.",
        features: [
          "Analyse automatisée des CV et mise en relation avec les emplois.",
          "Intégration avec des API tierces pour des fonctionnalités améliorées.",
          "Système de paiement sécurisé pour les fonctionnalités premium.",
          "Notifications en temps réel pour les recruteurs et les candidats.",
        ],
        challenges: {
          scalability: {
            title: "Évolutivité",
            description:
              "S'assurer que la plateforme puisse gérer un grand nombre d'utilisateurs simultanément. Implémentation de requêtes de base de données optimisées et d'équilibrage de charge.",
          },
          payment: {
            title: "Intégration des paiements",
            description:
              "Intégration de Stripe pour des paiements sécurisés tout en maintenant une expérience utilisateur fluide.",
          },
        },
        conclusion:
          "InstaHR m'a permis d'explorer l'intégration de l'IA dans l'industrie du recrutement et m'a fourni des insights précieux sur la construction de plateformes évolutives et conviviales.",
      },
      llmReport: {
        description:
          "Une plateforme open-source de journalisation et d'analyse pour OpenAI : Enregistrez vos requêtes API ChatGPT, analysez les coûts et améliorez vos prompts.",
        overview:
          "llm.report aide les développeurs à optimiser leur utilisation des modèles GPT d'OpenAI en fournissant des insights détaillés sur l'utilisation de l'API et les coûts.",
        features: [
          "Journalisation détaillée des requêtes API.",
          "Analyse des coûts et suggestions d'optimisation.",
          "Suivi des performances des prompts.",
          "Tableaux de bord de visualisation des données en temps réel.",
        ],
        challenges: {
          dataPrivacy: {
            title: "Confidentialité des données",
            description:
              "Assurer la sécurité des données utilisateur tout en fournissant des analyses détaillées. Implémentation de techniques de chiffrement et d'anonymisation.",
          },
          realTimeUpdates: {
            title: "Mises à jour en temps réel",
            description:
              "Intégration du support WebSocket pour les mises à jour en direct sans surcharger le backend.",
          },
        },
        conclusion:
          "llm.report m'a permis d'approfondir la construction de plateformes d'analyse de données et la résolution des défis liés à la gestion des données en temps réel.",
      },
      automaticChat: {
        description:
          "Un chatbot de support client alimenté par l'IA qui répond automatiquement aux tickets de support en utilisant les derniers modèles GPT.",
        overview:
          "Automatic Chat vise à réduire la charge de travail du support client en fournissant des réponses instantanées générées par l'IA pour les problèmes courants.",
        features: [
          "Réponses alimentées par l'IA pour les tickets de support client.",
          "Intégration facile avec les plateformes de support client existantes.",
          "Support multilingue pour les utilisateurs internationaux.",
          "Analyses avancées pour suivre les performances du chatbot.",
        ],
        challenges: {
          gptFineTuning: {
            title: "Fine-tuning GPT",
            description:
              "Personnalisation des modèles GPT pour les connaissances spécifiques au domaine tout en maintenant la précision des réponses.",
          },
          integrationComplexity: {
            title: "Complexité d'intégration",
            description:
              "Assurer une intégration transparente avec des outils tiers comme Zendesk et Freshdesk.",
          },
        },
        conclusion:
          "Le développement d'Automatic Chat m'a appris les subtilités de l'intégration des solutions d'IA dans les processus métier réels.",
      },
    },
  },
};

export const DATA = {
  name: "Déto Jean-Luc Gouaho",
  initials: "DV",
  url: "https://dillion.io",
  location: "Quebec, CA",
  locationLink: "",
  description: TRANSLATIONS.fr.description,
  summary: TRANSLATIONS.fr.summary,
  avatarUrl: "/me.png",
  skills: [
    // Langages de programmation
    { name: "C#", type: TRANSLATIONS.fr.skills.languages, icon: "/csharp.svg" },
    {
      name: "JavaScript",
      type: TRANSLATIONS.fr.skills.languages,
      icon: "/javascript.svg",
    },
    {
      name: "TypeScript",
      type: TRANSLATIONS.fr.skills.languages,
      icon: "/typescript.svg",
    },
    { name: "Java", type: TRANSLATIONS.fr.skills.languages, icon: "/java.svg" },
    {
      name: "Python",
      type: TRANSLATIONS.fr.skills.languages,
      icon: "/python.svg",
    },
    {
      name: "Kotlin",
      type: TRANSLATIONS.fr.skills.languages,
      icon: "/kotlin.svg",
    },

    // Frameworks et bibliothèques
    {
      name: ".NET",
      type: TRANSLATIONS.fr.skills.frameworks,
      icon: "/dotnet.svg",
    },
    {
      name: "React",
      type: TRANSLATIONS.fr.skills.frameworks,
      icon: "/react.svg",
    },
    {
      name: "Vue.js",
      type: TRANSLATIONS.fr.skills.frameworks,
      icon: "/vuejs.svg",
    },
    {
      name: "Grails",
      type: TRANSLATIONS.fr.skills.frameworks,
      icon: "/grails.svg",
    },
    {
      name: "Node.js",
      type: TRANSLATIONS.fr.skills.frameworks,
      icon: "/nodejs.svg",
    },

    // Bases de données
    {
      name: "PostgreSQL",
      type: TRANSLATIONS.fr.skills.databases,
      icon: "/postgresql.svg",
    },
    {
      name: "MySQL",
      type: TRANSLATIONS.fr.skills.databases,
      icon: "/mysql.svg",
    },
    {
      name: "MongoDB",
      type: TRANSLATIONS.fr.skills.databases,
      icon: "/mongodb.svg",
    },
    {
      name: "Redis",
      type: TRANSLATIONS.fr.skills.databases,
      icon: "/redis.svg",
    },
    {
      name: "SQL Server",
      type: TRANSLATIONS.fr.skills.databases,
      icon: "/sqlserver.svg",
    },

    // Cloud et DevOps
    { name: "AWS", type: TRANSLATIONS.fr.skills.cloudDevops, icon: "/aws.svg" },
    {
      name: "Azure",
      type: TRANSLATIONS.fr.skills.cloudDevops,
      icon: "/azure.svg",
    },
    {
      name: "Google Cloud",
      type: TRANSLATIONS.fr.skills.cloudDevops,
      icon: "/google-cloud.svg",
    },
    {
      name: "Docker",
      type: TRANSLATIONS.fr.skills.cloudDevops,
      icon: "/docker.svg",
    },

    // Outils de développement
    { name: "Git", type: TRANSLATIONS.fr.skills.tools, icon: "/git.svg" },
    { name: "Figma", type: TRANSLATIONS.fr.skills.tools, icon: "/figma.svg" },
    {
      name: "VS Code",
      type: TRANSLATIONS.fr.skills.tools,
      icon: "/vscode.svg",
    },
    {
      name: "IntelliJ IDEA",
      type: TRANSLATIONS.fr.skills.tools,
      icon: "/intellij.svg",
    },

    // CMS
    {
      name: "WordPress",
      type: TRANSLATIONS.fr.skills.cms,
      icon: "/wordPress.svg",
    },
    { name: "Shopify", type: TRANSLATIONS.fr.skills.cms, icon: "/shopify.svg" },

    // Marketing digital
    { name: "SEO", type: TRANSLATIONS.fr.skills.marketing, icon: "/seo.svg" },
    {
      name: "Google Analytics",
      type: TRANSLATIONS.fr.skills.marketing,
      icon: "/google-analytics.svg",
    },

    // Gestion de projet et business
    {
      name: "Project Management",
      type: TRANSLATIONS.fr.skills.projectManagement,
      icon: "",
    },
    {
      name: "Agile",
      type: TRANSLATIONS.fr.skills.projectManagement,
      icon: "/agile.svg",
    },
    {
      name: "Sales",
      type: TRANSLATIONS.fr.skills.projectManagement,
      icon: "/sales.svg",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: TRANSLATIONS.fr.navbar.home },
    {
      href: "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/MyResume.pdf",
      icon: Download,
      label: TRANSLATIONS.fr.navbar.downloadResume,
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
      start: "August 2024",
      end: "January 2025",
      description: TRANSLATIONS.fr.work.tractionDK.description,
    },
    {
      company: "Royal Broker Solutions",
      badges: [],
      href: "https://royalbrokersolutions.com/our-services",
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/royal.png",
      start: "August 2022",
      end: "August 2024",
      description: TRANSLATIONS.fr.work.royalBroker.description,
    },
    {
      company: "Royal Broker Solutions",
      badges: [],
      href: "https://royalbrokersolutions.com/our-services",
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/royal.png",
      start: "November 2021",
      end: "April 2022",
      description: TRANSLATIONS.fr.work.royalBroker.description,
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
      description: TRANSLATIONS.fr.work.rogers.description,
    },
    // {
    //   company: "BestBuy Canada",
    //   href: "https://www.bestbuy.com/",
    //   badges: [],
    //   location: "Granby, CA",
    //   title: "Sales Specialist",
    //   logoUrl: "/bestbuy.png",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
  ],
  education: [
    {
      school: "Cégep de Granby",
      href: "https://www.cegepgranby.com/",
      degree: "DEC in Computer Science",
      logoUrl: "/cegep.png",
      end: "Mai 2024",
    },
  ],
  projects: [
    {
      title: "MagicSearch",
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
      href: "https://myinstahr.ca",
      dates: "June 2023 - Present",
      active: true,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      images: [
        "/projects/instaHR/login.png",
        "/projects/instaHR/dash.png",
        "/projects/instaHR/login.png",
        "/projects/instaHR/dash.png",
        "/projects/instaHR/login.png",
        "/projects/instaHR/dash.png",
        "/projects/instaHR/login.png",
        "/projects/instaHR/dash.png",
      ],
      video: "https://cdn.magicui.design/bento-grid.mp4",
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
      title: "llmReport",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      images: ["/llm-dashboard.png", "/llm-analytics.png"],
      video:
        "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/yeye.mp4?t=2025-01-14T19%3A20%3A58.076Z",
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
      title: "AutomaticChat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      images: [
        "/automatic-chat-interface.png",
        "/automatic-chat-analytics.png",
      ],
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
