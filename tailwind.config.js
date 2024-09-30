/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        'heading-h1': '56px',
        'heading-h2': '48px',
        'heading-h3': '36px',
        'body-1': '28px',
        'body-2': '18px',
        'body-3': '16px',
        'body-4': '14px',
      },
      backgroundImage: {
        'linear-primary': 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
      },
      borderImage: {
        'linear-primary': 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
      },
      colors: {
        background: '#eeeeee',
        highlight: '#96e6a1',
      },
    },
  },
  plugins: [require('tailwindcss-border-gradients')],
};
