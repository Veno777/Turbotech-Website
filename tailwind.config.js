/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#09BCFF', // Bright Turbine Blue
          navy: '#0A2A43', // Deep Navy Blue
          turquoise: '#09BCFF', // Alias for consistency
          green: '#28C76F', // Bright Green accent
        },
        background: {
          white: '#FFFFFF',
          light: '#F0FAFF', // Light background tint
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

