import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // Blanc
        foreground: "#0A1128", // Bleu Marine (Typo)
        accent: {
          light: "#FDE2E4", // Rose Clair
          navy: "#0A1128", // Bleu Marine
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"], // Playfair Display
        sans: ["var(--font-sans)", "sans-serif"], // Inter / Montserrat
      },
    },
  },
  plugins: [],
};
export default config;
