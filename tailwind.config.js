/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  themes: {
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
