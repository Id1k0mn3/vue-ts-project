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
      'white': '#FFF',
      'blue': '#418AF2',
      'black-opacity': 'rgba(0, 0, 0, 20%)'
    },
    fontSize: {
      sm: '0.875rem',
      base: '1.5rem',
    }
  },
  plugins: [],
}