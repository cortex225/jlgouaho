import {Icons} from "@/components/icons";
import {Download, HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
    name: "Déto Jean-Luc Gouaho",
    initials: "DV",
    url: "https://dillion.io",
    location: "Quebec, CA",
    locationLink: "",
    description:
        "A full-stack developer passionate about creating innovative web and mobile solutions.",
    summary:
        "I’m a young and passionate Full-Stack developer with expertise in ASP.NET, SQL, JavaScript, and DevOps, including Azure DevOps. I thrive on creating innovative solutions, solving complex problems, and collaborating in dynamic environments. Dedicated to continuous learning, I aim to deliver exceptional user experiences and make a meaningful impact through technology.",
    avatarUrl: "/me.png",
    skills: [
        // Langages de programmation
        {name: "C#", type: "Langages", icon: "/csharp.svg"},
        {name: "JavaScript", type: "Langages", icon: "/javascript.svg"},
        {name: "TypeScript", type: "Langages", icon: "/typescript.svg"},
        {name: "Java", type: "Langages", icon: "/java.svg"},
        {name: "Python", type: "Langages", icon: "/python.svg"},
        {name: "Kotlin", type: "Langages", icon: "/kotlin.svg"},

        // Frameworks et bibliothèques
        {name: ".NET", type: "Frameworks", icon: "/dotnet.svg"},
        {name: "React", type: "Frameworks", icon: "/react.svg"},
        {name: "Vue.js", type: "Frameworks", icon: "/vuejs.svg"},
        {name: "Grails", type: "Frameworks", icon: "/grails.svg"},
        {name: "Node.js", type: "Frameworks", icon: "/nodejs.svg"},

        // Bases de données
        {name: "PostgreSQL", type: "Databases", icon: "/postgresql.svg"},
        {name: "MySQL", type: "Databases", icon: "/mysql.svg"},
        {name: "MongoDB", type: "Databases", icon: "/mongodb.svg"},
        {name: "Redis", type: "Databases", icon: "/redis.svg"},
        {name: "SQL Server", type: "Databases", icon: "/sqlserver.svg"},

        // Cloud et DevOps
        {name: "AWS", type: "Cloud & DevOps", icon: "/aws.svg"},
        {name: "Azure", type: "Cloud & DevOps", icon: "/azure.svg"},
        {name: "Google Cloud", type: "Cloud & DevOps", icon: "/google-cloud.svg"},
        {name: "Docker", type: "Cloud & DevOps", icon: "/docker.svg"},

        // Outils de développement
        {name: "Git", type: "Outils", icon: "/git.svg"},
        {name: "Figma", type: "Outils", icon: "/figma.svg"},
        {name: "VS Code", type: "Outils", icon: "/vscode.svg"},
        {name: "IntelliJ IDEA", type: "Outils", icon: "/intellij.svg"},

        // CMS
        {name: "WordPress", type: "CMS", icon: "/wordPress.svg"},
        {name: "Shopify", type: "CMS", icon: "/shopify.svg"},

        // Marketing digital
        {name: "SEO", type: "Marketing", icon: "/seo.svg"},
        {name: "Google Analytics", type: "Marketing", icon: "/google-analytics.svg"},

        // Gestion de projet et business
        {name: "Project Management", type: "Project Management", icon: ""},
        {name: "Agile", type: "Project Management", icon: "/agile.svg"},
        {name: "Sales", type: "Project Management", icon: "/sales.svg"},
    ],
    navbar: [
        {href: "/", icon: HomeIcon, label: "Home"},
        {
            href: "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/MyResume.pdf",
            icon: Download,
            label: "Download my resume"
        },
    ],
    contact: {
        email: "jlgouaho@gmail.com",
        tel: "+14505211098",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/cortex225",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jlgouaho/",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/jlgouaho",
                icon: Icons.x,

                navbar: true,
            },
            // Youtube: {
            //   name: "Youtube",
            //   url: "https://dub.sh/dillion-youtube",
            //   icon: Icons.youtube,
            //   navbar: true,
            // },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Traction DK",
            href: "https://www.tractiondk.com/",
            badges: [],
            location: "Remote",
            title: "Full-Stack Developer",
            logoUrl: "/traction.jpeg",
            start: "August 2024",
            end: "January 2025",
            description:
                "Development and integration of functionalities on the enterprise platform with Java, Groovy and Grails",
        },
        {
            company: "Royal Broker Solutions",
            badges: [],
            href: "https://royalbrokersolutions.com/our-services",
            location: "Remote",
            title: "Full-Stack Developer",
            logoUrl: "/royal.png",
            start: "August 2022",
            end: "August 2024",
            description: `
      On-line training and regular practice of the proprietary language of the company's platform.
Development and integration of functionalities on the enterprise platform with .NET.
Creation and maintenance of PHP websites, specializing in landing page development with WordPress.
Collaboration with business teams to draw up technical specifications.
Efficient project management: on time, on budget, quality assurance.
Active contribution to architectural and technological choices, in collaboration with the team for innovative solutions.
      `,
        },
        {
            company: "Royal Broker Solutions",
            badges: [],
            href: "https://royalbrokersolutions.com/our-services",
            location: "Remote",
            title: "Full-Stack Developer",
            logoUrl: "/royal.png",
            start: "November 2021",
            end: "April 2022",
            description: `Skills: Project management - .NET framework - SQL - PHP - WordPress - C# - JavaScript - Android development - DevOps - Web
                    design - digital marketing
                    Digital marketing`,
        },
        {
            company: "Rogers Communications",
            href: "https://www.bestbuy.com/",
            badges: [],
            location: "Granby, CA",
            title: "Sales Specialist",
            logoUrl: "/rogers.png",
            start: "January 2019",
            end: "April 2019",
            description: `Enhance the in-store experience by offering outstanding service and value-added solutions to our customers.
                    Promote the Rogers and Fido brands, including the Rogers Mastercard.
                    Customer engagement: Build relationships with customers by sending personalized communications via calls and text
                    messages.
                    Adaptability and creativity: Ability to evolve in a changing environment with a creative mindset, while being motivated to achieve
                    sales targets.`,
        },
        // {
        //   company: "BestBuy Canada",
        //   href: "https://www.bestbuy.com/",
        //   badges: [],
        //   location: "Granby, CA",
        //   title: "Sales Specialist",
        //   logoUrl: "/bestbuy.png",
        //   start: "January 2019",
        //   end: "April 2019",
        //   description:
        //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
        // },
    ],
    education: [
        {
            school: "Cégep de Granby",
            href: "https://www.cegepgranby.com/",
            degree: "DEC in Computer Science",
            logoUrl: "/cegep.png",
            end: "Mai 2024",
        },
    ],
    projects: [
        {
            title: "MagicSearch",
            href: "https://magic-search-psi.vercel.app",
            dates: "Jan 2024 - Feb 2024",
            active: true,
            description:
                "A beautifully designed, hybrid search engine that enhances search accuracy by querying semantically related results.",
            overview: "MagicSearch is a search engine that leverages semantic understanding to deliver more accurate and context-aware results. It is designed for users who want faster, smarter, and more meaningful search experiences.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Drizzle",
                "TailwindCSS",
                "Shadcn UI",
                "OpenAI",
            ],
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
            images: [
                "/projects/magic-search/magic-1.png",
                "/projects/magic-search/magic-2.png",
            ],
            video:
                "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/magic-search.mp4",
                links: [
                    {
                        type: "Website",
                        href: "https://magic-search-psi.vercel.app",
                        icon: <Icons.globe className="size-3" />,
                    },
                    {
                        type: "Github",
                        href: "https://github.com/cryptotrends/cryptotrends",
                        icon: <Icons.github className="h-4 w-4"/>,
                    },
                ],
        },
        {
            title: "InstaHR",
            href: "https://myinstahr.ca",
            dates: "June 2023 - Present",
            active: true,
            description:
                "An intelligent recruitment platform designed to match candidates with job opportunities using AI-powered algorithms.",
            overview: "InstaHR streamlines the recruitment process by leveraging machine learning to analyze resumes, job descriptions, and match candidates efficiently.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
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
            images: [
                "/projects/instaHR/login.png",
                "/projects/instaHR/dash.png",
                "/projects/instaHR/login.png",
                "/projects/instaHR/dash.png",
                "/projects/instaHR/login.png",
                "/projects/instaHR/dash.png",
                "/projects/instaHR/login.png",
                "/projects/instaHR/dash.png",

            ],
            video: "https://cdn.magicui.design/bento-grid.mp4",
            links: [
                {
                    type: "Website",
                    href: "https://magic-search-psi.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Github",
                    href: "https://github.com/cryptotrends/cryptotrends",
                    icon: <Icons.github className="h-4 w-4"/>,
                },
            ],
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "An open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            overview: "llm.report helps developers optimize their usage of OpenAI's GPT models by providing detailed insights into API usage and costs.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
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
            images: [
                "/llm-dashboard.png",
                "/llm-analytics.png",
            ],
            video:
                "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/yeye.mp4?t=2025-01-14T19%3A20%3A58.076Z",
                links: [
                    {
                        type: "Website",
                        href: "https://magic-search-psi.vercel.app",
                        icon: <Icons.globe className="size-3" />,
                    },
                    {
                        type: "Github",
                        href: "https://github.com/cryptotrends/cryptotrends",
                        icon: <Icons.github className="h-4 w-4"/>,
                    },
                ],
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "An AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            overview: "Automatic Chat aims to reduce customer support workload by providing instant, AI-generated responses for common issues.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
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
            images: [
                "/automatic-chat-interface.png",
                "/automatic-chat-analytics.png",
            ],
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
                links: [
                    {
                        type: "Website",
                        href: "https://magic-search-psi.vercel.app",
                        icon: <Icons.globe className="size-3" />,
                    },
                    {
                        type: "Github",
                        href: "https://github.com/cryptotrends/cryptotrends",
                        icon: <Icons.github className="h-4 w-4"/>,
                    },
                ],
        },
    ],
    hackathons: [
        {
            title: "Hack Western 5",
            dates: "November 23rd - 25th, 2018",
            location: "London, Ontario",
            description:
                "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "Hack The North",
            dates: "September 14th - 16th, 2018",
            location: "Waterloo, Ontario",
            description:
                "Developed a mobile application which delivers university campus wide events in real time to all students.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "FirstNet Public Safety Hackathon",
            dates: "March 23rd - 24th, 2018",
            location: "San Francisco, California",
            description:
                "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
            icon: "public",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
            links: [],
        },
        {
            title: "DeveloperWeek Hackathon",
            dates: "February 3rd - 4th, 2018",
            location: "San Francisco, California",
            description:
                "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
            links: [
                {
                    title: "Github",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/cryptotrends/cryptotrends",
                },
            ],
        },
        {
            title: "HackDavis",
            dates: "January 20th - 21st, 2018",
            location: "Davis, California",
            description:
                "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
            win: "Best Data Hack",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4"/>,
                    href: "https://devpost.com/software/my6footprint",
                },
                {
                    title: "ML",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/Wallet6/my6footprint-machine-learning",
                },
                {
                    title: "iOS",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/Wallet6/CarbonWallet",
                },
                {
                    title: "Server",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/Wallet6/wallet6-server",
                },
            ],
        },
        {
            title: "ETH Waterloo",
            dates: "October 13th - 15th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
            links: [
                {
                    title: "Organization",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/ethdocnet",
                },
            ],
        },
        {
            title: "Hack The North",
            dates: "September 15th - 17th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed a virtual reality application allowing users to see themselves in third person.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Streamer Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/justinmichaud/htn2017",
                },
                {
                    title: "Client Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/RTSPClient",
                },
            ],
        },
        {
            title: "Hack The 6ix",
            dates: "August 26th - 27th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/ShareShip/ShareShip",
                },
                {
                    title: "Site",
                    icon: <Icons.globe className="h-4 w-4"/>,
                    href: "https://share-ship.herokuapp.com/",
                },
            ],
        },
        {
            title: "Stupid Hack Toronto",
            dates: "July 23rd, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/nsagirlfriend/nsagirlfriend",
                },
            ],
        },
        {
            title: "Global AI Hackathon - Toronto",
            dates: "June 23rd - 25th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
            win: "1st Place Winner",
            links: [
                {
                    title: "Article",
                    icon: <Icons.globe className="h-4 w-4"/>,
                    href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/TinySamosas/",
                },
            ],
        },
        {
            title: "McGill AI for Social Innovation Hackathon",
            dates: "June 17th - 18th, 2017",
            location: "Montreal, Quebec",
            description:
                "Developed realtime facial microexpression analyzer using AI",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
            links: [],
        },
        {
            title: "Open Source Circular Economy Days Hackathon",
            dates: "June 10th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
            win: "1st Place Winner",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/genecis",
                },
            ],
        },
        {
            title: "Make School's Student App Competition 2017",
            dates: "May 19th - 21st, 2017",
            location: "International",
            description: "Improved PocketDoc and submitted to online competition",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
            win: "Top 10 Finalist | Honourable Mention",
            links: [
                {
                    title: "Medium Article",
                    icon: <Icons.globe className="h-4 w-4"/>,
                    href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
                },
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4"/>,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4"/>,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        },
        {
            title: "HackMining",
            dates: "May 12th - 14th, 2017",
            location: "Toronto, Ontario",
            description: "Developed neural network to optimize a mining process",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
            links: [],
        },
        {
            title: "Waterloo Equithon",
            dates: "May 5th - 7th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4"/>,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4"/>,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        },
        {
            title: "SpaceApps Waterloo",
            dates: "April 28th - 30th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/earthwatch",
                },
            ],
        },
        {
            title: "MHacks 9",
            dates: "March 24th - 26th, 2017",
            location: "Ann Arbor, Michigan",
            description:
                "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/threejs-planes",
                },
            ],
        },
        {
            title: "StartHacks I",
            dates: "March 4th - 5th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
            win: "1st Place Winner",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source (Mobile)",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/mattBlackDesign/recipic-ionic",
                },
                {
                    title: "Source (Server)",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/mattBlackDesign/recipic-rails",
                },
            ],
        },
        {
            title: "QHacks II",
            dates: "February 3rd - 5th, 2017",
            location: "Kingston, Ontario",
            description:
                "Developed a mobile game which enables city-wide manhunt with random lobbies",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source (Mobile)",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/dillionverma/human-huntr-react-native",
                },
                {
                    title: "Source (API)",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/mattBlackDesign/human-huntr-rails",
                },
            ],
        },
        {
            title: "Terrible Hacks V",
            dates: "November 26th, 2016",
            location: "Waterloo, Ontario",
            description:
                "Developed a mock of Windows 11 with interesting notifications and functionality",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
                },
            ],
        },
        {
            title: "Portal Hackathon",
            dates: "October 29, 2016",
            location: "Kingston, Ontario",
            description:
                "Developed an internal widget for uploading assignments using Waterloo's portal app",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4"/>,
                    href: "https://github.com/UWPortalSDK/crowmark",
                },
            ],
        },
    ],
} as const;
