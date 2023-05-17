/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "main-layout": "18em auto",
        "mobile-layout": "64px auto",
        "search-box":"28px auto",
        "menu-item":"35px 5em",
        "auto-fit": "repeat(auto-fit, minmax(200px, 400px))",
        "primary-card":"250px auto",
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