/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      fontFamily: { nunito: "Nunito"},
    },

    colors:{
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
white: "#fff",
cyan: "#14ffec",
red: "#d6436e",
green: "#25da72",
yellow: "#2b6777",
black: "#030e12",
neon:"#5bccf6",
peach:"#ef9273" 
    },
    fontSize:{
      sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"

    }
  },
  plugins: [],
}
