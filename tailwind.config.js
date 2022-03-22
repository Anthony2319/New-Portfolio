module.exports = {
  purge: {
    enabled: false,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283"
      },
      fontFamily: {
        body:['Nothing You Could Do']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
