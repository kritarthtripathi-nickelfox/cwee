/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightskyblue: "#69d3ff",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(255, 255, 255, 0.9)",
        },
        orangered: {
          "100": "#ea5814",
          "200": "#ea5813",
        },
        white: "#fff",
        black: "#000",
        goldenrod: {
          "100": "#ffc13c",
          "200": "rgba(255, 193, 60, 0)",
        },
        darkslategray: "#3c3a28",
        lemonchiffon: "#fcf5cc",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
      },
      borderRadius: {
        "6xl": "25px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      "13xl": "2rem",
      "61xl": "5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
