/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./projects/showcase/src/**/*.{html,ts}'],
  theme: {
    extend: {
      spacing: {
        'header-height': 'var(--header-height)',
        'content-begin': 'calc(var(--header-height) + var(--content-padding-top))',
      },
      height: {
        'vh-content': 'calc(100vh - var(--header-height) - var(--content-padding-top)',
      },
      colors: {
        primary: {
          light: 'hsl(193,100%,32%)',
          variant: {
            light: 'hsl(183,100%,23%)',
          },
        },
        secondary: {
          light: 'hsl(0,96%,89%)',
          variant: {
            light: 'hsl(329,46%,78%)',
          },
        },
        background: 'hsl(183,40%,98%)',
        surface: 'hsl(0,0%,100%)',
        error: {
          light: 'hsl(0,83%,35%)',
        },
        on: {
          primary: {
            light: 'hsl(0,0%,99%)',
          },
          secondary: {
            light: 'hsl(0,0%,12%)',
          },
          background: 'hsl(0,0%,99%)',
          surface: 'hsl(0,0%,99%)',
          error: 'hsl(0,0%,99%)',
        },
      },
    },
  },
  plugins: [],
};
