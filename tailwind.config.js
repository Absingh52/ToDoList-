/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient1':" linear-gradient(100deg, rgb(87, 86, 86), rgb(6, 46, 63))",
        'custom-gradient2':"linear-gradient(100deg, rgb(255, 255, 255), rgb(212, 241, 255))",
        'custom-gradient3':" linear-gradient(100deg, rgb(0, 18, 20), rgb(0, 31, 41))",
      },
    },
  },
  plugins: [],
}

