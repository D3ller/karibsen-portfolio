/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1440px',
    },
    extend: {
      boxShadow: {
        'rounded': '0 0 0 3px #404040a6',
      },
      fontFamily: {
        "DM": "DM Sans, sans-serif",
        "Libre": "Libre Baskerville, serif",
      },
      colors: {
        "grey-primary": "#404040",
      },
      container: {
        screens: {
          'sm': '100%',
          'md': '768px',
          'lg': '992px',
          'xl': '1440px',
        },
        padding: {
          DEFAULT: '1rem',
        }
      },
    },
  },
  plugins: [],
}