/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        qatarRed: '#8a1538',
        qatarSilver: '#eeeee5',
        qatarBlue: '#00cfb7',
        qatarPink: '#ff004c',
        qatarCustom: '#314665',

      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}