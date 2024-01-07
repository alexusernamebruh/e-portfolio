/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        firstNav: {
          '0%': {
            transform: 'translateY(0vh) translateX(100vw) scale(1.0)',
            // transform: 'translateX(100vh)',
          },
          '25%': { transform: 'translateX(60vw) translateY(10vh) scale(1.1)' },
          '35%': { transform: 'translateX(45vw) translateY(10vh) scale(1.5)' },
          '50%': { transform: 'translateX(35vw) translateY(10vh) scale(3)' },
          '90%': { transform: 'translateX(15vw) translateY(10vh) scale(2)' },
          // '100%': {
          //   transform: 'translateY(100vh) translateX(0vw)',
          //   // transform: 'translateX(0vh)',
          // },
        },
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 16s linear infinite',
        firstNavbarElement: 'firstNav 6s',
        secondNavbarElement: 'firstNav 6s',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
