/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'primary': '#005f73',
          'secondary': '#e0aaff',
          'tertiary': '#94d2bd',
          'accent': '#ffafcc',
          'light': '#ffffc7',
          'dark': '#495057',
      },
      colors: {
        'primary': '#2b2b2b',  
        'secondary': '#f0eae2',  
        'terciary': '#c192fb',  
        'accent': '#c192fb', 
        'light': '#ffffff',  
        'dark': '#333333',  
        'primary-hover': '#004f62',  
        'secondary-hover': '#d0a0ff',  
        'dark-hover': '#3e4345',  
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Lato', 'sans-serif'],
      },
      textColor: {
        'primary': '#2b2b2b',  
        'secondary': '#f0eae2',  
        'terciary': '#c192fb',  
        'accent': '#c192fb', 
        'light': '#ffffff',  
        'dark': '#333333', 
      },
      fontSize: {
        'size-1': '1rem',
        'size-2': '1.25rem',
        'size-3': '1.5rem',
        'size-4': '1.75rem',
        'size-5': '2rem',
        'size-6': '2.25rem',
        'size-7': '2.5rem',
        'size-8': '2.75rem',
        'size-9': '3rem',
        'size-10': '3.25rem',

      },

      spacing: {
        'spacing-1': '2rem',
        'spacing-2': '4rem',
        'spacing-3': '6rem',
        'spacing-4': '8rem',
        'spacing-5': '10rem',
        'spacing-6': '12rem',
        'spacing-7': '14rem',
        'spacing-8': '16rem',
        'spacing-9': '18rem',
        'spacing-10': '20rem',
        'spacing-11': '22rem',
        'spacing-12': '24rem',
        'spacing-13': '26rem',
        'spacing-14': '28rem',
        'spacing-15': '30rem',
        'spacing-16': '32rem',
        'spacing-17': '34rem',
        'spacing-18': '36rem',
        'spacing-19': '38rem',
        'spacing-20': '40rem',


      },
      borderRadius: {
        'custom-20': '20px',
      },
      screens: {
        'sm': '576px', // Breakpoint small de Bootstrap
        'md': '768px', // Breakpoint medium de Bootstrap
        'lg': '992px', // Breakpoint large de Bootstrap
        'xl': '1200px', // Breakpoint extra large de Bootstrap
        '2xl': '1400px', // Extra extra large (añadido para más granularidad)
      },
      borderColor: {
        'primary': '#2b2b2b',
        'secondary': '#f0eae2',
      },

    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      textColor: ['active'],
      borderColor: ['focus-visible', 'first'],
      // Añadir aquí más variantes según sea necesario
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui')
    
  ],
};
