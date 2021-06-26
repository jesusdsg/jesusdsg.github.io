const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
      'light-primary':'#FFF',
      'light-secondary':'#f0f2f5',
      'light-tertiary':'#343443',
      'dark-primary':'#18191a',
      'dark-secondary':'#242526',
      'dark-tertiary':'#3a3b3c',
  },
};


module.exports = {

  purge: 'false',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    textColor: theme => ({
      ...theme('colors'),
      'light-primary':'#FFF',
      'light-secondary':'#f0f2f5',
      'light-tertiary':'#343443',
      'dark-primary':'#18191a',
      'dark-secondary':'#242526',
      'dark-tertiary':'#3a3b3c',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'light-border': '#e6e6e6',
      'dark-border':'#2b2c2d',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-primary':'#FFF',
      'light-secondary':'#f0f2f5',
      'light-tertiary':'#343443',
      'dark-primary':'#18191a',
      'dark-secondary':'#242526',
      'dark-tertiary':'#3a3b3c',
    }),
    "colors": colors,
    borderRadius: {
    'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '20px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      l: '-2px 4px 6px rgb(0 0 0 / 10%)',
      c: '2.5px 3px 4px rgb(0 0 0 / 10%)',
      r: '2px 4px 6px rgb(0 0 0 / 10%)',
      large: '0 20px 25px -3px rgb(0 0 0 / 12%), 0 4px 6px -2px rgb(0 0 0 / 5%)',
      lsoft: '-36px 10px 25px 0px rgb(0 0 0 / 6%), 0 16px 20px -2px rgb(0 0 0 / 6%)',
      soft: '0px 10px 25px 0px rgb(0 0 0 / 6%), 0 16px 20px -2px rgb(0 0 0 / 6%)',
      none: 'none',
    },
    extend: {},
  },
  variants: {
    extend: {
    fill: ['hover', 'focus'],
    },
  },
  plugins: [],
  corePlugins: {
   outline: false,
  }
}
