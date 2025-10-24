import type { Config } from "tailwindcss"

const config = {
  // Alterado darkMode para a string 'class'
  darkMode: "class", 
  content: [
    // Caminhos refinados para buscar classes Tailwind
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2f9b2e", // Mantida sua cor primária
          foreground: "hsl(var(--primary-foreground))",
          // ... (restante das suas cores primárias) ...
           50: "#eefae8",
           100: "#d4f2c8",
           200: "#b8e9a5",
           300: "#9cdf82",
           400: "#80d65f",
           500: "#64cd3c",
           600: "#4fb830",
           700: "#3a8f24",
           800: "#256618",
           900: "#103d0c",
        },
        secondary: {
          DEFAULT: "#ff6b00", // Mantida sua cor secundária
          foreground: "hsl(var(--secondary-foreground))",
           // ... (restante das suas cores secundárias) ...
           50: "#fff5eb",
           100: "#ffe6cc",
           200: "#ffd1a3",
           300: "#ffbc7a",
           400: "#ffa752",
           500: "#ff9229",
           600: "#ff7d00",
           700: "#cc6400",
           800: "#994b00",
           900: "#663200",
        },
        // ... (restante das suas cores: destructive, muted, accent, popover, card) ...
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
    },
  },
  // O plugin tailwindcss-animate está correto aqui
  plugins: [require("tailwindcss-animate")], 
} satisfies Config

export default config