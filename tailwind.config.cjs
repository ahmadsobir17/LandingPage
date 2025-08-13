/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#b8dcff',
          300: '#89c5ff',
          400: '#57a7ff',
          500: '#2f86ff',
          600: '#1f67f0',
          700: '#1b53c4',
          800: '#1a479f',
          900: '#1b3f83'
        }
      }
    },
  },
  plugins: [],
}
