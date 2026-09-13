/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {

        ocean: {
          'pink': '#d97fa7', 'pink-deep': '#efb3cd', 'pink-dark': '#b85f8b',
          'blue': '#a9c8ed', 'blue-light': '#dcecff', 'blue-deep': '#8fb5df', 'blue-dark': '#6288b7',
          'deep': '#f7e9f2', 'deep-alt': '#f3dce9', 'deep-border': '#b7a6c9', 'deep-border-bright': '#7895bd',
          'foam': '#fffafc', 'foam-dim': '#536b91', 'pearl': '#fffafc',
          'coral': '#e99aa8', 'gold': '#d4aa67', 'seaweed': '#76a8a5',
        },
        pet: {
          // Pinks
          'pink': '#f9c5d6',
          'pink-light': '#fce7f0',
          'pink-deep': '#e899b8',
          'pink-dark': '#c97a9a',
          // Blues
          'blue': '#a8d5e8',
          'blue-light': '#d6ecf5',
          'blue-deep': '#7bb8d4',
          'blue-dark': '#5a9ab8',
          // Periwinkle / lavender
          'periwinkle': '#c5c8f0',
          'periwinkle-light': '#e0e2f8',
          'periwinkle-deep': '#a0a4e0',
          'lavender': '#e8d8f0',
          'lavender-light': '#f4e8f8',
          'lavender-deep': '#c8a8d8',
          // Pearl / white
          'pearl': '#fff5f8',
          'pearl-blue': '#f0f8fb',
          'cream': '#fffaf0',
          // Deeper contrast blue
          'navy': '#4a6a8a',
          'navy-deep': '#3a5a7a',
          // Accents
          'coral': '#ff9e7a',
          'coral-light': '#ffc4a8',
          'mint': '#a8e0c8',
          'mint-deep': '#7cc99c',
          'gold': '#f0d88a',
          'gold-deep': '#d8b85a',
          'sand': '#f0e0c8',
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', '"Trebuchet MS"', 'sans-serif'],
        hand: ['"VT323"', 'monospace'],
        mono: ['"VT323"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'bubble': 'bubbleRise 8s ease-in infinite',
        'bubble-slow': 'bubbleRise 12s ease-in infinite',
        'bubble-fast': 'bubbleRise 5s ease-in infinite',
        'swim': 'swim 10s ease-in-out infinite',
        'swim-reverse': 'swimReverse 12s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'boot-bar': 'bootBar 1.5s ease-out forwards',
        'pixel-bounce': 'pixelBounce 0.6s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bubbleRise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.2' },
          '100%': { transform: 'translateY(-400px) scale(0.4)', opacity: '0' },
        },
        swim: {
          '0%': { transform: 'translateX(-20px) translateY(0)' },
          '25%': { transform: 'translateX(40vw) translateY(-5px)' },
          '50%': { transform: 'translateX(80vw) translateY(0)' },
          '75%': { transform: 'translateX(40vw) translateY(5px)' },
          '100%': { transform: 'translateX(-20px) translateY(0)' },
        },
        swimReverse: {
          '0%': { transform: 'translateX(80vw) translateY(0) scaleX(-1)' },
          '50%': { transform: 'translateX(40vw) translateY(-5px) scaleX(-1)' },
          '100%': { transform: 'translateX(-20px) translateY(0) scaleX(-1)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bootBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        pixelBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
