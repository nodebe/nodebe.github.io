/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors:{
        textGrey: '#666666',
        heroSolid: '#42446E',
        heroGradientBegin: '#13B0F5',
        heroGradientEnd: '#E70FAA',
        pillButtonBackground: '#D7FFE0',
        pillButtonText: '#018C0F',
        lightText: '#A7A7A7',
        contactText: '#1E0E62',
      },
    },
  },
  plugins: [],
}

