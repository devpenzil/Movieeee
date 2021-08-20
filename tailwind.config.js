module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0F110C',
      'secondary': '#ffed4a',
      'danger': '#e3342f'
     })
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
