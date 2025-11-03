/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html", 
    "./content/**/*.md",
    "./themes/careercanvas/layouts/**/*.html",
    "./themes/careercanvas/assets/**/*.css",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}