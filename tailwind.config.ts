import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const SWAY_DEG = 1.5; // max tilt each way
const SWAY_SECONDS = 1.6; // one swing

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'arial'],
        montserrat: ['var(--font-montserrat)', 'arial'],
        metropolis: ['var(--font-metropolis)'],
        dmmono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      // Pendulum sway: -SWAY_DEG <-> +SWAY_DEG
      keyframes: {
        wiggle: {
          from: { transform: `rotate(-${SWAY_DEG}deg)` },
          to: { transform: `rotate(${SWAY_DEG}deg)` },
        },
      },
      animation: {
        wiggle: `wiggle ${SWAY_SECONDS}s ease-in-out calc(var(--sway-delay, 0s) - ${
          SWAY_SECONDS / 2
        }s) infinite alternate`,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addVariant }) => {
      addVariant('can-hover', '@media (hover: hover)');

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
