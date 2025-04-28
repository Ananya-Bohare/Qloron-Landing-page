/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'hero': 'calc(90vh - 6rem)', // or your preferred value
        'hero-mobile': '600px',
        'hero-desktop': '800px'
      },
    },
    
  },
  plugins: [],
}
