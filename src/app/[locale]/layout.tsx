import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getData } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const generateMetadata = ({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}): Metadata => {
  const data = getData(locale);
  const baseUrl = "https://www.jlgouaho.com";
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: data.name,
      template: `%s | ${data.name}`,
    },
    description: data.description.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fr": `${baseUrl}/fr`,
        "en": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: `${data.name}`,
      description: data.description.description,
      url: canonicalUrl,
      siteName: `${data.name}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      type: "website",
      images: [
        {
          url: `${baseUrl}/me.png`,
          width: 800,
          height: 800,
          alt: data.name,
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
      title: `${data.name}`,
      card: "summary_large_image",
      creator: "@jlgouaho",
    },
    verification: {
      google: "",
      yandex: "",
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
  const baseUrl = "https://www.jlgouaho.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/me.png`,
    jobTitle: data.description.title,
    description: data.description.description,
    email: "jlgouaho@gmail.com",
    telephone: "+14505211098",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quebec",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.linkedin.com/in/jlgouaho/",
      "https://github.com/cortex225",
      "https://x.com/jlgouaho",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "C#", ".NET", "Azure", "Vue.js", "React", "Next.js",
      "TypeScript", "PostgreSQL", "Docker", "DevOps", "Cloud Computing",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Google Fonts — chargement CDN (pas de download au build time) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Anti-FOUC: applique le thème avant que React hydrate pour éviter le flash */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
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
