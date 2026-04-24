import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getData } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const BASE_URL = "https://www.jlgouaho.com";

export const generateMetadata = ({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}): Metadata => {
  const data = getData(locale);
  const canonicalUrl = `${BASE_URL}/${locale}`;
  const t = data.i18n;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t.seo.homeTitle,
      template: `%s | ${data.name}`,
    },
    description: t.seo.homeDescription,
    applicationName: data.name,
    authors: [{ name: data.name, url: canonicalUrl }],
    creator: data.name,
    publisher: data.name,
    keywords: t.seo.keywords,
    category: "technology",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fr-CA": `${BASE_URL}/fr`,
        "en-CA": `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/fr`,
      },
    },
    openGraph: {
      title: t.seo.homeTitle,
      description: t.seo.tagline,
      url: canonicalUrl,
      siteName: data.name,
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      alternateLocale: locale === "fr" ? "en_CA" : "fr_CA",
      type: "profile",
      firstName: "Jean-Luc",
      lastName: "Gouaho",
      username: "jlgouaho",
      images: [
        {
          url: `${BASE_URL}/me.png`,
          width: 800,
          height: 800,
          alt: `${data.name} — ${t.hero.title}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: t.seo.homeTitle,
      description: t.seo.tagline,
      card: "summary_large_image",
      creator: "@jlgouaho",
      site: "@jlgouaho",
      images: [`${BASE_URL}/me.png`],
    },
    verification: {
      google: "3fa472ef9a36100d",
    },
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const data = getData(locale as "en" | "fr");
  const t = data.i18n;
  const inLanguage = locale === "fr" ? "fr-CA" : "en-CA";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: data.name,
    givenName: "Jean-Luc",
    familyName: "Gouaho",
    additionalName: "Déto",
    alternateName: "jlgouaho",
    url: `${BASE_URL}/${locale}`,
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/me.png`,
      width: 800,
      height: 800,
    },
    jobTitle: t.hero.title,
    description: t.seo.tagline,
    email: "mailto:jlgouaho@gmail.com",
    telephone: "+1-450-521-1098",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Québec",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    nationality: { "@type": "Country", name: "Canada" },
    knowsLanguage: [
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/jlgouaho/",
      "https://github.com/cortex225",
      "https://x.com/jlgouaho",
      "https://www.instagram.com/jlgouaho/",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Cloud Computing",
      "Microsoft Azure",
      "DevOps",
      "C#",
      ".NET",
      "Vue.js",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "PostgreSQL",
      "SQL Server",
      "Docker",
      "CI/CD",
      "Serverless Architecture",
      "Business Process Automation",
      "Applicant Tracking Systems",
      "SaaS Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: t.hero.title,
      occupationLocation: {
        "@type": "Country",
        name: "Canada",
      },
      skills:
        "C#, .NET, Vue.js, React, Next.js, TypeScript, Python, Azure, Docker, DevOps, PostgreSQL",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Cégep de Granby",
      url: "https://www.cegepgranby.com/",
    },
    worksFor: {
      "@type": "Organization",
      name: "Evnia",
      url: "https://evnia.ca/",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: data.name,
    description: t.seo.tagline,
    inLanguage: ["fr-CA", "en-CA"],
    publisher: { "@id": `${BASE_URL}/#person` },
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/${locale}#profile`,
    url: `${BASE_URL}/${locale}`,
    inLanguage,
    dateModified: new Date().toISOString(),
    mainEntity: { "@id": `${BASE_URL}/#person` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/${locale}#faq`,
    inLanguage,
    mainEntity: t.sections.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={plusJakartaSans.variable}
    >
      <head>
        <link rel="preconnect" href="https://cwxxwhrcxhafmhhqszgm.supabase.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pub-c0874d8393bb493ea002a55cbc71d1ab.r2.dev" crossOrigin="anonymous" />
        {/* Anti-FOUC: applique le thème avant que React hydrate pour éviter le flash */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          plusJakartaSans.className
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers locale={locale}>
            <TooltipProvider delayDuration={0}>
              {children}
            </TooltipProvider>
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
