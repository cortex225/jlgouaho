// locales/en.ts
export default {
  hello: "Hello",
  hero: {
    greeting: "Hi, I'm",
  },
  sections: {
    about: "About",
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
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
    hackathons: {
      title: "Hackathons",
      subtitle: "I like building things",
      description:
        "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
      badge: "Hackathons",
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
