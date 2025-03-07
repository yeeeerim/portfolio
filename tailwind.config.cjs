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
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
