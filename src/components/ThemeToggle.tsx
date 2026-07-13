import type { Language } from "@utils/i18n.ts";
import { useTranslations } from "@utils/i18n.ts";
import { getStoredTheme, setStoredTheme, type Theme } from "@utils/theme.ts";
import { useEffect, useState } from "react";
import { AnimatedUnderline } from "./AnimatedUnderline.tsx";

export function ThemeToggle({ lang }: { lang: Language }) {
	const [theme, setTheme] = useState<Theme>("system");
	const t = useTranslations(lang);

	useEffect(() => {
		setTheme(getStoredTheme());
	}, []);

	function toggleTheme() {
		const nextTheme: Theme =
			theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
		setTheme(nextTheme);
		setStoredTheme(nextTheme);
	}

	return (
		<>
			<button
				type="button"
				className="hover:cursor-pointer hidden data-system:flex group"
				onClick={toggleTheme}
			>
				<AnimatedUnderline>{t("header.system")}</AnimatedUnderline>
			</button>
			<button
				type="button"
				className="hover:cursor-pointer hidden data-light:flex group"
				onClick={toggleTheme}
			>
				<AnimatedUnderline>{t("header.light")}</AnimatedUnderline>
			</button>
			<button
				type="button"
				className="hover:cursor-pointer hidden data-dark:flex group"
				onClick={toggleTheme}
			>
				<AnimatedUnderline>{t("header.dark")}</AnimatedUnderline>
			</button>
		</>
	);
}
