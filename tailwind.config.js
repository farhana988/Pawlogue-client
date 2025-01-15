/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
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
      },
      fontFamily: {
        exo: ["Exo 2"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
