import { getRelativeLocaleUrl } from "astro:i18n";
import { getAvailableLanguages, type Language } from "@utils/i18n.ts";
import { AnimatedUnderline } from "./AnimatedUnderline.tsx";

export function LanguageToggle({ lang }: { lang: Language }) {
	const availableLanguages = getAvailableLanguages();
	const currentLanguageIndex = availableLanguages.indexOf(lang);
	const nextLang =
		availableLanguages[(currentLanguageIndex + 1) % availableLanguages.length];

	return (
		<a href={getRelativeLocaleUrl(nextLang, "/")} className="group">
			<AnimatedUnderline>{lang}</AnimatedUnderline>
		</a>
	);
}
