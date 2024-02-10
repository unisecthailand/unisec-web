module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
