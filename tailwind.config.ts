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
        flyairplane: 'flyairplane 1s linear forwards',
        changePage: 'changePage 1s linear forwards',
        stripes: 'stripes 15s linear infinite'
      },

      keyframes: {
        flyairplane: {
          '0%': {transform: 'rotateZ(0deg) '},
          '10%': {transform: 'rotateZ(-45deg)'},
          '30%': {transform: 'translateY(-10vh) rotateZ(-45deg)'},
          '80%': {transform: 'scale(5) translateY(-10vh) rotate(-45deg)'},
          '100%': {transform: 'translateY(-100vh) rotateZ(-45deg)'}
        },

        changePage: {
          '0%': {opacity: '1'},
          '90%': {opacity: '0'},
          '100%': {display: 'none', opacity: '0'}
        },

        stripes: {
          '0%': {
            transform: 'translateX(-80vw) translateY(10vh) scale(0) rotate(45deg)'
        },
        '100%': {
            transform: 'translateX(100vw) translateY(-180vh) scale(1) rotate(45deg)'
        }
        }
      },

      colors: {
        'primary':'#19232D',
        'secondary': '#1F2E3C',
        'accent': '#DCBB87',
        'white': '#FFFFFF',
        'grey': '#D9D9D9',
        'grey_light': '#F8F7FA'
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
