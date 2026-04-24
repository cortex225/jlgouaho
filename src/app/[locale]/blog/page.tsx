import { getBlogPosts } from "@/data/blog";
import { getData } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, ArrowRight, Calendar } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

const BASE_URL = "https://www.jlgouaho.com";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}): Promise<Metadata> {
  const data = getData(locale);
  const title = data.i18n.seo.blogTitle;
  const description = data.i18n.seo.blogDescription;
  const url = `${BASE_URL}/${locale}/blog`;
  const ogLocale = locale === "fr" ? "fr_CA" : "en_CA";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "fr-CA": `${BASE_URL}/fr/blog`,
        "en-CA": `${BASE_URL}/en/blog`,
        "x-default": `${BASE_URL}/fr/blog`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: data.name,
      locale: ogLocale,
      title,
      description,
      images: [
        {
          url: `${BASE_URL}/me.png`,
          width: 800,
          height: 800,
          alt: data.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/me.png`],
    },
  };
}

export default async function BlogPage({ params: { locale } }: { params: { locale: "en" | "fr" } }) {
  const posts = await getBlogPosts();
  const data = getData(locale);

  const sorted = posts.sort((a, b) =>
    new Date(b.metadata.publishedAt) > new Date(a.metadata.publishedAt) ? 1 : -1
  );

  const labels = {
    backToProfile: locale === 'fr' ? 'Retour au Profil' : 'Back to Profile',
    title: data.i18n.blog.title,
    description: data.i18n.blog.description,
  };

  const inLanguage = locale === "fr" ? "fr-CA" : "en-CA";
  const blogUrl = `${BASE_URL}/${locale}/blog`;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    inLanguage,
    url: blogUrl,
    name: data.i18n.seo.blogTitle,
    description: data.i18n.seo.blogDescription,
    blogPost: sorted.map((post) => ({
      "@type": "BlogPosting",
      headline: post.metadata.title,
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      datePublished: post.metadata.publishedAt,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "fr" ? "Accueil" : "Home",
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: blogUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="fixed inset-0 animated-bg z-0 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto p-4 pb-24 md:p-8 md:pb-24 lg:p-12 lg:pb-24 relative z-10">

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 shadow-lg shadow-indigo-500/20">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {labels.title}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {labels.description}
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group block bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3">
                    {post.metadata.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.metadata.summary}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar size={12} />
                    <span>
                      {new Date(post.metadata.publishedAt).toLocaleDateString(
                        locale === 'fr' ? 'fr-CA' : 'en-CA',
                        { year: 'numeric', month: 'long', day: 'numeric' }
                      )}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-all">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
