/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      SansThaiL: ["Noto Sans Thai Looped", "sans-serif"],
      SansThai: ["Noto Sans Thai", "sans-serif"],
    },
    colors: {
      nsnoonz: {
        blue: "#102C57",
        light1: "#FEFAF6",
        light2: "#EADBC8",
        light3: "#DAC0A3",
      },
    },
  },
};
export const plugins = [];
