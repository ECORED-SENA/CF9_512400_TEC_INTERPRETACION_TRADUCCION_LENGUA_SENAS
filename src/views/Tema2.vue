<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requerimientos para el servicio

    .row.align-items-center
      .col
        p.mb-0 Al prestar un servicio de interpretación no basta con simplemente realizar las señas, que es lo más relevante de la actividad; también existen otros elementos realmente necesarios que sirven como soporte para quien presta el servicio. Se puede hablar de acuerdos y ayudas previas al servicio que el usuario ofrecerá en aras de una interpretación de calidad. #[span.txt-c2 En el siguiente recurso se detallan cada uno de estos elementos:]
      .col-12.col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width:70px").m-auto


    .tarjeta.tarjeta--rosa.my-5
      .p-4.p-lg-5
        SlyderA(tipo="b")(data-aos="fade-right")
          .row.align-items-center.m-1
            .col-lg-5.mb-4.mb-lg-0
              h4 Acuerdos metodológicos
              p Para lograr un servicio de interpretación exitoso, lo que más le conviene tanto al usuario como al intérprete, es que este último conozca de antemano el tipo de información que se tratará el tema y, si es posible, los contenidos. También es necesario acordar el tipo de interpretación que requiere el usuario referente al vocabulario, la velocidad y la gesticulación vocal. Además, se tendrán en cuenta como acuerdos metodológicos, los deberes y responsabilidades del intérprete; así como lo que no implica una obligación al momento de prestar el servicio.
            .col-lg-7
              figure
                img(src='@/assets/curso/tema2/img1.png', style="width:625px").m-auto
          .row.align-items-center.m-1
            .col-lg-5.mb-4.mb-lg-0
              h4 Medios
              p Dependiendo del tipo del lugar en donde se presta el servicio, también es necesario tener en cuenta por cuál medio se realizará la interpretación; si será en el mismo lugar del evento y si desde allí se transmitirá por #[em videobeam]; si se transmitirá por televisión; sí se usará alguna plataforma tecnológica de interpretación a distancia vía #[em streaming] o sí se utilizará algún sistema de videollamada o videoconferencia. Todo esto le permitirá al intérprete hacerse una clara idea de cómo prestar un servicio óptimo.
            .col-lg-7
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width:625px").m-auto
          .row.align-items-center.m-1
            .col-lg-5.mb-4.mb-lg-0
              h4 Aspectos prosódicos.
              p Tienen que ver con los cambios en la frecuencia de la voz, el tono, el ritmo, el volumen y la modulación de las palabras. Toma en cuenta el acento, las sílabas tónicas y atónicas y la importancia de conocer su aplicación a la hora de hacer una exposición.  Al trasladar este concepto a la Lengua de Señas Colombiana, se nota cómo la prosodia se revela en la velocidad con que se realiza la seña; qué espacio utiliza, el alcance corporal; la gesticulación facial, etc.
            .col-lg-7
              figure
                img(src='@/assets/curso/tema2/img3.png', style="width:625px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
