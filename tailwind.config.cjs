/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    fontFamily: {
      sans: ["'Comic Sans MS'", "'Comic Sans'"],
    },
    extend: {
      colors: {
        'light-pink': '#EBC7E6',
        'light-violet': '#A084DC',
        'light-purple': '#645CBB', 
        'pine_green': '#037971',
        'oxford_blue': '#0E1C36',
        
      },
    },
  },
  plugins: [],
};
