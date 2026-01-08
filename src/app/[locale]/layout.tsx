import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getData } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
