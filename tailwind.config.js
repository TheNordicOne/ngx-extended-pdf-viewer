/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/showcase/src/**/*.{html,ts}'],
  theme: {
    extend: {
      spacing: {
        'header-height': '6rem',
      },
    },
  },
  plugins: [],
};
