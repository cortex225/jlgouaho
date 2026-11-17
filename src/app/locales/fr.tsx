// locales/fr.ts
import type { Translations } from "./types";

const translations: Translations = {
  hello: "Bonjour",
  seo: {
    tagline:
      "Développeur Full-Stack .NET, Vue.js & Azure basé au Québec, spécialiste cloud, DevOps et automatisation. J'aide les entreprises à réduire leurs coûts cloud et à livrer plus vite.",
    keywords: [
      "Développeur Full-Stack Québec",
      "Développeur Full-Stack Montréal",
      "Développeur .NET Canada",
      "Développeur Vue.js",
      "Développeur Next.js",
      "Spécialiste Azure",
      "Cloud DevOps",
      "Automatisation Python",
      "Développeur freelance Québec",
      "Jean-Luc Gouaho",
      "jlgouaho",
    ],
    homeTitle:
      "Jean-Luc Gouaho : développeur full-stack au Québec",
    homeDescription:
      "Développeur full-stack au Québec : .NET, Next.js, Azure et IA. {years}+ ans d'expérience, coûts Azure réduits de 78 %, fondateur de RecruitEasy.ca.",
    projectsTitle: "Projets full-stack : SaaS, IA et cloud",
    projectsDescription:
      "Projets en ligne : RecruitEasy, AgentOS, PlayerConnect, LeadMapper, Budget Buddy et sites clients. Stack : Next.js, .NET, Azure, PostgreSQL.",
    blogTitle: "Blogue : retours d'expérience cloud, IA et full-stack",
    blogDescription:
      "Articles techniques concrets : optimisation Azure (-78%), ATS Python pour trier 4000+ CV, architecture serverless, CI/CD et bonnes pratiques DevOps.",
  },
  hero: {
    greeting: "Bonjour, je suis",
    title: "Développeur Full-Stack | Spécialiste en Cloud & Automatisation",
    status: "À l'écoute d'opportunités",
    techStack: "Stack technique",
  },
  nav: {
    home: "Profil",
    projects: "Projets",
    blog: "Blogue",
    resume: "CV (PDF)",
    contact: "Contact",
  },
  highlights: {
    title: "En bref",
    items: [
      { value: "{years}+", label: "ans d'expérience full-stack" },
      { value: "-78%", label: "de coûts Azure chez Royal Broker" },
      { value: "4000+", label: "CV triés en secondes par mon ATS Python" },
      { value: "10+", label: "projets livrés (SaaS, mobile, IA)" },
    ],
  },
  common: {
    overview: "Aperçu",
    features: "Fonctionnalités clés",
    challenges: "Défis & solutions",
    conclusion: "Conclusion",
    gallery: "Galerie",
    noLinks: "Aucun lien externe disponible.",
    technologies: "Technologies",
    email: "Courriel",
    connect: "Connecter",
    viewAllProjects: "Voir tous les projets",
    getInTouch: "Me contacter",
    allRightsReserved: "Tous droits réservés.",
    scanToContact: "Scanner pour me contacter",
    close: "Fermer",
    backToProfile: "Retour au profil",
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
    description: "Retours d'expérience concrets sur le cloud Azure, .NET, Next.js, React Native et l'IA en production.",
    writtenBy: "Écrit par",
    authorTagline:
      "Développeur full-stack basé au Canada. J'écris sur le code, l'IA et les produits que je construis.",
    viewProfile: "Voir mon profil",
  },
  projectsPage: {
    allProjects: "Tous les projets",
    description: "Mes travaux, expérimentations et contributions open source.",
    haveIdea: "Vous avez une idée de projet ?",
    letsDiscuss: "Discutons-en",
    backToProfile: "Retour au profil",
    filterAll: "Tous",
  },
  sections: {
    faq: {
      title: "Questions fréquentes",
      subtitle: "Ce que les recruteurs et clients me demandent le plus",
      items: [
        {
          question: "Quel type de poste recherchez-vous ?",
          answer:
            "Je suis ouvert à un poste full-time ou contrat comme Développeur Full-Stack, Ingénieur Cloud ou Développeur DevOps, en télétravail ou hybride depuis le Québec (Canada). J'ai une préférence pour les stacks .NET / Vue.js / Next.js / Azure, mais je m'adapte rapidement.",
        },
        {
          question: "Quelles sont vos technologies principales ?",
          answer:
            "C#, .NET, TypeScript, JavaScript, Python, Vue.js, React, Next.js, Node.js, PostgreSQL, SQL Server, Docker, Azure, AWS. Je travaille aussi avec Groovy/Grails et des outils low-code comme Caspio et Power Automate.",
        },
        {
          question: "Quel impact business avez-vous déjà livré ?",
          answer:
            "Chez Royal Broker Solutions, j'ai migré l'infrastructure vers Azure en réduisant les coûts de 78% (600 $ à 135 $/mois), développé un ATS Python qui trie 4000+ CV en quelques secondes, et accéléré les déploiements de 60% grâce au CI/CD.",
        },
        {
          question: "Êtes-vous disponible pour des projets freelance ?",
          answer:
            "Oui. J'accepte les missions de développement full-stack, d'optimisation cloud Azure, d'automatisation de processus métier et de développement d'applications SaaS. Je réponds en général sous 24 h.",
        },
        {
          question: "Où êtes-vous basé et dans quelles langues travaillez-vous ?",
          answer:
            "Je suis basé au Québec, Canada. Je travaille couramment en français (natif) et en anglais (avancé), ce qui me permet de collaborer avec des équipes nord-américaines et européennes.",
        },
        {
          question: "Comment puis-je vous contacter ?",
          answer:
            "Par courriel à jlgouaho@gmail.com, sur LinkedIn (linkedin.com/in/jlgouaho) ou via le formulaire du site. Je réponds en général en moins de 24 h ouvrées.",
        },
      ],
    },
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
    currently: {
      title: "En ce moment",
      certificationLabel: "Certifications en cours",
      buildingLabel: "Ce que je construis",
      readingLabel: "Ce que je lis",
    },
    contactForm: {
      title: "Travaillons ensemble",
      subtitle: "Décrivez votre projet ou opportunité, je réponds sous 24h.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      messagePlaceholder: "Bonjour Jean-Luc, je vous contacte au sujet de...",
      send: "Envoyer le message",
      success: "Message envoyé ! Je vous réponds dans les 24h.",
    },
    about: {
      title: "À propos de moi",
      description:
        "Développeur Full-Stack avec une solide expérience en .NET, Vue.js et Azure, et une forte appétence pour le cloud computing, DevOps et l'automatisation. Attentif aux performances et à la scalabilité des applications, j'ai contribué à des solutions permettant de réduire les coûts cloud et d'améliorer l'efficacité des déploiements.\n\nJe prépare actuellement les certifications Microsoft AZ-900 et AI-900.",
    },
    work: {
      title: "Expérience professionnelle",
      recruitEasy: {
        title: "Fondateur et développeur full-stack",
        company: "RecruitEasy.ca",
        location: "À distance",
        start: "Janvier 2026",
        end: "Présent",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Fondateur et développeur de RecruitEasy.ca</strong>, un logiciel de recrutement (ATS) pour les PME qui intègre l'IA générative.</li>
            <li><strong>Tout le produit conçu et mis en production seul</strong> : infrastructure, backend <strong>.NET / C#</strong>, frontend <strong>Next.js</strong> en TypeScript, facturation <strong>Stripe</strong>, modèle de données multi-locataires.</li>
            <li><strong>Matching IA</strong> : évaluation des candidatures par LLM (function calling, RAG, embeddings) avec un score expliqué par critère. La décision reste au recruteur.</li>
            <li><strong>Confidentialité</strong> : modèles open source exécutés en local pour que les données RH sensibles ne passent pas par des API externes.</li>
            <li><strong>Diffusion des offres sur plus de 50 sites d'emploi</strong> en un clic, pipeline de recrutement par offre et courriels automatisés.</li>
            <li><strong>Prospection automatisée</strong> : agent <strong>n8n</strong> qui enrichit des profils, segmente les prospects et rédige des courriels personnalisés.</li>
            <li><strong>Déploiement sur Azure</strong> avec CI/CD, surveillance et allocation des ressources optimisée en coûts.</li>
          </ul>
        `,
      },
      evnia: {
        title: "Développeur en automatisation et intégration d'API",
        company: "Evnia, firme-conseil en écofiscalité",
        location: "Mirabel, QC · Hybride",
        start: "Mars 2025",
        end: "Présent",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Intégration de systèmes</strong> : API REST et webhooks fiables (pagination, reprises avec backoff, idempotence, gestion d'erreurs) qui synchronisent en temps réel CRM, ERP et outils low-code, avec environ <strong>35 % de rapprochement manuel en moins</strong>.</li>
            <li><strong>Automatisation</strong> : workflows <strong>n8n</strong> et <strong>Power Automate</strong> pour l'équipe de gestion de projet, dont un module de facturation qui génère les factures, calcule les taxes de plusieurs provinces et suit les paiements.</li>
            <li><strong>Assistant IA pour l'équipe</strong> : agent de soutien au développement conçu avec <strong>Microsoft Copilot Studio</strong>, relié à Caspio par <strong>MCP</strong>, à Monday.com et à n8n, avec une mémoire persistante dans Dataverse.</li>
            <li><strong>Ateliers IA</strong> : préparation et animation d'ateliers internes pour aider les équipes non techniques à utiliser l'IA générative au quotidien.</li>
            <li><strong>Seul développeur de l'équipe</strong>, je travaille avec la direction, la conformité et la comptabilité pour transformer leurs besoins en solutions simples à maintenir.</li>
          </ul>
        `,
      },
      tractionDK: {
        title: "Développeur full-stack",
        company: "Traction DK inc.",
        location: "À distance",
        start: "Août 2024",
        end: "Janvier 2025",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Backend SaaS</strong> : optimisation des modules principaux d'un <strong>CRM SaaS B2B</strong> pour concessionnaires automobiles (<strong>Java, Groovy</strong>), avec réduction d'une dette technique critique et des temps de traitement plus rapides.</li>
            <li><strong>Frontend et paiements</strong> : modernisation de l'interface des outils de communication client (chat et appels) en JavaScript, HTML/CSS et Bootstrap, et intégrations de paiement <strong>Stripe</strong>.</li>
            <li><strong>DevOps et livraison agile</strong> : pipelines <strong>CI/CD</strong> et bonnes pratiques Git pour livrer plus souvent, sans interruption de service.</li>
            <li><strong>Correction de bugs critiques</strong> et amélioration des performances de l'application.</li>
          </ul>
        `,
      },
      royalBroker: {
        title: "Développeur .NET et gestionnaire de projets TI",
        company: "Royal Broker Solutions",
        location: "Granby, QC · Sur site",
        start: "Août 2022",
        end: "Août 2024",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Promu de stagiaire à chef de projet informatique en 4 mois.</strong></li>
            <li><strong>InstaHR</strong> : conception et mise en service d'une solution SaaS RH interne full-stack (<strong>.NET / C# / MSSQL</strong>) qui gère les contrats, la paie et le cycle de vie des employés, avec intégration Stripe.</li>
            <li><strong>Migration vers Microsoft Azure</strong> : coûts cloud passés de <strong>600 $ à 135 $ par mois</strong> et déploiements CI/CD accélérés de 60 %.</li>
            <li><strong>ATS en Python</strong> capable d'analyser et de filtrer plus de <strong>4 000 CV</strong>, avec relances automatisées par WhatsApp et courriel.</li>
            <li><strong>Feuille de route produit</strong> pilotée avec les équipes RH, finances et direction, du besoin jusqu'à la fonctionnalité en production.</li>
          </ul>
        `,
      },
      royalBrokerInternship: {
        title: "Stagiaire en développement web",
        company: "Royal Broker Solutions",
        location: "Granby, QC · Hybride",
        start: "Avril 2022",
        end: "Août 2022",
        badge: "Stage",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Développement de sites d'estimation de microcrédit</strong> en PHP et WordPress.</li>
            <li>Stage conclu par une <strong>offre d'embauche immédiate</strong> comme développeur principal.</li>
          </ul>
        `,
      },
      rogers: {
        title: "Spécialiste des ventes",
        company: "Rogers Communications",
        location: "Granby, QC",
        start: "Novembre 2021",
        end: "Avril 2022",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Analyse des besoins des clients</strong> pour proposer des solutions adaptées.</li>
            <li>Compétences en <strong>négociation et relations interpersonnelles</strong>, utiles aujourd'hui pour travailler avec les parties prenantes d'un projet.</li>
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
      badge: "Mes projets",
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
        Intégration de PrimeVue dans des vues Razor (.cshtml)
      </h5>
      <p class="text-neutral-700 dark:text-neutral-300">
        <span class="font-semibold">Problème :</span> Difficulté à utiliser les composants de PrimeVue directement dans les fichiers .cshtml d’ASP.NET.<br>
        <span class="font-semibold">Solution :</span> Mise en place d’un serveur <span class="font-semibold text-blue-500">Vite</span> pour charger Vue comme un microfrontend dans les vues Razor.
      </p>
    </div>

    <!-- Intégration des paiements -->
    <div class="space-y-1">
      <h5 class="font-semibold text-lg flex items-center gap-2">
        Intégration des paiements avec Stripe et Zoho
      </h5>
      <p class="text-neutral-700 dark:text-neutral-300">
        <span class="font-semibold">Problème :</span> Besoin d’une solution sécurisée et évolutive pour gérer les paiements des employés.<br>
        <span class="font-semibold">Solution :</span> Initialement intégré avec Stripe, puis migration vers <span class="font-semibold text-blue-500">Zoho API</span>, en développant un service dédié pour gérer le <span class="italic">token refreshing</span>.
      </p>
    </div>

    <!-- Réduction des coûts cloud -->
    <div class="space-y-1">
      <h5 class="font-semibold text-lg flex items-center gap-2">
        Optimisation des coûts cloud
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
          "La plateforme qui connecte les joueurs de basketball avec les recruteurs et entraîneurs.",
        overview:
          "PlayerConnect est une plateforme qui connecte les joueurs de basketball avec les recruteurs et les entraîneurs. Elle permet aux joueurs de mettre en avant leurs performances, aux recruteurs d’accéder à des profils détaillés, et aux entraîneurs d’organiser plus efficacement le suivi de leurs équipes.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Profils de joueurs détaillés avec statistiques et vidéos</li>
            <li>Système de matchmaking entre recruteurs et joueurs</li>
            <li>Calendrier interactif des matchs et événements</li>
            <li>Notifications en temps réel pour les recruteurs et joueurs</li>
            <li>Système de messagerie intégrée pour faciliter les échanges</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Analyse automatique des performances</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Transformer des vidéos de matchs en insights exploitables.<br>
                <span class="font-semibold">Solution :</span> Intégration de l’IA avec OpenAI API pour extraire des statistiques clés à partir des vidéos.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Engagement et visibilité des joueurs</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
               <span class="font-semibold"> Problème :</span> Aider les joueurs à maximiser leur exposition aux recruteurs.<br>
                <span class="font-semibold">Solution :</span> Mise en place d’un système de profil optimisé, avec des recommandations basées sur les performances et un algorithme de matchmaking avancé.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Expérience utilisateur et performance</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
               <span class="font-semibold">  Problème :</span> Garantir une navigation fluide malgré l’utilisation de vidéos et de données en temps réel.<br>
                <span class="font-semibold">Solution :</span> Optimisation du frontend avec Next.js, utilisation de WebSockets pour la communication en temps réel, et hébergement optimisé sur Vercel et Firebase.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "PlayerConnect met directement en relation les joueurs avec les recruteurs et les entraîneurs. L’intelligence artificielle et l’analyse de performances aident les joueurs à se démarquer.",
      },
      recruitEase: {
        description:
          "Une plateforme de recrutement qui utilise l'IA pour automatiser et optimiser le processus de recrutement.",
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
          "RecruitEase utilise l'IA pour rendre le recrutement plus efficace et plus objectif.",
      },
      magicSearch: {
        description:
          "Un moteur de recherche hybride qui améliore la précision des recherches en interrogeant des résultats sémantiquement liés.",
        overview:
          "MagicSearch est un moteur de recherche qui exploite la compréhension sémantique pour fournir des résultats plus précis et contextuels.",
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
          "MagicSearch m'a fait progresser en algorithmes de recherche et en optimisation frontend/backend. Il m'a appris à équilibrer l'expérience utilisateur avec les performances.",
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
              <h5 class="font-medium">Analyse DOM dynamique</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Google Maps utilise un chargement de contenu dynamique avec des structures imbriquées complexes.<br>
                <span class="font-semibold">Solution :</span> Implémentation de MutationObserver pour détecter les changements DOM et des sélecteurs robustes pour gérer les mises à jour fréquentes de l'interface Google.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Précision de l'extraction</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Toutes les entreprises n'affichent pas leurs coordonnées complètes.<br>
                <span class="font-semibold">Solution :</span> Implémentation d'un scraping intelligent qui navigue vers les pages de détails pour trouver les courriels et contacts cachés.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Expérience utilisateur</h5>
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
          "Ce portfolio présente mes projets, compétences et expérience professionnelle. Il propose une internationalisation complète (anglais/français), un mode sombre et des animations fluides.",
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
              <h5 class="font-medium">Architecture d'internationalisation</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Gérer les traductions tout en maintenant la sécurité des types et une bonne DX.<br>
                <span class="font-semibold">Solution :</span> Création d'un système de traduction typé avec TypeScript assurant la validation à la compilation de toutes les clés de traduction.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Cohérence du design system</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Maintenir la cohérence visuelle entre les modes clair/sombre.<br>
                <span class="font-semibold">Solution :</span> Utilisation de Tailwind CSS avec des variables CSS personnalisées et des composants Shadcn UI pour un design system cohérent.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Optimisation des performances</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Équilibrer les animations riches avec des temps de chargement rapides.<br>
                <span class="font-semibold">Solution :</span> Implémentation du lazy loading, optimisation des images et utilisation du réseau edge de Vercel pour une livraison optimale.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Construire ce portfolio m'a permis de mettre en pratique mes compétences full-stack et d'expérimenter les dernières fonctionnalités de Next.js. Il me sert aussi de vitrine professionnelle.",
      },
      budgetBuddy: {
        description:
          "Une application de budget qui répond à une question : combien je peux vraiment dépenser jusqu'à la prochaine paye.",
        overview:
          "Budget Buddy relie les comptes bancaires par Plaid, puis montre l'argent disponible jusqu'à la paye, le prévu par rapport au réel, la dette de carte et les objectifs d'épargne. Chaque paye vient avec un plan dans l'ordre : factures, enveloppes, remboursement de la carte, puis dépenses libres.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Comptes bancaires reliés par Plaid et synchronisés</li>
            <li>Montant vraiment disponible jusqu'à la prochaine paye, et par jour</li>
            <li>Prévu par rapport au réel, par catégorie</li>
            <li>Plan de répartition de chaque paye</li>
            <li>Suivi de la dette de carte et des intérêts</li>
            <li>Objectifs d'épargne, cashflow et patrimoine net</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Calculs de budget en temps réel</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Assurer un suivi précis du budget avec des mises à jour en temps réel entre les catégories.<br>
                <span class="font-semibold">Solution :</span> Implémentation d'une gestion d'état réactive avec mises à jour optimistes et synchronisation en arrière-plan.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Visualisation des données</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Présenter des données financières complexes de manière compréhensible.<br>
                <span class="font-semibold">Solution :</span> Création de composants graphiques personnalisés avec infobulles interactives et capacités d'exploration détaillée.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Sécurité des données</h5>
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
              <h5 class="font-medium">Identité visuelle</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Créer un design qui inspire confiance tout en restant chaleureux et accueillant.<br>
                <span class="font-semibold">Solution :</span> Utilisation d'une palette de couleurs apaisantes et d'images professionnelles mettant en valeur le soin apporté aux animaux.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Expérience mobile</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Assurer une navigation fluide sur mobile pour les clients pressés.<br>
                <span class="font-semibold">Solution :</span> Design mobile-first avec boutons d'appel à l'action clairs et formulaire de contact accessible.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Performance & SEO</h5>
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
      agentOs: {
        description:
          "Un tableau de bord où un solopreneur pilote 6 agents IA spécialisés, avec un routeur de modèles qui tient un budget mensuel.",
        overview:
          "AgentOS fait travailler un solopreneur avec six agents IA (communauté, tech, stratégie, support, vente, direction artistique), organisés par projet. Le front React parle à un serveur Express qui sert de passerelle unique vers OpenRouter, OpenAI et Gemini : il choisit le modèle, diffuse la réponse en streaming SSE et comptabilise le coût de chaque appel. Les clés API ne quittent jamais le serveur.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Routeur de modèles côté serveur : niveaux de qualité, modèles de repli, et une requête marquée sensible n'est jamais envoyée à un modèle gratuit</li>
            <li>Budget mensuel en dollars tenu dans un registre : mode dégradé à 80 %, modèles payants coupés au plafond, coût calculé à partir de l'usage réel renvoyé par le fournisseur</li>
            <li>Logique de routage écrite en fonctions pures (plan, route, budget, settle) et couverte par des tests unitaires</li>
            <li>Prompt système construit à chaque appel : persona, contexte du projet et base de connaissances filtrée par agent, bornée à environ 1 500 tokens</li>
            <li>Cache de prompt (cache_control) sur la partie stable du prompt système pour réduire le coût des appels répétés</li>
            <li>Serveurs MCP activables par agent, Council (une question à plusieurs agents en parallèle), palette de commandes, mentions @ et commandes /</li>
            <li>État Zustand persisté avec schéma versionné et migrations (version 10)</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Tenir un budget sans casser l'expérience</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Les modèles payants peuvent coûter cher si on laisse tourner des agents et des tâches planifiées.<br>
                <span class="font-semibold">Solution :</span> Chaque réponse est réglée au coût réel dans un registre mensuel ; à 80 % du plafond le routeur passe en mode dégradé, et au plafond il refuse les modèles payants avec une erreur 402 claire.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Un contexte utile sans exploser les tokens</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Injecter toute la base de connaissances dans chaque prompt coûte cher et brouille les réponses.<br>
                <span class="font-semibold">Solution :</span> Seuls les éléments assignés à l'agent sont retenus, triés par récence, tronqués au-delà de 2 000 caractères et coupés à un budget global ; le prompt stable est mis en cache.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Des appels fiables</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Les fournisseurs renvoient des 429 et des 5xx sous charge.<br>
                <span class="font-semibold">Solution :</span> Nouvelles tentatives avec backoff exponentiel (1, 2, 4 puis 8 s) et modèles de repli définis par le routeur.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "AgentOS montre ce que je fais quand je construis un produit IA : une passerelle serveur qui garde les clés, choisit le modèle et maîtrise la facture, et une logique métier testable séparée de l'interface.",
      },
      marieAntoine: {
        description:
          "Le site de Marie-Antoine Aka, cheffe privée et créatrice à Montréal : son portfolio, sa maison Art de recevoir et son studio Artizan.",
        overview:
          "Site vitrine réalisé pour une cliente qui réunit trois activités : son portfolio personnel, Art de recevoir (cheffe privée, tables et réceptions) et Artizan (photographie, vidéo et direction artistique). Le site est en Vite, React et React Router, prérendu en HTML statique : le build produit onze pages complètes, servies depuis le CDN sans aucun serveur.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Onze pages prérendues en HTML statique, indexables sans JavaScript</li>
            <li>Titre, description, image de partage et données structurées JSON-LD par page</li>
            <li>Polices auto-hébergées et figées : le build ne fait aucun appel réseau</li>
            <li>Trois univers visuels distincts sur un même site, animés avec GSAP</li>
            <li>Sitemap et fichier llms.txt pour le référencement</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Un site rapide et bien référencé sans serveur</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Le contenu ne change pas, mais chaque page doit être indexée avec ses propres métadonnées.<br>
                <span class="font-semibold">Solution :</span> Un script de prérendu exécute le rendu serveur de chaque route au build et écrit une page HTML complète, avec son head et ses données structurées.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Un déploiement qui ne casse pas</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Le projet Vercel avait été créé avec le preset Next.js, qui échouait sur un dépôt Vite.<br>
                <span class="font-semibold">Solution :</span> vercel.json fixe explicitement le framework, les commandes et le dossier de sortie, qui priment sur le tableau de bord.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Un projet client où la contrainte était simple : un site rapide, beau et bien référencé, sans serveur à maintenir.",
      },
      maCiv: {
        description:
          "Un site immersif pour découvrir la Côte d'Ivoire : une carte 3D du pays sert de fil rouge à un voyage en cinq étapes régionales.",
        overview:
          "Akwaba est la refonte de Ma Civ, un site que j'avais commencé en HTML et CSS pour faire découvrir la Côte d'Ivoire, mes racines. Le parcours suit cinq régions, d'Abidjan à l'Ouest : à chaque chapitre, la carte 3D zoome sur la région visitée, puis viennent une carte postale plein écran, les incontournables, des blocs thématiques et les fêtes.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Carte 3D de la Côte d'Ivoire qui zoome sur chaque région</li>
            <li>Cinq étapes : Abidjan, l'Est, le Centre, le Nord, l'Ouest</li>
            <li>Gastronomie, mode, musique, nouchi et festivals</li>
            <li>Visionneuse plein écran pour toutes les photos</li>
            <li>Calendrier des saisons et des fêtes, itinéraires de 7 et 12 jours</li>
            <li>Animations liées au scroll avec GSAP et défilement fluide avec Lenis</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Une carte 3D comme fil rouge</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Garder le visiteur orienté sur une longue page.<br>
                <span class="font-semibold">Solution :</span> Une carte du pays en Three.js qui zoome et allume la région de chaque chapitre ; son contour est généré à partir des données Natural Earth.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Beaucoup de photos, une page rapide</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Des dizaines de photos plein écran sur une seule page.<br>
                <span class="font-semibold">Solution :</span> Un script qui régénère des versions WebP optimisées de toutes les photos.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Akwaba m'a permis de reprendre un de mes premiers projets avec des outils de motion design (Three.js, GSAP, Lenis) et de le structurer comme un vrai parcours.",
      },
      virtualCardPro: {
        description:
          "Une application de carte de visite numérique et portfolio professionnel - reliant le réseautage physique et numérique.",
        overview:
          "Virtual Card Pro est une application de carte de visite numérique entièrement responsive. Elle permet aux professionnels de partager leurs informations de contact, avec l'export vCard et l'intégration Google Wallet.",
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
              <h5 class="font-medium">Compatibilité multiplateforme</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Assurer que la carte s'affiche correctement sur tous les appareils et navigateurs.<br>
                <span class="font-semibold">Solution :</span> Utilisation de Tailwind CSS avec une approche mobile-first et tests extensifs sur différents appareils.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Génération vCard</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Créer des fichiers vCard compatibles avec tous les gestionnaires de contacts.<br>
                <span class="font-semibold">Solution :</span> Implémentation du standard vCard 3.0 avec encodage UTF-8 pour supporter les caractères spéciaux.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Internationalisation</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Supporter plusieurs langues tout en maintenant une UX fluide.<br>
                <span class="font-semibold">Solution :</span> Système de traduction dynamique avec détection automatique de la langue du navigateur.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Virtual Card Pro transforme une carte de visite en application web. Ce projet m'a permis d'explorer les dernières fonctionnalités de React 19 et de créer une solution pratique pour le réseautage professionnel.",
      },
      spinVibe: {
        description:
          "App mobile (ex-DUO Roue) qui tranche « on fait quoi ce soir ? » : une roue à lancer, des suggestions IA adaptées au contexte social (couple, amis, famille, solo), puis planification, rappels et souvenirs.",
        overview:
          "SpinVibe est né de DUO Roue, un prototype web React pour choisir une soirée à deux. Il est devenu une app Expo (iOS, Android, web) publiée sous le nom SpinVibe, pensée pour tous les contextes sociaux. La boucle produit tient en trois temps : décider (roue, swipe ou choix direct), vivre (plan, checklist, rappels natifs) et se souvenir (note, photos). Les suggestions viennent d'un Worker Cloudflare qui interroge Workers AI et un corpus d'idées en D1, avec un catalogue hors-ligne en repli filtré par contexte : jamais d'écran vide, jamais de clé dans le bundle. Les lieux réels autour de l'utilisateur sont tirés d'OpenStreetMap/Overpass, sans clé API.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Roue SVG segmentée</strong> avec geste de lancer tangentiel, tick haptique à chaque segment et sélection déterministe : le gagnant est tiré au lancement, les suggestions se chargent pendant la rotation</li>
            <li><strong>Contexte social</strong> (couple, amis, famille, solo) qui conditionne catégories, idées et textes générés</li>
            <li><strong>Découvrir</strong> : deck de swipe (envie / déjà vu) qui alimente l'anti-répétition, et carte 3D des lieux réels via OpenStreetMap</li>
            <li><strong>Plans</strong> : liste et calendrier, checklist, notes, rappels natifs à T-1h et T-15 min, écran souvenir avec note et photos</li>
            <li><strong>Envies et Collections</strong> : capture sans décision d'un côté, idées riches importables depuis un lien de l'autre, passage dans les deux sens</li>
            <li><strong>Progression</strong> : niveaux, XP, défis hebdomadaires, 10 badges avec raretés et célébration au déblocage</li>
            <li><strong>Backend Cloudflare</strong> : Worker + Workers AI + D1, authentification Apple et Google, gouvernance du corpus et traduction automatique des idées</li>
            <li><strong>Bilingue FR/EN</strong>, devise et liens de réservation déduits du pays de la ville choisie</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Absorber la latence de l'IA dans le suspense</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> attendre 2 à 4 s après l'arrêt de la roue tuait l'effet.<br>
                <span class="font-semibold">Solution :</span> le résultat est tiré dès le lancement et la requête part pendant la rotation ; un jeton de requête garantit qu'une réponse en retard n'écrase jamais un résultat plus récent.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Jamais d'écran vide</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> l'app devait fonctionner sans réseau, sans clé et sans backend déployé.<br>
                <span class="font-semibold">Solution :</span> catalogue hors-ligne filtré par contexte social en repli systématique, Worker activé seulement si <code>EXPO_PUBLIC_API_URL</code> est défini, aucun secret dans le bundle.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Du prototype « à deux » au produit « pour tous »</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> DUO Roue supposait un couple partout dans le code et les textes.<br>
                <span class="font-semibold">Solution :</span> le contexte social est devenu un invariant du produit : sélecteur global, catégories et prompts conditionnés, i18n FR/EN réécrit, et migration des données locales des premiers utilisateurs.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "SpinVibe m'a appris à faire mûrir un prototype en produit : positionnement élargi, backend serverless économe, expérience hors-ligne d'abord, et un geste principal (la roue) suffisamment soigné pour porter toute l'app.",
      },
      fitTrack: {
        description:
          "App mobile fitness & nutrition IA-first : profil intelligent (BMR/TDEE), bibliothèque de 873 exercices animés avec muscles ciblés, générateur de séances IA contextualisé, suivi par spider chart et coach IA conversationnel.",
        overview:
          "FitTrack (JL-Fit) est une app mobile React Native / Expo qui centralise entraînement, nutrition et progression. Le moteur santé calcule en temps réel IMC, BMR (Mifflin-St Jeor), TDEE selon l'activité, et suggère automatiquement un objectif réaliste avec garde-fous (-25% TDEE max en sèche, +20% en bulk). Gemini 2.5 pilote le coach conversationnel, le générateur de séances, l'analyse de plats par photo et la suggestion de recettes ; Cloudflare Workers AI (FLUX-1-schnell) génère les visuels de recettes. Une bibliothèque embarquée de 873 exercices (everkinetic) sert de catalogue : Gemini doit obligatoirement piocher ses séances dedans, garantissant que chaque exercice a sa GIF anatomique et sa muscle map SVG. L'historique d'entraînement re-nourrit le contexte de l'IA pour détecter les déséquilibres et calibrer la progression.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Profil intelligent</strong> : IMC live, BMR/TDEE auto, sélecteur d'activité 5 niveaux, suggestion d'objectif adaptative avec macros recalculées en temps réel</li>
            <li><strong>Coach IA conversationnel</strong> avec contexte complet (profil + IMC + historique 7j + volume par muscle), rendu markdown</li>
            <li><strong>Générateur de séances IA</strong> : sélecteur Maison/Salle, multi-select muscles cibles, description libre de l'intention, picking forcé dans le catalogue de 873 exos</li>
            <li><strong>Bibliothèque d'exercices</strong> : recherche + filtres multi-sélect (muscles, équipement, niveau, lieu), GIFs animées 2-frames sur fond blanc style catalogue</li>
            <li><strong>Création manuelle de séances</strong> : builder avec picker filtré, configuration sets/reps/repos par exo, sauvegarde réutilisable + édition/duplication/suppression</li>
            <li><strong>MuscleMap SVG</strong> anatomique avant/arrière avec highlight des muscles primaires (vert) et secondaires (orange)</li>
            <li><strong>Spider chart</strong> du volume par groupe musculaire (8 axes) avec filtres temporels 7j/30j/1an/total</li>
            <li><strong>Live workout</strong> avec GIF + MuscleMap visibles pendant la séance, log poids/reps par série, timer de repos auto</li>
            <li><strong>Nutrition</strong> : analyse de plats par photo (calories + macros), chef IA générant 5 recettes en swipe Tinder avec images FLUX</li>
            <li><strong>Stockage local-first</strong> via AsyncStorage + clé Gemini embarquée en env (zéro friction utilisateur)</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Robustesse des appels Gemini</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> erreurs 503/429 récurrentes lors des pics de charge.<br>
                <span class="font-semibold">Solution :</span> wrapper <code>callWithRetry</code> avec backoff exponentiel et bascule automatique sur <code>gemini-2.5-flash-lite</code>. Le free tier de Gemini Image étant à 0 requête, l'image generation a été délégée à Cloudflare Workers AI (10k req/jour gratuites).
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Garantir que l'IA ne hallucine pas d'exercices</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> Gemini inventait des exercices fictifs sans GIF ni muscles, cassant l'UX visuelle.<br>
                <span class="font-semibold">Solution :</span> shortlist filtrée de 60 exos passée au prompt avec leurs IDs, <code>responseSchema</code> imposant un <code>exerciseId</code> obligatoire, et fuzzy-match par nom en garde-fou si Gemini invente quand même.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Images de recettes uniques</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> deux providers d'image se sont succédé. Pollinations renvoyait la même image pour les 5 recettes (seed string ignoré), puis Gemini Image gratuit a été coupé.<br>
                <span class="font-semibold">Solution :</span> bascule sur Cloudflare FLUX-1-schnell avec data-URI base64 directe, prompt enrichi du nom de recette pour garantir l'unicité, fallback Pollinations conservé.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Spider chart SVG sans dépendance lourde</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problème :</span> visualiser le volume d'entraînement par groupe musculaire avec filtres temporels.<br>
                <span class="font-semibold">Solution :</span> composant SVG custom (react-native-svg) avec 8 axes regroupant les 17 muscles low-level, cercles concentriques et polygone rempli, ~120 lignes, zéro dépendance chart additionnelle.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "FitTrack est devenu un terrain de jeu complet pour pousser les LLM en contexte mobile : structured outputs, multi-modal (texte + image + photo), boucle de feedback IA ↔ données utilisateur, et une UX qui rivalise avec les apps fitness payantes. Chaque écran exploite le contexte santé pour rendre l'IA vraiment pertinente plutôt que générique.",
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
