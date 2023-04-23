/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkBg:'#1e293b',
        lightBg:'#f1f5f9',
        darkText:'#d1d5db',
        lightText:'#1f2937',
      },
      fontFamily:{
      },
      animation:{
        typewriter: 'typing 0.8s steps(3)'
      },
      keyframes:{
        typing: {
          from: {
            width: 0
          },
        }
      }
    },
  },
  plugins: [],
}
