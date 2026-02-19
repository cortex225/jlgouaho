// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "fr"] as const;
type Locale = (typeof LOCALES)[number];

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "fr",
});

/**
 * Détecte la locale préférée à partir du header Accept-Language.
 * Retourne "en" ou "fr", avec "fr" comme fallback.
 */
function detectLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferences = acceptLanguage.split(",").map((lang) => {
    const [l, q = "q=1"] = lang.trim().split(";");
    return {
      locale: l.trim().split("-")[0].toLowerCase(),
      q: parseFloat(q.split("=")[1] ?? "1"),
    };
  });
  preferences.sort((a, b) => b.q - a.q);
  for (const { locale } of preferences) {
    if (locale === "en") return "en";
    if (locale === "fr") return "fr";
  }
  return "fr";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si le chemin n'a pas encore de préfixe de locale, rediriger vers la locale du navigateur
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (!hasLocale) {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
