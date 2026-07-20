export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        biology: {
          green: '#2ecc71',
          blue: '#3498db',
          purple: '#9b59b6',
          teal: '#1abc9c',
        }
      }
    },
  },
  plugins: [],
}
