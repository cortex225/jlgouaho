"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getData } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { SkillsAccordion } from "@/components/skills-accordion";
import { useI18n } from "@/app/locales/client";
import type { Translations } from "@/app/locales/types";

const BLUR_FADE_DELAY = 0.04;

type Challenge = {
  title: string;
  description: string;
};

type ProjectTranslation = {
  description: string;
  overview: string;
  features: string;
  challenges: Challenge[] | string;
  conclusion: string;
};

type ProjectsType = keyof Translations["sections"]["projects"];

const PROJECT_KEYS: Record<string, ProjectsType> = {
  MagicSearch: "magicSearch",
  InstaHR: "instaHR",
  PlayerConnect: "playerConnect",
  RecruitEase: "recruitEase",
};

export default function Page({
  params: { locale },
}: {
  params: { locale: "en" | "fr" };
}) {
  const t = useI18n();
  const data = getData(locale);

  // Accès aux traductions des sections
  const greetingText = t("hero.greeting");
  const aboutTitle = t("sections.about.title");
  const aboutDesc = t("sections.about.description");
  const workTitle = t("sections.work.title");
  const educationTitle = t("sections.education.title");
  const skillsTitle = t("sections.skills.title");
  const projectsTitle = t("sections.projects.title");
  const contactTitle = t("sections.contact.title");

  // Accès aux traductions des projets
  const getProjectTranslations = (
    key: ProjectsType
  ): ProjectTranslation | null => {
    if (!key) {
      console.error("Project key is undefined for title:", key);
      return null;
    }

    return {
      description: t(`sections.projects.${key}.description`),
      overview: t(`sections.projects.${key}.overview`),
      features: t(`sections.projects.${key}.features`),
      challenges: t(`sections.projects.${key}.challenges`),
      conclusion: t(`sections.projects.${key}.conclusion`),
    };
  };

  const renderChallenges = (challenges: any) => {
    if (Array.isArray(challenges)) {
      return (
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="space-y-1">
              <h5 className="font-medium">{challenge.title}</h5>
              <p className="text-neutral-600 dark:text-neutral-400">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      );
    }

    // Si ce n'est pas un tableau, on suppose que c'est une chaîne HTML
    return (
      <div
        className="challenges"
        dangerouslySetInnerHTML={{ __html: challenges }}
      />
    );
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
                text={`${greetingText} ${data.name}`}
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
          <h2 className="text-xl font-bold">{aboutTitle}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {aboutDesc}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{workTitle}</h2>
          </BlurFade>
          {data.work.map((work, id) => (
            <BlurFade
              key={`${work.company}-${id}`}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={`${work.company}-${id}`}
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
            <h2 className="text-xl font-bold">{educationTitle}</h2>
          </BlurFade>
          {data.education.map((education, id) => (
            <BlurFade
              key={`${education.school}-${id}`}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={`${education.school}-${id}`}
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
            <h2 className="text-xl font-bold">{skillsTitle}</h2>
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
                  {t("sections.projects.badge")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("sections.projects.subtitle")}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("sections.projects.description")}
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
                {t("sections.contact.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("sections.contact.subtitle")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("sections.contact.description_start")}{" "}
                <Link
                  href={data.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline">
                  {t("sections.contact.linkedinText")}
                </Link>{" "}
                {t("sections.contact.description_end")}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
