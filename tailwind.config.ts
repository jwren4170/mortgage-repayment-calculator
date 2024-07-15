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
       'lime': 'hsl(61, 70%, 52%)',
       'red': 'hsl(4, 69%, 50%)',
       'white': 'hsl(0, 0%, 100%)',
       'slate-100': 'hsl(202, 86%, 94%)',
       'slate-300': 'hsl(203, 41%, 72%)',
       'slate-500': 'hsl(200, 26%, 54%)',
       'slate-700': 'hsl(200, 24%, 40%)',
       'slate-900': 'hsl(202, 55%, 16%)',
      },
      fontWeight: {
        'custom-500': '500',
        'custom-700': '700'
      },
      screens: {
        'mobile': '23rem',
        'desktop': '90rem'
      }
    },
  },
  plugins: [],
};
export default config;
