/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FDFBF7',
        'serene-blue': '#4A90E2',
        'calm-green': '#7BC47F',
        'soft-yellow': '#F5D76E',
        'light-coral': '#FF6B6B'
      },
      fontFamily: {
        'heading': ['Poppins', 'Nunito', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'hover-scale': 'hoverScale 0.3s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
}