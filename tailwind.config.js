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
      secondary: {
        DEFAULT: "#2D9C90"
      },
      background: {
        DEFAULT: "#1E1E28",
        light: "#2B2B35",
        light2: "#383842"
      },
      text: {
        DEFAULT: "rgba(255, 255, 255, 0.72)",
        t2: "rgba(255, 255, 255, 0.54)"
      }
    },
    backgroundPosition: {
      "hero": "top 4rem right 0"
    },
    maxHeight: {
      "sm-phone": "620px",
      "screen": "100%"
    },
    extend: {
      backgroundImage: theme => ({
        "hero-vector": "url(../images/hero-vector.png)",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
