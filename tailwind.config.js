/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
 

    colors :{
      green: "#1EDF38",
      white:"#FFFFFF",
      gray:"#EEF0F1",
      grayText:"#AFAFAF",
      black:"#3A3A3A"

    },

    screens: {

      'lg': {'max': '1220px'},
      // => @media (max-width: 1023px) { ... }

      'slg': {'max': '1100px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
  },
    extend: {

      keyframes: {
        arrowFloat: {
          '0%': { transform: 'translateX(0)' },
          '50%':  { transform: 'translateX(10px)' },
          '100%':  { transform: 'translateX(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': {
            
            filter:"drop-shadow(0 1.2rem .8rem #d1d1d1)",
            transform: 'translateY(40px) rotate(2deg)',   },
          '100%': {transform: 'translateY(0px) rotate(0deg)' },
        },
        floatHouse: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(0deg)',   },
          '100%': {transform: 'translateY(0px) rotate(0deg)' },
        },
        floatCloud: {
          '0%': { transform: ' translate(500px,-90px) rotate(-0deg)' },
          '50%': { transform: 'translate(-100px,-200px) rotate(4deg)',   },
          '100%': {transform: 'translate(500px,-90px) rotate(0deg)' },
          
        },
        
        floatSun: {
          '0%': {

            filter:"drop-shadow(0 0 4rem yellow)",
            transform: ' translate(-200px,-90px) rotate(-0deg)' },
          '50%': { 
            
            filter:"drop-shadow(0 0 0 yellow)",
            transform: 'translate(1000px,-200px) rotate(4deg)',   },
          '100%': {
            filter:"drop-shadow(0 0 1rem yellow)",
            transform: 'translate(-200px,-90px) rotate(0deg)' },
        },

        floatCash1: {
          '0%': { transform: 'translate(-100px,80px) rotate(-5deg)' },
          '50%': { transform: 'translate(-100px,120px) rotate(10deg)',   },
          '100%': {transform: 'translate(-100px,80px) rotate(-5deg)' },
        },
        floatCash2: {
          '0%': { transform: 'translate(20px,-20px) rotate(5deg)' },
          '50%': { transform: 'translate(30px,20px) rotate(-25deg)',   },
         
          '100%': {transform: 'translate(20px,-20px) rotate(5deg)' },
        },

        floatCash3: {
          '0%': { transform: 'translate(110px,-60px) rotate(35deg)' },
          '50%': { transform: 'translate(100px,-30px) rotate(15deg)',   },
          '100%': {transform: 'translate(110px,-60px) rotate(35deg)' },
        },





      },
      animation: {
        arrow: 'arrowFloat 2s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        floatHouse: 'floatHouse 3s ease-in-out infinite',
        floatCloud: 'floatCloud 20s ease-in-out infinite',
        floatSun: 'floatSun 30s ease-in-out infinite',
        floatCash1:'floatCash1 3s ease-in-out infinite',
        floatCash2:'floatCash2 3s ease-in-out infinite',
        floatCash3:'floatCash3 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
