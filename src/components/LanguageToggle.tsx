import { languages } from "@i18n/ui.ts";
import { AnimatedUnderline } from "./AnimatedUnderline.tsx";
import { getLangFromUrl, useTranslatedPath } from '@i18n/utils.ts';

export function LanguageToggle({ url }: { url: URL}) {
  const lang = getLangFromUrl(url);
  const currentLanguageIndex = Object.keys(languages).indexOf(lang);
  const nextLang = Object.keys(languages)[(currentLanguageIndex + 1) % Object.keys(languages).length];
  const translatePath = useTranslatedPath(nextLang as keyof typeof languages);

  return (
    <a href={translatePath("/")} className="group">
      <AnimatedUnderline>{lang}</AnimatedUnderline>
    </a>
  );
}
