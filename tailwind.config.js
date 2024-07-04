module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '769px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      backgroundImage: {
        'hero-image-desktop': "url('/images/desktop/image-hero.jpg')",
        'hero-image-mobile': "url('/images/mobile/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}
