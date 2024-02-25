"use client";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { AboutMeSection } from "./sections/AboutMeSection";
import { MainSection } from "./sections/MainSection";

export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="relative w-full max-w-[960px]">
        <div className="absolute top-0 right-0">
          <ThemeSwitcher />
        </div>
        <MainSection />
        <AboutMeSection />
      </div>
    </main>
  );
}
