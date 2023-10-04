/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-pattern': "url('/src/assets/more/15.jpg')",
        'home-bg': "url('/src/assets/bg/download.jpg')",
        'bg-shap': "url('/src/assets/bg/Shap.png')",
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '116%': '116%',
      '150%': '150%',
      '200%': '200%',
      '250%': '250%',
      '300%': '300%',
      '16': '4rem',
    },
    fontFamily: {
      'young': ['Young Serif', 'serif'],
      'bebas': ['Bebas Neue', 'serif'],
      'jost': ['Jost', 'sans-serif'],


    },
  },
  plugins: [],
}

