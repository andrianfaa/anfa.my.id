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
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#ffef5c",
        light: {
          // background: "#F7F7F7"
          background: "#F4F7F5"
        },
        dark: {
          background: "#08090A"
        }
      }
    }
  },
  plugins: []
};
