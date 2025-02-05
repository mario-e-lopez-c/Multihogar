/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        header: '560px',
      },
      colors: {
        main: '#b80404',
        subMain: '#cc2525',
        deepGray: '#fff7f3',
        dryGray: '#F3F4F6',
        flash: '#FF1E1E',
        star: '#FFB000',
        deepest: '#fce6dd',
        text: '#C0C0C0',
        overlay: '#00000010',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

