module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mmd: ['Major Mono Display', 'monospace'],
        ptm: ['PT Mono', 'serif'],
      },
      backgroundColor: {
        mint: '#1e8a8a',
        lightgrey: '#8D9597',
        middlegrey: '#E6E6E6',
      },
      colors: {
        mint: '#1e8a8a',
        lightgrey: '#8D9597',
      },
      fontSize: {
        h1: '48px',
        h3: '36px',
      },
      borderColor: {
        lightgrey: '#8D9597',
      },
    },
  },
  plugins: [],
};
