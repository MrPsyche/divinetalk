/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sacred: {
          50: '#F0F7F7',
          100: '#D6ECEE',
          200: '#B0DCE0',
          300: '#7DC4CC',
          400: '#3D9FA9',
          500: '#147C85',
          600: '#0B555A',
          700: '#073E42',
          800: '#052D30',
          900: '#031E20',
          950: '#021213',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D4',
          200: '#EFE1AA',
          300: '#E4CE78',
          400: '#D7B94B',
          500: '#C9A84E', // Core brand champagne gold
          600: '#B08E3B',
          700: '#8C6C2C',
          800: '#6C5226',
          900: '#533F21',
          950: '#2E200C',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#FAF7F1',
          200: '#F6F2E8', // Warm ivory background
          300: '#ECE5D4',
          400: '#DDD2BA',
          500: '#C4B79A',
        },
        obsidian: {
          800: '#162528',
          900: '#0E1719',
          950: '#080E10',
        },
        sage: {
          300: '#B8C9C4',
          400: '#8EAAA2',
          500: '#698B82',
          600: '#4D6B63',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 7s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(30px)' },
          '100%': { opacity: '0.8', filter: 'blur(45px)' },
        }
      }
    },
  },
  plugins: [],
}
