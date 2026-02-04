/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #f97316 100%)",
      },
    },
  },
  plugins: [],
};

