/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A5F',
          teal: '#0D9488',
          sky: '#0EA5E9',
          amber: '#F59E0B',
          emerald: '#10B981',
          rose: '#E11D48',
          gray: {
            50: '#FAFAF9',
            100: '#F5F5F4',
            200: '#E7E5E4',
            300: '#D6D3D1',
            400: '#A8A29E',
            500: '#78716C',
            600: '#57534E',
            700: '#44403C',
            800: '#292524',
            900: '#1C1917',
          }
        },
        dark: {
          page: '#0F172A',
          card: '#1E293B',
          elevated: '#334155',
          border: '#334155',
          text: {
            primary: '#F1F5F9',
            secondary: '#94A3B8',
            muted: '#64748B'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
