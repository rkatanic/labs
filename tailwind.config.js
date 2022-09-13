/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      black: "hsl(0, 0%, 8%)",
      gray: {
        50: "hsl(0, 0%, 98%)",
        100: "hsl(0, 0%, 96%)",
        200: "hsl(0, 0%, 88%)",
        300: "hsl(0, 0%, 61%)",
        400: "hsl(0, 0%, 51%)",
        500: "hsl(0, 0%, 48%)",
        600: "hsl(0, 0%, 20%)",
        700: "hsl(0, 0%, 16%)",
        800: "hsl(0, 0%, 14%)",
        900: "hsl(0, 0%, 12%)",
      },
    },},
  },
  plugins: [],
}