import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        lime: "hsl(61, 70%, 52%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        "slate-100": "hsl(202, 86%, 94%)",
        "slate-300": "hsl(203, 41%, 72%)",
        "slate-500": "hsl(200, 26%, 54%)",
        "slate-700": "hsl(200, 24%, 40%)",
        "slate-900": "hsl(202, 55%, 16%)",
      },
      fontWeight: {
        "custom-500": "500",
        "custom-700": "700",
      },
      screens: {
        xs: "23rem",
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        xxl: "96rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
