/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        inedem: {
          primary: "#0EA5E9", // azul moderno
          dark: "#0B1220",
          light: "#F1F5F9",
          accent: "#22C55E", // acento verde
        },
      },
    },
  },
  plugins: [],
};
