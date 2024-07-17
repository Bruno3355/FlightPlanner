import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation: {
        flyairplane: 'flyairplane 1s linear forwards'
      },

      keyframes: {
        flyairplane: {
          '0%': {transform: 'rotateZ(0deg) '},
          '10%': {transform: 'rotateZ(-45deg)'},
          '30%': {transform: 'translateY(-10vh) rotateZ(-45deg)'},
          '80%': {transform: 'scale(5) translateY(-10vh) rotate(-45deg)'},
          '100%': {transform: 'translateY(-100vh) rotateZ(-45deg)'}
        }
      },

      colors: {
        'primary':'#19232D',
        'secondary': '#1F2E3C',
        'accent': '#DCBB87'
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        'h1': ['Aclonica', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
