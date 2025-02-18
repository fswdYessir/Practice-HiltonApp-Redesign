/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hiltonBlue: '#003153',
        // hiltonBlue: '#0057B8',
      },
      fontFamily: {
        hilton: ['Canaro', 'sans-serif'],
        hiltonSerif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
