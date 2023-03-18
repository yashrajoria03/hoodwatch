/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue"],
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        sans: ["Open Sans"],
      },
      colors: {
        darkPurple: ["#4B0082"],
        fadedBlack: ["#242424"],
      },
    },
  },
  plugins: [],
};
