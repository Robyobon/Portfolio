/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smartphone': {'max' : '767px'},
      // => @media (min-width: 640px) { ... }

      'tablet': {'min' : '767px', 'max' : '1023px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'min' : '1024px'},
      // => @media (min-width: 1280px) { ... }
    },
  }
}