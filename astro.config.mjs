// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://brun0.codes",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Inter-Variable.ttf'],
          weight: '100 900',
          style: 'normal'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Inter-Italic-Variable.ttf'],
          weight: '100 900',
          style: 'italic'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
      options: {
        variants: [{
          src: ['./src/assets/fonts/FiraCode-Variable.ttf'],
          weight: '300 700',
          style: 'normal'
        }]
      }
    },
  ]
});
