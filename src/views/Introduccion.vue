<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-c2

      .px-5

        .row.align-items-center.mb-5.bg-c1
          .col-12.col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/intro/img1.svg', style="width:80px").m-auto
          .col
            p.mb-0 Bienvenido a este componente formativo y para comenzar el recorrido por el mismo, revise la información que se presenta a continuación:

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gruyKmFtVr4" title="Requerimientos básicos para el servicio de interpretación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Requerimientos básicos para el servicio de interpretación.

        br


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
