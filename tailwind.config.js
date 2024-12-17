const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const olxTypography = require('./src/tailwind/typography');


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        current: 'currentColor',
        'global-primary': "#FFFFFF",
        'global-secondary': "#F2F4F5",
        'global-inverse': "#002F34",
        'global-disabled': "#7F9799",
        'brand-primary': "#002F34",
        'brand-secondary': "#23E5DB",
        'brand-alternative': "#1D3C81",
        'brand-disabled': "#D8DFE0",
      },
      boxShadow: {
        "border-1": "inset 0 0 0 1px currentColor",
        "border-2": "inset 0 0 0 2px currentColor",
        "border-3": "inset 0 0 0 3px currentColor",
        "border-4": "inset 0 0 0 4px currentColor",
        "border-8": "inset 0 0 0 8px currentColor",
        "border-1-disabled": "inset 0 0 0 1px #D8DFE0",
        "border-2-disabled": "inset 0 0 0 2px #D8DFE0",
        "border-3-disabled": "inset 0 0 0 3px #D8DFE0",
        "border-4-disabled": "inset 0 0 0 4px #D8DFE0",
        "border-8-disabled": "inset 0 0 0 8px #D8DFE0",
        "overlay-light-40": "inset 0 0 0 1000px rgba(255, 255, 255, 0.4)",
      }
    },
  },
  plugins: [plugin(olxTypography)],
};
