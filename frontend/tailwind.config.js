const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),
],
  theme: {
    extend: {
      colors: {
        'primary-color': '#6266EB',
        'second-color': '#CDE5FF',
        'third-color': '#FFE5F2',
        'fourth-color': '#FFFFFF',
        'fifth-color': '#C7D7E8',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

