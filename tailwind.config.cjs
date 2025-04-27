import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        progressBar: "progressBar 3s linear forwards",
      },
      keyframes: {
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        cinzel: ["var(--font-cinzel)"],
        serif: ["var(--font-serif)"],
      },
      boxShadow: {
        card: "0 0 8px #ffffff40",
        "card-hover": "0 0 12px #ffffff90",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1800px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
