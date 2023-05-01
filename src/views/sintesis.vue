<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El proceso de interpretación requiere de una preparación específica, es importante reconocer las necesidades y requerimientos del contexto hacia el cual va dirigido el servicio, y a partir de allí identificar el tipo vocabulario, los medios y elementos que se debe tener en cuenta el intérprete en el momento de desarrollar sus labores, además es fundamental conocer los cuidados que debe tener en cuenta y que le permita garantizar su salud y bienestar en el ámbito laboral.

    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Vocabulario técnico, requerimientos y salud ocupacional")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
