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
        h5: '24px',
      },
      borderColor: {
        lightgrey: '#8D9597',
      },
      width: {
        240: '240px',
        400: '400px',
      },
      height: {
        240: '240px',
        300: '300px',
        680: '680px',
      },
    },
  },
  plugins: [],
};
