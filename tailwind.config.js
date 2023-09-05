/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "576px"
      },
      colors: {
        ...defaultTheme.colors,
        primary: "#7D71EA"
      }
    }
  },
  plugins: []
};
