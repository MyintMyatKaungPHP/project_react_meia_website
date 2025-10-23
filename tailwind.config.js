/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Slab"', "serif"],
      },
      colors: {
        // Original Tailwind colors
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Keep existing custom colors
        green: "#21ad5c",
        yellow: "#f5c115",
        dark: "#1a1a1a",
        "dark-2": "#2a2a2a",
        "dark-3": "#3a3a3a",
        "dark-4": "#4a4a4a",
        "dark-5": "#5a5a5a",
        "dark-6": "#6a6a6a",
        "gray-4": "#f8f9fa",
        "body-color": "#8e8e8e",
        "secondary-color": "#8e8e8e",
        stroke: "#e8e8e8",
      },
      spacing: {
        // Original Tailwind spacing
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      fontSize: {
        // Original Tailwind font sizes
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      screens: {
        // Original Tailwind breakpoints
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
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
