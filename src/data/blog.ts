import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type PostMetadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary: string;
  image?: string;
  tags?: string[];
};

export type PostSummary = {
  slug: string;
  metadata: PostMetadata;
  readingTime: number;
  wordCount: number;
};

export type Post = PostSummary & {
  source: string;
  raw: string;
};

type Locale = "en" | "fr";
const CONTENT_DIR = path.join(process.cwd(), "content");
const DEFAULT_LOCALE: Locale = "fr";
const WORDS_PER_MINUTE = 200;

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// Files are named `<slug>.<locale>.mdx` (e.g. `my-post.fr.mdx`).
function parseFileName(file: string) {
  const base = file.replace(/\.mdx$/, ""); // "<slug>.<locale>"
  const idx = base.lastIndexOf(".");
  return { slug: base.slice(0, idx), locale: base.slice(idx + 1) as Locale };
}

// Resolve the file for a slug in the requested locale, falling back to the default.
// Returns null when the post does not exist in any locale.
function resolveFilePath(slug: string, locale: Locale): string | null {
  // Guard against path traversal from the URL segment.
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  const localized = path.join(CONTENT_DIR, `${slug}.${locale}.mdx`);
  if (fs.existsSync(localized)) return localized;
  const fallback = path.join(CONTENT_DIR, `${slug}.${DEFAULT_LOCALE}.mdx`);
  return fs.existsSync(fallback) ? fallback : null;
}

export function countWords(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_>`\[\]()!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readingTimeMinutes(wordCount: number) {
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

// URL-safe anchor ids that keep accented words readable ("étape-1" instead of "tape-1").
export function slugifyHeading(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&[a-z]+;|&#\d+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): Promise<Post | null> {
  const filePath = resolveFilePath(slug, locale);
  if (!filePath) return null;
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const content = await markdownToHTML(rawContent);
  const wordCount = countWords(rawContent);
  return {
    source: content,
    raw: rawContent,
    metadata: data as PostMetadata,
    slug,
    wordCount,
    readingTime: readingTimeMinutes(wordCount),
  };
}

export function getPostMeta(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): PostSummary | null {
  const filePath = resolveFilePath(slug, locale);
  if (!filePath) return null;
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const wordCount = countWords(content);
  return {
    metadata: data as PostMetadata,
    slug,
    wordCount,
    readingTime: readingTimeMinutes(wordCount),
  };
}

export async function getBlogPosts(locale: Locale = DEFAULT_LOCALE): Promise<PostSummary[]> {
  const slugs = Array.from(
    new Set(getMDXFiles(CONTENT_DIR).map((file) => parseFileName(file).slug))
  );
  return slugs
    .map((slug) => getPostMeta(slug, locale))
    .filter((p): p is PostSummary => p !== null)
    .sort((a, b) => (a.metadata.publishedAt < b.metadata.publishedAt ? 1 : -1));
}
