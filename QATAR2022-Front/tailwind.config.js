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
        qatarDarkBlue: '#314665',
        qatarDarkBlueTransparent: 'rgba(49, 70, 101, 0.95)',
        qatarGold: 'rgb(137,104,31, 0.6)',

      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'qatar': `url(/fondoQatar.webp)`,
      },
      backgroundSize: {
        'complete': `1920px`
      }

    },
  },
  plugins: [],
}