import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#081522",
        ink: "#101D29",
        steel: "#71808A",
        cyan: "#559DB5",
        ice: "#EEF1F0",
        gold: "#C9A56A"
      },
      boxShadow: {
        glow: "0 0 50px rgba(85,157,181,.18)"
      }
    }
  },
  plugins: []
};

export default config;
