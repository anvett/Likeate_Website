/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/globals.css", 
    
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        'landing-primary': '#faff97',
        'landing-secondary': '#e998bb',
        'acctitle': '#662DC2',
        'landsubtitle2': '#F7B942',
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Lato', 'sans-serif'],
        'bobby': ['Bobby Jones Soft', 'sans-serif'],
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
        'size-11': '3.5rem',
        'size-12': '3.75rem',
        'size-13': '4rem',
        'size-14': '4.25rem',
        'size-15': '4.5rem',
        'size-16': '4.75rem',
        'size-17': '5rem',
        'size-18': '5.25rem',
        'size-19': '5.5rem',
        'size-20': '5.75rem',
        'size-21': '6rem',
        'size-22': '6.25rem',
        'size-23': '6.5rem',
        'size-24': '6.75rem',
        'size-25': '7rem',
      },
      spacing: {
        'spacing-1': '1rem',
        'spacing-2': '2rem',
        'spacing-3': '3rem',
        'spacing-4': '4rem',
        'spacing-5': '5rem',
        'spacing-6': '6rem',
        'spacing-7': '7rem',
        'spacing-8': '8rem',
        'spacing-9': '9rem',
        'spacing-10': '10rem',
        'spacing-11': '11rem',
        'spacing-12': '12rem',
        'spacing-13': '13rem',
        'spacing-14': '14rem',
        'spacing-15': '15rem',
        'spacing-16': '16rem',
        'spacing-17': '17rem',
        'spacing-18': '18rem',
        'spacing-19': '19rem',
        'spacing-20': '20rem',
        'spacing-21': '22rem',
        'spacing-22': '24rem',
        'spacing-23': '26rem',
        'spacing-24': '28rem',
        'spacing-25': '30rem',
        'spacing-26': '32rem',
        'spacing-27': '34rem',
        'spacing-28': '36rem',
        'spacing-29': '38rem',
        'spacing-30': '40rem',
      },
      borderRadius: {
        'custom-20': '20px',
      },
      screens: {
        'sm': '576px', 
        'md': '768px', 
        'lg': '992px', 
        'xl': '1200px', 
        '2xl': '1400px', 
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
      transform: ['hover', 'focus'],
      scale: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
};
