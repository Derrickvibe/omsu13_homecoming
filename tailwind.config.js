/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#0C1324",
        white: "#ffffff",
        paragraph: "#333333",
        icon: "#A1A1A1",
        gray: "#B1B1B1",
        gray2: "#F6F6F6",
        gray3:"#3A3D36",
        omsugreen: "#08812E",
        omsulitgreen: "#04C359",
        purple: "#3C1381",
        omsuyellow: "#FDD610",
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
