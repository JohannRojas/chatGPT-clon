/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-pink': '#EBC7E6',
      'light-violet': '#A084DC',
      'light-purple': '#645CBB', 
      
    },
    fontFamily: {
      sans: ["'Comic Sans MS'", "'Comic Sans'"],
    }
  },
  plugins: [],
};
