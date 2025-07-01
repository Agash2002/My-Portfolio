/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      'sans': ['Libre Caslon Display'],
      'sans1': ['Helvetica', 'Arial', 'sans-serif'],
      'mono':['Poppins', 'monospace'],
'serif': ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
    },
    screens: {
      'tablet': '700px',
      'phone' : '450px'
    },
  },
  plugins: [],
}

