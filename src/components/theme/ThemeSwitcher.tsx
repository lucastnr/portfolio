"use client";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button className="btn" onClick={toggleDarkMode}>
        aasas
      </button>
      {isDarkMode ? "Dark" : "Light"}
    </>
  );
}
