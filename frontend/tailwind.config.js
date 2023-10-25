/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thm-blue-bg': "#E5CFF7",
        'thm-blue-font-nav': '#0041E9',
        'thm-blue-font': '#713ABE',
        'thm-blue-box': '#9D76C1',
        'thm-blue-dark': '#5B0888'
      },
      fontFamily: {
        quick: ["Quicksand, sans-serif"],
        poppin: ["Poppins, sans-serif"],
        brilo: ["Brillotus, sans-serif"],
        itim: ["Itim, cursive"],
        vico: ["Pacifico, cursive"]
      }
    },
  },
  plugins: [],
}
