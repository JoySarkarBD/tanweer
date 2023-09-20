/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { min: "0px", max: "480px" },
        sm: { min: "481px", max: "640px" },
        xmd: { min: "768", max: "1220px" },
        xxl: { min: "1024px", max: "1318px" },
      },
    },
  },

  //...
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
