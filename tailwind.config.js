/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {'custom-contact':"url('/ddcontactb.jpg');",
      },
      colors: {
        'doorange': '#eb6200',
      },
    },
  },
  plugins: [],
};
