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
        gold: {
          DEFAULT: "#C49D00",
          light: "#E5BF22",
          hover: "#A68400",
          muted: "rgba(196, 157, 0, 0.15)",
          glow: "rgba(196, 157, 0, 0.25)",
        },
        grey: {
          DEFAULT: "#BAB9B9",
          light: "#E4E4E7",
          dark: "#3F3F46",
          muted: "#71717A",
        },
        dark: {
          DEFAULT: "#000000",
          card: "#0D0D0D",
          surface: "#141414",
          border: "#262626",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(196, 157, 0, 0.3)",
        "gold-lg": "0 10px 30px -5px rgba(196, 157, 0, 0.4)",
        card: "0 8px 30px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E5BF22 0%, #C49D00 50%, #947700 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #000000 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)",
        "gold-glow": "radial-gradient(circle, rgba(196, 157, 0, 0.15) 0%, rgba(0,0,0,0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
