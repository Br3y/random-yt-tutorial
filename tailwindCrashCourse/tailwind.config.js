/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './src/**/*.{vue,js,ts}',
    './src/views/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
    container:{
      center:true,
      padding:'2rem'
    }
  },
  plugins: [],
}