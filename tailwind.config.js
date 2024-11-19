/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'2rem'
      },
      colors:{
        brand:{
          yellow:'#facf00',
          black:'#000',
          blue:"#005baa"
        }
      }
    },
  },
  plugins: [],
}

