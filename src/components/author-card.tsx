import Link from "next/link";
import { getData } from "@/data/resume";
import { ArrowRight } from "lucide-react";

const SOCIAL_KEYS = ["GitHub", "LinkedIn", "X", "Instagram"] as const;

function getSocials(locale: "en" | "fr") {
  const data = getData(locale);
  const social = data.contact.social as Record<
    string,
    { name: string; url: string; icon: (props: { className?: string }) => JSX.Element }
  >;
  return SOCIAL_KEYS.map((key) => social[key]).filter(Boolean);
}

/** Compact byline shown under the article title. */
export function AuthorByline({ locale }: { locale: "en" | "fr" }) {
  const data = getData(locale);
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      <img
        src={data.avatarUrl}
        alt={data.name}
        className="w-8 h-8 rounded-full object-cover border border-white dark:border-slate-700 shadow-sm"
      />
      <span className="text-sm font-semibold">{data.name}</span>
    </Link>
  );
}

/** Full author card with bio + social links. `compact` stacks it for narrow sidebars. */
export function AuthorCard({
  locale,
  compact = false,
}: {
  locale: "en" | "fr";
  compact?: boolean;
}) {
  const data = getData(locale);
  const socials = getSocials(locale);

  const labels = {
    writtenBy: data.i18n.blog.writtenBy,
    tagline: data.i18n.blog.authorTagline,
    viewProfile: data.i18n.blog.viewProfile,
  };

  const wrapper = compact
    ? "bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/80 dark:border-slate-700/50 shadow-xl"
    : "bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 border border-white/80 dark:border-slate-700/50 shadow-xl";

  return (
    <div className={wrapper}>
      <div
        className={
          compact
            ? "flex flex-col gap-4"
            : "flex flex-col sm:flex-row sm:items-center gap-5"
        }
      >
        <Link href={`/${locale}`} className="shrink-0">
          <img
            src={data.avatarUrl}
            alt={data.name}
            className={`rounded-2xl object-cover border border-white dark:border-slate-700 shadow-md ${
              compact ? "w-16 h-16" : "w-20 h-20"
            }`}
          />
        </Link>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-1">
            {labels.writtenBy}
          </p>
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {data.name}
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
            {labels.tagline}
          </p>

          <div className="flex items-center flex-wrap gap-2.5 mt-4">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
            <Link
              href={`/${locale}`}
              className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all ${
                compact ? "w-full mt-1" : "ml-auto"
              }`}
            >
              {labels.viewProfile}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
