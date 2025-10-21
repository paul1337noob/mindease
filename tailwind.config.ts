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
        background: "#F7FAFC",
        primary: "#1565C0",
        "accent-light": "#E3F2FD",
        "slate-900": "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

