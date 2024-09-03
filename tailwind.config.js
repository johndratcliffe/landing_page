const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.transition-transform': {
      transition: 'transform 0.6s'
    },
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
}
