/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "taka",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        taka: {
          primary: "#10B981",
          "primary-content": "#FFFFFF",
          secondary: "#06B6D4",
          "secondary-content": "#FFFFFF",
          accent: "#F59E0B",
          "accent-content": "#FFFFFF",
          neutral: "#F3F4F6",
          "neutral-content": "#047857",
          "base-100": "rgba(255, 255, 255, 0.1)",
          "base-200": "rgba(255, 255, 255, 0.05)",
          "base-300": "rgba(255, 255, 255, 0.15)",
          "base-content": "#FFFFFF",
          info: "#06B6D4",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",

          "--rounded-btn": "24px",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        'taka': {
          'primary': {
            50: '#ECFDF5',
            100: '#D1FAE5',
            400: '#20c997',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          'accent': {
            50: '#FFFBEB',
            100: '#FEF3C7',
            400: '#FBBF24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          'teal': {
            50: '#F0FDFA',
            100: '#CCFBF1',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          'dark': {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          }
        }
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)',
        'gradient-cozy': 'linear-gradient(135deg, #20c997 0%, #14b8a6 50%, #f59e0b 100%)',
        'gradient-amber-teal': 'linear-gradient(to right, #f59e0b, #14b8a6)',
        'gradient-emerald-warm': 'linear-gradient(to right, #10b981, #20c997, #f59e0b)',
        'glass-warm': 'linear-gradient(135deg, rgba(23, 25, 35, 0.8) 0%, rgba(30, 32, 42, 0.6) 100%)',
        'card-warm': 'linear-gradient(135deg, rgba(30, 32, 42, 0.9) 0%, rgba(23, 25, 35, 0.8) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
        'glass-strong': '30px',
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        'glass-warm': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-strong': '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glow-emerald': '0 0 20px rgba(32, 201, 151, 0.4), 0 0 40px rgba(32, 201, 151, 0.2)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.5), 0 0 40px rgba(245, 158, 11, 0.2)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.4), 0 0 40px rgba(20, 184, 166, 0.2)',
        'cozy-hover': '0 16px 48px rgba(0, 0, 0, 0.3), 0 0 30px rgba(32, 201, 151, 0.3)',
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'gentleFloat': 'gentleFloat 8s ease-in-out infinite',
        'progressGlow': 'progressGlow 3s ease-in-out infinite',
        'sparkle': 'sparkle 8s linear infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-0.5deg)' },
        },
        progressGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(32, 201, 151, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(32, 201, 151, 0.8), 0 0 30px rgba(245, 158, 11, 0.4)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-468px 0' },
          '100%': { backgroundPosition: '468px 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(32, 201, 151, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(32, 201, 151, 0.6)' },
        },
      },
    },
  },
};
