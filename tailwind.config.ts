import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07182E",
        ink: "#0B1F36",
        steel: "#5F7187",
        cyan: "#2E8BC8",
        ice: "#EEF5FA",
        gold: "#F1A93B"
      },
      boxShadow: {
        glow: "0 0 50px rgba(46,139,200,.18)"
      }
    }
  },
  plugins: []
};

export default config;