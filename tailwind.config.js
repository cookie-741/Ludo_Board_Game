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
        'btnColor': '#8C47E5',
        'background': 'rgba(188, 225, 239, 1)',
        'btnBackground': ' #ffd73e33'
      },
      boxShadow: {
        'shadow1': 'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px inset, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
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

