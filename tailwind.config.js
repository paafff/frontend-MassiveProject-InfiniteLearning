/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontPoppins: ["poppins"],
      },
      colors: {
        figmaPinkAgaLain: "#F08080",
      },
    },
  },
  plugins: [],
};
