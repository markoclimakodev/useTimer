/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grass: '#45C67D',
        carbon: '#0E0D1B',
        carbon_100: '#282828',
        carbon_200: '#454141',
        smoke: '#CFD4D4',
      },
      backgroundImage: {
        mobile: 'url("/images/mobile-bg.svg")',
        desktop: 'url("/images/desktop-bg.svg")',
      },
      fontSize: {
        display_small: [
          '4rem',
          {
            lineHeight: '4rem',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        display_large: [
          '8rem',
          {
            lineHeight: '8rem',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
