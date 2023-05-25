/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 10s linear infinite",
      },
      fontFamily: {
        carme: ["Carme", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
