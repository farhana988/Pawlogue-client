/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        nav: "#3D3D3D",
        primary: "#7f745f",
        accent: "#9492b4",
        secondary: "#b0c4c9",
        tab: "#ffffff",
        ivory: "#F5F5F5",
        dCard: "#38363694",
        lCard: "#ffffff7a",
        dBtn: "#A94A4A",
        lBtn: "#6db39f",
      },
      fontFamily: {
        snow: ["Snowburst One"],
      },
    },
  },
  plugins: [  flowbite.plugin(),],
  darkMode: "class",
};
