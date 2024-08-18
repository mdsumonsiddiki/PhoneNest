/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: '#000000',
        spaceCadet: '#14213d',
        orange: '#fca311',
        platinum: '#e5e5e5',
        white: '#ffffff',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

