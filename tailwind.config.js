/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'lightgray': '#627B7A',
      'bg-color': '#2C3D39',
    },
  },
  plugins: [],
}