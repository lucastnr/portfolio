import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const isDarkModeAtom = atomWithStorage(
  "darkMode",
  typeof window === "undefined"
    ? false
    : window.matchMedia("(prefers-color-scheme: dark)").matches
);

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode: () => setIsDarkMode((prev) => !prev),
  };
}
