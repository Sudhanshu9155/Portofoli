// tailwind.config.js - Professional Portfolio Theme
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Font Families
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],     // Body
        display: ['Inter', 'sans-serif'],  // Headings
        mono: ['JetBrains Mono', 'monospace'],          // Code
      },
      colors: {
        // Professional Sapphire & Slate Theme
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Sapphire Blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Professional Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          indigo: '#6366f1',
          slate: '#64748b',
          amber: '#f59e0b',
        },
        dark: {
          primary: '#000000',   // Pure Black
          secondary: '#0a0a0a', // Almost Black
          tertiary: '#111111',  // Very dark gray
        },
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbitX: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(60px) translateY(-30px)' },
          '50%': { transform: 'translateX(20px) translateY(-60px)' },
          '75%': { transform: 'translateX(-40px) translateY(-20px)' },
        },
        orbitY: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(-50px) translateY(40px)' },
          '50%': { transform: 'translateX(-20px) translateY(70px)' },
          '75%': { transform: 'translateX(50px) translateY(30px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) scale(1)' },
          '33%': { transform: 'translateX(30px) translateY(-20px) scale(1.05)' },
          '66%': { transform: 'translateX(-20px) translateY(30px) scale(0.95)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        orbitX: 'orbitX 18s ease-in-out infinite',
        orbitY: 'orbitY 22s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        slideUpFade: 'slideUpFade 0.6s ease-out forwards',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        'gradient-cool': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(240, 100%, 70%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(280, 100%, 70%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(200, 100%, 70%, 0.2) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.6)',
        'professional': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
