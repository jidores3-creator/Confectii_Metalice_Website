/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          600: '#dc2626',
          700: '#b91c1c'
        }
      }
    },
  },
  plugins: [],
}