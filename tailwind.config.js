/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    'node_modules/preline/dist/*.js',
    


  ],


  theme: {
   extend: {
      transitionProperty: {
        'opacity': 'opacity',
        'transform': 'transform',
        'opacity-transform': 'opacity, transform'
      },
      transitionTimingFunction: {
         'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
       }
    },
  },
  plugins: [
    require('preline/plugin'),



  ],
};


