import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        card: "rgba(255,255,255,0.03)",
        border: "rgba(255,255,255,0.06)",
        accent: {
          cyan: "#00E5FF",
          pink: "#FF3D71",
          yellow: "#FFD93D",
          purple: "#A855F7"
        }
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        firePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.35s ease both",
        "fire-pulse": "firePulse 1.5s ease-in-out infinite"
      },
      maxWidth: {
        shell: "430px"
      }
    }
  },
  plugins: []
};

export default config;
