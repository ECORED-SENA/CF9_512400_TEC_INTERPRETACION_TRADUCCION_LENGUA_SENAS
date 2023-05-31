export default {
  global: {
    componenteFormativo:
      'Vocabulario técnico, requerimientos y salud ocupacional',
    descripcionCurso:
      'La interpretación y traducción en Lengua de Señas Colombiana (LSC) – español, integra conocimientos sobre diferentes escenarios connotando la exigencia del dominio de léxico técnico y/o especializado. Por ello, los conocimientos respecto a los acuerdos metodológicos antes de la prestación del servicio son importantes, así como el reconocimiento de la documentación previa que el intérprete pueda hacer sobre el servicio requerido.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Vocabulario técnico, documentación y bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Vocabulario técnico ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Documentación y bases de datos aplicados a la interpretación  ',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requerimientos para el servicio ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Salud ocupacional ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Enfermedades profesionales',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF09_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2014). Decreto 1477 de 2014. Por el cual se expide la Tabla de Enfermedades Laborales. 5 de agosto de 2014.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/36482/decreto_1477_del_5_de_agosto_de_2014.pdf/b526be63-28ee-8a0d-9014-8b5d7b299500',
    },
    {
      referencia:
        'Congreso de Colombia. (2015). Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. 26 de mayo de 2015.',
      link:
        'http://egresados.bogota.unal.edu.co/files/normatividad/Decreto%201072%20de%202015.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Houeh, L. L., y Hui-Chuan, L. (2005). Estudio sobre la interacción entre las estructuras textuales y oracionales.<em>Glosas Didácticas: Revista Electrónica Internacional de Didáctica de las Lenguas y sus Culturas</em>, (15), 13. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=1970937',
    },
    {
      referencia:
        'Villamil, D., Quintero, L. Guzmán, D., y Ruiz, C. (2018). <em>“Todo a la vez puede llegar a ser muy aturdidor”. Percepción del peligro ocupacional en un grupo de intérpretes de lengua de señas en una institución educativa del Municipio de Facatativá.</em> (Trabajo de Grado). Universidad Javeriana, Bogotá.',
      link:
        'https://repository.javeriana.edu.co/bitstream/handle/10554/38982/Percepci%c3%b3n%20de%20peligro%20ocupacional%20en%20Int%c3%a9rpretes%20de%20Lengua%20de%20Se%c3%b1as%20Faca.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'utilizar equivalentes conocidos en la lengua meta para el proceso de interpretación y traducción. También es conocida como traducción libre.',
    },
    {
      termino: 'Anfibología',
      significado: 'palabras o frases con más de un sentido o interpretación.',
    },
    {
      termino: 'Antropónimo',
      significado: 'nombre propio de una persona.',
    },
    {
      termino: 'Connotativo',
      significado:
        'palabras a manera de símbolos o metáforas para transmitir emociones o sentimientos.',
    },
    {
      termino: '<em>Couplet</em>',
      significado:
        'técnica en la interpretación conocida como doblete, que consiste en la transcripción del nombre original, pero agregando una traducción o interpretación propia más familiar a la lengua meta. ',
    },
    {
      termino: 'Dialectismo',
      significado: 'construcción sintáctica que caracteriza un dialecto.',
    },
    {
      termino: 'Homonimia',
      significado:
        'dos o más palabras que se escriben o pronuncian igual, pero tienen diferente significado. ',
    },
    {
      termino: 'Idiolecto',
      significado: 'lenguaje o manera de hablar particular de una persona. ',
    },
    {
      termino: 'Metonimia',
      significado:
        'figura retórica para designar algo con otro nombre con el que tiene una relación semántica. ',
    },
    {
      termino: 'Naturalización',
      significado:
        'también conocido como domesticación, este término hace referencia a la eliminación de algunos elementos de la lengua origen que se reemplazan por otros que son propios de la lengua meta. ',
    },
    {
      termino: '<em>Pidgin</em>',
      significado:
        '“Lengua mixta creada sobre la base de una lengua determinada y con la aportación de numerosos elementos de otra u otras, que usan especialmente en enclaves comerciales hablantes de diferentes idiomas para relacionarse entre sí”. Diccionario de la Real Academia Española (RAE).',
    },
    {
      termino: 'Polisemia',
      significado: 'palabra que tiene varios significados.',
    },
    {
      termino: 'Sinonimia',
      significado:
        'característica de dos palabras o más que comparten un significado. ',
    },
    {
      termino: 'Sociolecto',
      significado:
        'clasificación de hablantes según su clase social y nivel de educación.',
    },
    {
      termino: 'Topónimo',
      significado: 'nombre propio de un lugar.',
    },
    {
      termino: 'Transferencia',
      significado:
        'conocida también como traducción por diccionario, es una técnica traductológica que parte de una palabra en su forma original para encontrar un equivalente en el nuevo idioma. ',
    },
    {
      termino: 'Transliterar',
      significado:
        'representar los signos o caracteres de un sistema de escritura mediante los signos de otro. ',
    },
  ],
  complementario: [
    {
      tema: 'Requerimientos para el servicio',
      referencia:
        'Vicente, C. (2010). <i>Sobre algunos mitos del vocabulario técnico: un traductor advertido vale por dos.</i>',
      tipo: 'Artículo',
      link:
        'https://revistas.uma.es/index.php/revtracom/article/view/11752/12202',
    },
    {
      tema: 'Vocabulario técnico',
      referencia:
        'Moya, V. (1993). Nombres propios: su traducción. <i>Revista de Filología de la Universidad de la Laguna</i>, (12), p. 233-248.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=91799',
    },
    {
      tema: 'Salud ocupacional',
      referencia:
        'Carrera, R., Rivadeneira, C., Navarrete, E., y Paredes, A. (2019). <i>Seguridad y salud ocupacional.</i>',
      tipo: 'Artículo',
      link:
        'http://142.93.18.15:8080/jspui/bitstream/123456789/463/3/salud%20y%20seguridad%20ocupacional.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital.',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander.',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de estilo ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
