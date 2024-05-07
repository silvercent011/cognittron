import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E2E2E4",
        },
        gray_alpha: {
          600: "#110C22",
        },

        primary: {
          25: "#F9F8FF",
          500: "#7357FF",
          400: "#8B75FF",
        },
        theme_light: {
          white: "#FFF",
          high_em: "#110C22",
          med_em: "#4F4B5C",
          surface_0: "#FFF",
          surface_1: "#F8F8F8",
          disabled_light_em: "#E2E2E4",
          primary_low_em: "#E2DCFF",
        },
      },
      fontFamily: {
        sans: ["General Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
