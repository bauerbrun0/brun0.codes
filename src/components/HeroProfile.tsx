import { ProfilePicture } from "./ProfilePicture.tsx";
import { AnimatedTerminal, type TerminalIconHandle } from "@assets/icons/AnimatedTerminal.tsx";
import type { Language } from "@utils/i18n/ui.ts";
import { useRef } from "react";
import { useTranslations } from "@utils/i18n/utils.ts";


export function HeroProfile({ lang }: { lang: Language }) {
  const terminalIconRef = useRef<TerminalIconHandle>(null);
  const t = useTranslations(lang);

  return (
    <div
      className="flex flex-col mt-8 md:mt-12 w-fit"
      onMouseEnter={() => terminalIconRef.current?.startAnimation()}
      onMouseLeave={() => terminalIconRef.current?.stopAnimation()}
    >
      <ProfilePicture alt={t("hero.picture-alt")} />
      <div className="mt-4 font-medium flex items-center gap-2 md:gap-3">
        <span>{t("hero.name")}</span>
        <AnimatedTerminal ref={terminalIconRef} size={18} />
      </div>
      <span className="mt-1 font-light text-gray-600 dark:text-gray-400">
        {t("hero.job")}
      </span>
    </div>
  );
}
