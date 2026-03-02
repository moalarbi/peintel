import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36acf7',
          500: '#0c91eb',
          600: '#0073c7',
          700: '#015ba1',
          800: '#064e85',
          900: '#0a426f',
          950: '#072a4a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-noto-sans-arabic)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0c91eb 0%, #0073c7 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
