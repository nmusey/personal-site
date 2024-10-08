const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            serif: ['var(--font-rokkitt)', ...fontFamily.serif],
        }
    },
  },
  plugins: [],
}
