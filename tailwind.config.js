/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        active:{
          "0%,100%": {opacity:"1"},
          "50%": {opacity:".9"}
        }
      },
      animation:{
        active:"active 2s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

