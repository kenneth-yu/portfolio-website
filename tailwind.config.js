/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline': ['3.2rem', { lineHeight: '1.2' }],
        'body': ['1.2rem', { lineHeight: '1.6' }],
        'subhead': ['1.5rem', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-text':
          'linear-gradient(120deg, #67e8f9 0%, #22d3ee 15%, #0ea5e9 30%, #3b82f6 50%, #6366f1 70%, #8b5cf6 85%, #a78bfa 100%)',
      },
      backgroundClip: {
        text: 'text',
      },
      colors: {
        surface: 'rgb(32, 32, 32)',
      },
    },
  },
  plugins: [],
};
