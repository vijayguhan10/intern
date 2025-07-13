/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#ffbf00",
        "primary-100": "#ffc929",
        "secondary-200": "#00b050",
        "secondary-100": "#0b1a78",
        glownest: {
          pink: "#ec4899",
          purple: "#a855f7",
          indigo: "#6366f1",
          light: "#fdf2f8",
        },
      },
      animation: {
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradient-shift 3s ease infinite",
      },
    },
  },
  plugins: [],
};
