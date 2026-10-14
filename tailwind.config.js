/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vazra: {
          green: {
            50: '#f2f8f4',
            100: '#e3efe7',
            200: '#c5dfcf',
            600: '#347752',
            700: '#275e40',
            800: '#1e4832',
            900: '#143122',
            950: '#0c1e15',
            bar: '#345d47',
            footer: '#1b3b2b',
          },
          purple: {
            50: '#faf5fc',
            100: '#f2e6f9',
            200: '#e5ccf2',
            600: '#753496',
            700: '#6c2d7c',
            800: '#582166',
            900: '#41154c',
          },
          cream: {
            DEFAULT: '#fafbf6',
            50: '#ffffff',
            100: '#f6f8f4',
            200: '#f0f4ee',
            300: '#e4ebe1',
          },
          gold: {
            DEFAULT: '#c59b4c',
            light: '#e2be79',
            dark: '#9a752e',
          },
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        script: ['Caveat', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'elevated': '0 20px 40px -15px rgba(27, 67, 50, 0.15)',
      }
    },
  },
  plugins: [],
}
