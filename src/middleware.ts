import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "fr"] as const;
type Locale = (typeof LOCALES)[number];

function detectLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferences = acceptLanguage.split(",").map((lang) => {
    const [code, q = "q=1"] = lang.trim().split(";");
    return {
      locale: code.trim().split("-")[0].toLowerCase(),
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

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
