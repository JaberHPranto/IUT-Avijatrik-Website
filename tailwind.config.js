/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "560px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        green: "#00DAAE",
        transparent: "transparent",
      },
      boxShadow: {
        primary: "0px 4px 40px rgba(0, 0, 0, 0.03)",
        glow: "0 5px 15px rgba(145, 92, 182, .4)",
      },
      backgroundImage: {
        homeBackground: "url('/images/Background.png')",
      },
    },
  },
  plugins: [],
};
