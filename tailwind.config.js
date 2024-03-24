/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}

