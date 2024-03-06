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
        "koinx-blue": "#0052FE",
        "koinx-green": "#00A8A8",
        "koinx-red": "#FF4D4D",
        "koinx-yellow": "#FFD700",
        "koinx-black": "#000000",
        "koinx-white": "#FFFFFF",
      },
      borderRadius: {
        primary: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
