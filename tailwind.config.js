/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ff7d1a",
        "primary-light": "#ff7d1abf",
        "primary-pale": "#ffede0",
        "neutral-0": "#1d2025",
        "neutral-1": "#68707d",
        "neutral-2": "#b6bcc8",
        "neutral-3": "#f7f8fd",
        "neutral-white": "#ffffff",
        "neutral-black": "#000000bf"
      },
      screens: {
        'us': '425px',
        'ms': '848px',
      }
    },
  },
  plugins: [],
}

