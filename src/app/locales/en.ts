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
          "An intelligent recruitment platform designed to match candidates with job opportunities using AI-powered algorithms.",
        overview:
          "InstaHR streamlines the recruitment process by leveraging machine learning to analyze resumes, job descriptions, and match candidates efficiently.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Automated resume analysis and job matching</li>
            <li>Integration with third-party APIs for enhanced functionality</li>
            <li>Secure payment system for premium features</li>
            <li>Real-time notifications for recruiters and candidates</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Scalability</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Ensuring the platform could handle a large number of users simultaneously. Implemented optimized database queries and load balancing.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Payment integration</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Integrating Stripe for secure payments while maintaining a seamless user experience.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "InstaHR allowed me to explore the integration of AI into the recruitment industry and provided valuable insights into building scalable, user-friendly platforms.",
      },
      playerConnect: {
        description:
          "An open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        overview:
          "playerConnect helps developers optimize their usage of OpenAI's GPT models by providing detailed insights into API usage and costs.",
        features: `
          <ul class="list-disc pl-4 space-y-1">
            <li>Detailed API request logging</li>
            <li>Cost analysis and optimization suggestions</li>
            <li>Prompt performance tracking</li>
            <li>Real-time data visualization dashboards</li>
          </ul>
        `,
        challenges: `
          <div class="space-y-4">
            <div class="space-y-1">
              <h5 class="font-medium">Data privacy</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Ensuring user data remains secure while providing detailed analytics. Implemented encryption and anonymization techniques.
              </p>
            </div>
            <div class="space-y-1">
              <h5 class="font-medium">Real-time updates</h5>
              <p class="text-neutral-600 dark:text-neutral-400">
                Integrating WebSocket support for live updates without overloading the backend.
              </p>
            </div>
          </div>
        `,
        conclusion:
          "playerConnect provided a deep dive into building data analytics platforms and solving challenges around real-time data handling.",
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
