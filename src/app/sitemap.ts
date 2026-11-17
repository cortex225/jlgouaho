import { getBlogPosts } from "@/data/blog";
import { MetadataRoute } from "next";
import { BASE_URL, languageAlternates } from "@/lib/seo";

const LOCALES = ["fr", "en"] as const;

// Last real change to the profile or project list: update when they change
// instead of reporting the build date to search engines.
const PROFILE_UPDATED = "2026-11-17";

// Same hreflang keys as the page metadata (alternates.languages) so Google
// sees one consistent set of alternates.
function alternates(route: string) {
  return { languages: languageAlternates(route) };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const latestPost = posts
    .map((p) => p.metadata.updatedAt ?? p.metadata.publishedAt)
    .sort()
    .at(-1);

  const staticRoutes: { route: string; priority: number; lastModified?: string }[] = [
    { route: "", priority: 1, lastModified: PROFILE_UPDATED },
    { route: "/projects", priority: 0.8, lastModified: PROFILE_UPDATED },
    { route: "/blog", priority: 0.8, lastModified: latestPost },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Only localized URLs: the bare "/" always redirects.
  for (const locale of LOCALES) {
    for (const { route, priority, lastModified } of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: lastModified ?? new Date().toISOString().split("T")[0],
        changeFrequency: "weekly",
        priority,
        alternates: alternates(route),
      });
    }

    for (const post of posts) {
      const route = `/blog/${post.slug}`;
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: alternates(route),
      });
    }
  }

  return entries;
}
