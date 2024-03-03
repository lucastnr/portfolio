"use client";

import { TypedAnimation } from "@/components/TypedAnimation";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <div className="p-32 max-w-[90%] text-txt-secondary">
          <TypedAnimation className="font-medium text-8xl">
            {"<Lucas Tenorio/>"}
          </TypedAnimation>
          <TypedAnimation className="font-light mt-6 text-lg" ms={40}>
            A talented Software Developer with 4+ years of experience building
            production-ready products to companies.
          </TypedAnimation>
        </div>
      </div>
    </main>
  );
}
