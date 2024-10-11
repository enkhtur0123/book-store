/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_base/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    preflight: false,
  },
};
