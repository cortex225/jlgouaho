// locales/fr.ts
import type { Translations } from "./types";

const translations: Translations = {
  hello: "Bonjour",
  hero: {
    greeting: "Bonjour, je suis",
    title: "Développeur Full-Stack | Spécialiste en Cloud & Automatisation",
    status: "À l'écoute d'opportunités",
    techStack: "Stack Technique",
  },
  common: {
    overview: "Aperçu",
    features: "Fonctionnalités Clés",
    challenges: "Défis & Solutions",
    conclusion: "Conclusion",
    gallery: "Galerie",
    noLinks: "Aucun lien externe disponible.",
    technologies: "Technologies",
    email: "Courriel",
    connect: "Connecter",
    viewAllProjects: "Voir Tous les Projets",
    getInTouch: "Me Contacter",
    allRightsReserved: "Tous droits réservés.",
    scanToContact: "Scanner pour me contacter",
    close: "Fermer",
    backToProfile: "Retour au Profil",
    inProgress: "En cours",
    showMore: "Voir plus",
    showLess: "Voir moins",
  },
  theme: {
    toggle: "Changer le thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
  },
  blog: {
    title: "Blogue",
    description: "Mes réflexions sur le développement logiciel, la vie et plus encore.",
  },
  projectsPage: {
    allProjects: "Tous les Projets",
    description: "Une collection complète de mes travaux, expérimentations et contributions open source.",
    haveIdea: "Vous avez une idée de projet ?",
    letsDiscuss: "Discutons-en",
    backToProfile: "Retour au Profil",
    filterAll: "Tous",
  },
  sections: {
    availability: {
      title: "Disponibilité",
      availableNow: "Disponible maintenant",
      typeLabel: "Type de poste",
      modeLabel: "Mode de travail",
      languagesLabel: "Langues",
      types: "Temps plein · Contrat",
      modes: "Télétravail · Hybride",
      languages: "Français (natif) · Anglais (avancé)",
    },
    testimonials: {
      title: "Recommandations",
    },
    currently: {
      title: "En ce moment",
      certificationLabel: "Certifications en cours",
      buildingLabel: "Ce que je construis",
      readingLabel: "Ce que je lis",
    },
    contactForm: {
      title: "Travaillons Ensemble",
      subtitle: "Décrivez votre projet ou opportunité — je réponds sous 24h.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      messagePlaceholder: "Bonjour Jean-Luc, je vous contacte au sujet de...",
      send: "Envoyer le message",
      success: "Message envoyé ! Je vous réponds dans les 24h.",
    },
    about: {
      title: "À propos de moi",
      description:
        "Développeur Full-Stack avec une solide expérience en .NET, Vue.js et Azure, et une forte appétence pour le cloud computing, DevOps et l'automatisation. Engagé dans l'optimisation des performances et la scalabilité des applications, j'ai contribué à des solutions permettant de réduire les coûts cloud et d'améliorer l'efficacité des déploiements.\n\nActuellement en formation pour des certifications Microsoft (AZ-900 et AI-900), je continue d'affiner mes compétences afin d'apporter des solutions toujours plus innovantes et adaptées aux enjeux du marché.",
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
      evnia: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Développement d'applications Low-code</strong> : Amélioration et personnalisation de l'application avec <strong>Caspio</strong> en utilisant <strong>JavaScript, HTML, CSS</strong> et l'intégration d'<strong>API Rest</strong> pour optimiser les fonctionnalités de <strong>Power Automate</strong> pour l'automatisation.</li>
            <li><strong>Collaboration et résolution de problèmes</strong> : Travail en équipe pour analyser les besoins, identifier et mettre en œuvre des solutions appropriées et innovantes.</li>
            <li><strong>Stratégie durable</strong> : Proposition d'idées et implication dans la définition d'objectifs sociaux et environnementaux visant à réduire l'impact de l'entreprise.</li>
          </ul>
        `,
        start: "Mars 2025",
        end: "Présent",
        company: "Evnia, firme-conseil en écofiscalité",
        title: "Développeur d'applications",
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
    certifications: {
      title: "Certifications",
      inProgress: "En cours",
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
          "Un CRM SaaS pour la gestion des ressources humaines lorsque j'ai commencé à travailler chez Royal Broker.",
        overview:
          "InstaHR est une plateforme de gestion des ressources humaines qui permet aux entreprises de centraliser le recrutement, la gestion des employés et l’administration RH dans un espace unique. Son objectif est de simplifier les processus RH grâce à une interface intuitive et des fonctionnalités automatisées.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Gestion complète du cycle de recrutement (offres d’emploi, candidatures, entretiens)</li>
            <li>Suivi des performances et des évaluations des employés</li>
            <li>Automatisation des tâches administratives RH</li>
            <li>Notifications en temps réel pour les mises à jour importantes</li>
            <li>Authentification sécurisée avec gestion des rôles</li>
            <li>Intégration avec des services comptables et de paiement (Zoho API)</li>
          </ul>
        `,
        challenges: `
  <div class="space-y-6">
    <!-- Intégration de PrimeVue -->
    <div class="space-y-1">
      <h5 class="font-semibold text-lg flex items-center gap-2">
        🚀 Intégration de PrimeVue dans des vues Razor (.cshtml)
      </h5>
      <p class="text-neutral-700 dark:text-neutral-300">
        <span class="font-semibold">Problème :</span> Difficulté à utiliser les composants de PrimeVue directement dans les fichiers .cshtml d’ASP.NET.<br>
        <span class="font-semibold">Solution :</span> Mise en place d’un serveur <span class="font-semibold text-blue-500">Vite ⚡</span> pour charger Vue comme un microfrontend, permettant une compatibilité optimale avec Razor.
      </p>
    </div>

    <!-- Intégration des paiements -->
    <div class="space-y-1">
      <h5 class="font-semibold text-lg flex items-center gap-2">
        💳 Intégration des paiements avec Stripe et Zoho
      </h5>
      <p class="text-neutral-700 dark:text-neutral-300">
        <span class="font-semibold">Problème :</span> Besoin d’une solution sécurisée et évolutive pour gérer les paiements des employés.<br>
        <span class="font-semibold">Solution :</span> Initialement intégré avec Stripe, puis migration vers <span class="font-semibold text-blue-500">Zoho API</span>, en développant un service dédié pour gérer le <span class="italic">token refreshing</span>.
      </p>
    </div>

    <!-- Réduction des coûts cloud -->
    <div class="space-y-1">
      <h5 class="font-semibold text-lg flex items-center gap-2">
        ☁️ Optimisation des coûts cloud
      </h5>
      <p class="text-neutral-700 dark:text-neutral-300">
        <span class="font-semibold">Problème :</span> Coûts élevés sur le cloud avec une incertitude sur le service optimal (Azure, AWS, GCP).<br>
        <span class="font-semibold">Solution :</span> Analyse comparative des offres et mise en place d'une <span class="font-semibold text-green-500">approche serverless</span> pour réduire les dépenses.
      </p>
    </div>
          </div>
        `,
        conclusion:
          "InstaHR m’a permis d’acquérir une meilleure expertise en conception d’architecture logicielle et en optimisation d’interface utilisateur. Ce projet m’a aidé à comprendre comment équilibrer la complexité fonctionnelle avec la simplicité d’utilisation.",
      },
      playerConnect: {
        description:
          "La plateforme qui connecte les joueurs de basketball avec les recruteurs et entraîneurs. 📊🏀",
        overview:
          "PlayerConnect est une plateforme qui connecte les joueurs de basketball avec les recruteurs et les entraîneurs. Elle permet aux joueurs de mettre en avant leurs performances, aux recruteurs d’accéder à des profils détaillés, et aux entraîneurs d’organiser plus efficacement le suivi de leurs équipes.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Profils de joueurs détaillés avec statistiques et vidéos 📊🎥</li>
            <li>Système de matchmaking entre recruteurs et joueurs 🏀🔍</li>
            <li>Calendrier interactif des matchs et événements 📅</li>
            <li>Notifications en temps réel pour les recruteurs et joueurs 📢</li>
            <li>Système de messagerie intégrée pour faciliter les échanges 💬</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🔹Analyse automatique des performances</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Transformer des vidéos de matchs en insights exploitables.<br>
                <span class="font-semibold">Solution :</span> Intégration de l’IA avec OpenAI API pour extraire des statistiques clés à partir des vidéos.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔹 Engagement et visibilité des joueurs</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
               <span class="font-semibold"> Problème :</span> Aider les joueurs à maximiser leur exposition aux recruteurs.<br>
                <span class="font-semibold">Solution :</span> Mise en place d’un système de profil optimisé, avec des recommandations basées sur les performances et un algorithme de matchmaking avancé.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔹Expérience utilisateur et performance</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
               <span class="font-semibold">  Problème :</span> Garantir une navigation fluide malgré l’utilisation de vidéos et de données en temps réel.<br>
                <span class="font-semibold">Solution :</span> Optimisation du frontend avec Next.js, utilisation de WebSockets pour la communication en temps réel, et hébergement optimisé sur Vercel et Firebase.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "PlayerConnect est une plateforme innovante qui révolutionne le recrutement sportif en connectant directement les joueurs avec les recruteurs et entraîneurs. Grâce à l’intelligence artificielle et à l’analyse de performances, elle offre une opportunité unique aux talents de se démarquer et d’accéder à de nouvelles opportunités.",
      },
      recruitEase: {
        description:
          "Une plateforme de recrutement innovante qui utilise l'IA pour automatiser et optimiser le processus de recrutement.",
        overview:
          "RecruitEase simplifie le recrutement en automatisant l'analyse des CV, la présélection des candidats et la gestion des entretiens.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Analyse automatique des CV avec l'IA</li>
            <li>Matching intelligent candidat-poste</li>
            <li>Gestion automatisée des entretiens</li>
            <li>Tableaux de bord analytiques avancés</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Précision de l'IA</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Optimisation des algorithmes de matching pour garantir des correspondances pertinentes.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Expérience utilisateur</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Création d'une interface intuitive pour les recruteurs et les candidats.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "RecruitEase démontre comment l'IA peut transformer le recrutement en le rendant plus efficace et objectif.",
      },
      magicSearch: {
        description:
          "Un moteur de recherche hybride magnifiquement conçu qui améliore la précision des recherches en interrogeant des résultats sémantiquement liés.",
        overview:
          "MagicSearch est un moteur de recherche qui exploite la compréhension sémantique pour fournir des résultats plus précis et contextuels. Il est conçu pour les utilisateurs qui souhaitent des expériences de recherche plus rapides, plus intelligentes et plus significatives.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Recherche sémantique alimentée par les embeddings OpenAI</li>
            <li>Compatibilité multiplateforme avec design responsive</li>
            <li>Algorithmes avancés de filtrage et de classement</li>
            <li>Support des requêtes multilingues</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Compatibilité cross-browser</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Problèmes rencontrés avec Safari en raison des différences de gestion CSS. Résolu en utilisant Autoprefixer et en testant sur des appareils réels.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Optimisation des performances</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Réduction du temps de réponse API en implémentant un indexage et une mise en cache efficaces de la base de données.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "La construction de MagicSearch a été une expérience enrichissante qui a amélioré ma compréhension des algorithmes de recherche et de l'optimisation frontend/backend. Cela m'a appris à équilibrer l'expérience utilisateur avec les performances.",
      },
      leadMapper: {
        description:
          "Un outil de génération de leads qui extrait les contacts d'entreprises depuis Google Maps - créé pour les freelances afin de trouver des clients gratuitement.",
        overview:
          "LeadMapper est né de mon expérience en tant que freelance ayant besoin de trouver des clients potentiels sans payer pour des services de génération de leads coûteux. Cette application permet de rechercher et d'extraire des informations d'entreprises (restaurants, cliniques, hôtels, etc.) directement depuis Google Maps, fournissant des courriels et numéros de téléphone prêts pour la prospection.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Recherche d'entreprises par catégorie et localisation sur Google Maps</li>
            <li>Extraction des informations de contact : courriels, téléphones, adresses</li>
            <li>Export des leads en CSV pour import CRM facile</li>
            <li>Filtrage des résultats par type d'entreprise et note</li>
            <li>Extraction en masse avec pagination intelligente</li>
            <li>Alternative gratuite aux outils de génération de leads payants</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🔹 Analyse DOM Dynamique</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Google Maps utilise un chargement de contenu dynamique avec des structures imbriquées complexes.<br>
                <span class="font-semibold">Solution :</span> Implémentation de MutationObserver pour détecter les changements DOM et des sélecteurs robustes pour gérer les mises à jour fréquentes de l'interface Google.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔹 Précision de l'Extraction</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Toutes les entreprises n'affichent pas leurs coordonnées complètes.<br>
                <span class="font-semibold">Solution :</span> Implémentation d'un scraping intelligent qui navigue vers les pages de détails pour trouver les courriels et contacts cachés.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔹 Expérience Utilisateur</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Rendre l'outil intuitif pour les freelances non-techniques.<br>
                <span class="font-semibold">Solution :</span> Conception d'une interface épurée avec des indicateurs de progression clairs et une fonctionnalité d'export en un clic.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "LeadMapper résout un vrai problème que j'ai rencontré en tant que freelance - trouver des clients sans payer pour des services de leads coûteux. Ce projet m'a appris la valeur de créer des outils qui résolvent d'abord vos propres problèmes.",
      },
      portfolio: {
        description:
          "Mon site portfolio personnel construit avec Next.js 14, avec support i18n et un design moderne et responsive.",
        overview:
          "Ce portfolio présente mes projets, compétences et expérience professionnelle. Construit avec des technologies modernes, il offre une internationalisation complète (anglais/français), un mode sombre et des animations fluides pour une expérience utilisateur engageante.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Support bilingue (EN/FR) avec changement de langue fluide</li>
            <li>Mode sombre/clair avec détection des préférences système</li>
            <li>Design responsive optimisé pour tous les appareils</li>
            <li>Vitrine de projets avec vues modales détaillées</li>
            <li>Animations fluides avec Framer Motion</li>
            <li>Optimisé SEO avec métadonnées dynamiques</li>
            <li>Performance rapide avec Next.js App Router</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🌐 Architecture d'Internationalisation</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Gérer les traductions tout en maintenant la sécurité des types et une bonne DX.<br>
                <span class="font-semibold">Solution :</span> Création d'un système de traduction typé avec TypeScript assurant la validation à la compilation de toutes les clés de traduction.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🎨 Cohérence du Design System</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Maintenir la cohérence visuelle entre les modes clair/sombre.<br>
                <span class="font-semibold">Solution :</span> Utilisation de Tailwind CSS avec des variables CSS personnalisées et des composants Shadcn UI pour un design system cohérent.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">⚡ Optimisation des Performances</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Équilibrer les animations riches avec des temps de chargement rapides.<br>
                <span class="font-semibold">Solution :</span> Implémentation du lazy loading, optimisation des images et utilisation du réseau edge de Vercel pour une livraison optimale.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Construire ce portfolio a été l'occasion de montrer mes capacités full-stack tout en expérimentant les dernières fonctionnalités de Next.js. Il sert à la fois de vitrine professionnelle et de témoignage de mon attention aux détails et ma sensibilité au design.",
      },
      budgetBuddy: {
        description:
          "Une application intelligente de gestion de finances personnelles qui aide les utilisateurs à suivre leurs dépenses, définir des budgets et atteindre leurs objectifs financiers.",
        overview:
          "Budget Buddy est une application complète de finances personnelles conçue pour aider les utilisateurs à prendre le contrôle de leur argent. Elle offre un suivi intuitif des dépenses, la création de budgets et des analyses perspicaces pour promouvoir de meilleures habitudes financières.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Suivi des dépenses avec classification par catégorie</li>
            <li>Création et suivi de budgets mensuels</li>
            <li>Analyses visuelles avec graphiques</li>
            <li>Gestion des transactions récurrentes</li>
            <li>Définition d'objectifs financiers et suivi de progression</li>
            <li>Export de rapports en formats PDF/CSV</li>
            <li>Support multi-devises</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">💰 Calculs de Budget en Temps Réel</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Assurer un suivi précis du budget avec des mises à jour en temps réel entre les catégories.<br>
                <span class="font-semibold">Solution :</span> Implémentation d'une gestion d'état réactive avec mises à jour optimistes et synchronisation en arrière-plan.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">📊 Visualisation des Données</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Présenter des données financières complexes de manière compréhensible.<br>
                <span class="font-semibold">Solution :</span> Création de composants graphiques personnalisés avec infobulles interactives et capacités d'exploration détaillée.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔒 Sécurité des Données</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Protéger les informations financières sensibles.<br>
                <span class="font-semibold">Solution :</span> Implémentation du chiffrement de bout en bout et authentification sécurisée avec support multi-facteurs.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Budget Buddy m'a appris l'importance du design centré utilisateur dans les applications fintech. Ce projet a renforcé mes compétences en visualisation de données, gestion d'état et création d'applications sécurisées manipulant des données utilisateur sensibles.",
      },
      hvd: {
        description:
          "Une refonte moderne du site web d'une clinique vétérinaire - offrant une interface professionnelle et conviviale pour une meilleure expérience client.",
        overview:
          "HVD est un projet de refonte de site web réalisé pour un client propriétaire d'une clinique vétérinaire. L'objectif était de moderniser leur présence en ligne avec un design épuré et professionnel qui reflète la qualité des soins qu'ils offrent aux animaux et à leurs propriétaires.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Design moderne et responsive adapté à tous les appareils</li>
            <li>Présentation des services vétérinaires offerts</li>
            <li>Section équipe avec profils des vétérinaires</li>
            <li>Intégration de formulaire de contact et prise de rendez-vous</li>
            <li>Galerie photos des installations</li>
            <li>Section actualités et conseils pour les propriétaires d'animaux</li>
            <li>Optimisation SEO pour le référencement local</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🎨 Identité Visuelle</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Créer un design qui inspire confiance tout en restant chaleureux et accueillant.<br>
                <span class="font-semibold">Solution :</span> Utilisation d'une palette de couleurs apaisantes et d'images professionnelles mettant en valeur le soin apporté aux animaux.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">📱 Expérience Mobile</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Assurer une navigation fluide sur mobile pour les clients pressés.<br>
                <span class="font-semibold">Solution :</span> Design mobile-first avec boutons d'appel à l'action clairs et formulaire de contact accessible.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">⚡ Performance & SEO</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Améliorer la visibilité locale de la clinique sur les moteurs de recherche.<br>
                <span class="font-semibold">Solution :</span> Optimisation des images, métadonnées structurées et contenu optimisé pour le référencement local.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Ce projet client m'a permis de mettre en pratique mes compétences en design UI/UX pour créer une présence web professionnelle qui répond aux besoins spécifiques d'une clinique vétérinaire. La satisfaction du client confirme l'importance d'écouter et comprendre les besoins métier.",
      },
      maCiv: {
        description:
          "Un site vitrine immersif développé en HTML et CSS pur pour promouvoir la richesse culturelle, historique et touristique de la Côte d'Ivoire.",
        overview:
          "Ma Civ est un projet personnel né de mon désir de célébrer mes racines. Il s'agit d'une plateforme numérique accueillante et colorée conçue pour faire découvrir la beauté de la Côte d'Ivoire. Le site met en lumière les incontournables du pays à travers différentes sections : la gastronomie locale, l'histoire, la nature et la culture.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Gastronomie :</strong> Mise en valeur des plats typiques ivoiriens tels que l'Alloco, le Garba et le Foutou.</li>
            <li><strong>Nature & Parcs :</strong> Focus sur la riche biodiversité, notamment le Parc National de Taï.</li>
            <li><strong>Histoire & Patrimoine :</strong> Présentation des monuments emblématiques comme la Basilique.</li>
            <li><strong>Art & Culture :</strong> Exploration des masques ancestraux et de la vibrante scène musicale ivoirienne.</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🎨 Conception Responsive sans Framework</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Créer un design immersif et structuré sans utiliser d'outils comme Bootstrap ou Tailwind.<br>
                <span class="font-semibold">Solution :</span> Utilisation avancée de CSS Grid et Flexbox avec une attention particulière portée aux media queries pour assurer une lisibilité parfaite sur mobile.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">⚡ Optimisation des Médias Visuels</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Présenter des images haute résolution du patrimoine sans ralentir le temps de chargement.<br>
                <span class="font-semibold">Solution :</span> Optimisation et redimensionnement manuel des assets visuels pour garantir une navigation fluide tout en gardant des couleurs vibrantes.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Ma Civ est un véritable projet passion qui fait office d'ambassadeur digital pour la Côte d'Ivoire. Développer ce site m'a permis de consolider mes fondamentaux en développement web (HTML/CSS) tout en partageant fièrement ma culture.",
      },
      virtualCardPro: {
        description:
          "Une application de carte de visite numérique et portfolio professionnel - connectant le réseautage physique et digital avec des fonctionnalités intelligentes.",
        overview:
          "Virtual Card Pro est une application de carte de visite numérique haute performance et entièrement responsive, construite avec les dernières technologies web. Elle permet aux professionnels de partager leurs informations de contact de manière moderne et élégante, tout en offrant des fonctionnalités avancées comme l'export vCard et l'intégration Google Wallet.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Design moderne et entièrement responsive</li>
            <li>Téléchargement vCard pour import direct dans les contacts</li>
            <li>Intégration Google Wallet pour ajouter la carte au téléphone</li>
            <li>Support multilingue (EN/FR/ES)</li>
            <li>Liens vers réseaux sociaux et portfolio</li>
            <li>Animations fluides et interface élégante</li>
            <li>Performance optimisée avec React 19 et Vite</li>
            <li>QR Code pour partage rapide</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">📱 Compatibilité Cross-platform</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Assurer que la carte s'affiche parfaitement sur tous les appareils et navigateurs.<br>
                <span class="font-semibold">Solution :</span> Utilisation de Tailwind CSS avec une approche mobile-first et tests extensifs sur différents appareils.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">📇 Génération vCard</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Créer des fichiers vCard compatibles avec tous les gestionnaires de contacts.<br>
                <span class="font-semibold">Solution :</span> Implémentation du standard vCard 3.0 avec encodage UTF-8 pour supporter les caractères spéciaux.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🌐 Internationalisation</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Supporter plusieurs langues tout en maintenant une UX fluide.<br>
                <span class="font-semibold">Solution :</span> Système de traduction dynamique avec détection automatique de la langue du navigateur.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Virtual Card Pro démontre comment une simple carte de visite peut être transformée en une expérience digitale riche et moderne. Ce projet m'a permis d'explorer les dernières fonctionnalités de React 19 et de créer une solution pratique pour le réseautage professionnel.",
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
