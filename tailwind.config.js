/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hiltonblue: '#0057B8',
      },
      fontFamily: {
        hilton: ['Canaro', 'sans-serif'],
        hiltonSerif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
