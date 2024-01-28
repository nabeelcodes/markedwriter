import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";
import { appKeyframes, appAnimations } from "./src/lib/animationData";

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
      keyframes: appKeyframes,
      animation: appAnimations,
    },
  },
  plugins: [tailwindTypography],
};
