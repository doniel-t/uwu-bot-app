/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      breakPoint: '1515px',
      xxl: '2000px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'darkest': '#1d1e2b'
      }
    }
  },
  daisyui: {
    themes: ["dracula"]
  },
  plugins: [require('daisyui')],
}
