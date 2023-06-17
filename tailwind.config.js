/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      },
      fontSize: {
        s: '0.813rem'
      },
      spacing: {
        '15': '3.75rem',
        '50': '12.25rem',
      },
      padding: {
        'full': '100%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

