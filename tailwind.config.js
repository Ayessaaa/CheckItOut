/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Adjust path to match your HTML files
    "./views/*.{js,ts,jsx,tsx,ejs}", // If you are using view templates like EJS or Handlebars, add that folder
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your JS/TS files are in a src directory
    "./index.js",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "#042c4b",
        blue2: "#0d7692",
        red1: "#361436",
        darkblue: "#0e1134",
        blue3: "#032037",
      },
    },
  },
  plugins: [],
};
