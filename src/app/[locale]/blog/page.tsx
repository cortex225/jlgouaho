import { getBlogPosts } from "@/data/blog";
import { getData } from "@/data/resume";
import { formatDateShort } from "@/lib/utils";
import { BASE_URL, IN_LANGUAGE, OG_LOCALE, languageAlternates, ogImageUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { AuthorCard } from "@/components/author-card";

type Locale = "en" | "fr";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const data = getData(locale);
  const title = data.i18n.seo.blogTitle;
  const description = data.i18n.seo.blogDescription;
  const url = `${BASE_URL}/${locale}/blog`;
  const ogImage = ogImageUrl({ title, subtitle: description, kind: "blog", locale });

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates("/blog"),
    },
    openGraph: {
      type: "website",
      url,
      siteName: data.name,
      locale: OG_LOCALE[locale],
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPage({ params: { locale } }: { params: { locale: Locale } }) {
  const posts = await getBlogPosts(locale);
  const data = getData(locale);
  const isFrench = locale === "fr";
  const [featured, ...rest] = posts;

  const labels = {
    backToProfile: data.i18n.common.backToProfile,
    title: data.i18n.blog.title,
    description: data.i18n.blog.description,
    latest: isFrench ? "Dernier article" : "Latest article",
    allPosts: isFrench ? "Tous les articles" : "All articles",
    readingTime: isFrench ? "min de lecture" : "min read",
    readArticle: isFrench ? "Lire l'article" : "Read article",
    count: isFrench ? `${posts.length} articles` : `${posts.length} articles`,
  };

  const inLanguage = IN_LANGUAGE[locale];
  const blogUrl = `${BASE_URL}/${locale}/blog`;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    inLanguage,
    url: blogUrl,
    name: data.i18n.seo.blogTitle,
    description: data.i18n.seo.blogDescription,
    author: { "@id": `${BASE_URL}/#person` },
    publisher: { "@id": `${BASE_URL}/#person` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${BASE_URL}/${locale}/blog/${post.slug}#article`,
      headline: post.metadata.title,
      description: post.metadata.summary,
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      datePublished: post.metadata.publishedAt,
      dateModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
      ...(post.metadata.image ? { image: `${BASE_URL}${post.metadata.image}` } : {}),
      keywords: post.metadata.tags?.join(", "),
      author: { "@id": `${BASE_URL}/#person` },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isFrench ? "Accueil" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isFrench ? "Blogue" : "Blog", item: blogUrl },
    ],
  };

  const meta = (post: (typeof posts)[number]) => (
    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
      <span className="inline-flex items-center gap-1.5">
        <Calendar size={12} />
        <time dateTime={post.metadata.publishedAt}>
          {formatDateShort(post.metadata.publishedAt, locale)}
        </time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock size={12} />
        {post.readingTime} {labels.readingTime}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="fixed inset-0 animated-bg z-0 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto p-4 pb-24 md:p-8 md:pb-24 lg:p-12 lg:pb-24 relative z-10">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-white dark:border-slate-800 shadow-sm"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">{labels.backToProfile}</span>
          </Link>
          <ModeToggle />
        </div>

        {/* Title */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 shadow-lg shadow-indigo-500/20">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {labels.title}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-balance">
            {labels.description}
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            {labels.count}
          </p>
        </header>

        {/* Featured post */}
        {featured && (
          <Link
            href={`/${locale}/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-white dark:bg-slate-900 rounded-[2rem] p-5 md:p-8 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 mb-12"
          >
            {featured.metadata.image && (
              <Image
                src={featured.metadata.image}
                alt=""
                width={1200}
                height={630}
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full aspect-[1200/630] object-cover rounded-[1.5rem] border border-slate-100 dark:border-slate-800"
              />
            )}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                {labels.latest}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 text-balance">
                {featured.metadata.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-4">
                {featured.metadata.summary}
              </p>
              <div className="flex items-center justify-between">
                {meta(featured)}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {labels.readArticle}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Posts */}
        {rest.length > 0 && (
          <section aria-labelledby="all-posts-heading">
            <h2
              id="all-posts-heading"
              className="text-xl font-bold text-slate-800 dark:text-white mb-6 ml-1"
            >
              {labels.allPosts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-[1.75rem] p-5 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {post.metadata.image && (
                    <Image
                      src={post.metadata.image}
                      alt=""
                      width={600}
                      height={315}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="w-full aspect-[1200/630] object-cover rounded-[1.25rem] mb-4 border border-slate-100 dark:border-slate-800"
                    />
                  )}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 line-clamp-2">
                    {post.metadata.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.metadata.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    {meta(post)}
                    <span className="shrink-0 w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-all">
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Author */}
        <div className="mt-12 max-w-3xl mx-auto">
          <AuthorCard locale={locale} />
        </div>
      </div>
    </div>
  );
}
