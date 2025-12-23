/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1C2D',
        secondary: '#F5B301',
        surface: '#F4F5F7',
        darkSurface: '#0F172A',
      },
    },
  },
  plugins: [],
};
