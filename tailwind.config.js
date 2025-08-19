/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090A',
        foreground: '#F7F8F8',
        heading: '#F7F8F8',
        body: '#8A8F98',
        accent: '#FF6B35',
        primary: {
          DEFAULT: '#FF6B35',
          foreground: '#08090A',
        },
        secondary: {
          DEFAULT: '#1A1B1E',
          foreground: '#F7F8F8',
        },
        muted: {
          DEFAULT: '#141517',
          foreground: '#8A8F98',
        },
        border: '#1A1B1E',
        card: '#0F1014',
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        ring: 'var(--ring)',
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
    },
  },
  plugins: [],
}

