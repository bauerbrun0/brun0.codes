export const defaultLang = "en";

export const languages = {
  en: "English",
  hu: "Magyar",
};

export type Language = keyof typeof languages;

export const ui = {
  en: {
    "title.home": "brun0.codes",
    "header.dark": "dark",
    "header.light": "light",
    "header.system": "system",
    "header.home": "home",
    "header.resume": "resume",
    "hero.name": "Brúnó Bauer",
    "hero.picture-alt": "A picture of me.",
    "hero.job": "Full Stack Developer",
  },
  hu: {
    "title.home": "brun0.codes",
    "header.dark": "sötét",
    "header.light": "világos",
    "header.system": "rendszer",
    "header.home": "kezdőlap",
    "header.resume": "önéletrajz",
    "hero.name": "Bauer Brúnó",
    "hero.picture-alt": "Egy kép rólam.",
    "hero.job": "Full Stack fejlesztő",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
