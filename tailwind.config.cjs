/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      skew: {
        '45': '45deg',
      },
      transitionProperty: {
        'width': 'width',
      },
      scale: {
        '110': '1.1',
      }
    },
  },
  plugins: [],
}
