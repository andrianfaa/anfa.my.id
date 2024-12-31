/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", defaultTheme.fontFamily.serif],
      }
    }
  },
  plugins: []
};
