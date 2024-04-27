/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rouge: '#ff6b6b',
        jaune: '#ffcf57',
        bleu: '#5cc0eb',
        vert: '#48dbb4',
        gris: '#5a5c5e',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
      minHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

