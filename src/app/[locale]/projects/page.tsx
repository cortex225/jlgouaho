import type { Metadata } from "next";
import { getData } from "@/data/resume";
import ProjectsClient from "./projects-client";
import { BASE_URL, OG_LOCALE, languageAlternates, ogImageUrl } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}): Promise<Metadata> {
  const data = getData(locale);
  const t = data.i18n;
  const url = `${BASE_URL}/${locale}/projects`;
  const ogImage = ogImageUrl({
    title: t.seo.projectsTitle,
    subtitle: t.seo.projectsDescription,
    kind: "projects",
    locale,
  });
  return {
    title: t.seo.projectsTitle,
    description: t.seo.projectsDescription,
    alternates: {
      canonical: url,
      languages: languageAlternates("/projects"),
    },
    openGraph: {
      title: t.seo.projectsTitle,
      description: t.seo.projectsDescription,
      url,
      siteName: data.name,
      locale: OG_LOCALE[locale],
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.seo.projectsTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.projectsTitle,
      description: t.seo.projectsDescription,
      images: [ogImage],
    },
  };
}

export default function ProjectsPage({ params }: { params: { locale: "en" | "fr" } }) {
  const data = getData(params.locale);
  const inLanguage = params.locale === "fr" ? "fr-CA" : "en-CA";
  const url = `${BASE_URL}/${params.locale}/projects`;

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    inLanguage,
    name: data.i18n.seo.projectsTitle,
    description: data.i18n.seo.projectsDescription,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#person` },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: data.projects.length,
      itemListElement: data.projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.description,
          url: p.href || url,
          inLanguage,
          author: { "@id": `${BASE_URL}/#person` },
          keywords: (p.technologies as readonly string[]).join(", "),
          ...(p.images && p.images.length > 0
            ? { image: `${BASE_URL}${p.images[0]}` }
            : {}),
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: params.locale === "fr" ? "Accueil" : "Home", item: `${BASE_URL}/${params.locale}` },
      { "@type": "ListItem", position: 2, name: params.locale === "fr" ? "Projets" : "Projects", item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ProjectsClient params={params} />
    </>
  );
}
