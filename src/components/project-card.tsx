"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon } from "@/components/ExpandableCardDemo";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  Card as CarouselCard,
} from "@/components/ui/apple-cards-carousel";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  overview?: string;
  technologies?: string[];
  features?: string[];
  challenges?: {
    title: string;
    description: string;
  }[];
  conclusion?: string;
  images?: string[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  video,
  links,
  overview,
  technologies,
  features,
  challenges,
  conclusion,
  images,
  className,
}: Props) {
  const [active, setActive] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <Card
        className={cn(
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full cursor-pointer",
          className
        )}
        onClick={() => setActive(true)}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge className="px-1 py-0 text-[10px]" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2" />
      </Card>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-10 "
            />

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed inset-0 flex items-center justify-center z-[100] p-4 sm:p-6 ">
              <div className="relative w-full">
                <motion.button
                  key={`button-${title}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-2 right-0 sm:-right-12 flex items-center justify-center bg-neutral-200 rounded-full h-8 w-8 sm:h-9 sm:w-9  z-20"
                  onClick={() => setActive(false)}>
                  <CloseIcon />
                </motion.button>

                <motion.div
                  ref={ref}
                  className="w-full sm:max-w-[600px] mx-auto h-[90vh] sm:h-fit sm:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden">
                  {video && (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="pointer-events-none mx-auto h-48 sm:h-70 w-full object-cover object-top"
                    />
                  )}
                  <ScrollArea className="h-full sm:h-[55vh]">
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <h2 className="text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-200">
                          {title}
                        </h2>

                        {links && links.length > 0 && (
                          <div className="flex flex-wrap items-start gap-2">
                            {links?.map((link, idx) => (
                              <Link href={link?.href} key={idx} target="_blank">
                                <Badge
                                  key={idx}
                                  className="flex gap-2 px-2 py-1 text-sm">
                                  {link.icon}
                                  {link.type}
                                </Badge>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 space-y-6">
                        <p className="text-neutral-600 dark:text-neutral-400 text-base">
                          {description}
                        </p>

                        {overview && (
                          <section>
                            <h4 className="text-lg font-semibold mb-2">
                              Overview
                            </h4>
                            <p>{overview}</p>
                          </section>
                        )}

                        {technologies && (
                          <section>
                            <h4 className="text-lg font-semibold mb-2">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {technologies.map((tech, index) => (
                                <Badge
                                  key={index}
                                  className="px-2 py-1 text-sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </section>
                        )}

                        {features && (
                          <section>
                            <h4 className="text-lg font-semibold mb-2">
                              Features
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </section>
                        )}

                        {challenges && (
                          <section>
                            <h4 className="text-lg font-semibold mb-2">
                              Challenges & Solutions
                            </h4>
                            <div className="space-y-4">
                              {challenges.map((challenge, index) => (
                                <div key={index} className="space-y-1">
                                  <h5 className="font-medium">
                                    {challenge.title}
                                  </h5>
                                  <p className="text-neutral-600 dark:text-neutral-400">
                                    {challenge.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </section>
                        )}

                        {conclusion && (
                          <section>
                            <h4 className="text-lg font-semibold mb-2">
                              Conclusion
                            </h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                              {conclusion}
                            </p>
                          </section>
                        )}

                        {images && (
                          <section>
                            <h4 className="text-lg font-semibold mb-2">
                              Gallery
                            </h4>
                            <Carousel
                              items={images
                                .map((src, idx) => ({
                                  src,
                                  title: `${title} Image ${idx + 1}`,
                                  category: "Gallery",
                                  content: (
                                    <Image
                                      src={src}
                                      alt={`${title} Image ${idx + 1}`}
                                      width={800}
                                      height={100}
                                      className="rounded-lg"
                                    />
                                  ),
                                }))
                                .map((item, idx) => (
                                  <CarouselCard
                                    key={idx}
                                    card={item}
                                    index={idx}
                                    layout
                                  />
                                ))}
                            />
                          </section>
                        )}
                      </div>
                    </div>
                  </ScrollArea>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
