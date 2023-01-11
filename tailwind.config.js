/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  media: false, // or 'media' or 'class'
  theme: {
    spacing: {
      xs: ".8rem",
      sm: "1.6rem",
      md: "2.4rem",
      lg: "4.8rem",
      xl: "8rem",
      xxl: "12rem",
    },
    extend: {
      colors: {
        "color-theme-black": "#0a2239",
        "color-theme-blue": "#136da5",
        "color-theme-orange": "#ed6a5a",
        "color-theme-sand": "#f4f1bb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
