/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      lexend: ["Lexend Deca", "sans-serif"],
    },
    screens: {
      sm: "320px",
      md: "640px",
      lg: "1144px",
    },
  },
  plugins: [],
};
