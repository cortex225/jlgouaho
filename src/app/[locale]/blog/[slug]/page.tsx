import { getBlogPosts, getPost, slugifyHeading } from "@/data/blog";
import { getData } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { BASE_URL, IN_LANGUAGE, OG_LOCALE, languageAlternates, ogImageUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, List, BookOpen, Tag } from "lucide-react";
import { AuthorByline, AuthorCard } from "@/components/author-card";
import { ShareButtons } from "@/components/share-buttons";
import { ModeToggle } from "@/components/mode-toggle";

type Locale = "en" | "fr";
type Params = { slug: string; locale: Locale };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug, locale } = params;
  const post = await getPost(slug, locale);
  if (!post) {
    return { title: locale === "fr" ? "Article introuvable" : "Article not found" };
  }

  const { title, publishedAt, updatedAt, summary, image, tags } = post.metadata;
  const ogImage = image
    ? `${BASE_URL}${image}`
    : ogImageUrl({ title, subtitle: summary, kind: "blog", locale });
  const route = `/blog/${post.slug}`;
  const postUrl = `${BASE_URL}/${locale}${route}`;

  return {
    title,
    description: summary,
    keywords: tags,
    alternates: {
      canonical: postUrl,
      languages: languageAlternates(route),
    },
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt ?? publishedAt,
      authors: [`${BASE_URL}/${locale}`],
      section: "Tech",
      tags,
      locale: OG_LOCALE[locale],
      url: postUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

type Heading = { id: string; text: string; level: number };

// Adds stable ids to h2/h3 and returns them for the table of contents.
function addHeadingIds(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  const out = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (_match, level: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "");
      let id = slugifyHeading(text) || `section-${headings.length + 1}`;
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count > 0) id = `${id}-${count + 1}`;
      headings.push({ id, text, level: parseInt(level, 10) });
      return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
    }
  );
  return { html: out, headings };
}

export default async function Blog({ params }: { params: Params }) {
  const { slug } = params;
  const locale: Locale = params.locale === "fr" ? "fr" : "en";
  const post = await getPost(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getBlogPosts(locale))
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const { html: contentWithIds, headings } = addHeadingIds(post.source);
  const isFrench = locale === "fr";
  const data = getData(locale);
  const inLanguage = IN_LANGUAGE[locale];
  const postUrl = `${BASE_URL}/${locale}/blog/${post.slug}`;
  const blogUrl = `${BASE_URL}/${locale}/blog`;
  const homeUrl = `${BASE_URL}/${locale}`;
  const coverImage = post.metadata.image
    ? `${BASE_URL}${post.metadata.image}`
    : ogImageUrl({ title: post.metadata.title, kind: "blog", locale });

  const labels = {
    backToBlog: isFrench ? "Retour au blogue" : "Back to blog",
    tableOfContents: isFrench ? "Sommaire" : "Table of contents",
    readingTime: isFrench ? "min de lecture" : "min read",
    relatedArticles: isFrench ? "À lire ensuite" : "Read next",
    updated: isFrench ? "Mis à jour le" : "Updated",
    tags: isFrench ? "Sujets" : "Topics",
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
    description: post.metadata.summary,
    inLanguage,
    image: coverImage,
    url: postUrl,
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingTime}M`,
    keywords: post.metadata.tags?.join(", "),
    articleSection: "Tech",
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: data.name,
      url: homeUrl,
    },
    publisher: { "@id": `${BASE_URL}/#person` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isFrench ? "Accueil" : "Home", item: homeUrl },
      { "@type": "ListItem", position: 2, name: isFrench ? "Blogue" : "Blog", item: blogUrl },
      { "@type": "ListItem", position: 3, name: post.metadata.title, item: postUrl },
    ],
  };

  const cardClass =
    "bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] border border-white/80 dark:border-slate-700/50 shadow-xl";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">
        <div className="fixed inset-0 animated-bg z-0 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto p-4 pb-24 md:p-8 md:pb-24 lg:p-12 lg:pb-24 relative z-10">
          {/* Top bar */}
          <nav
            aria-label={isFrench ? "Fil d'Ariane" : "Breadcrumb"}
            className="mb-8 flex items-center justify-between gap-4"
          >
            <Link
              href={`/${locale}/blog`}
              className="group inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-white dark:border-slate-800 shadow-sm hover:shadow-md"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-sm">{labels.backToBlog}</span>
            </Link>
            <ModeToggle />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className={`${cardClass} p-6 md:p-10`}>
                {post.metadata.image && (
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    width={1200}
                    height={630}
                    priority
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="w-full aspect-[1200/630] object-cover rounded-[1.5rem] mb-8 border border-white/80 dark:border-slate-700/50 shadow-lg"
                  />
                )}

                <header className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-balance">
                    {post.metadata.title}
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {post.metadata.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={14} />
                      <time dateTime={post.metadata.publishedAt}>
                        {formatDate(post.metadata.publishedAt, locale)}
                      </time>
                    </span>
                    {post.metadata.updatedAt && (
                      <span className="inline-flex items-center gap-2">
                        {labels.updated}{" "}
                        <time dateTime={post.metadata.updatedAt}>
                          {formatDate(post.metadata.updatedAt, locale)}
                        </time>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2">
                      <BookOpen size={14} />
                      {post.readingTime} {labels.readingTime}
                    </span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-slate-200/70 dark:border-slate-700/50 flex flex-wrap items-center justify-between gap-4">
                    <AuthorByline locale={locale} />
                    <ShareButtons url={postUrl} title={post.metadata.title} locale={locale} />
                  </div>
                </header>

                <div
                  className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:text-balance prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />

                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-slate-200/70 dark:border-slate-700/50 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 mr-1">
                      <Tag size={12} /> {labels.tags}
                    </span>
                    {post.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Author (mobile only, the sidebar handles desktop) */}
              <div className="mt-8 lg:hidden">
                <AuthorCard locale={locale} />
              </div>

              {relatedPosts.length > 0 && (
                <section className="mt-12" aria-labelledby="related-heading">
                  <h2
                    id="related-heading"
                    className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
                  >
                    {labels.relatedArticles}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/${locale}/blog/${relatedPost.slug}`}
                        className={`group block ${cardClass} p-6 hover:shadow-indigo-500/10 transition-all duration-300`}
                      >
                        {relatedPost.metadata.image && (
                          <Image
                            src={relatedPost.metadata.image}
                            alt=""
                            width={600}
                            height={315}
                            sizes="(min-width: 768px) 360px, 100vw"
                            className="w-full aspect-[1200/630] object-cover rounded-[1.25rem] mb-4 border border-white/80 dark:border-slate-700/50"
                          />
                        )}
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 line-clamp-2">
                          {relatedPost.metadata.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                          {relatedPost.metadata.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400">
                            {formatDate(relatedPost.metadata.publishedAt, locale)} · {relatedPost.readingTime} {labels.readingTime}
                          </span>
                          <span className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-all">
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {headings.length > 0 && (
                  <nav
                    aria-label={labels.tableOfContents}
                    className={`${cardClass} p-6`}
                  >
                    <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                      <List size={18} className="text-indigo-600 dark:text-indigo-400" />
                      <h2 className="font-bold text-base">{labels.tableOfContents}</h2>
                    </div>
                    <ol className="space-y-2">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className={`block text-sm transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                              heading.level === 2
                                ? "text-slate-600 dark:text-slate-300 font-medium"
                                : "text-slate-400 dark:text-slate-500 pl-4"
                            }`}
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}

                <AuthorCard locale={locale} compact />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
