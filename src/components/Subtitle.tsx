"use client";
import { useMemo, useState } from "react";
import { TypedAnimation } from "./TypedAnimation";

const words = [
  "companies.",
  "startups.",
  "fun.",
  "clients.",
  "teams.",
  "people.",
];

function getYearDiff(date: Date) {
  const diff = date.getTime() - new Date().getTime();
  return Math.floor(Math.abs(diff / (1000 * 60 * 60 * 24 * 365)));
}

const yearsOfExperience = getYearDiff(new Date(2019, 11, 1));

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
      className="font-light mt-2 text-lg text-txt-secondary"
      onComplete={onComplete}
    >
      {`A talented full stack software developer with over ${yearsOfExperience} years of experience building
      production-ready products for ${word}`}
    </TypedAnimation>
  );
}
