import { getBlogPosts, getPost } from "@/data/blog";
import { getData } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, List, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `${getData().url}${image}`
    : `${getData().url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${getData().url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  
  const regex = /<h([23])[^>]*>([^<]*)<\/h[23]>/gi;
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    const text = match[2];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({
      level: parseInt(match[1]),
      id,
      text,
    });
  }
  
  return headings;
}

function addIdsToHeadings(html: string): string {
  return html.replace(/<h([23])>([^<]*)<\/h[23]>/gi, (_, level, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}) {
  const { slug, locale } = params;
  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const sortedPosts = allPosts
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  const headings = extractHeadings(post.source);
  const contentWithIds = addIdsToHeadings(post.source);
  const isFrench = locale === 'fr';

  const labels = {
    backToBlog: isFrench ? 'Retour au Blog' : 'Back to Blog',
    tableOfContents: isFrench ? ' sommaire' : 'Table of Contents',
    readingTime: isFrench ? 'min de lecture' : 'min read',
    relatedArticles: isFrench ? 'Autres articles' : 'Related Articles',
    readMore: isFrench ? 'Lire la suite' : 'Read more',
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${getData().url}${post.metadata.image}`
              : `${getData().url}/og?title=${post.metadata.title}`,
            url: `${getData().url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: getData().name,
            },
          }),
        }}
      />
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">
      <div className="fixed inset-0 animated-bg z-0 pointer-events-none" />
      
      <div className="w-full max-w-9xl mx-auto p-4 pb-24 md:p-8 md:pb-24 lg:p-12 lg:pb-24 relative z-10">
        {/* Back Button */}
        <Link
          href={`/${locale}/blog`}
          className="group inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-white dark:border-slate-800 shadow-sm hover:shadow-md mb-8"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm">{labels.backToBlog}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/80 dark:border-slate-700/50 shadow-xl">
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {post.metadata.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{formatDate(post.metadata.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} />
                    <span>5 {labels.readingTime}</span>
                  </div>
                </div>
              </header>

              {/* Content */}
              <div 
                className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
            </div>

            {/* Related Articles */}
            {sortedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {labels.relatedArticles}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {sortedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/${locale}/blog/${relatedPost.slug}`}
                      className="group block bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/80 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                    >
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 line-clamp-2">
                        {relatedPost.metadata.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                        {relatedPost.metadata.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          {formatDate(relatedPost.metadata.publishedAt)}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-all">
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar - Table of Contents */}
          {headings.length > 0 && (
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/80 dark:border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                  <List size={18} className="text-indigo-600 dark:text-indigo-400" />
                  <h3 className="font-bold">{labels.tableOfContents}</h3>
                </div>
                <nav className="space-y-2">
                  {headings.map((heading, index) => (
                    <a
                      key={index}
                      href={`#${heading.id}`}
                      className={`block text-sm transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                        heading.level === 2
                          ? 'text-slate-600 dark:text-slate-300 font-medium'
                          : 'text-slate-400 dark:text-slate-500 pl-4'
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
