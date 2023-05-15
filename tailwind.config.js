/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "main-layout": "15em auto"
      },
      textColor:{
        'main-color': "#737376"
      },
      boxShadow:{
        "menu-item": "0px 0px 8px gray;"
      }
    },
  },
  plugins: [],
}