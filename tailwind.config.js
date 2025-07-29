module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-primary": "#001736",
        "custom-primary-variant": "#054569",
        "custom-secondary": "#DADDD8",
        "custom-secondary-variant": "#FAFAFF",
        "custom-contrast": "#e5035f",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
      },
      maxHeight: {
        140: "35rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
