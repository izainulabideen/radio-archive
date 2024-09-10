/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      color1: "#141619",
      color2: "#FFFFFF",
      color3: "#0f172a",
      color4: "#4b5563",
      color5: "#BCBCBC",
    },
  },
  plugins: [],
}

