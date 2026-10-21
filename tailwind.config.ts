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
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        "surface-hover": "var(--color-surface-hover)",
        border: "var(--color-border)",
        "border-subtle": "var(--color-border-subtle)",
        theme: {
          DEFAULT: "var(--color-accent)",
          strong: "var(--color-accent-strong)",
          soft: "var(--color-accent-soft)",
          foreground: "var(--color-accent-foreground)"
        },
        dark: "#050505",
        brand: {
          pink:   "#FF3D71",
          cyan:   "#00E5FF",
          yellow: "#FFD93D",
          purple: "#A855F7",
        },
        accent: {
          cyan:   "#00E5FF",
          pink:   "#FF3D71",
          yellow: "#FFD93D",
          purple: "#A855F7",
        },
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
      },
      spacing: {
        "page-x": "var(--space-page-x)",
        "page-top": "var(--space-page-top)"
      },
      borderRadius: {
        card: "var(--radius-card)",
        control: "var(--radius-control)"
      }
    }
  },
  plugins: []
};

export default config;
