"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { LocaleSelect } from "@/components/locale-select";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getData } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar() {
  const { locale = "fr" } = useParams<{ locale: "en" | "fr" }>();
  const data = getData(locale);

  // Construit un href locale-aware à partir d'un href relatif ("/", "/blog")
  // ou laisse intact si c'est une URL externe (http...)
  function localizeHref(href: string) {
    if (href.startsWith("http")) return href;
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-gradient-to-t from-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
      {/*
        Dock responsive :
        - mobile  : pleine largeur − 2rem de marge, items compacts
        - sm+     : largeur fixe centrée avec tous les items
      */}
      <Dock className="z-50 pointer-events-auto w-[calc(100vw-2rem)] sm:w-auto mx-auto justify-center relative flex min-h-full h-full items-center px-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10 dark:shadow-black/20 transform-gpu rounded-2xl overflow-x-hidden">

        {/* Nav items principaux (Home + Blog visibles toujours ; Download masqué sur mobile) */}
        {data.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const isDownload = isExternal; // seul lien externe = le CV
          return (
            <DockIcon key={item.href} className={isDownload ? "hidden sm:flex" : ""}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={localizeHref(item.href)}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 sm:size-12"
                    )}>
                    <item.icon className="size-4 sm:size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}

        {/* Séparateur + réseaux sociaux (masqués sur mobile, visibles sur sm+) */}
        <Separator orientation="vertical" className="hidden sm:block h-full" />
        {Object.entries(data.contact.social)
          .filter(([_, social]) => (social as any).navbar)
          .map(([name, social]) => {
            const typedSocial = social as {
              url: string;
              icon: React.ComponentType<{ className?: string }>;
              navbar: boolean;
            };
            return (
              <DockIcon key={name} className="hidden sm:flex">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={typedSocial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 sm:size-12"
                      )}>
                      <typedSocial.icon className="size-4 sm:size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}

        <Separator orientation="vertical" className="h-full py-2" />

        {/* Theme toggle */}
        <DockIcon className="me-1 sm:me-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full py-2" />

        {/* Sélecteur de langue */}
        <DockIcon>
          <LocaleSelect />
        </DockIcon>
      </Dock>
    </div>
  );
}
