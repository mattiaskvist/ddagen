/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        cerise: '#ee2a7b',
        darkblue: '#06091d',
        blue: '#090e2f',
        gray: '#313234',
        yellow: '#ffc800',
        white: '#ffffff',
      },
    },
    fontFamily: {
      sans: ['neue-haas', 'sans-serif'],
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
