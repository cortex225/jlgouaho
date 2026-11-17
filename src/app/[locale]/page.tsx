import { getBlogPosts } from "@/data/blog";
import { getData } from "@/data/resume";
import { BASE_URL, IN_LANGUAGE } from "@/lib/seo";
import HomeClient from "./home-client";

// Home page: fetches the latest posts on the server and declares the
// ProfilePage and FAQPage structured data that only apply to this page.
export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  const lang = locale === "fr" ? "fr" : "en";
  const data = getData(lang);
  const t = data.i18n;
  const posts = await getBlogPosts(lang);
  const latestPosts = posts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    summary: p.metadata.summary,
    publishedAt: p.metadata.publishedAt,
  }));

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/${lang}#profile`,
    url: `${BASE_URL}/${lang}`,
    inLanguage: IN_LANGUAGE[lang],
    mainEntity: { "@id": `${BASE_URL}/#person` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/${lang}#faq`,
    inLanguage: IN_LANGUAGE[lang],
    mainEntity: t.sections.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient locale={lang} latestPosts={latestPosts} />
    </>
  );
}
