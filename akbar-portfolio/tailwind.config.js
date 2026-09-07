/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070A12",
        surface: "#0D1322",
        surfaceCard: "rgba(16, 24, 40, 0.75)",
        primaryCrimson: "#EF4444",
        neonRed: "#FF2E4D",
        accentGlow: "#F43F5E",
        mutedBorder: "rgba(239, 68, 68, 0.2)",
      },
      boxShadow: {
        'crimson-glow': '0 0 25px -5px rgba(239, 68, 68, 0.35)',
        'neon-hover': '0 0 30px rgba(255, 46, 77, 0.5)',
      },
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}