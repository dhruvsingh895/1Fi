import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        "primary-dark": "#5B21B6",
        "primary-light": "#EDE9FE",
        "accent-gold": "#F4B740",
        "accent-green": "#16A34A",
        "accent-blue": "#2563EB",
        "accent-orange": "#F59E0B",
        "success-bg": "#DCFCE7",
        "bg-page": "#F5F5F6",
        surface: "#FFFFFF",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",
        "border-subtle": "#E5E7EB",
        danger: "#DC2626",
        "invite-green": "#16A34A",
      },
    },
  },
  plugins: [],
};

export default config;
