/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cont": {
          50: "var(--cont-50)",
          75: "var(--cont-75)",
          100: "var(--cont-100)",
          125: "var(--cont-125)",
          150: "var(--cont-150)",
        },
      },
    },
  },
  plugins: [],
}

