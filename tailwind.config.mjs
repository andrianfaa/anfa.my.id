/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arimo Variable", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#818cf8",
        border: {
          DEFAULT: "#262626",
          700: "#404040"
        }
      }
    }
  }
};
