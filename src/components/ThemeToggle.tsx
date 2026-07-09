import { useState } from "react";
import type { Theme } from "@utils/types";
import { getStoredTheme, setStoredTheme } from "@utils/theme";
import { Monitor } from "@assets/icons/Monitor.tsx";
import { Sun } from "@assets/icons/Sun.tsx";
import { Moon } from "@assets/icons/Moon.tsx";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      return getStoredTheme();
    }
    return "system";
  });


  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    setTheme(nextTheme);
    setStoredTheme(nextTheme);
  }

  return (
    <button className="hover:cursor-pointer" onClick={toggleTheme}>
      <Monitor className="w-5 h-5 hidden data-dark:block" />
      <Moon className="w-5 h-5 hidden data-light:block" />
      <Sun className="w-5 h-5 hidden data-system:block" />
    </button>
  );
}
