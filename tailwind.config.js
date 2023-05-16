/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "main-layout": "17em auto"
      },
      textColor:{
        'main-color': "#737376",
        'main-blue':"#63A5ED"
      },
      boxShadow:{
        "menu-item": "0px 0px 8px gray;"
      }
    },
  },
  plugins: [],
}