"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { getData } from "@/data/resume";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { useParams } from "next/navigation";

type Skill = {
  readonly name: string;
  readonly type: string;
  readonly icon: string;
};

export function SkillsAccordion() {
  const { locale = "fr" } = useParams<{ locale: "en" | "fr" }>();
  const data = getData(locale);

  const groupSkillsByType = (skills: Skill[]) => {
    return skills.reduce((acc, skill) => {
      const type = skill.type.toString(); // Convertir en string si nécessaire
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push({ name: skill.name, icon: skill.icon });
      return acc;
    }, {} as Record<string, { name: string; icon: string }[]>);
  };

  const groupedSkills = groupSkillsByType([
    ...data.skills,
  ] as unknown as Skill[]);

  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(groupedSkills).map(([type, skills], index) => (
        <AccordionItem key={type} value={`item-${index}`}>
          <AccordionTrigger className="text-md font-semibold cursor-pointer">
            {type} ({skills.length})
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-12 gap-4">
              {skills.map((skill) => (
                <SkillWithTooltip key={skill.name} skill={skill} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const SkillWithTooltip = ({
  skill,
}: {
  skill: { name: string; icon: string };
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}>
      <AnimatePresence initial={false}>
        {isHovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 10, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 260, damping: 10 },
            }}
            exit={{ opacity: 0, y: 10, scale: 0.6 }}
            style={{ translateX, rotate }}
            className="absolute -top-10 transform -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 max-w-[150px]">
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-10 w-[40%] z-50 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
            <div className="font-bold text-white relative z-30 text-sm text-center">
              {skill.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {skill.icon ? (
        <Image
          src={skill.icon}
          alt={skill.name}
          width={24}
          height={24}
          className="object-cover h-10 w-10 group-hover:scale-105 group-hover:z-30 transition duration-500 cursor-pointer"
        />
      ) : (
        <Badge className="h-8 w-fit px-3 flex items-center justify-center dark:bg-gray-800 text-sm font-medium cursor-pointer transition duration-500 hover:scale-105">
          {skill.name}
        </Badge>
      )}
    </div>
  );
};
