const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#6200EE',
      secondary: '#03DAC5',
      success: '#22BB33',
      error: '#B00020',
      warning: '#F0AD4E',
      info: '#5BC0DE',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
