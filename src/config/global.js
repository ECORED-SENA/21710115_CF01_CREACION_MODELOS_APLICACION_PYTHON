export default {
  global: {
    componenteFormativo: 'El algoritmo ideal',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre los principales algoritmos de clasificación que se utilizan en modelos <em>Machine Learning</em>, los cuales contribuyen a la solución en diversas problemáticas, a través del desarrollo de sistemas de automatización. Con su estudio responsable, el aprendiz podrá realizar el preprocesamiento de los datos, realizar su depuración, entendimiento y establecer la variable objetivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Creación de modelos de <em>Machine Learning</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Algoritmos de clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'K-vecinos cercanos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Regresión logística',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Árboles de decisión ',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Bosques aleatorios ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<em>Naive Bayes</em>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Otros algoritmos ',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Selección y preprocesamiento de datos (<em>dataset</em>)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métricas de evaluación',
        desarrolloContenidos: true,
      },
      /*{
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis exploratorio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Preprocesamiento de los datos con Python ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Crear el modelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Entrenamiento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Evaluación',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Predicciones',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Evaluar el modelo y análisis de errores',
            hash: 't_6_4',
          },
        ],
      },*/
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
        download: 'downloads/21710115_CF01_DU.zip',
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
      tema: '1. Creación de modelos de <em>Machine Learning</em>',
      referencia:
        'SDC LEARNING. (2022). <em>Webinar Gratuito Mi Pri-mer Modelo de Machine Learning en Python</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9HKfqinJJAo',
    },
    {
      tema: '1.1. Algoritmos de Clasificación',
      referencia:
        'Parra, F. (2019). <em>Estadística y Machine Learning con R. Book-down.</em>',
      tipo: 'Página web',
      link: 'https://bookdown.org/content/2274/metodos-de-clasificacion.html',
    },
    {
      tema: '3. Métricas de evaluación',
      referencia:
        'González, L. (2020). <em>Evaluando el error en los modelos de clasificación</em>. Aprende IA.',
      tipo: 'Página web',
      link:
        'https://aprendeia.com/evaluando-el-error-en-los-modelos-de-clasificacion-machine-learning/',
    },
  ],
  glosario: [
    {
      termino: 'Hipótesis',
      significado:
        'suposición hecha a partir de unos datos, que sirve de base para iniciar una investigación o una argumentación.',
    },
    {
      termino: 'Media armónica',
      significado:
        'es una medida estadística recíproca a la media aritmética, que es la suma de un conjunto de valores entre el número de observaciones.',
    },
    {
      termino: 'Algoritmos de clasificación',
      significado:
        'se utilizan cuando el resultado deseado es una etiqueta discreta.',
    },
    {
      termino: 'Entrenamiento',
      significado:
        'es una forma de la Inteligencia Artificial que permite a un sistema aprender de los datos, en lugar de aprender mediante la programación explícita.',
    },
    {
      termino: 'Predicción',
      significado:
        'los sistemas de predicción son técnicas que construyen y estudian nuevas previsiones a través de una rama de la Inteligencia Artificial denominada aprendizaje automático <em>(Machine Learning)</em>.',
    },
    {
      termino: 'Precisión',
      significado:
        'esta métrica es usada para evaluar la calidad del modelo en tareas de clasificación.',
    },
    {
      termino: 'Exhaustividad',
      significado:
        'esta métrica es usada para mostrar la cantidad de verdaderos positivos que el modelo es capaz de identificar.',
    },
    {
      termino: 'Exactitud',
      significado:
        'esta métrica es usada cuando las clases son aproximadamente iguales en tamaño, se encarga de medir el porcentaje de casos en que el modelo ha acertado.',
    },
  ],
  referencias: [
    {
      referencia:
        'González, L. (2020). <em>¿Cuál es la diferencia entre Regresión Lineal y Regresión Logística?</em> Aprende IA.',
      link: '',
    },
    {
      referencia:
        'Miller, V. (2018). <em>Explorando Algoritmos de Aprendizaje Automático Supervisado.</em> Developers',
      link:
        'https://www.toptal.com/machine-learning/explorando-algoritmos-de-aprendizaje-automatico-supervisado',
    },
    {
      referencia:
        'Roman, V. (2019a). <em>Aprendizaje Supervisado: Introducción a la Clasificación y Principales Algoritmos.</em> Ciencia & Datos.',
      link:
        'https://medium.com/datos-y-ciencia/aprendizaje-supervisado-introducción-a-la-clasificación-y-principales-algoritmos-dadee99c9407',
    },
    {
      referencia:
        'Roman, V. (2019b). <em>Machine Learning: Cómo Desarrollar un Modelo desde Cero.</em> Ciencia & Datos.',
      link:
        'https://medium.com/datos-y-ciencia/machine-learning-cómo-desarrollar-un-modelo-desde-cero-cc17654f0d48',
    },
    {
      referencia:
        'Sotaquirá, M. (2021). <em>¿Se requiere SQL para trabajar en Machine Learning?</em> Codificando Bits.',
      link: 'https://www.codificandobits.com/blog/sql-machine-learning/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rónald Alexánder Vacca Ascanio',
          cargo: 'Experto Temático',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Locución',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
