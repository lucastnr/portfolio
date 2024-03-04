"use client";
import { useMemo, useState } from "react";
import { TypedAnimation } from "./TypedAnimation";

const words = [
  "companies.",
  "startups.",
  "projects.",
  "clients.",
  "teams.",
  "people.",
];

export function Subtitle() {
  const [wordIndex, setIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(words[wordIndex].length);
  const word = useMemo(() => {
    return words[wordIndex].slice(0, letterCount);
  }, [letterCount, wordIndex]);

  async function updateWord(type: "add" | "remove") {
    if (type === "remove")
      await new Promise((resolve) => setTimeout(resolve, 2000));

    const length = words[wordIndex].length;
    for (let i = 0; i < length; i++) {
      setLetterCount((prev) => prev + (type === "add" ? 1 : -1));
      await new Promise((resolve) => setTimeout(resolve, 45));
    }

    if (type === "remove") setIndex((prev) => (prev + 1) % words.length);
    return updateWord(type === "add" ? "remove" : "add");
  }

  function onComplete() {
    updateWord("remove");
  }

  return (
    <TypedAnimation
      delay={0.5}
      className="font-light mt-2 text-lg text-txt-secondary"
      onComplete={onComplete}
    >
      {`A talented software developer with over 4 years of experience building
      production-ready products for ${word}`}
    </TypedAnimation>
  );
}
