module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',    // Sky Blue
        secondary: '#9333EA',  // Purple
        darkBg: '#0F172A',     // Very Dark Navy
        lightBg: '#F9FAFB',    // Lightest Gray
        darkText: '#E2E8F0',   // Slate-200
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #3B82F6, #9333EA)',
      },
    },
  },
  plugins: [],
}

