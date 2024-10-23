/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      richblack: {
        5: "#1E1E1E",
        10: "#0A0F18"
      },
      palewhite: {
        5: "#D3E4CD",
        10: "#D9D9D9"
      },
      cyan: {
        5: "#00ADB5"
      }
    },
    extend: {},
  },
  plugins: [],
};
