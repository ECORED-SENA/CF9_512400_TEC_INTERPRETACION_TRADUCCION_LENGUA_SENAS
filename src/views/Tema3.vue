<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Salud ocupacional


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad y salud en el trabajo es un campo que ha tomado fuerza en el contexto laboral actual, el cual viene asociado al concepto de salud de la OMS (Organización Mundial de la Salud) y se entiende como un estado de completo bienestar físico, mental, social y no solamente la ausencia de afecciones o enfermedades, reconociendo al ser humano desde su integralidad y brindando relevancia a la prevención en cada uno de los entornos de vida, entre ellos los laborales.


    .row.align-items-center.mb-5
      .col-lg-auto.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width:85px").m-auto

      .col-lg
        p.mb-0 Se considera que a causa de la función que se realiza pueden presentarse afectaciones a la salud; para el caso de los intérpretes en Lengua de Señas Colombianas – español, deben revisarse las condiciones que requiere dicho servicio identificando y definiendo los peligros; a continuación, se expone la diferencia entre riesgo y peligro:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5
        .bg-c7.p-4
          .row
            .col-auto
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width:80px").m-auto
            .col
              p #[strong Riesgo:]
              p Combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos (Decreto 1072, 2015).

      .col-lg-5
        .bg-c7.p-4
          .row
            .col-auto
              figure
                img(src='@/assets/curso/tema3/img4.svg', style="width:80px").m-auto
            .col
              p #[strong Peligro:]
              p Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones (Decreto 1072, 20015).

    p.mb-4 De allí la importancia de intervenir los peligros buscando la disminución de los riesgos y accidentes laborales aportando las pautas de autocuidado y los elementos de protección personal que sean necesarios para salvaguardar la vida, la salud física, mental y la integridad de los trabajadores que se desempeñan en interpretación y traducción en Lengua de Señas Colombiana - español.

    .row.mb-5.align-items-center
      .col-lg-8
        p.mb-4 De acuerdo con la #[strong.txt-c3 Ley 1562 de 2012] la Seguridad y la Salud en el Trabajo es aquella disciplina que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores. #[strong.txt-c3 Tiene por objeto mejorar las condiciones y el medio ambiente de trabajo, así como la salud en el trabajo, que conlleva la promoción y el mantenimiento del bienestar físico, mental y social de los trabajadores en todas las ocupaciones (artículo 1°)].

        .bg-c9.p-4
          p Para la ocupación del intérprete y traductor de Lengua de Señas Colombiana – español, deben plantearse estrategias en el marco del Sistema de Gestión de la Seguridad y la Salud en el Trabajo desde sus procesos de planeación, documentando el programa, aclarando los objetivos; hacer, verificar y actuar que vayan en concordancia con la promoción de la salud y la prevención de la enfermedad.

      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/img5.png').m-auto

    .row.mb-4.align-items-center
      .col-auto.bg-c5
        h4.mb-0.py-2.px-5(data-aos="fade-up") Enfermedades profesionales

    p.mb-4 Según la Ley 1562 de 2012 es aquella contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar. El Gobierno nacional determinará, en forma periódica, las enfermedades que se consideran como laborales y en los casos en que una enfermedad no figure en la tabla de enfermedades laborales (Decreto 1444 de 2014), pero se demuestre la relación de causalidad con los factores de riesgo ocupacionales, se reconocerá como enfermedad laboral, conforme lo establecido en las normas legales vigentes (artículo 4°).

    .row.mb-5.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/img6.png').m-auto

      .col-lg-8

        .bg-c10.mb-4.p-4
          p Para el caso de los intérpretes y traductores en Lengua de Señas de acuerdo con Feuerstein, Marshall, Shaw y Burrell (citados en Villamil, Camacho, Quintero, Guzmán y Ruiz, 2018) en Estados Unidos es una profesión característica que desarrolla enfermedades por trauma acumulativo como Síndrome de Túnel del Carpo, epicondilitis, bursitis, entre otras. En Colombia es difícil caracterizar este tipo de enfermedades como de origen laboral por la falta de estadísticas formales y por ser una ocupación que puede desempeñarse en cualquier sector económico (p. 13-14).

        p.mb-4 Algunos riesgos pueden derivar en enfermedad laboral, por lo que resulta importante revisar los citados en Villamil et al. (2018) que hacen alusión a la profesión en interpretación y traducción en lengua de señas, siendo estos:


    TabsB.color-acento-contenido(data-aos="fade-up").mb-5
      .py-4.py-md-5(titulo="Riesgo biomecánico" :icono="require('@/assets/curso/tema3/tab1.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Riesgo biomecánico
            p Hace referencia al desgaste físico que puede producirse por los movimientos sistemáticos realizados al señar por tiempos prolongados, sin la posibilidad de tener un relevo.

            p De acuerdo con el Centro de Intérpretes de Lengua de Signos Española y Guías Intérpretes de Castilla y León (citado en Villamil et al., 2018), exponen que los intérpretes de lengua de señas tienen que hacer movimientos manuales donde separan los codos del centro del cuerpo y mantienen los brazos en el aire por periodos largos de tiempo y adicionalmente varían la velocidad de los movimientos según la producción del lenguaje y la comunicación. Además, según el mismo autor los intérpretes de lengua de señas realizan aproximadamente 270 movimientos/min., en intervalos de 13.600/15 min, lo cual puede producir a largo plazo desórdenes músculo-esqueléticos en manos y muñecas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img7.png', style="max-width:467px").m-auto
      .py-4.py-md-5(titulo="Riesgo psicosocial" :icono="require('@/assets/curso/tema3/tab2.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Riesgo psicosocial
            p El Insor considera que el proceso de interpretación implica un proceso de recepción, procesamiento y transmisión de la información, proceso que exige capacidades como la discriminación auditiva vocal, la comprensión rápida de los mensajes, el conocimiento gramatical y lexical, capacidad para asimilar el mensaje en poco tiempo y capacidades de adaptación con el orador, todo para articular las ideas de las oraciones para dar un mensaje lógico y ordenado. Exige un nivel de atención y memoria, y la adquisición de aprendizaje nuevo y constante, además del manejo del estrés laboral ocasionado por las actividades y funciones de interpretación el cual puede ocasionar dolores de cabeza, tensión muscular o diferentes alteraciones en el sistema nerviosos central de manera transitoria como fotofobia, parestesias o tics nerviosos, así mismo, otro tipo de manifestaciones como nerviosismo, ansiedad o actitudes de incomodidad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img8.png', style="max-width:467px").m-auto
      .py-4.py-md-5(titulo="Carga emocional" :icono="require('@/assets/curso/tema3/tab3.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Carga emocional
            p Todo lo que perciben los intérpretes va enmarcado en los procesos de la no omisión de la información cuando realizan sus servicios de interpretación, así mismo, con las metodologías de enseñanza de los profesores de área y la presión al estar observados por otros al momento de realizar la interpretación sin voz o con voz (Villamil et al. 2018, p. 64). De acuerdo con la Corporación Comuniquémonos (citado en Villamil et al., 2018) los intérpretes terminan escuchando a sus alumnos en temas personales y hay una carga emocional por no poder dar una adecuada o correcta consejería por la falta de conocimiento específico en determinados temas. También la carga emocional se da por las mismas características del servicio de interpretación y la premisa de transmitir la información lo más fiel posible, sin omitir, ni añadir o alterar el mensaje final (p.65).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img9.png', style="max-width:467px").m-auto
      .py-4.py-md-5(titulo="Problemas organizacionales" :icono="require('@/assets/curso/tema3/tab4.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Problemas organizacionales
            p Relacionado con las dificultades que se tienen a nivel administrativo y organizacional de las funciones y responsabilidades de los Intérpretes y cómo estas dificultades afectan directa o indirectamente la generación de factores de riesgo psicosociales (Villamil et al., 2018, p. 66).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img10.png', style="max-width:467px").m-auto

    .row.mb-4.align-items-center
      .col-auto.bg-c5
        h4.mb-0.py-2.px-5(data-aos="fade-up") Métodos profilácticos de prevención y respiración

    p.mb-5 Los métodos profilácticos hacen referencia a las estrategias generadas en el marco de prevención de la enfermedad desde diferentes niveles que van desde la promoción de la salud, el tratamiento de la enfermedad y la recuperación de la salud. En la interpretación y traducción en Lengua de Señas Colombiana – español, es importante generar medidas como:

    .bg-c6.d-none.d-md-block
      .p-5
        .row.justify-content-center
          .col-lg-10
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/infografia.svg', alt='Métodos profilácticos de prevención y respiración')

              .tarjeta.color-acento-botones.p-3(x="23%" y="56.5%" numero="+")
                .h5.mb-2 Escenarios adecuados
                p Solicitar espacios adecuados en los que, previo al servicio, se revise la iluminación, los ruidos externos, la temperatura del aire, la adecuada ubicación del intérprete entre otros. Si lo anterior no está debidamente dispuesto, genera mayor desgaste en la interpretación.

              .tarjeta.color-acento-botones.p-3(x="25.5%" y="78%" numero="+")
                .h5.mb-2 Autocuidado
                p Realizando pausas activas masajes y ejercicios de estiramiento en los discursos extensos.

              .tarjeta.color-acento-botones.p-3(x="97.5%" y="56.5%" numero="+")
                .h5.mb-2 Funciones
                p Solicitar que se definan claramente las funciones en el marco de la interpretación y traducción.
              .tarjeta.color-acento-botones.p-3(x="95%" y="77.5%" numero="+")
                .h5.mb-2 Tiempos de descanso
                p Definir tiempos de descanso que permitan la disminución de la fatiga mental y cognitiva.
              .tarjeta.color-acento-botones.p-3(x="61%" y="94.5%" numero="+")
                .h5.mb-2 Apoyo al público oyente
                p Solicitar colaboración al público para disminuir el ruido y mejorar la escucha y concentración del intérprete.

    .d-md-none
      figure.mb-4
        img(src='@/assets/curso/tema3/infografia_movil.svg', alt='Métodos profilácticos de prevención y respiración', style="max-width: 360px").m-auto
      //AcordionA(tipo="b" clase-tarjeta="tarjeta")
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Escenarios adecuados")
          .col
            p Solicitar espacios adecuados en los que, previo al servicio, se revise la iluminación, los ruidos externos, la temperatura del aire, la adecuada ubicación del intérprete entre otros. Si lo anterior no está debidamente dispuesto, genera mayor desgaste en la interpretación.
        .row(titulo="Autocuidado")
          .col
            p Realizando pausas activas masajes y ejercicios de estiramiento en los discursos extensos.
        .row(titulo="Funciones")
          .col
            p Solicitar que se definan claramente las funciones en el marco de la interpretación y traducción.
        .row(titulo="Tiempos de descanso").align-items-center
          .col
            p Definir tiempos de descanso que permitan la disminución de la fatiga mental y cognitiva.
        .row(titulo="Apoyo al público oyente")
          .col
            p Solicitar colaboración al público para disminuir el ruido y mejorar la escucha y concentración del intérprete.
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.imgCont
  max-width: 564px
</style>
