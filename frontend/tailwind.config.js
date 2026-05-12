/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07152b',
        ink: '#10131a',
        gold: '#c99a2e',
        logoRed: '#ed1c24',
        logoOrange: '#f6a722',
        logoBlue: '#14a5dd',
        logoGreen: '#78be20',
        champagne: '#f5efe3',
        mist: '#f5f7fb'
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        editorial: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'Open Sans', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(7, 21, 43, .16)'
      }
    }
  },
  plugins: []
};
