/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        center: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-30%)' },
        },
        uncenter: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        center: 'center 0.5s ease-in-out forwards',
        uncenter: 'uncenter 0.5s ease-in-out backwards',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
