import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a1f15",       // deep forest, near black-green
          surface: "#14301f",    // slightly lighter — section layering
          card: "#1e4a32",       // card backgrounds
          border: "#000000",     // black borders
          cream: "#f5f0e8",      // primary cream text / highlight
          "cream-dim": "#c8bfa8", // muted cream for secondary text
          green: "#1c4231",      // the main forest green
          "green-light": "#2a5c42", // lighter green for hover/accent
          text: "#f5f0e8",       // cream
          muted: "#c8bfa8",      // muted cream
          neon: "#f5f0e8",       // was yellow — now cream (headings, nav links)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        pulse: "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
