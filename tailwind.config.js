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
        'brand-primary': "#002F34",
        'brand-secondary': "#23E5DB",
        "brand-alternative": "#1D3C81"
      },
      boxShadow: {
        "border-1": "inset 0 0 0 1px currentColor",
        "border-2": "inset 0 0 0 2px currentColor",
        "border-3": "inset 0 0 0 3px currentColor",
        "border-4": "inset 0 0 0 4px currentColor",
        "border-8": "inset 0 0 0 8px currentColor",
        "overlay-light-40": "inset 0 0 0 1000px rgba(255, 255, 255, 0.4)",
      }
    },
  },
  plugins: [plugin(olxTypography)],
};
