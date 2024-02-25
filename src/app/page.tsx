"use client";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { ReactNode } from "react";
import { Profile } from "../components/Profile";
import { AboutMeSection } from "../components/sections/AboutMeSection";
import { SkillsSection } from "../components/sections/SkillsSection";

interface Section {
  title: string;
  content: ReactNode;
}

const sections: Section[] = [
  {
    title: "About Me",
    content: <AboutMeSection />,
  },
  {
    title: "Skills",
    content: <SkillsSection />,
  },
  {
    title: "Experience",
    content: <ExperienceSection />,
  },
];

export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="relative w-[90%] max-w-[960px]">
        <div className="absolute top-0 right-0">
          <ThemeSwitcher />
        </div>
        <div className="flex flex-col gap-4">
          <Profile />
          {sections.map(({ title, content }) => (
            <div key="title">
              <h2 className="mb-2">{title}</h2>
              {content}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
