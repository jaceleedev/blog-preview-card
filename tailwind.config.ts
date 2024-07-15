import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4D04E',
        'charcoal-black': '#111111',
        'medium-gray': '#7F7F7F',
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      fontFamily: {
        figTree: ['var(--font-figTree)'],
      },
    },
  },
  plugins: [],
};
export default config;
