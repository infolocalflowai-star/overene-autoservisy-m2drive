/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E10600',
          'red-dark': '#B70500',
          'red-glow': '#FF1F0F',
          black: '#0A0A0A',
          'black-soft': '#111111',
          surface: '#161616',
          'surface-2': '#1C1C1C',
          line: '#262626',
          muted: '#8A8A8A',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"Space Grotesk"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        'red-glow': '0 0 0 1px rgba(225,6,0,0.35), 0 12px 40px -10px rgba(225,6,0,0.45)',
        'soft-lift': '0 12px 40px -12px rgba(0,0,0,0.6)',
        'inner-hairline': 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-red':
          'radial-gradient(60% 50% at 50% 0%, rgba(225,6,0,0.18) 0%, rgba(225,6,0,0) 70%)',
      },
    },
  },
  plugins: [],
}
