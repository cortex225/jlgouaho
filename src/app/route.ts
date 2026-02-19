import { NextRequest, NextResponse } from "next/server";

/**
 * Fallback Route Handler for GET /
 * If the middleware doesn't catch the root URL, this route handler redirects
 * to the detected locale. This is a safety net — the middleware should
 * normally handle this before it reaches this point.
 */
export function GET(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const lang = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
  const locale = lang === "en" ? "en" : "fr";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}
