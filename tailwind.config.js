/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Font1': ['IM Fell Great Primer SC', 'serif']
      },
      colors: {
        'boxColor1': '#B378FF',
        'btnColor': '#8C47E5'
      },
      dropShadow: {
        '3xl': [
          '0px 6px .1px rgba(0, 0, 0, 0.2)'
        ]
      }
    },
  },
  plugins: [],
}

