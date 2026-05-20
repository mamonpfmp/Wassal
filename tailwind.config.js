/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wassal: {
          orange: '#FF8C00',
          gold: '#FFA726',
          purple: '#5B2C8E',
          'purple-dark': '#3D1A6E',
          'purple-deep': '#2A1052',
          violet: '#7C4DFF',
        },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
