/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors:{
      'green_color': '#DFF6FF',
      'light_green_color': '#BBDED6',
      'light_orange_color': '#EEEEEE',
      'orange_color': '#ffc1888e',
      'white_color': '#EEEEEE',
      'black_color': '#393E46',
      'red':'#FED6D0',
      'header_card_color':'#FDDFC3'
    },
    screens: {
      'sm': '200px',
      // => @media (min-width: 576px) { ... }

      'md': '800px',
      // => @media (min-width: 960px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [
    
  ],
}
