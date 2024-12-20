/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         mainFont:['Inter',"sans-serif"]
      },
      screens: {
        // Custom Breakpoints
        xs: '320px',   // Extra small
        sm: '640px',   // Small
        md: '768px',   // Medium
        lg: '1024px',  // Large
        xl: '1280px',  // Extra large
        '2xl': '1536px', // 2XL
      },
    },
  },
  plugins: [],
}