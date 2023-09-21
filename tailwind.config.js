/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { min: "0px" },
        sm: { min: "481px" },
        xmd: { min: "641px" },
        md: { min: "768px" },
        lg: { min: "1024px" },
        xl: { min: "1280px" },
        "2xl": { min: "1536px" },
      },
    },
  },

  //...
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
