import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
        mobile: { max: '375px' },
        desktop: '1440px',
      },
      fontFamily: {
        figTree: ['var(--font-figTree)'],
      },
      fontSize: {
        'body-s-regular': '0.875rem', // 14px -> 0.875rem
        'body-s-bold': '0.875rem', // 14px -> 0.875rem
        'body-m': '1rem', // 16px -> 1rem
        heading: '1.5rem', // 24px -> 1.5rem
        'body-s-regular-mobile': '0.75rem', // 12px -> 0.75rem
        'body-s-bold-mobile': '0.75rem', // 12px -> 0.75rem
        'body-m-mobile': '0.875rem', // 14px -> 0.875rem
        'heading-mobile': '1.25rem', // 20px -> 1.25rem
      },
      lineHeight: {
        'body-s': '150%',
        'body-m': '150%',
        heading: '150%',
      },
      fontWeight: {
        regular: '500',
        bold: '800',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const typographyComponents = {
        '.body-s-regular': {
          fontFamily: theme('fontFamily.figTree') || 'var(--font-figTree)',
          fontSize: theme('fontSize.body-s-regular') || '0.875rem',
          fontWeight: theme('fontWeight.regular') || '500',
          lineHeight: theme('lineHeight.body-s') || '150%',
          color: theme('colors.charcoal-black') || '#111111',
        },
        '.body-s-bold': {
          fontFamily: theme('fontFamily.figTree') || 'var(--font-figTree)',
          fontSize: theme('fontSize.body-s-bold') || '0.875rem',
          fontWeight: theme('fontWeight.bold') || '800',
          lineHeight: theme('lineHeight.body-s') || '150%',
          color: theme('colors.charcoal-black') || '#111111',
        },
        '.body-s-bold-fixed': {
          fontFamily: theme('fontFamily.figTree') || 'var(--font-figTree)',
          fontSize: theme('fontSize.body-s-bold') || '0.875rem',
          fontWeight: theme('fontWeight.bold') || '800',
          lineHeight: theme('lineHeight.body-s') || '150%',
          color: theme('colors.charcoal-black') || '#111111',
        },
        '.body-m': {
          fontFamily: theme('fontFamily.figTree') || 'var(--font-figTree)',
          fontSize: theme('fontSize.body-m') || '1rem',
          fontWeight: theme('fontWeight.regular') || '500',
          lineHeight: theme('lineHeight.body-m') || '150%',
          color: theme('colors.medium-gray') || '#7F7F7F',
        },
        '.heading': {
          fontFamily: theme('fontFamily.figTree') || 'var(--font-figTree)',
          fontSize: theme('fontSize.heading') || '1.5rem',
          fontWeight: theme('fontWeight.bold') || '800',
          lineHeight: theme('lineHeight.heading') || '150%',
          color: theme('colors.charcoal-black') || '#111111',
        },
        '@screen mobile': {
          '.body-s-regular': {
            fontSize: theme('fontSize.body-s-regular-mobile') || '0.75rem',
          },
          '.body-s-bold': {
            fontSize: theme('fontSize.body-s-bold-mobile') || '0.75rem',
          },
          '.body-m': {
            fontSize: theme('fontSize.body-m-mobile') || '0.875rem',
          },
          '.heading': {
            fontSize: theme('fontSize.heading-mobile') || '1.25rem',
          },
        },
      };

      addComponents(typographyComponents);
    }),
  ],
};

export default config;
