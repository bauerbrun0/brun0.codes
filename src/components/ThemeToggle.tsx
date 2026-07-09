import { useEffect, useState } from "react";
import type { Theme } from "@utils/types";
import { getStoredTheme, setStoredTheme } from "@utils/theme";
import { AnimatedUnderline } from "./AnimatedUnderline.tsx";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(nextTheme);
    setStoredTheme(nextTheme);
  }

  return (
    <>
      <button className="hover:cursor-pointer hidden data-system:flex group" onClick={toggleTheme}>
        <AnimatedUnderline>system</AnimatedUnderline>
      </button>
      <button className="hover:cursor-pointer hidden data-light:flex group" onClick={toggleTheme}>
        <AnimatedUnderline>light</AnimatedUnderline>
      </button>
      <button className="hover:cursor-pointer hidden data-dark:flex group" onClick={toggleTheme}>
        <AnimatedUnderline>dark</AnimatedUnderline>
      </button>
    </>
  );
}
