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
            DEFAULT: "#f8fafc",
            100: "#EBEDF0",
            200: "#DDDFE3",
            300: "#C1C4C9",
            400: "#A5A9AF",
            500: "#898D95"
          },
          headline: "#0f172a",
          text: "#334155"
        },
        dark: {
          primary: "#3b82f6", // blue-400
          background: {
            // DEFAULT: "#111827",
            DEFAULT: "#191F2E",
            100: "#272D3B",
            200: "#353B48",
            300: "#515662",
            400: "#6D727C",
            500: "#898D95"
          },
          headline: "#ffffff",
          text: "#dbeafe"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
