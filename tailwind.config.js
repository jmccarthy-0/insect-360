/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        dark: 'hsl(0, 0%, 5%)',
        light: 'hsl(0, 0%, 90%)'
      },
      accent: {
        dark: 'hsl(41, 100%, 49%)',
        light: 'hsl(170, 24%, 31%)',
      },
      muted: {
        dark: 'hsl(0, 0%, 46%)',
        light: 'hsl(0, 0%, 51%)' 
      },
      transparent: 'transparent',
      black: 'hsl(0,0%,0%)'
    },
    fontFamily: {
      serif: ['Libre Baskerville', 'serif']
    },
    extend: {
      gridTemplateRows: {
        'max-1fr': 'max-content 1fr'
      },
      spacing: {
        'page-x': '1rem',
        'page-y': '3rem',
      },
    },
  },
  plugins: [],
}