"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, BookOpen, Code, Home } from "lucide-react";

const COPY = {
  fr: {
    code: "Erreur 404",
    title: "Cette page n'existe pas",
    description:
      "Le lien est peut-être périmé ou l'article a été déplacé. Voici où reprendre.",
    home: "Retour au profil",
    projects: "Voir les projets",
    blog: "Lire le blogue",
  },
  en: {
    code: "Error 404",
    title: "This page does not exist",
    description:
      "The link may be outdated or the article was moved. Here is where to pick up.",
    home: "Back to profile",
    projects: "View projects",
    blog: "Read the blog",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "fr";
  const t = COPY[locale];

  const links = [
    { href: `/${locale}`, label: t.home, icon: Home },
    { href: `/${locale}/projects`, label: t.projects, icon: Code },
    { href: `/${locale}/blog`, label: t.blog, icon: BookOpen },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative flex items-center justify-center p-6">
      <div className="fixed inset-0 animated-bg z-0 pointer-events-none" />
      <main className="relative z-10 w-full max-w-lg text-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-10 border border-white dark:border-slate-800 shadow-xl">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
          {t.code}
        </p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
          {t.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">{t.description}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {links.map(({ href, label, icon: Icon }, i) => (
            <Link
              key={href}
              href={href}
              className={
                i === 0
                  ? "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:scale-105 transition-transform"
                  : "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              }
            >
              {i === 0 ? <ArrowLeft size={16} /> : <Icon size={16} />}
              {label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
