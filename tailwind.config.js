/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [`Montserrat`, "sans-serif"],
      },
      backgroundImage: {
        beach: "url('./src/assets/beach.jpeg')",
      },
    },
  },
  plugins: [],
};
