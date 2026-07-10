export type Theme = "light" | "dark" | "system";

export function getStoredTheme(): Theme {
  if (!("theme" in localStorage)) {
    return "system";
  }

  return localStorage.theme === "dark" ? "dark" : "light";
}

export function setStoredTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  if (theme === "system") {
    localStorage.removeItem("theme");
    document.documentElement.classList.toggle("dark", isSystemDark());
    return;
  }

  localStorage.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function isSystemDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
