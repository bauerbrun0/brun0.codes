import { languages, type Language } from "@utils/i18n.ts";
import { AnimatedUnderline } from "./AnimatedUnderline.tsx";
import { getRelativeLocaleUrl } from "astro:i18n";


export function LanguageToggle({ lang } : { lang: Language }) {
  const currentLanguageIndex = Object.keys(languages).indexOf(lang);
  const nextLang = Object.keys(languages)[(currentLanguageIndex + 1) % Object.keys(languages).length];

  return (
    <a href={getRelativeLocaleUrl(nextLang, "/")} className="group">
      <AnimatedUnderline>{lang}</AnimatedUnderline>
    </a>
  );
}
