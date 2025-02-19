"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA, TRANSLATIONS } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

import { SkillsAccordion } from "@/components/skills-accordion";
import { useI18n, useScopedI18n } from "@/app/locales/client";
import { LocaleSelect } from "@/components/locale-select";
const BLUR_FADE_DELAY = 0.04;

type Challenge = {
  title: string;
  description: string;
};

type ProjectTranslations = {
  description: string;
  overview: string;
  features: string[];
  challenges: {
    [key: string]: Challenge;
  };
  conclusion: string;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  technologies: readonly string[];
  images: readonly string[];
  video?: string;
  links: Array<{
    type: string;
    href: string;
    icon: JSX.Element;
  }>;
};

type TranslationsType = typeof TRANSLATIONS;
type LocaleType = keyof TranslationsType;
type ProjectsType = "magicSearch" | "instaHR" | "llmReport" | "automaticChat";

const PROJECT_KEYS: Record<string, ProjectsType> = {
  MagicSearch: "magicSearch",
  InstaHR: "instaHR",
  llmReport: "llmReport",
  AutomaticChat: "automaticChat",
};

export default function Page({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) {
  const t = useI18n();
  const sections = useScopedI18n("sections");

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
    
      <section id="hero">
        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${t("hero.greeting")} ${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{sections("about")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{sections("work")}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{sections("education")}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3 border-2 rounded p-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{sections("skills")}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            <SkillsAccordion />
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {sections("projects.badge")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {sections("projects.subtitle")}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {sections("projects.description")}
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => {
              const projectKey = PROJECT_KEYS[project.title];
              const projectTranslations =
                TRANSLATIONS[locale].projects[projectKey];

              if (!projectTranslations) {
                console.warn(
                  `No translations found for project: ${project.title} in locale: ${locale}`
                );
                return null;
              }

              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  href={project.href}
                  description={projectTranslations.description}
                  dates={project.dates}
                  tags={[...project.technologies]}
                  video={project.video}
                  links={project.links}
                  overview={projectTranslations.overview}
                  technologies={[...project.technologies]}
                  features={projectTranslations.features}
                  challenges={Object.entries(
                    projectTranslations.challenges
                  ).map(([_, challenge]) => ({
                    title: challenge.title,
                    description: challenge.description,
                  }))}
                  conclusion={projectTranslations.conclusion}
                  images={[...project.images]}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {sections("contact.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {sections("contact.subtitle")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {sections("contact.description_start")}{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline">
                  {sections("contact.linkedinText")}
                </Link>{" "}
                {sections("contact.description_end")}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
