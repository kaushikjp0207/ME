/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        gold: '#d4a84d',
        cream: '#f7f1e3',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        signature: ['Great Vibes', 'cursive'],
      },
      boxShadow: {
        gold: '0 0 60px rgba(212,168,77,0.28)',
      },
    },
  },
  plugins: [],
};
