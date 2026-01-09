import { getBlogPosts } from "@/data/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const blogs = posts.map((post) => ({
    url: `https://jlgouaho.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `https://jlgouaho.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Create entries for both locales (since your site uses /en and /fr)
  // And also the base URLs (which might redirect based on middleware)
  
  const entries: MetadataRoute.Sitemap = [];

  ['en', 'fr'].forEach(locale => {
     // Static routes
     routes.forEach(route => {
        entries.push({
            url: `https://jlgouaho.com/${locale}${route.url.replace('https://jlgouaho.com', '')}`,
            lastModified: route.lastModified,
            changeFrequency: 'weekly',
            priority: route.url === 'https://jlgouaho.com' ? 1 : 0.8,
        });
     });

     // Blog posts
     blogs.forEach(blog => {
        entries.push({
            url: `https://jlgouaho.com/${locale}${blog.url.replace('https://jlgouaho.com', '')}`,
            lastModified: blog.lastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
     });
  });

  return entries;
}
