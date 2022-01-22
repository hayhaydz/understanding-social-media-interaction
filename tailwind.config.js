const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'background': '#130D23',
        'primary': {
          DEFAULT: '#4900D8',
          '50': '#B691FF',
          '100': '#A87CFF',
          '200': '#8D53FF',
          '300': '#722BFF',
          '400': '#5702FF',
          '500': '#4900D8',
          '600': '#3600A0',
          '700': '#230068',
          '800': '#100030',
          '900': '#000000'
        },
        'secondary': {
          DEFAULT: '#5B3FA6',
          '50': '#C4B9E4',
          '100': '#B8AADF',
          '200': '#9F8DD3',
          '300': '#876FC8',
          '400': '#6E52BD',
          '500': '#5B3FA6',
          '600': '#44307D',
          '700': '#2E2055',
          '800': '#18112C',
          '900': '#020104'
        },
      },
      fontFamily: {
        "Syncopate": ["Syncopate", ...defaultTheme.fontFamily.sans],
        "Inter": ["Inter", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
