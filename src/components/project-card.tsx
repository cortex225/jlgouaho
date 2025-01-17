"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon } from "@/components/ExpandableCardDemo";
import {ScrollArea} from "@/components/ui/scroll-area";
import { Carousel, Card as CarouselCard } from "@/components/ui/apple-cards-carousel"; // Import du composant Card du carrousel

// Ajout des nouvelles propriétés à l'interface Props
interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    // image?: string;
    video?: string;
    links?: readonly  {
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
                                // image,
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
            {/* Carte affichée */}
            <Card
                className={cn(
                    "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full cursor-pointer",
                    className
                )}
                onClick={() => setActive(true)}
            >
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
                {/*{image && (*/}
                {/*    <Image*/}
                {/*        src={image}*/}
                {/*        alt={title}*/}
                {/*        width={500}*/}
                {/*        height={300}*/}
                {/*        className="h-40 w-full overflow-hidden object-cover object-top"*/}
                {/*    />*/}
                {/*)}*/}
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
                                    <Badge
                                        className="px-1 py-0 text-[10px]"
                                        variant="secondary"
                                        key={tag}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </CardContent>
                <CardFooter className="px-2 pb-2">
                </CardFooter>
            </Card>

            {/* Modale détaillée */}
            <AnimatePresence>
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-10"
                        />

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="fixed inset-0 flex items-center justify-center z-[100]"
                        >
                            <div className="relative">
                                <motion.button
                                    key={`button-${title}-${id}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute -top-0 -right-12 flex items-center justify-center bg-neutral-200 rounded-full h-9 w-9 z-20"
                                    onClick={() => setActive(false)}
                                >
                                    <CloseIcon />
                                </motion.button>

                                <motion.div
                                    ref={ref}
                                    className="sm:max-w-[600px] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                                >
                                    {video && (
                                        <video
                                            src={video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="pointer-events-none mx-auto h-70 w-full object-cover object-top"
                                        />
                                    )}
                                    <ScrollArea className="h-[55vh]">

                                    <div className="p-4 max-w-[600px]">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-medium text-neutral-700 dark:text-neutral-200 ">
                                                {title}
                                            </h2>

                                            {links && links.length > 0 && (
                                                <div className=" flex flex-row flex-wrap items-start gap-1">
                                                    {links?.map((link, idx) => (
                                                        <Link href={link?.href} key={idx} target="_blank">
                                                            <Badge key={idx} className="flex gap-2 px-2 py-1 text-sm">
                                                                {link.icon}
                                                                {link.type}
                                                            </Badge>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                    </div>

                                        <p className="text-neutral-600 dark:text-neutral-400 text-base">
                                            {description}
                                        </p>
                                        {overview && (
                                            <section className="mt-4">
                                                <h4 className="text-lg font-semibold">Overview</h4>
                                                <p>{overview}</p>
                                            </section>
                                        )}
                                        {technologies && (
                                            <section className="mt-4">
                                                <h4 className="text-lg font-semibold">Technologies</h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {technologies.map((tech, index) => (
                                                        <Badge key={index}
                                                               className="px-2 py-1 text-sm ">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
                                        {features && (
                                            <section className="mt-4">
                                                <h4 className="text-lg font-semibold">Features</h4>
                                                <ul className="list-disc list-inside">
                                                    {features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </section>
                                        )}
                                        {/* Challenges */}
                                        {challenges && (
                                            <section>
                                                <h2 className="mt-4 text-xl font-semibold">Challenges & Solutions</h2>
                                                {challenges.map((challenge, index) => (
                                                    <div key={index}>
                                                        <h3 className="font-bold">{challenge.title}</h3>
                                                        <p>{challenge.description}</p>
                                                    </div>
                                                ))}
                                            </section>
                                        )}
                                        {/* Conclusion */}
                                        {conclusion && (
                                            <section>
                                                <h2 className="mt-4 text-xl font-semibold">Conclusion</h2>
                                                <p>{conclusion}</p>
                                            </section>
                                        )}
                                        {images && (
                                            <section className="mt-4">
                                                <h4 className="text-lg font-semibold">Gallery</h4>
                                                <Carousel
                                                    items={images.map((src, idx) => ({
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
                                                    })).map((item, idx) => (
                                                        <CarouselCard key={idx} card={item}  index={idx} layout /> // Utilisation du composant CarouselCard
                                                    ))}
                                                />
                                            </section>
                                        )}
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