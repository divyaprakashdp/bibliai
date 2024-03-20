/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Madimi+One"],
        heading: ["Inconsolata"],
      },
    },
  },
  plugins: [],
};
