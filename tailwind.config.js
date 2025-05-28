module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        uocCorporate: '#eb34b7',
        uocMasterbrand: '#c0eb34',
        uocBg: '#f0f9d6', // Adjusted lightness
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'responsive-small': '4vw',
        'responsive-medium': '6vw',
        'responsive-large': '8vw',
        'small': '1rem',
        'medium': '1.5rem',
        'large': '2rem',
      },
    },
  },
  plugins: [],
}
