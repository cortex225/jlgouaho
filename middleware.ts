// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Si on est déjà sur une route localisée, on ne fait rien
  if (pathname.startsWith("/fr") || pathname.startsWith("/en")) {
    return I18nMiddleware(request);
  }

  // Redirection vers /en par défaut
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
