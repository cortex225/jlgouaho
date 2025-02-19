// locales/fr.ts
export default {
  hello: "Bonjour",
  hero: {
    greeting: "Bonjour, je suis",
  },
  sections: {
    about: "À propos",
    work: "Expérience professionnelle",
    education: "Formation",
    skills: "Compétences",
    projects: {
      title: "Mes Projets",
      subtitle: "Découvrez mes derniers travaux",
      description:
        "J'ai travaillé sur divers projets, des sites web simples aux applications web complexes. Voici quelques-uns de mes favoris.",
      badge: "Mes Projets",
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
        challenges: [
          {
            title: "Compatibilité cross-browser",
            description:
              "Problèmes rencontrés avec Safari en raison des différences de gestion CSS. Résolu en utilisant Autoprefixer et en testant sur des appareils réels.",
          },
          {
            title: "Optimisation des performances",
            description:
              "Réduction du temps de réponse API en implémentant un indexage et une mise en cache efficaces de la base de données.",
          },
        ],
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
        challenges: [
          {
            title: "Évolutivité",
            description:
              "S'assurer que la plateforme puisse gérer un grand nombre d'utilisateurs simultanément. Implémentation de requêtes de base de données optimisées et d'équilibrage de charge.",
          },
          {
            title: "Intégration des paiements",
            description:
              "Intégration de Stripe pour des paiements sécurisés tout en maintenant une expérience utilisateur fluide.",
          },
        ],
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
        challenges: [
          {
            title: "Confidentialité des données",
            description:
              "Assurer la sécurité des données utilisateur tout en fournissant des analyses détaillées. Implémentation de techniques de chiffrement et d'anonymisation.",
          },
          {
            title: "Mises à jour en temps réel",
            description:
              "Intégration du support WebSocket pour les mises à jour en direct sans surcharger le backend.",
          },
        ],
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
        challenges: [
          {
            title: "Fine-tuning GPT",
            description:
              "Personnalisation des modèles GPT pour les connaissances spécifiques au domaine tout en maintenant la précision des réponses.",
          },
          {
            title: "Complexité d'intégration",
            description:
              "Assurer une intégration transparente avec des outils tiers comme Zendesk et Freshdesk.",
          },
        ],
        conclusion:
          "Le développement d'Automatic Chat m'a appris les subtilités de l'intégration des solutions d'IA dans les processus métier réels.",
      },
    },
    hackathons: {
      title: "Hackathons",
      subtitle: "J'aime construire des choses",
      description:
        "Pendant mes études, j'ai participé à {count}+ hackathons. Des personnes du monde entier se réunissaient pour créer des choses incroyables en 2-3 jours. C'était inspirant de voir les possibilités infinies réalisées par un groupe de personnes motivées et passionnées.",
      badge: "Hackathons",
    },
    contact: {
      title: "Contact",
      subtitle: "Prenons contact",
      description_start:
        "Vous souhaitez discuter ? Envoyez-moi simplement un message",
      description_end: "et je vous répondrai dans les 24 heures.",
      badge: "Contact",
      linkedinText: "sur linkedin",
    },
  },
} as const;
