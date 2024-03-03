"use client";

import { Background } from "@/components/Background";
import { TypedAnimation } from "@/components/TypedAnimation";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen relative overflow-x-hidden">
        <div className="absolute z-0 w-screen min-w-[1300px] max-w-[1700px] h-[100%] right-0 xl:left-0">
          <Background />
        </div>
        <div className="p-32 w-[80%] max-w-[1200px] text-txt-secondary z-1">
          <TypedAnimation className="font-medium text-4xl">
            {"<Lucas Tenorio/>"}
          </TypedAnimation>
          <TypedAnimation className="font-light mt-2 text-lg" ms={40}>
            A talented Software Developer with 4+ years of experience building
            production-ready products to companies.
          </TypedAnimation>
        </div>
      </div>
    </main>
  );
}
