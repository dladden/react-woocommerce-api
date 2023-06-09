/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge 'purges' unused classes in the project to improve performance
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  //adding plugins
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
