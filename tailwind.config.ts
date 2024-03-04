import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#171217",
        primary: "#362938",
        "txt-primary": "#FFFFFF",
        "txt-secondary": "#D6CEC3",
        "txt-tertiary": "#B59EB8",
      },
    },
  },
  plugins: [],
};
export default config;
