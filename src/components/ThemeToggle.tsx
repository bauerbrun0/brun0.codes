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
      <button className="hover:cursor-pointer hidden data-system:flex" onClick={toggleTheme}>
        <AnimatedUnderline text="system" />
      </button>
      <button className="hover:cursor-pointer hidden data-light:flex" onClick={toggleTheme}>
        <AnimatedUnderline text="light" />
      </button>
      <button className="hover:cursor-pointer hidden data-dark:flex" onClick={toggleTheme}>
        <AnimatedUnderline text="dark" />
      </button>
    </>
  );
}
