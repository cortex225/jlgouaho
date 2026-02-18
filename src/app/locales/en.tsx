// locales/en.ts
import type { Translations } from "./types";

const translations: Translations = {
  hello: "Hello",
  hero: {
    greeting: "Hi, I'm",
    title: "Full-Stack Developer | Automation & Cloud Specialist",
    status: "Open to Work",
    techStack: "Tech Stack",
  },
  common: {
    overview: "Overview",
    features: "Key Features",
    challenges: "Challenges & Solutions",
    conclusion: "Conclusion",
    gallery: "Gallery",
    noLinks: "No external links available.",
    technologies: "Technologies",
    email: "Email",
    connect: "Connect",
    viewAllProjects: "View All Projects",
    getInTouch: "Get in Touch",
    allRightsReserved: "All rights reserved.",
    scanToContact: "Scan to contact",
    close: "Close",
    backToProfile: "Back to Profile",
    inProgress: "In Progress",
    showMore: "Show More",
    showLess: "Show Less",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  blog: {
    title: "Blog",
    description: "My thoughts on software development, life, and more.",
  },
  projectsPage: {
    allProjects: "All Projects",
    description: "A complete collection of my work, experiments, and open source contributions.",
    haveIdea: "Have an idea for a project?",
    letsDiscuss: "Let's Discuss",
    backToProfile: "Back to Profile",
    filterAll: "All",
  },
  sections: {
    availability: {
      title: "Availability",
      availableNow: "Available now",
      typeLabel: "Position type",
      modeLabel: "Work mode",
      languagesLabel: "Languages",
      types: "Full-time · Contract",
      modes: "Remote · Hybrid",
      languages: "French (native) · English (advanced)",
    },
    testimonials: {
      title: "Recommendations",
    },
    currently: {
      title: "Right Now",
      certificationLabel: "Certifications in progress",
      buildingLabel: "What I'm building",
      readingLabel: "What I'm reading",
    },
    contactForm: {
      title: "Let's Work Together",
      subtitle: "Describe your project or opportunity — I reply within 24h.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Hi Jean-Luc, I'm reaching out about...",
      send: "Send message",
      success: "Message sent! I'll reply within 24h.",
    },
    about: {
      title: "About me",
      description:
        "Full-Stack Developer with solid experience in .NET, Vue.js, and Azure, and a strong appetite for cloud computing, DevOps, and automation. Committed to optimizing application performance and scalability, I have contributed to solutions that reduce cloud costs and improve deployment efficiency.\n\nCurrently training for Microsoft certifications (AZ-900 and AI-900), I continue to refine my skills in order to deliver increasingly innovative solutions tailored to market challenges.",
    },
    work: {
      title: "Professional Experience",
      tractionDK: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Development and optimization</strong> of a <strong>SaaS CRM</strong> for car dealers in <strong>Groovy</strong>.</li>
            <li><strong>Improved customer communications</strong> (chat, calls) and UI redesign <strong>(Bootstrap, Vanilla JavaScript)</strong>.</li>
            <li><strong>Implementation of Agile processes</strong> and <strong>CI/CD with Git</strong> and integration of <strong>DevOps</strong> best practices.</li>
            <li><strong>Critical bug fixes</strong> and application performance improvements.</li>
          </ul>
          </ul>
        `,
        start: "August 2024",
        end: "January 2025",
      },
      evnia: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Low-code application development</strong>: Improving and customizing the application with <strong>Caspio</strong> using <strong>JavaScript, HTML, CSS</strong>, and <strong>Rest API</strong> integration to optimize <strong>Power Automate</strong> features for automation.</li>
            <li><strong>Collaboration and problem solving</strong>: Working as a team to analyze needs, identify and implement appropriate and innovative solutions.</li>
            <li><strong>Sustainable strategy</strong>: Proposing ideas and getting involved in defining social and environmental goals aimed at reducing the company's impact.</li>
          </ul>
        `,
        start: "March 2025",
        end: "Present",
        company: "Evnia, firm-conseil en écofiscalité",
        title: "Application Developer",
      },
      royalBroker: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Lead developer of InstaHR CRM</strong>, platform for managing contracts, employees, and payments.</li>
            <li><strong>Cloud migration to Azure</strong>, reducing costs from $600 to $135/month and accelerating deployments by 60%.</li>
            <li><strong>Recruitment automation</strong>: creation of an <strong>ATS</strong> filtering <strong>4000+ resumes in seconds</strong> via Python script.</li>
            <li><strong>Integration of automated follow-ups</strong> (email, WhatsApp) to increase candidate response rate.</li>
            <li><strong>Cross-department collaboration</strong> (HR, accounting, management) to align solution with business needs.</li>
          </ul>
        `,
        start: "August 2022",
        end: "August 2024",
      },
      royalBrokerInternship: {
        title: "Full-Stack Developer Intern",
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Development of credit value estimation websites using PHP and WordPress.</li>
            <li>Practical learning and implementation of optimized solutions.</li>
            <li>Hired following the internship due to demonstrated performance.</li>
          </ul>
        `,
        start: "August 2022",
        end: "May 2024",
        badge: "Internship",
      },
      rogers: {
        description: `
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Customer needs analysis</strong> and proposal of adapted solutions.</li>
            <li><strong>Development of communication and negotiation skills.</strong></li>
            <li><strong>Optimization of commercial strategies</strong> to achieve objectives.</li>
          </ul>
        `,
      },
    },
    certifications: {
      title: "Certifications",
      inProgress: "In Progress",
    },
    education: {
      title: "Education",
      description:
        "Computer Science program focused on software development, algorithms, and modern web technologies.",
    },
    skills: {
      title: "Skills",
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      cloudDevops: "Cloud & DevOps",
      tools: "Tools",
      cms: "CMS",
      marketing: "Marketing",
      projectManagement: "Project Management",
    },
    projects: {
      title: "My Projects",
      subtitle: "Check out my latest work",
      description:
        "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
      badge: "My Projects",
      magicSearch: {
        description:
          "A beautifully designed, hybrid search engine that enhances search accuracy by querying semantically related results.",
        overview:
          "MagicSearch is a search engine that leverages semantic understanding to deliver more accurate and context-aware results. It is designed for users who want faster, smarter, and more meaningful search experiences.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Semantic search powered by OpenAI embeddings</li>
            <li>Cross-platform compatibility with responsive design</li>
            <li>Advanced filtering and ranking algorithms</li>
            <li>Support for multi-language queries</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Cross-browser compatibility</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Faced issues with Safari due to differences in CSS handling. Solved using Autoprefixer and testing on real devices.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Performance optimization</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Reduced API response time by implementing efficient database indexing and caching.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Building MagicSearch was a rewarding experience that enhanced my understanding of search algorithms and frontend/backend optimization. It taught me how to balance user experience with performance.",
      },
      instaHR: {
        description:
          "A SaaS CRM for human resources management when I started working at Royal Broker.",
        overview:
          "InstaHR streamlines the recruitment process by leveraging machine learning to analyze resumes, job descriptions, and match candidates efficiently.",
        features: `
         <ul class="list-disc pl-4 space-y-1">
            <li>Complete recruitment cycle management (job postings, applications, interviews)</li>
            <li>Performance tracking and employee evaluations</li>
            <li>Automation of HR administrative tasks</li>
            <li>Real-time notifications for important updates</li>
            <li>Secure authentication with role management</li>
            <li>Integration with accounting and payment services (Zoho API)</li>
          </ul>
        `,
        challenges: `
            <div class="space-y-6">
                <!-- PrimeVue Integration -->
                <div class="space-y-1">
                <h5 class="font-semibold text-lg flex items-center gap-2">
                    🚀 Integrating PrimeVue into Razor Views (.cshtml)
                </h5>
                <p class="text-neutral-700 dark:text-neutral-300">
                    <span class="font-semibold">Problem:</span> Difficulty using PrimeVue components directly in .cshtml files of ASP.NET.<br>
                    <span class="font-semibold">Solution:</span> Implemented a <span class="font-semibold text-blue-500">Vite ⚡</span> server to load Vue as a microfrontend, ensuring optimal compatibility with Razor.
                </p>
                </div>

                <!-- Payment Integration -->
                <div class="space-y-1">
                <h5 class="font-semibold text-lg flex items-center gap-2">
                    💳 Payment Integration with Stripe and Zoho
                </h5>
                <p class="text-neutral-700 dark:text-neutral-300">
                    <span class="font-semibold">Problem:</span> Need for a secure and scalable solution to manage employee payments.<br>
                    <span class="font-semibold">Solution:</span> Initially integrated with Stripe, then migrated to <span class="font-semibold text-blue-500">Zoho API</span>, developing a dedicated service to handle <span class="italic">token refreshing</span>.
                </p>
                </div>

                <!-- Cloud Cost Optimization -->
                <div class="space-y-1">
                <h5 class="font-semibold text-lg flex items-center gap-2">
                    ☁️ Cloud Cost Optimization
                </h5>
                <p class="text-neutral-700 dark:text-neutral-300">
                    <span class="font-semibold">Problem:</span> High cloud costs with uncertainty about the best service (Azure, AWS, GCP).<br>
                    <span class="font-semibold">Solution:</span> Conducted a comparative analysis of cloud providers and implemented a <span class="font-semibold text-green-500">serverless approach</span> to reduce expenses.
                </p>
                </div>
            </div>
        `,
        conclusion:
          "InstaHR allowed me to explore the integration of AI into the recruitment industry and provided valuable insights into building scalable, user-friendly platforms.",
      },
      playerConnect: {
        description:
          "The platform that connects basketball players with recruiters and coaches. 📊🏀",
        overview:
          "PlayerConnect is a platform that connects basketball players with recruiters and coaches. It allows players to showcase their performance, recruiters to access detailed profiles, and coaches to efficiently manage team tracking.",
        features: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Detailed player profiles with stats and videos 📊🎥</li>
      <li>Matchmaking system between recruiters and players 🏀🔍</li>
      <li>Interactive match and event calendar 📅</li>
      <li>Real-time notifications for recruiters and players 📢</li>
      <li>Built-in messaging system for seamless communication 💬</li>
    </ul>
  `,
        challenges: `
    <div class="space-y-4">
      <div class="space-y-1">
        <h5 class="font-medium">🔹 Automated Performance Analysis</h5>
        <p class="text-neutral-600 dark:text-neutral-400">
          <span class="font-semibold">Problem:</span> Turning match videos into actionable insights.<br>
          <span class="font-semibold">Solution:</span> Integrated AI with OpenAI API to extract key statistics from videos.
        </p>
      </div>
      <div class="space-y-1">
        <h5 class="font-medium">🔹 Player Engagement and Visibility</h5>
        <p class="text-neutral-600 dark:text-neutral-400">
          <span class="font-semibold">Problem:</span> Helping players maximize their exposure to recruiters.<br>
          <span class="font-semibold">Solution:</span> Implemented an optimized profile system with performance-based recommendations and an advanced matchmaking algorithm.
        </p>
      </div>
      <div class="space-y-1">
        <h5 class="font-medium">🔹 User Experience and Performance</h5>
        <p class="text-neutral-600 dark:text-neutral-400">
          <span class="font-semibold">Problem:</span> Ensuring smooth navigation despite the use of real-time data and videos.<br>
          <span class="font-semibold">Solution:</span> Optimized the frontend with Next.js, implemented WebSockets for real-time communication, and hosted efficiently on Vercel and Firebase.
        </p>
      </div>
    </div>
  `,
        conclusion:
          "PlayerConnect is an innovative platform that revolutionizes sports recruitment by directly connecting players with recruiters and coaches. With artificial intelligence and performance analysis, it provides a unique opportunity for talents to stand out and access new career prospects.",
      },
      recruitEase: {
        description:
          "An innovative recruitment platform that uses AI to automate and optimize the hiring process.",
        overview:
          "RecruitEase simplifies recruitment by automating resume analysis, candidate screening, and interview management.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>AI-powered resume analysis</li>
            <li>Intelligent candidate-job matching</li>
            <li>Automated interview management</li>
            <li>Advanced analytics dashboards</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">AI Accuracy</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Optimizing matching algorithms to ensure relevant matches.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">User Experience</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Creating an intuitive interface for both recruiters and candidates.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "RecruitEase demonstrates how AI can transform recruitment by making it more efficient and objective.",
      },
      leadMapper: {
        description:
          "A lead generation tool that extracts business contacts from Google Maps - built for freelancers to find clients for free.",
        overview:
          "LeadMapper was born from my experience as a freelancer needing to find potential clients without expensive lead generation services. This application allows users to search and extract business information (restaurants, clinics, hotels, etc.) directly from Google Maps, providing emails and phone numbers ready for outreach.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Search businesses by category and location on Google Maps</li>
            <li>Extract contact information: emails, phone numbers, addresses</li>
            <li>Export leads to CSV for easy CRM import</li>
            <li>Filter results by business type and rating</li>
            <li>Bulk extraction with smart pagination</li>
            <li>Free alternative to expensive lead generation tools</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🔹 Dynamic DOM Parsing</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Google Maps uses dynamic content loading with complex nested structures.<br>
                <span class="font-semibold">Solution:</span> Implemented MutationObserver to detect DOM changes and robust selectors to handle Google's frequent UI updates.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔹 Data Extraction Accuracy</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Not all businesses have complete contact information displayed.<br>
                <span class="font-semibold">Solution:</span> Implemented intelligent scraping that navigates to business detail pages to find hidden emails and contact details.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔹 User Experience</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Making the tool intuitive for non-technical freelancers.<br>
                <span class="font-semibold">Solution:</span> Designed a clean, simple interface with clear progress indicators and one-click export functionality.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "LeadMapper solves a real problem I faced as a freelancer - finding clients without paying for expensive lead services. This project taught me the value of building tools that solve your own problems first.",
      },
      portfolio: {
        description:
          "My personal portfolio website built with Next.js 14, featuring i18n support and a modern, responsive design.",
        overview:
          "This portfolio showcases my projects, skills, and professional experience. Built with modern technologies, it features full internationalization (English/French), dark mode support, and smooth animations to create an engaging user experience.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Bilingual support (EN/FR) with seamless language switching</li>
            <li>Dark/Light mode with system preference detection</li>
            <li>Responsive design optimized for all devices</li>
            <li>Project showcase with detailed modal views</li>
            <li>Smooth animations with Framer Motion</li>
            <li>SEO optimized with dynamic metadata</li>
            <li>Fast performance with Next.js App Router</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🌐 Internationalization Architecture</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Managing translations while maintaining type safety and good DX.<br>
                <span class="font-semibold">Solution:</span> Created a typed translation system with TypeScript ensuring compile-time validation of all translation keys.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🎨 Design System Consistency</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Maintaining visual consistency across light/dark modes.<br>
                <span class="font-semibold">Solution:</span> Leveraged Tailwind CSS with custom CSS variables and Shadcn UI components for a cohesive design system.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">⚡ Performance Optimization</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Balancing rich animations with fast load times.<br>
                <span class="font-semibold">Solution:</span> Implemented lazy loading, optimized images, and used Vercel's edge network for optimal delivery.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Building this portfolio was an opportunity to showcase my full-stack capabilities while experimenting with the latest Next.js features. It serves as both a professional showcase and a testament to my attention to detail and design sensibility.",
      },
      budgetBuddy: {
        description:
          "A smart personal finance management app that helps users track expenses, set budgets, and achieve financial goals.",
        overview:
          "Budget Buddy is a comprehensive personal finance application designed to help users take control of their money. It provides intuitive expense tracking, budget creation, and insightful analytics to promote better financial habits.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Expense tracking with category classification</li>
            <li>Monthly budget creation and monitoring</li>
            <li>Visual analytics with charts and graphs</li>
            <li>Recurring transaction management</li>
            <li>Financial goal setting and progress tracking</li>
            <li>Export reports in PDF/CSV formats</li>
            <li>Multi-currency support</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">💰 Real-time Budget Calculations</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Ensuring accurate budget tracking with real-time updates across categories.<br>
                <span class="font-semibold">Solution:</span> Implemented reactive state management with optimistic updates and background sync.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">📊 Data Visualization</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Presenting complex financial data in an understandable way.<br>
                <span class="font-semibold">Solution:</span> Created custom chart components with interactive tooltips and drill-down capabilities.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🔒 Data Security</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Protecting sensitive financial information.<br>
                <span class="font-semibold">Solution:</span> Implemented end-to-end encryption and secure authentication with multi-factor support.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Budget Buddy taught me the importance of user-centric design in fintech applications. The project reinforced my skills in data visualization, state management, and building secure applications that handle sensitive user data.",
      },
      hvd: {
        description:
          "A modern veterinary clinic website redesign - delivering a fresh, professional UI for better client experience.",
        overview:
          "HVD (Hôpital Vétérinaire) is a website redesign project for a veterinary clinic client. The goal was to modernize their online presence with a clean, professional design that better reflects the quality of care they provide to pets and their owners.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Modern, clean UI design with professional aesthetics</li>
            <li>Fully responsive layout for all devices</li>
            <li>Service showcase with clear descriptions</li>
            <li>Team presentation section</li>
            <li>Easy-to-find contact information and location</li>
            <li>Fast loading and SEO optimized</li>
            <li>Accessible design following best practices</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">🎨 Client Vision Translation</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Understanding and translating the client's vision into a cohesive design.<br>
                <span class="font-semibold">Solution:</span> Conducted thorough discovery sessions and created multiple mockups to align on the desired aesthetic.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">📱 Mobile-First Approach</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Most pet owners browse on mobile when looking for vet services.<br>
                <span class="font-semibold">Solution:</span> Designed mobile-first with touch-friendly navigation and quick-access contact buttons.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">⚡ Performance Optimization</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Ensuring fast load times despite high-quality imagery.<br>
                <span class="font-semibold">Solution:</span> Implemented image optimization, lazy loading, and efficient caching strategies.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "This freelance project reinforced my skills in client communication and translating business needs into effective web design. It demonstrated the impact a modern website can have on a local business's professional image.",
      },
      virtualCardPro: {
        description:
          "A digital business card and professional portfolio app - bridging physical and digital networking with smart features.",
        overview:
          "Virtual Business Card Pro is a high-performance, fully responsive digital business card designed to convert visitors into clients. It serves as a central hub for professional identity, bridging the physical and digital worlds with smart features like QR codes, vCard downloads, and Google Wallet integration.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>📱 Fully responsive design: mobile app-like interface & desktop split-view</li>
            <li>🌍 Multi-language support: instant FR/EN toggling</li>
            <li>💼 Rich content sections: About, Services, Process, Testimonials</li>
            <li>📇 vCard download: one-click contact saving (.vcf)</li>
            <li>📲 Google Wallet integration: QR code for mobile wallet</li>
            <li>⚡ One-tap contact: direct links for Email, Calendly, LinkedIn</li>
            <li>🎨 Modern UI: glassmorphism effects, smooth animations</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">📱 Responsive Design Excellence</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Creating a seamless experience across mobile (compact interface) and desktop (split-view layout).<br>
                <span class="font-semibold">Solution:</span> Implemented adaptive layouts with Tailwind CSS breakpoints and sticky positioning for optimal viewing.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">📲 Wallet Integration</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Enabling users to save contact info directly to their phone's wallet.<br>
                <span class="font-semibold">Solution:</span> Implemented Google Wallet API with dynamic QR code generation for instant card saving.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">🌍 Internationalization</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span class="font-semibold">Problem:</span> Supporting both French and English with instant switching.<br>
                <span class="font-semibold">Solution:</span> Built a lightweight i18n system with React context for seamless language toggling.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "Virtual Business Card Pro showcases modern React 19 development with Vite, demonstrating my ability to create polished, professional applications with cutting-edge UI/UX and practical business utility.",
      },
    },

    contact: {
      title: "Contact",
      subtitle: "Get in Touch",
      description_start: "Want to chat? Just shoot me a dm",
      description_end: "and I'll respond in less than 24 hours.",
      badge: "Contact",
      linkedinText: "with a direct question on linkedin",
    },
  },
} as const;

export default translations;
