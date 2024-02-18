/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
        Caveat:['"Caveat"',"Montserrat"],
        Poppins:['"Poppins"',"sans-serif"],
      },
      backgroundImage: {
        'hero': "url('/images/jollof.jpg')",
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
