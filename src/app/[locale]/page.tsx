"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getData } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { SkillsAccordion } from "@/components/skills-accordion";
import { useI18n, useScopedI18n } from "@/app/locales/client";

const BLUR_FADE_DELAY = 0.04;

type Challenge = {
  title: string;
  description: string;
};

type ProjectTranslation = {
  description: string;
  overview: string;
  features: string[];
  challenges: Array<{
    title: string;
    description: string;
  }>;
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

type ProjectsType =
  | "magicSearch"
  | "instaHR"
  | "playerConnect"
  | "automaticChat";

const PROJECT_KEYS: Record<string, ProjectsType> = {
  MagicSearch: "magicSearch",
  InstaHR: "instaHR",
  PlayerConnect: "playerConnect",
  AutomaticChat: "automaticChat",
};

export default function Page({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}) {
  const t = useI18n();
  const sections = useScopedI18n("sections");
  const data = getData(locale);

  // Accès aux traductions des sections
  const greeting = sections("hero.greeting");
  const about = sections("about.title");
  const aboutDescription = sections("about.description");
  const work = sections("work.title");
  const education = sections("education.title");
  const skills = sections("skills.title");
  const projects = sections("projects");
  const contact = sections("contact");

  // Accès aux traductions des projets
  const getProjectTranslations = (key: ProjectsType): ProjectTranslation => {
    const projectPath = `sections.projects.${key}`;
    return {
      description: t(`${projectPath}.description`),
      overview: t(`${projectPath}.overview`),
      features: t(`${projectPath}.features`),
      challenges: t(`${projectPath}.challenges`),
      conclusion: t(`${projectPath}.conclusion`),
    };
  };

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
                text={`${t("hero.greeting")} ${data.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={`${t("hero.title")}`}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={data.name} src={data.avatarUrl} />
                <AvatarFallback>{data.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{about}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {aboutDescription}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{work}</h2>
          </BlurFade>
          {data.work.map((work, id) => (
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
            <h2 className="text-xl font-bold">{education}</h2>
          </BlurFade>
          {data.education.map((education, id) => (
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
            <h2 className="text-xl font-bold">{skills}</h2>
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
            {data.projects.map((project) => {
              const projectKey = PROJECT_KEYS[project.title];
              const projectTranslations = getProjectTranslations(projectKey);

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
                  challenges={projectTranslations.challenges}
                  conclusion={projectTranslations.conclusion}
                  images={[...project.images]}
                />
              );
            })}
          </div>
        </div>
      </section>

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
                  href={data.contact.social.LinkedIn.url}
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
