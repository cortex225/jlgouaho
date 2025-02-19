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
        features: [
          "Semantic search powered by OpenAI embeddings.",
          "Cross-platform compatibility with responsive design.",
          "Advanced filtering and ranking algorithms.",
          "Support for multi-language queries.",
        ],
        challenges: [
          {
            title: "Cross-browser compatibility",
            description:
              "Faced issues with Safari due to differences in CSS handling. Solved using Autoprefixer and testing on real devices.",
          },
          {
            title: "Performance optimization",
            description:
              "Reduced API response time by implementing efficient database indexing and caching.",
          },
        ],
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
        challenges: [
          {
            title: "Scalability",
            description:
              "Ensuring the platform could handle a large number of users simultaneously. Implemented optimized database queries and load balancing.",
          },
          {
            title: "Payment integration",
            description:
              "Integrating Stripe for secure payments while maintaining a seamless user experience.",
          },
        ],
        conclusion:
          "InstaHR allowed me to explore the integration of AI into the recruitment industry and provided valuable insights into building scalable, user-friendly platforms.",
      },
      playerConnect: {
        description:
          "An open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        overview:
          "playerConnect helps developers optimize their usage of OpenAI's GPT models by providing detailed insights into API usage and costs.",
        features: [
          "Detailed API request logging.",
          "Cost analysis and optimization suggestions.",
          "Prompt performance tracking.",
          "Real-time data visualization dashboards.",
        ],
        challenges: [
          {
            title: "Data privacy",
            description:
              "Ensuring user data remains secure while providing detailed analytics. Implemented encryption and anonymization techniques.",
          },
          {
            title: "Real-time updates",
            description:
              "Integrating WebSocket support for live updates without overloading the backend.",
          },
        ],
        conclusion:
          "playerConnect provided a deep dive into building data analytics platforms and solving challenges around real-time data handling.",
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
        challenges: [
          {
            title: "GPT fine-tuning",
            description:
              "Customizing GPT models for domain-specific knowledge while maintaining response accuracy.",
          },
          {
            title: "Integration complexity",
            description:
              "Ensuring seamless integration with third-party tools like Zendesk and Freshdesk.",
          },
        ],
        conclusion:
          "Developing Automatic Chat taught me the intricacies of integrating AI solutions into real-world business processes.",
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
