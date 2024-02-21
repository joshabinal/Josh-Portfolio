/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
