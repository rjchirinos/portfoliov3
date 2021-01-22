module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      mono: ["Fira Mono", "monospace"]
    },
    colors: {
      primary: {
        DEFAULT: "#68349B",
        t1: "rgba(105, 52, 157, 0.84)",
        t2: "rgba(105, 52, 157, 0.62)"
      },
      background: {
        DEFAULT: "#1E1E28",
        light: "#32323C",
        light2: "#474751"
      },
    },
    backgroundPosition: {
      "hero": "top 4rem right 0"
    },
    extend: {
      backgroundImage: theme => ({
        "hero-vector": "url(../images/hero-vector.png)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
