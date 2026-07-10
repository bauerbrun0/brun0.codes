import { useEffect, useState } from "react";
import type { Theme } from "@utils/types";
import { getStoredTheme, setStoredTheme } from "@utils/theme";
import { AnimatedUnderline } from "./AnimatedUnderline.tsx";
import type { Language } from "@utils/i18n/ui.ts";
import { useTranslations } from "@utils/i18n/utils.ts";

export function ThemeToggle({ lang }: { lang: Language }) {
  const [theme, setTheme] = useState<Theme>("system");
  const t = useTranslations(lang);

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
        <AnimatedUnderline>{t("header.system")}</AnimatedUnderline>
      </button>
      <button className="hover:cursor-pointer hidden data-light:flex group" onClick={toggleTheme}>
        <AnimatedUnderline>{t("header.light")}</AnimatedUnderline>
      </button>
      <button className="hover:cursor-pointer hidden data-dark:flex group" onClick={toggleTheme}>
        <AnimatedUnderline>{t("header.dark")}</AnimatedUnderline>
      </button>
    </>
  );
}
