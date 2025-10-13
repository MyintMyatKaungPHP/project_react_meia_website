/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Slab"', "serif"],
      },
    },
    keyframes: {
      // Keyframes for the circular background animation - INCREASED TRANSLATION
      move1: {
        "0%": { transform: "translate(0, 0)" },
        "25%": { transform: "translate(40px, -60px)" }, // Increased
        "50%": { transform: "translate(0, 0)" },
        "75%": { transform: "translate(-40px, 60px)" }, // Increased
        "100%": { transform: "translate(0, 0)" },
      },
      move2: {
        "0%": { transform: "translate(0, 0)" },
        "25%": { transform: "translate(-50px, 40px)" }, // Increased
        "50%": { transform: "translate(0, 0)" },
        "75%": { transform: "translate(50px, -40px)" }, // Increased
        "100%": { transform: "translate(0, 0)" },
      },
      move3: {
        "0%": { transform: "translate(0, 0)" },
        "25%": { transform: "translate(60px, 20px)" }, // Increased
        "50%": { transform: "translate(0, 0)" },
        "75%": { transform: "translate(-60px, -20px)" }, // Increased
        "100%": { transform: "translate(0, 0)" },
      },
      move4: {
        "0%": { transform: "translate(0, 0)" },
        "25%": { transform: "translate(-20px, -40px)" }, // Increased
        "50%": { transform: "translate(0, 0)" },
        "75%": { transform: "translate(20px, 40px)" }, // Increased
        "100%": { transform: "translate(0, 0)" },
      },
    },
    animation: {
      // Apply the keyframes with duration and timing function
      move1: "move1 20s ease-in-out infinite",
      move2: "move2 25s ease-in-out infinite",
      move3: "move3 18s ease-in-out infinite",
      move4: "move4 22s ease-in-out infinite",
    },
  },
  darkMode: "class",
  plugins: [require("tailgrids/plugin")],
};
