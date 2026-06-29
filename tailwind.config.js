/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0d0938",
        "navy-2": "#14103f",
        indigo: "#4547d3",
        "indigo-bright": "#5d5ffb",
        coral: "#ff7f60",
        lilac: "#afc0fc",
        ink: "#f1f2ff",
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
