/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: [{ min: "320px", max: "639px" }],
        "2sm": [{ min: "430px", max: "639px" }],
        lg: [{ min: "640px", max: "1200px" }],
        "2lg": [{ min: "800px", max: "1200px" }],
        xl: [{ min: "1400px", max: "1579px" }],
        "2xl": [{ min: "1580px", max: "9999px" }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
