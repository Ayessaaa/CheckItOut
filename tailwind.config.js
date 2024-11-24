/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Adjust path to match your HTML files
    "./views/**/*.{js,ts,jsx,tsx}", // If you are using view templates like EJS or Handlebars, add that folder
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your JS/TS files are in a src directory
    "./index.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
