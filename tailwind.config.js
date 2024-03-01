/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'blue2': '##00b5f1',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textW: {
        fontSize: '16px',
        color: '#f0f0f0',
        fontWeight: 400,
        lineHeight: '25px'
      },
      liMenu: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        fontWeight: 400,
        fontSize: '1.125rem',
      },
    }
  },
  plugins: [],
}

