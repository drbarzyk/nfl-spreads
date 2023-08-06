/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans'],
      },
    }
  },
  darkMode: 'class',
  // add daisyUI plugin
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#002244",
          secondary: "#862633",
          accent: "#C0C0C0",
          neutral: "#3d4451",
          "base-100": "#1c2331",
        }
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "forest",
  },
}