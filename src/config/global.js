export default {
  global: {
    componenteFormativo: 'Reparación de tarjetas electrónicas',
    descripcionCurso:
      'La reparación de tarjetas electrónicas es de suma importancia dentro de una empresa, porque logra devolverle al área productiva, equipos o dispositivos. Este tipo de intervenciones puede disminuir los desechos electrónicos, reduciendo la contaminación ambiental y minimizando costos. Para esto, se brinda información para la interpretación de los resultados proporcionados por las herramientas de medición, la captura de datos, almacenamiento, diagnóstico e intervención de las tarjetas electrónicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Genéricos y especializados',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentos de procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procedimientos técnicos y normativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procedimientos y técnicas de retrabajo',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Documentos de procesos',
      referencia:
        'Editores de Documentos de Google. (s.f.). <i>Cómo usar Documentos de Google</i>.',
      tipo: 'Web',
      link:
        'https://support.google.com/docs/answer/7068618?hl=es-419&co=GENIE.Platform%3DDesktop',
    },
    {
      tema: 'Documentos de procesos',
      referencia:
        'Donado, A. (2020). <i>Análisis Técnico sobre el USO de un Osciloscopio Automotriz</i>.',
      tipo: 'Blog',
      link:
        'https://autosoporte.com/analisis-tecnico-del-uso-del-osciloscopio-automotriz/',
    },
    {
      tema: 'Documentos de procesos',
      referencia:
        'LibreOffice. (s.f.).<i> Suite ofimática libre, basada en OpenOffice, compatible con Microsoft</i>.',
      tipo: 'Web',
      link: 'https://es.libreoffice.org/',
    },
    {
      tema: 'Documentos de procesos',
      referencia:
        'Microsoft. (s.f.). <i>Suscripción a las aplicaciones de Office de Microsoft 365.</i>',
      tipo: 'Web',
      link: 'https://www.microsoft.com/es-es/microsoft-365',
    },
    {
      tema: 'Procedimiento y técnicas de retrabajo',
      referencia:
        'JYSAPARTS.  (2021). <i>Reconstrucción de pistas rotas, dañadas o cortadas, reparación paso a paso, proceso manual.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=whs2XAWdKUs',
    },
    {
      tema: 'Procedimiento y técnicas de retrabajo',
      referencia:
        'Galán, L. (2019). <i>Curso básico de soldadura electrónica. Herramientas y técnicas.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=snM_ABjXGsw',
    },
  ],
  glosario: [
    {
      termino: 'Cautín',
      significado:
        'Herramienta que permite soldar elementos mediante la fundición de materiales.',
    },
    {
      termino: 'Ciclo',
      significado:
        'Un ciclo dentro de una señal es la longitud de la señal o el tramo que se repite constantemente a lo largo del tiempo.',
    },
    {
      termino: 'Circuito',
      significado:
        'Es la conexión de componentes dentro de una trayectoria cerrada por la cual puede fluir una corriente eléctrica.',
    },
    {
      termino: 'Componentes BGA',
      significado:
        'Este tipo de elemento se caracteriza por tener dentro de un área o encapsulado una determinada densidad de componentes electrónicos, por ejemplo, lis <em>chipsets</em> o procesadores.',
    },
    {
      termino: 'Componentes SMD',
      significado:
        'Componentes que se adhieren a una placa electrónica sin la necesidad de orificios, permiten de esta manera una reducción significativa en su tamaño.',
    },
    {
      termino: 'Componentes THT',
      significado:
        'Los componentes THT son todos aquellos elementos que necesitan de orificios en una tarjeta electrónica para su ensamble, su identificación es relativamente fácil dada las características de sim instalación y a su gran tamaño en comparación a otro tipo de encapsulados.',
    },
    {
      termino: 'Imperfección',
      significado:
        'Defectos provocados por malos procedimientos o prácticas dentro de los diferentes procesos de un equipo electrónico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcalde, P. (2016). <em>Electrónica aplicada: electricidad - electrónica. </em>Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Altium. (5 de abril de 2017). <em>Las mejores prácticas de diseño y fabricación para la protección de circuitos electrónicos contra la humedad</em>',
      link:
        'https://resources.altium.com/es/p/the-best-pcb-design-and-manufacturing-practices-for-moisture-management',
    },
    {
      referencia:
        'FLUKE.  (s.f.). ¿Qué es un multímetro digital? <em>Fluke.</em> ',
      link:
        'https://www.fluke.com/es-co/informacion/blog/electrica/que-es-un-multimetro-digital#:%7E:text=Un%20mult%C3%ADmetro%20digital%20(DMM)%20es,las%20industrias%20el%C3%A9ctricas%20y%20electr%C3%B3nicas',
    },
    {
      referencia: 'INGUN. (s.f.). <em>Test Probes for ICT and FCT.</em>',
      link:
        'https://ingun.com/en-GB/products/test-probes/ict-fct-in-circuit-test-and-function-test/',
    },
    {
      referencia:
        'Jacks, D. (s.f.). <em>Retrabajo de SMD, retrabajo de BGA, SMT, equipo para soldar y desoldar integrados, herramientas y suministros.</em>',
      link: 'https://zeph.com/public_html/spanish/tech_1.html',
    },
    {
      referencia:
        'Proto-Electronics. (s. f.). <em>Montaje del PCB: los componentes más críticos y vulnerables. </em>',
      link:
        'https://www.proto-electronics.com/es/blog/montaje-pcb-componentes-criticos-vulnerables',
    },
    {
      referencia:
        'Proto-Electronics. (s.f.). <em>¿Cómo encontrar defectos en un PCB?</em>',
      link:
        'https://www.proto-electronics.com/es/blog/c%C3%B3mo-encontrar-defectos-en-un-pcb',
    },
    {
      referencia:
        'Santander Universidades. (1 de abril de 2022). Herramientas ofimáticas: qué son, tipos y ejemplos [Web log post]. <em>| Becas Santander.</em>',
      link:
        'https://www.becas-santander.com/es/blog/herramientas-ofimaticas.html',
    },
    {
      referencia:
        'Wow. (22 de febrero de 2022).<em> Qué es un diagrama de causa y efecto. ¿Cuál es su utilidad?</em> ',
      link: 'https://www.wowcx.com/que-es-un-diagrama-de-causa-y-efecto/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
