import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '35': '35px',
        '50': '50px',
      },
      keyframes: {
        'jump-in': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '50%': { opacity: "1", transform: 'translateY(10px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
      },
      animation: {
        'jump-in': 'jump-in 0.5s ease-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
export default config;
