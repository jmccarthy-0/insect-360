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
      gray: {
        50: 'hsl(0, 0%, 90%)',
        100: 'hsl(0, 0%, 51%)',
        200: 'hsl(0, 0%, 46%)',
        300: 'hsl(0, 0%, 5%)',
      },
      transparent: 'transparent',
      black: 'hsl(0,0%,0%)'
    },
    fontFamily: {
      serif: ['Libre Baskerville', 'serif']
    },
    extend: {
    },
  },
  plugins: [],
}