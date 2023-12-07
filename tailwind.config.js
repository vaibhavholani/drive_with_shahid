/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1A3D1E',
      '2E6434': '#2E6434',
    }),
    extend: {
      backgroundImage: {
        'svg-pattern': "url('/city_car.svg')",
      }
    },
  },
  plugins: [],
}