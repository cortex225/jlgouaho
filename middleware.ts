// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "fr"] as const;
type Locale = (typeof LOCALES)[number];

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

  // Si le chemin a déjà un préfixe de locale valide, laisser passer
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Sinon, détecter la locale et rediriger
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
