/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  theme: {
    screens: {
      xs: "614px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px"
    },
    extend: {
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b"
        }
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    }
  }
}
