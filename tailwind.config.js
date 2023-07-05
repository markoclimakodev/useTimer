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
        carbon_100: '#2a2a2a',
        smoke: '#E4EAFD',
      },
      backgroundImage: {
        mobile: 'url("https://i.imgur.com/UHTLB13.png")',
        desktop: 'url("https://i.imgur.com/LMdEec6.png")',
      },
    },
  },
  plugins: [],
}
