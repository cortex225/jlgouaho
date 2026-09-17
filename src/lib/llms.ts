import { getBlogPosts, getPost } from "@/data/blog";
import { getData } from "@/data/resume";

const BASE_URL = "https://www.jlgouaho.com";

function stripHtml(html: string) {
  return html
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Builds the llms.txt document (https://llmstxt.org) so AI assistants get a
 * clean, factual summary of who Jean-Luc is and where to find details.
 */
export async function buildLlmsTxt(full = false) {
  const fr = getData("fr");
  const en = getData("en");
  const posts = await getBlogPosts("fr");

  const lines: string[] = [];
  lines.push(`# ${fr.name}`);
  lines.push("");
  lines.push(`> ${en.i18n.seo.tagline}`);
  lines.push(`> ${fr.i18n.seo.tagline}`);
  lines.push("");
  lines.push(`- Site: ${BASE_URL} (fr: ${BASE_URL}/fr, en: ${BASE_URL}/en)`);
  lines.push(`- Role: ${en.i18n.hero.title}`);
  lines.push(`- Location: Québec, Canada (remote / hybrid)`);
  lines.push(`- Languages: French (native), English (advanced)`);
  lines.push(`- Email: ${fr.contact.email}`);
  lines.push(`- LinkedIn: ${fr.contact.social.LinkedIn.url}`);
  lines.push(`- GitHub: ${fr.contact.social.GitHub.url}`);
  lines.push("");

  lines.push("## Key facts");
  lines.push("");
  for (const item of en.i18n.sections.faq.items) {
    lines.push(`- **${item.question}** ${item.answer}`);
  }
  lines.push("");

  lines.push("## Skills");
  lines.push("");
  const byType = new Map<string, string[]>();
  for (const s of en.skills) {
    byType.set(s.type, [...(byType.get(s.type) ?? []), s.name]);
  }
  for (const [type, names] of byType) {
    lines.push(`- ${type}: ${names.join(", ")}`);
  }
  lines.push("");

  lines.push("## Experience");
  lines.push("");
  for (const job of en.work) {
    lines.push(`### ${job.title} · ${job.company} (${job.start} – ${job.end})`);
    lines.push("");
    lines.push(stripHtml(job.description));
    lines.push("");
  }

  lines.push("## Projects");
  lines.push("");
  lines.push(`Full list: ${BASE_URL}/en/projects`);
  lines.push("");
  for (const p of en.projects) {
    const link = p.href && p.href !== "#" ? ` (${p.href})` : "";
    lines.push(`- **${p.title}**${link}: ${p.description} Stack: ${p.technologies.join(", ")}.`);
  }
  lines.push("");

  lines.push("## Blog");
  lines.push("");
  lines.push(`Index: ${BASE_URL}/fr/blog (fr) · ${BASE_URL}/en/blog (en)`);
  lines.push("");
  for (const post of posts) {
    lines.push(
      `- [${post.metadata.title}](${BASE_URL}/fr/blog/${post.slug}) (${post.metadata.publishedAt}): ${post.metadata.summary}`
    );
  }
  lines.push("");

  if (full) {
    lines.push("## Blog articles (full text, French)");
    lines.push("");
    for (const summary of posts) {
      const post = await getPost(summary.slug, "fr");
      if (!post) continue;
      lines.push(`### ${post.metadata.title}`);
      lines.push("");
      lines.push(`Source: ${BASE_URL}/fr/blog/${post.slug} · Published: ${post.metadata.publishedAt}`);
      lines.push("");
      lines.push(post.raw.trim());
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Résumé (PDF)](${BASE_URL}/MyResume.pdf)`);
  lines.push(`- [Sitemap](${BASE_URL}/sitemap.xml)`);
  if (!full) lines.push(`- [Full content](${BASE_URL}/llms-full.txt)`);

  return lines.join("\n");
}
