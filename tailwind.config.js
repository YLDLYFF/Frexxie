const { transform } = require( 'next/dist/build/swc' );

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob:"blob 6s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform:"translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform:"translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform:"translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform:"translate(0px, 0px) scale(1)"
          },
        }
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
        Caveat:['"Caveat"',"Montserrat"],
        Poppins:['"Poppins"',"sans-serif"],
      },
      backgroundImage: {
        // 'hero': "url('https://www.pexels.com/photo/a-woman-eating-a-bread-while-working-7689765/')",
      },
      screens: {
        'mobile': '300px',
        // => @media(min-width: 320px){ ... }
        'tablet': '520px',
        // => @media (min-width: 480px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
    plugins: [],
  }
}
