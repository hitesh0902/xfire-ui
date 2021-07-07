const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      darkGray: '#151419',
      black: '#0F0E13',
      lightGray: '#23242A',
      success: '#7D53DE',
      error: '#D2364B',
      warning: '#FF8800',
      info: '#00B4D8',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
