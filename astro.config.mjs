// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://brun0.codes",
  vite: {
    plugins: [tailwindcss()]
  }
});
