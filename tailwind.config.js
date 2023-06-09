const withMT = require('@material-tailwind/react/utils/withMT')
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui', '@tailwindcss/line-clamp')],
})
