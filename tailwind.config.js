/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'aahara-cream': '#FBF7EF',
        'aahara-beige': '#F3E8D2',
        'aahara-gold': '#C88A2A',
        'aahara-terra': '#B65C3E',
        'aahara-sage': '#6D805C',
        'aahara-brown': '#3B2A21'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(59, 42, 33, 0.08)'
      }
    }
  },
  plugins: []
}
