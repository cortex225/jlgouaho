import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getData } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const generateMetadata = ({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}): Metadata => {
  const data = getData(locale);

  return {
    metadataBase: new URL(data.url),
    title: {
      default: data.name,
      template: `%s | ${data.name}`,
    },
    description: data.description,
    openGraph: {
      title: `${data.name}`,
      description: data.description,
      url: data.url,
      siteName: `${data.name}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
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
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-12 sm:py-24 px-6 overflow-x-hidden",
          fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Providers locale={locale}>
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[100vh] skew-y-12"
              )}
            />
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
