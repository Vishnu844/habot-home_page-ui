/** @type {import('tailwindcss').Config} */
/** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'); */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "p-green": "#00732F",
        "p-orange": "#EB7150",
        "p-grey": "#6D6E71",
        "b-orange": "#E7760D",
        "p-blue": "#072F57",
        "f-blue": "#123557",
        "p-light-blue": "#E8FBFF",
      },
      backgroundImage: {
        hero: `url("./src/assets/image.jpg")`,
      },
      height: {
        90: "350px",
        150: "38rem",
      },
      fontSize: {
        "5.5xl": ["3.4375rem", { lineHeight: "4.125rem" }],
      },
      margin: {
        27: "6.5rem",
      },
      width: {
        95: "400px",
        100: "420px",
        110: "450px",
        128: "541px",
        160: "620px",
        165: "640px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      listStyleImage: {
        greenTick: 'url("./src/assets/checked3.png")',
      },
      translate: {
        "-10": "-5rem",
      },
    },
  },
  plugins: [],
};
