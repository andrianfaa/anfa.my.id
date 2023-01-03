/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        xxxl: "1512px"
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans]
        // display: ["Figtree", "Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        light: {
          primary: "#2563eb", // blue-600
          // background: "#F7F7F7"
          background: {
            DEFAULT: "#F4F7F5",
            100: "#F1F4F2",
            200: "#E6EAE9",
            300: "#D8DCDC",
            400: "#BCC0C2",
            500: "#BCC0C2"
          },
          headline: "#0f172a",
          text: "#334155"
        },
        dark: {
          primary: "#3b82f6", // blue-400
          background: {
            // DEFAULT: "#111827",
            DEFAULT: "#191F2E",
            100: "#191F2E",
            200: "#202634",
            300: "#2E3441",
            400: "#4A505B",
            500: "#BCC0C2"
          },
          headline: "#ffffff",
          text: "#dbeafe"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
