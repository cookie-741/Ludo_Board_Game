/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        dropShadow: {
          '3xl': [
            '0px 6px .1px rgba(0, 0, 0, 0.2)'
          ]
        },
      }
  },
  plugins: [],
}