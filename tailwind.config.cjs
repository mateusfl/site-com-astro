module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      body: ['montserrat'],
    },

    extend: {
      colors: {
        preto: '#242424',
        primaria: '#437A55',
        secundaria: '#91CE9C',
        terciaria: '#D6FFDB',
        branco: '#FAF4F2',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
