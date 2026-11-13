import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'break-400': '400px',
      'break-625': '625px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '15': '3.75rem',
        '70': '17.5rem',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'arial'],
        montserrat: ['var(--font-montserrat)', 'arial'],
        metropolis: ['var(--font-metropolis)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // Frosted-glass nav pill (used by Header on non-home pages)
        '.glass-pill': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2%',
          height: '10%',
          padding: '2% 3.5%',
          borderRadius: '99em',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow:
            'inset 0 0 0 1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 6%), transparent 75%), inset 1.4px 2.2px 2px -2px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 60%), transparent 75%), inset -1px 1.6px 2px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent 80%), inset 0px 2px 4px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent 80%)',
        },

        // Nav pill on the home page
        '.header-navbar': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2%',
          height: '10%',
          padding: '2% 3.5%',
          borderRadius: '99em',
          backgroundColor: 'rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(12px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        },
      });
    }),
  ],
} satisfies Config;
