/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#F5F5F5',
          text: '#1A1A1A',
          accent: '#3B82F6',
        },
        dark: {
          primary: '#19202E',
          text: '#F5F5F5',
          accent: '#60A5FA',
        },
      },
    },
  },
  plugins: [],
}