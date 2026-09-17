export const BASE_URL = "https://www.jlgouaho.com";
export type Locale = "en" | "fr";

export const OG_LOCALE: Record<Locale, string> = { fr: "fr_CA", en: "en_CA" };
export const IN_LANGUAGE: Record<Locale, string> = { fr: "fr-CA", en: "en-CA" };

/** hreflang alternates shared by page metadata and the sitemap. */
export function languageAlternates(route: string) {
  return {
    "fr-CA": `${BASE_URL}/fr${route}`,
    "en-CA": `${BASE_URL}/en${route}`,
    "x-default": `${BASE_URL}/fr${route}`,
  };
}

/** URL of the dynamic Open Graph image rendered by /og. */
export function ogImageUrl(params: {
  title: string;
  subtitle?: string;
  kind: "home" | "blog" | "projects";
  locale: string;
}) {
  const search = new URLSearchParams({
    title: params.title,
    subtitle: params.subtitle ?? "",
    kind: params.kind,
    locale: params.locale,
  });
  return `${BASE_URL}/og?${search.toString()}`;
}
