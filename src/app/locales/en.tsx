// locales/en.ts
import type { Translations } from "./types";

const translations: Translations = {
  hello: "Hello",
  hero: {
    greeting: "Hi, I'm",
    title: "Full-Stack Developer | Automation & Cloud Specialist",
  },
  sections: {
    about: {
      title: "About me",
      description:
        "Full-stack developer with solid experience in .NET, Vue.js and Azure, as well as a strong appetite for cloud computing, DevOps and automation. I'm passionate about optimizing application performance and scalability. I've contributed to solutions that reduce cloud costs and improve deployment efficiency. Currently training for Microsoft AZ-900 and AI-900 certifications, I'm continuing to hone my skills to provide ever more innovative solutions tailored to market challenges.",
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
        `,
        start: "August 2024",
        end: "January 2025",
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
