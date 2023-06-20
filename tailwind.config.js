/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/view/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        card: "url('/credit-card.png')",
      },
      fontFamily: {
        main: ['var(--font-main)', ...fontFamily.sans],
      },
      fontSize: {
        xxs: '0.6rem',
      },
      height: {
        '2.5/6': '44%',
      },
    },
    colors: {
      gray: '#EEEDEB',
      white: '#FCFBF9',
      blue: '#2E335B',
    },
  },
  plugins: [],
};
