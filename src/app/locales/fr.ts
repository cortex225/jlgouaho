// locales/fr.ts
import type { Translations } from "./types";

const translations: Translations = {
  hello: "Bonjour",
  hero: {
    greeting: "Bonjour, je suis",
    title: "Développeur Full-Stack | Spécialiste en Cloud & Automatisation",
  },
  sections: {
    about: {
      title: "À propos de moi",
      description:
        "Développeur full-stack avec une solide expérience dans .NET, Vue.js et Azure, ainsi qu'une forte appétit pour le cloud computing, le DevOps et l'automatisation. Je suis passionné par l'optimisation des performances et de l'évolutivité des applications. J'ai contribué à des solutions qui réduisent les coûts cloud et améliorent l'efficacité des déploiements. Actuellement en formation pour les certifications Microsoft AZ-900 et AI-900, je continue de perfectionner mes compétences pour offrir des solutions de plus en plus innovantes adaptées aux défis du marché.",
    },
    work: {
      title: "Expérience professionnelle",
      tractionDK: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Développement et optimisation </strong>d'un <strong>CRM SaaS</strong> pour concessionnaires automobiles en <strong>Groovy</strong>.</li>
            <li><strong>Amélioration des communications clients </strong>(chat, appels) et refonte de l'interface utilisateur <strong>(Bootstrap, JavaScript natif)</strong>.</li>
            <li><strong>Mise en place de processus Agile </strong>et <strong>CI/CD avec Git</strong> et intégration des bonnes pratiques <strong>DevOps</strong>.</li>
            <li><strong>Correction de bugs critiques </strong>et amélioration des performances applicatives.</li>
          </ul>
        `,
        start: "Août 2024",
        end: "Janvier 2025",
      },
      royalBroker: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Lead développeur du CRM InstaHR</strong>, plateforme de gestion des contrats, employés et paiements.</li>
            <li><strong>Migration cloud sur Azure</strong>, réduisant les coûts de 600$ à 135$/mois et accélérant les déploiements de 60%.</li>
            <li><strong>Automatisation du recrutement</strong> : création d'un <strong>ATS</strong> filtrant <strong>4000+ CV en quelques secondes</strong> via un script Python.</li>
            <li><strong>Intégration de relances automatisées</strong> (email, WhatsApp) pour augmenter le taux de réponse des candidats.</li>
            <li><strong>Collaboration interservices</strong> (RH, comptabilité, direction) pour aligner la solution aux besoins métiers.</li>
          </ul>
        `,
        start: "Août 2022",
        end: "Août 2024",
      },
      royalBrokerInternship: {
        title: "Développeur Full-Stack Stagiaire",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Développement de sites d'estimation de valeur-crédit</strong> en PHP et WordPress.</li>
            <li><strong>Apprentissage pratique</strong> et implémentation de solutions optimisées.</li>
            <li><strong>Embauché</strong> à la suite du stage grâce aux performances démontrées.</li>
          </ul>
        `,
        start: "Août 2022",
        end: "Mai 2024",
        badge: "Stage",
      },
      rogers: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Analyse des besoins clients </strong>et proposition de solutions adaptées.</li>
            <li><strong>Développement de compétences en communication et négociation.</strong></li>
            <li><strong>Optimisation des stratégies commerciales </strong>pour atteindre les objectifs.</li>
          </ul>
        `,
      },
    },
    education: {
      title: "Formation",
      description:
        "Programme en informatique axé sur le développement logiciel, les algorithmes et les technologies web modernes.",
    },
    skills: {
      title: "Compétences",
      languages: "Langages",
      frameworks: "Frameworks",
      databases: "Bases de données",
      cloudDevops: "Cloud & DevOps",
      tools: "Outils",
      cms: "CMS",
      marketing: "Marketing",
      projectManagement: "Gestion de projet",
    },
    projects: {
      title: "Projets",
      subtitle: "Découvrez mes derniers travaux",
      description:
        "J'ai travaillé sur divers projets, des sites web simples aux applications web complexes. Voici quelques-uns de mes favoris.",
      badge: "Mes Projets",

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
        video:
          "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/recruitease.mp4",
        conclusion:
          "InstaHR m'a permis d'explorer l'intégration de l'IA dans l'industrie du recrutement et m'a fourni des insights précieux sur la construction de plateformes évolutives et conviviales.",
      },
      playerConnect: {
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
          "playerConnect m'a permis d'approfondir la construction de plateformes d'analyse de données et la résolution des défis liés à la gestion des données en temps réel.",
      },
      recruitEase: {
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
      magicSearch: {
        description:
          "Un moteur de recherche hybride magnifiquement conçu qui améliore la précision des recherches en interrogeant des résultats sémantiquement liés.",
        overview:
          "MagicSearch est un moteur de recherche qui exploite la compréhension sémantique pour fournir des résultats plus précis et contextuels. Il est conçu pour les utilisateurs qui souhaitent des expériences de recherche plus rapides, plus intelligentes et plus significatives.",
        features: [
          "Recherche sémantique alimentée par les embeddings OpenAI",
          "Compatibilité multiplateforme avec design responsive",
          "Algorithmes avancés de filtrage et de classement",
          "Support des requêtes multilingues",
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
    },

    contact: {
      title: "Contact",
      badge: "Contact",
      subtitle: "Prenons contact",
      description_start:
        "Vous souhaitez discuter ? Envoyez-moi simplement un message",
      description_end: "et je vous répondrai dans les 24 heures.",
      linkedinText: "sur LinkedIn",
    },
  },
} as const;

export default translations;
