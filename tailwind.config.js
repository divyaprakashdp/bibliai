/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Madimi+One"],
        heading: ["Inconsolata"],
        article: ["Mako"]
      },
      animation: {
        bounce: 'bounce 1s infinite 500ms',
        shelf: 'shelflift 0.4s ease infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        shelflift: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '20%': { transform: 'translateY(-4px) rotate(10deg)' },
          // '40%': { transform: 'translateY(-4px) rotate(0)' },
          '40%': { transform: 'translateY(-4px) rotate(- 10deg)' },
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' }
        }

      },
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
};
