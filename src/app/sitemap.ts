import { getBlogPosts } from "@/data/blog";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.jlgouaho.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const staticRoutes = ["", "/blog", "/projects"];

  const entries: MetadataRoute.Sitemap = [];

  // Pages localisées uniquement - pas de / racine qui cause des redirects
  for (const locale of ["fr", "en"]) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
        // Liens alternatifs hreflang pour Google
        alternates: {
          languages: {
            fr: `${BASE_URL}/fr${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }

    for (const post of posts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            fr: `${BASE_URL}/fr/blog/${post.slug}`,
            en: `${BASE_URL}/en/blog/${post.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
