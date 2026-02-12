/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0a0a0a",
        secondary: "#111111",
        accent: {
          cyan: "#00f3ff",
          purple: "#bc13fe",
          blue: "#0066ff",
        }
      }
    },
  },
  plugins: [],
}
