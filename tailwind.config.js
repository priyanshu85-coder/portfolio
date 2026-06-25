/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: '#0d1b2d',
        cyan: '#45d9ff',
        violet: '#8b7cff',
        coral: '#ff7a59',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px rgba(69, 217, 255, .16)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
