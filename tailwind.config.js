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
        xxs: '0.688rem',
        s: '0.813rem'
      },
      spacing: {
        '15': '3.75rem',
        '23': '5.75rem',
        '45': '11.25rem',
        '50': '12.25rem',
        '180.5': '45.125rem',
        '3/10': '30%',
      },
      padding: {
        'full': '100%',
      },
      scale: {
        '106': '1.06',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

