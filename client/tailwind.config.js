module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    screens: {
      'md': '640px',
      'lg': '1024px',
      'xl': '1366px'
    },
    extend: {
      spacing: {
        '96': '24rem',
        '128': '32rem',
        '160': '40rem',
        '256': '64rem'
      }
    },
  },
  variants: {},
  plugins: [],
}