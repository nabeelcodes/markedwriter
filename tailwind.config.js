import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
        sans: ["'Manrope'", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -40%) scale(0.8)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        contentReveal: {
          from: { opacity: 0, top: "1rem" },
          to: { opacity: 1, top: "0.5rem" },
        },
        contentHide: {
          from: { opacity: 1, top: "0.5rem" },
          to: { opacity: 0, top: "1rem" },
        },
      },
      animation: {
        overlayShow: "overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentReveal: "contentReveal 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentHide: "contentHide 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [tailwindTypography],
};
