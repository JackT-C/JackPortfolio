import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CSS-variable driven theme tokens
        canvas:   'var(--canvas)',
        card:     'var(--card)',
        'card-2': 'var(--card-2)',
        fg:       'var(--fg)',
        muted:    'var(--muted)',
        line:     'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          dim:     'var(--accent-dim)',
        },
        // Legacy aliases so existing components keep working
        primary: {
          DEFAULT: 'var(--accent)',
          dark:    'var(--accent)',
          light:   'var(--accent)',
        },
        background: {
          DEFAULT:   'var(--canvas)',
          secondary: 'var(--card)',
          tertiary:  'var(--card-2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Datatype', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in':  'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'float':    'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
