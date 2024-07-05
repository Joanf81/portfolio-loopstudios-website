module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xs': '321px',
      'sm': '576px',
      'md': '768px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      backgroundImage: {
        'hero-image-desktop': "url('/images/desktop/image-hero.jpg')",
        'hero-image-mobile': "url('/images/mobile/image-hero.jpg')"
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
