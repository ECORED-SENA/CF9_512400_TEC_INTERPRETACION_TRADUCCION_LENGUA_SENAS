<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Vocabulario técnico, documentación y bases de datos


    p(data-aos="fade-right").mb-4 La palabra vocabulario, viene del latín vocabŭlum, que significa vocabulario o, dicho de otro modo, las palabras o el lecto que conforma una lengua utilizada por una persona o grupos de personas. Así, se puede decir que léxico es un sinónimo de vocabulario, por ser un conjunto de unidades léxicas que conforman la lengua.

    .row.mb-5.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-primario.p-4.mb-4(data-aos="zoom-in")
          .row.align-items-center
            .col-12.col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:70px").m-auto
            .col
              p.mb-0 El vocabulario técnico #[b son las palabras clasificadas objetivamente y, en muchas ocasiones, son de significado unívocas], es decir que su designación y significación no pueden ser interpretables de otra manera.
        p(data-aos="fade-up") Por otro lado, el proceso de documentación hace referencia a la necesidad que tiene el intérprete de tener información clara respecto a los temas a interpretar, además de reconocer los medios y las bases de datos necesarios para explorarlos, ello se profundiza mejor en los siguientes temas.

      .col-lg-5
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/img2.svg', style="width:505px").m-auto

    separador


    #t_1_1
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right") 1.1 Vocabulario técnico

    p.mb-4(data-aos="fade-up") El vocabulario puede designar palabras que sean comunes a una región, grupo, actividad o profesión determinada, por ejemplo, el vocabulario costeño, de parlache, jurídico o de medicina, respectivamente. Para un intérprete de Lengua de Señas en Colombia es común encontrarse con vocabulario específico en su labor cotidiana.

    p.mb-4(data-aos="fade-up") #[span.txt-c2 Para entender mejor en qué consiste este término, se invita a revisar el siguiente material:]

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GpJYPd540ig" title="Vocabulario técnico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Vocabulario técnico.

    .row.mb-4
      .col-auto.bg-c5
        h4.mb-0.py-2.px-5(data-aos="fade-up") Vocabulario por áreas

    .row.mb-4.align-items-center
      .col-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width:85px").m-auto
      .col(data-aos="fade-left")
        p Los hablantes, orales o gestuales, suelen discriminar los temas, textos y discursos según el idiolecto como punto de partida. La formalidad en el vocabulario y sus contextos de uso se extienden de tal manera que no es lo mismo pedirle algo al jefe, a la novia, al médico o a la mamá; de manera que no es igual cuando el médico dice algo o el abogado habla del mismo tema.

    .row.mb-4
      .col-lg-7.order-2.order-lg-1
        p(data-aos="fade-up") Así, el vocabulario se amplía aún más cuando se definen áreas específicas en el discurso. El vocabulario se enriquece en una mezcla de vocablos comunes y técnicos por áreas, como el científico, el legal o el periodístico.

        .cajon.color-primario.p-4.mb-4(data-aos="zoom-in")
          p.mb-0 El vocabulario técnico son las palabras clasificadas objetivamente y, en muchas ocasiones, son de significado unívocas, es decir que su designación y significación no pueden ser interpretables de otra manera.

        p.txt-c2(data-aos="fade-left") Ser multifacético en un mundo dividido por sectores y oficios hace que el ejercicio de traducir e interpretar, en algunas situaciones, se vuelva una necesidad más que una decisión propia; aunque para muchos expertos no es lo más indicado dado la infinidad de términos que existen por áreas o materias.

      .col-lg-5.order-1.order-lg-2
        figure.mb-4(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img9.svg').m-auto


    p.mb-5(data-aos="fade-left") Este tipo de vocabulario se da más que todo en los intérpretes que trabajan en colegios, instituciones o universidades, donde se evidencian claramente las materias o áreas que se imparten. Aquí el intérprete se ve obligado, en casos como estos, a prestar el servicio, pero sin la previa documentación de la terminología del discurso, lo que puede dar origen a situaciones adversas.

    .row.mb-4
      .col-auto.bg-c5
        h4.mb-0.py-2.px-5(data-aos="fade-up") Vocabulario de nombres propios

    p.mb-4(data-aos="fade-right") Algunos teóricos definen los nombres propios como los que designan un objeto o son simplemente denotativos, pero carecen de significado; al contrario, otros reiteran que los nombres propios son completamente connotativos o, en otras palabras, llenos de significado y características propias.

    p.mb-4(data-aos="fade-left") #[span.txt-c2 A continuación, se podrá identificar el manejo de los nombres propios en el ejercicio de traducción e interpretación:]

    TabsB.color-acento-contenido(data-aos="fade-up")
      .py-4.py-md-5(titulo="Uso de nombres propios" :icono="require('@/assets/curso/tema1/tab1.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Uso de nombres propios
            p Durante el proceso cotidiano en el ejercicio de la traducción e interpretación, es muy probable encontrarse con términos que obedecen a un vocabulario de nombres propios, de los cuales, pueden ser en ocasiones desconocidos para algunas de las partes, sean sordos u oyentes, lo que dificulta la construcción del discurso y hace de este oficio una sucesión imparable de toma de decisiones.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width:400px").m-auto
      .py-4.py-md-5(titulo="Antropónimos y topónimos" :icono="require('@/assets/curso/tema1/tab2.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Antropónimos y topónimos
            p A través de la historia, en muchos casos se ha visto la imperiosa necesidad de traducir e interpretar los nombres propios, mientras que en otros momentos ha sido válido dejarse cautivar por ellos, como ocurre con los teóricos de la traducción. Los antropónimos y los topónimos son una constante en el oficio de la interpretación. En el caso de los nombres propios de reyes, algunos políticos, ciudades y países, el Papa o deportistas famosos, suelen, en algunas culturas, transliterarse y en otras interpretarse.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img4.svg', style="width:400px").m-auto
      .py-4.py-md-5(titulo="Técnica couplet (doblete)" :icono="require('@/assets/curso/tema1/tab3.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Técnica couplet (doblete)
            p Consiste en la transcripción del nombre original, pero agregando una traducción o interpretación propia, o algún otro nombre más familiar para el receptor. Este tipo de adaptaciones o naturalizaciones para los nombres propios a la lengua metas cambiadas por un epónimo, se traducen cuando en la cultura meta no se conocen.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img5.svg', style="width:400px").m-auto
      .py-4.py-md-5(titulo="Labor del intérprete" :icono="require('@/assets/curso/tema1/tab4.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Labor del intérprete
            p El intérprete debe transferir el nombre y el sentido o solo limitarse a dar el sentido. Aunque muchos se acomodan según el contexto en el que realizan el servicio, otros se dejan llevar por las tradiciones lingüísticas, por lo que dejan los topónimos y antropónimos tal y como están en la lengua origen.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img6.svg', style="width:400px").m-auto
      .py-4.py-md-5(titulo="Posturas" :icono="require('@/assets/curso/tema1/tab5.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Posturas
            p Los nombres propios pueden traducirse o interpretarse adoptando las siguientes posturas:
            .d-flex.align-items-center.mb-2
              img.me-3(src="@/assets/curso/tema1/icon_hand.svg" style="max-width: 12px")
              span Nombres sin adaptación a la lengua meta: con transferencia o transliteración.

            .d-flex.align-items-center.mb-2
              img.me-3(src="@/assets/curso/tema1/icon_hand.svg" style="max-width: 12px")
              span Nombres con adaptaciones a la lengua meta: usando traducción, interpretación o naturalización.

            .d-flex.align-items-center.mb-2
              img.me-3(src="@/assets/curso/tema1/icon_hand.svg" style="max-width: 12px")
              span Nombres con anfibología: por transferencia.

            .d-flex.align-items-center.mb-2
              img.me-3(src="@/assets/curso/tema1/icon_hand.svg" style="max-width: 12px")
              span Nombres connotativos: con el uso de transferencia, transliteración o con adaptación.

            .d-flex.align-items-center.mb-2
              img.me-3(src="@/assets/curso/tema1/icon_hand.svg" style="max-width: 12px")
              span Nombres metonímicos: con transferencia.

            .d-flex.align-items-center.mb-2
              img.me-3(src="@/assets/curso/tema1/icon_hand.svg" style="max-width: 12px")
              span Nombres que requieren cambios: inicialmente se mencionan juntos y cuando el receptor los conoce, puede dejarse el nuevo nombre.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width:400px").m-auto

    separador

    #t_1_2
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right") 1.2  Documentación y bases de datos aplicados a la interpretación

    p.mb-4 El intérprete no solo debe conocer las lenguas involucradas, las culturas, saber decodificar correctamente los mensajes para transmitirlos y controlar la comprensión de las partes con sus múltiples variables; sino que, además, #[span.txt-c1 debe tener documentación de los temas y saber cómo hacer uso de las bases de datos para encontrarlos].

    .row.mb-5.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .cajon.color-primario.p-4.mb-4(data-aos="zoom-in")
          .row.align-items-center
            .col-12.col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:70px").m-auto
            .col
              p.mb-0 El intérprete no solo debe tener conocimientos de una lengua o saber hacer una traducción literal solo porque tiene contacto con alguna de las partes involucradas, sordos u oyentes, sino, más bien, evitar que la interpretación se reduzca a un nivel básico para reducir riesgos y mejorar la calidad del servicio. Esto solo se puede lograr si se cuenta con los recursos suficientes o tener acceso a la información con el uso de documentación previa que aclare, facilite y dé una visión amplia del trabajo que se va a realizar.
        p(data-aos="fade-up") Para extraer información que contribuya al servicio de interpretación que se prestará posteriormente, es necesario conocer una herramienta de búsqueda: las bases de datos. Estas se refieren a una gran cantidad de información almacenada y organizada de tal manera que pueda encontrarse fácilmente la consulta o almacenar información en ella. Estas pueden ser por medios virtuales o archivos en papel.

      .col-lg-4
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/img10.png', style="width:400px").m-auto

    p #[span.txt-c1 La búsqueda de documentación dependerá de los siguientes pasos:]

    .row.mt-5.justify-content-center.mb-5
      .col-lg-10
        //AcordionA(tipo="b" clase-tarjeta="tarjeta")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Actores")
            .col-lg-7
              p.mb-0 Identificar quiénes se va a transmitir la información (emisores) y el público al que va dirigida (receptores de la información).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img11.svg', style="width:263px").m-auto
          .row(titulo="Medios")
            .col-lg-7
              p.mb-0 Identificar el mejor medio para buscar y encontrar la información, (bibliotecas, empresas, centros de documentación, libros, artículos de revistas, literatura, prensa, legislación, entre otros).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img12.svg', style="width:203px").m-auto
          .row(titulo="Bases de datos")
            .col-lg-7
              p.mb-0 Reconocer qué bases de datos y sistemas de recuperación se pueden utilizar y sus posibilidades
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img13.svg', style="width:228px").m-auto
          .row(titulo="Análisis documental").align-items-center
            .col-lg-7
              p.mb-4 Realizar un análisis detallado de los medios y las bases de datos identificadas, teniendo en cuenta el objetivo respecto a la búsqueda de información.
              p.mb-0 Este análisis se puede dar hacia diferentes medios orales, escritos, visuales, etc.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img14.svg', style="width:228px").m-auto
          .row(titulo="Fuentes de información")
            .col-lg-7
              p.mb-0 También llamada sumativa este tipo de evaluación mide los resultados alcanzados, los conocimientos y el progreso a nivel global, evidencia los avances y comprueba necesidades, su objetivo principal es la valoración, se realiza por medio de autoevaluación, entrevistas, pruebas y observación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img15.svg', style="width:249px").m-auto
          .row(titulo="Documentar")
            .col-lg-7
              p.mb-0 También llamada sumativa este tipo de evaluación mide los resultados alcanzados, los conocimientos y el progreso a nivel global, evidencia los avances y comprueba necesidades, su objetivo principal es la valoración, se realiza por medio de autoevaluación, entrevistas, pruebas y observación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img16.svg', style="width:203px").m-auto

    #t_1_3
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right") 1.3  Materiales y contenidos para el servicio de interpretación

    p Como parte de la organización previa en un servicio de interpretación, es necesario contar con anticipación con los contenidos de los ponentes, sean sordos u oyentes, pero también es necesario tener algunos materiales a disposición para una interpretación con contenidos en lengua de señas colombiana y español.

    p #[span.txt-c2 A continuación, se exponen cuáles son esos tipos de materiales:]

    .bg-c6
      .p-5
        .row.justify-content-start.mb-5
          .col-lg-11.position-relative
            .avatar
              figure
                img(src="@/assets/curso/tema1/conectada_avatar.svg", alt="alt").img230
            .crd.crd--avatarHorizontal.crd--first.py-lg-2.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/conectada_01.svg", alt="alt").img112
                .col
                  p.my-0 La interpretación exclusivamente oral necesita equipos técnicos como fijas, cámaras insonoras, ventilación, transmisiones con varios canales, micrófonos, receptores, auriculares, unidades de control de audio, amplificadores y técnicos de montaje.
            .crd.crd--avatarHorizontal.py-lg-2.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/conectada_02.svg", alt="alt").img112
                .col
                  p.my-0 La interpretación que involucra la lengua de señas colombiana requiere de otros posibles elementos que varían según los usuarios de la lengua de señas, el ámbito, los temas, el lugar, la cantidad de personas que asisten al evento, entre otros.
            .crd.crd--avatarHorizontal.crd--last.py-lg-2.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/conectada_03.svg", alt="alt").img112
                .col
                  p.my-0 También están los equipos de video, pantallas o monitores, cámaras de video con sus respectivos camarógrafos, fondos de tonalidades neutras, croma sillas altas para el interprete (si son necesarias) e iluminación profesional para ciertos eventos. El interprete debe conocer de antemano todos los materiales, equipos y contenidos, además de realizar una practica a modo de ensayo, para conocer su ubicación y rotación durante el evento.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
