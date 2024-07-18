/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Text Colors
        textBlack: '#070707',
        textDarkGrey: '#272A2A',
        textLightGrey: '#818791',

        // Colors
        bluePrimary: '#005DC0',
        greenPrimary: '#27BF7D',

        // Border Colors
        borderLightGrey: '#E8E8E8',
        border2LightGrey: '#F7F7F7',

        // Background Colors
        blueBg: '#C8D6ED',
        blueBgLight: '#EBF3FF',
        greenBgLight: '#F3FFF8',
        yellowBgLight: '#FFFDE9'
      }
    },
  },
  plugins: [],
}

