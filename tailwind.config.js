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
          50: '#FFFFFF',
          100: '#FAF8F3',
          200: '#F5F1E8', // Warm ivory background
          300: '#EAE3D2',
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
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'], // Redirect any legacy serif classes smoothly to Poppins
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-1': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-3': ['1.625rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }], // 16px
        'body-sm': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }], // 15px
      },
    },
  },
  plugins: [],
}
