/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00474b",
          "light-blue": "#a0e9e0",
          gray: "#7e8686",
        },
      },
    },
  },
  plugins: [],
};
