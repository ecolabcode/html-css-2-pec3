module.exports = {
  content: [
    './src/**/*.{html,js,scss}',
  ],
  theme: {
    extend: {
      colors: {
        uocCorporate: '#eb34b7',
        uocMasterbrand: '#c0eb34',
        uocBg: '#f0f4c3', // color.scale($uoc-masterbrand, $lightness: 70%)
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
