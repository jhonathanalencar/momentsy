/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
      },
      colors: {
        momentsy: {
          beige: '#ac7c59',
          red: '#4b2428',
          gray: {
            900: '#141414',
            700: '#333538',
            400: '#7c7d7e',
            100: '#F2F2F2',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-merriweather-sans)'],
      },
      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 12.5%, transparent 12.5%, transparent)',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
    },
  },
  plugins: [],
};
