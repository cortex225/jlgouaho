"use client";

import { useState } from "react";
import { Check, Link2, Linkedin, Share2 } from "lucide-react";
import { Icons } from "@/components/icons";

type Props = {
  url: string;
  title: string;
  locale: "en" | "fr";
};

export function ShareButtons({ url, title, locale }: Props) {
  const [copied, setCopied] = useState(false);
  const isFrench = locale === "fr";

  const labels = {
    share: isFrench ? "Partager" : "Share",
    copy: isFrench ? "Copier le lien" : "Copy link",
    copied: isFrench ? "Lien copié" : "Link copied",
    linkedin: isFrench ? "Partager sur LinkedIn" : "Share on LinkedIn",
    x: isFrench ? "Partager sur X" : "Share on X",
    native: isFrench ? "Partager..." : "Share...",
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: nothing to do */
    }
  };

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      copy();
    }
  };

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const btn =
    "w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-all";

  return (
    <div className="flex items-center gap-2" aria-label={labels.share}>
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-1">
        {labels.share}
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.linkedin}
        title={labels.linkedin}
        className={btn}
      >
        <Linkedin size={16} />
      </a>
      <a
        href={`https://x.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.x}
        title={labels.x}
        className={btn}
      >
        <Icons.x className="size-4" />
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? labels.copied : labels.copy}
        title={copied ? labels.copied : labels.copy}
        className={btn}
      >
        {copied ? <Check size={16} className="text-emerald-500" /> : <Link2 size={16} />}
      </button>
      <button
        type="button"
        onClick={nativeShare}
        aria-label={labels.native}
        title={labels.native}
        className={`${btn} sm:hidden`}
      >
        <Share2 size={16} />
      </button>
    </div>
  );
}
