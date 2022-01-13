const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'background': '#130D23',
        'primary': '#4900D8',
      },
      fontFamily: {
        "Syncopate": ["Syncopate", ...defaultTheme.fontFamily.sans],
        "Inter": ["Inter", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
