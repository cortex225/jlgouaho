import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type Locale = "en" | "fr";
const CONTENT_DIR = path.join(process.cwd(), "content");
const DEFAULT_LOCALE: Locale = "fr";

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
function resolveFilePath(slug: string, locale: Locale) {
  const localized = path.join(CONTENT_DIR, `${slug}.${locale}.mdx`);
  if (fs.existsSync(localized)) return localized;
  return path.join(CONTENT_DIR, `${slug}.${DEFAULT_LOCALE}.mdx`);
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

export async function getPost(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const filePath = resolveFilePath(slug, locale);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

export function getPostMeta(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const filePath = resolveFilePath(slug, locale);
  let source = fs.readFileSync(filePath, "utf-8");
  const { data: metadata } = matter(source);
  return {
    metadata,
    slug,
  };
}

async function getAllPosts(locale: Locale) {
  const slugs = Array.from(
    new Set(getMDXFiles(CONTENT_DIR).map((file) => parseFileName(file).slug))
  );
  return Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = getPostMeta(slug, locale);
      return { metadata, slug };
    })
  );
}

export async function getBlogPosts(locale: Locale = DEFAULT_LOCALE) {
  return getAllPosts(locale);
}
