export type Translations = {
  hello: string;
  hero: {
    greeting: string;
    title: string;
  };
  sections: {
    about: {
      title: string;
      description: string;
    };
    work: {
      title: string;
      tractionDK: {
        description: string;
        start: string;
        end: string;
      };
      royalBroker: {
        description: string;
        start: string;
        end: string;
      };
      royalBrokerInternship: {
        title: string;
        description: string;
        start: string;
        end: string;
        badge: string;
      };
      rogers: {
        description: string;
      };
    };
    education: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      languages: string;
      frameworks: string;
      databases: string;
      cloudDevops: string;
      tools: string;
      cms: string;
      marketing: string;
      projectManagement: string;
    };
    projects: {
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      video: string | null;
      images: string[];
      links: {
        type: string;
        href: string;
        icon: string;
      }[];
      magicSearch: {
        description: string;
        overview: string;
        features: string[];
        challenges: Array<{
          title: string;
          description: string;
        }>;
        conclusion: string;
      };
      instaHR: {
        description: string;
        overview: string;
        features: string[];
        video: string | null;
        images: string[];
        links: {
          type: string;
          href: string;
          icon: string;
        }[];
        challenges: Array<{
          title: string;
          description: string;
        }>;
        conclusion: string;
      };
      playerConnect: {
        description: string;
        overview: string;
        features: string[];
        video: string | null;
        images: string[];
        links: {
          type: string;
          href: string;
          icon: string;
        }[];
        challenges: Array<{
          title: string;
          description: string;
        }>;
        conclusion: string;
      };
      recruitEase: {
        description: string;
        video: string | null;
        images: string[];
        links: {
          type: string;
          href: string;
          icon: string;
        }[];
        overview: string;
        features: string[];
        challenges: Array<{
          title: string;
          description: string;
        }>;
      };
    };
    contact: {
      title: string;
      badge: string;
      subtitle: string;
      description_start: string;
      description_end: string;
      linkedinText: string;
    };
  };
};
