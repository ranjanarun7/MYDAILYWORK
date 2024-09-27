/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        slideInSpace: {
          '0%': {
            transform: 'translateX(-100%)',  // Start and end at the left side
          },
          '100%': {
            transform: 'translateX(100%)',  // Move to the right side of the container
          },
        },
      },
      animation: {
        slideInSpace: 'slideInSpace 5s ease-in infinite',
      },
    },
  },
  plugins: [],
}

