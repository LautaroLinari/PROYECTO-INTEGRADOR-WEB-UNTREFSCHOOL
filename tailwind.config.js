/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xm: '0px',
      sm: '320px',
      md: '827px',
      lg: '976px',
      xl: '1024',
    },
    colors:{
      'naranja': '#FC7300',
      'verde': '#1F8A70',
      'marino': '#00425A',
      'negro': '#181823',
      'blanco': '#EFF5F5',
    },
    fontFamily:{
      sans: ['Poppins', 'sans-serif'],
      sans2: ['Belanosima', 'sans-serif'],
    },
    variants:{
      extend: {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus'],
      },
    },
    extend:{
        height: {
          '128': '32rem',
        },
        backgroundImage: {
          'fondo-libro': "url('./assets/img/fondo_libros.jpg')",
        },
      },
    },
  plugins: [],
}

