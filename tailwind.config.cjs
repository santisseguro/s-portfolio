/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/index.html'
  ],
  theme: {
    extend: {
      animation: {
        'background-waves': 'backgroundWaves 6s ease-in-out infinite alternate',
        'float-sparkles': 'floatSparkles 18s linear infinite',
        'pulse-rings': 'pulseRings 20s linear infinite'
      },
      keyframes: {
        backgroundWaves: {
          '0%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '50% 60%' }
        },
        floatSparkles: {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-10%)' }
        },
        pulseRings: {
          from: { transform: 'translate(-50%, -50%) scale(1)' },
          to: { transform: 'translate(-50%, -50%) scale(1.2)' }
        }
      },
      colors: {
        glassyYellow: '#fef08a',
        glassyWhite: 'rgba(255,255,255,0.05)'
      }
    }
  },
  plugins: []
};

safelist: [
  'max-w-[180px]',
  'max-w-[480px]',
  'w-full',
  'w-auto',
  'object-contain',
  'object-cover',
]