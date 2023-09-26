<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Selección y preprocesamiento de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La selección de los datos y el preprocesamiento de estos es, sin lugar a dudas, una de las tareas que más demanda tiempo y dedicación; los datos son recopilados desde diferentes fuentes de información; actualmente, casi toda esta captura de información se realiza desde aplicativos en línea, que guardan los datos en grandes bases de datos; cada día se recopila mayor volumen de información y se necesitan sistemas actualizados y robustos que lo soporten, por lo que las empresas le están apostando más a la modernización tecnológica.
        .row.justify-content-center
          .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img01.svg' alt="")
          .col-lg-9(data-aos="flip-right")
            p.mb-0 La información puede ser recopilada por sistemas de información privada que almacenan información propia de cada negocio; por ejemplo, en un sistema de e-commerce, la empresa puede almacenar información de sus clientes, compras, productos más vistos, número de clics, horas de mayor acceso, lugar desde donde se accede, entre cientos de posibilidades; las empresas quieren tener la mayor cantidad de información de sus clientes, pues esto les permite entenderlos y, de cierta manera, fidelizarlos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img02.png' alt="")

    .BGM02.p-md-5.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img03.svg' alt="")
        .col-lg-8(data-aos="fade-left")
          p Sobre selección y preprocesamiento de datos, tenga en cuenta:
          .tarjeta.BG03.p-4
            SlyderA(tipo="b")
              div
                p.mt-4 #[b.BGP01 Uso frecuente y común ]
                p.mb-0 Estas fuentes de información cada día se utilizan más debido al incremento de métodos de ciencia de datos para estudiar los datos y generar valor al negocio.
              div
                p.mt-4 #[b.BGP01 Otras fuentes]
                p.mb-0 También pueden existir fuentes de información públicas, ya sea gratuitas o de pago; cuando se realizan proyectos de ciencia de datos.
              div
                p.mt-4 #[b.BGP01 Saberes claves]
                p.mb-0 Durante la búsqueda y selección de la información, se deben tener habilidades en el manejo de archivos, conocimientos de bases de datos, manejo de sistemas de información, ya que estas herramientas son las que normalmente se utilizan para la administración y manipulación de los datos.

    p.text-center.mb-5(data-aos="fade-left") Estos son algunos tipos de archivos necesarios para el almacenamiento de la información:

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img04.svg' alt="")
      .col-lg-6(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04")
          div(titulo="Archivos XLS y XLSX")
            p.text-white.mb-0 Este tipo de archivos se genera desde uno de los programas más conocidos en el mundo de la informática para herramientas ofimáticas, como lo es Microsoft Excel. Las extensiones de los archivos se generan con extensión XLS para versiones 2003, y XLSX para versiones desde 2007 en adelante; este tipo de archivos se genera por múltiples sistemas de información, formularios en línea, Office en línea y muchas otras aplicaciones.
          div(titulo="Archivos CSV")
            p.text-white Es un tipo de archivo que maneja una estructura simple que almacena la información en forma de filas que corresponden a cada uno de los registros, y los campos de esos registros están, a su vez, separados normalmente por comas, aunque los podemos encontrar separados por punto y coma o tabulaciones.
            p.text-white.mb-0 Es un tipo de formato que se puede abrir casi en cualquier programa, como, por ejemplo, un bloc de notas, aunque la compresión de los datos no es tan buena. Para un mejor entendimiento de los datos, se recomienda abrirlo en hojas de cálculo, como Excel, Google Sheet, u otros programas compatibles con esta estructura. Es un formato que no admite gráficos, tablas, colores o fuentes, está diseñado simplemente como un contenedor de información.
          div(titulo="Archivos JSON")
            p.text-white.mb-0 Más que un tipo de archivo, es una estructura simple que se utiliza para el intercambio de información entre sitios web. Cuando se realiza la exportación de estos, se utilizan archivos de texto simple con extensión TXT; sin embargo, existen aplicaciones, como Google+, que utiliza la extensión JSON para guardar los perfiles de usuario.

    .row.justify-content-center.mb-5
      .col-lg-10
        .BG05.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-6.px-2.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img05.svg' alt="")
            .col-lg-9(data-aos="fade-left")
              p.mb-0 Si se trabaja frecuentemente con datos, se deben dominar muy bien estos tipos de archivos; cada uno de ellos ofrece la posibilidad de verlos desde, directamente, su programa de creación. Por ejemplo, los tipos XLSX se podrían ver y analizar desde el programa Microsoft Excel; de igual manera, los de extensión CSV; y para analizar los tipos JSON, se utilizan editores de texto normales o programas especializados que entiendan esta estructura.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-end.w-100.pe-4(data-aos="fade-right")
        h3.t-ac.zindex-2.ps-3.mb-1 ¿Cuándo se puede empezar a trabajar con los datos?
        img.zindex-1(src='@/assets/curso/temas/img01.svg' style="position: absolute; left: 100px; max-width: 295px;")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Si bien ya se realizó la búsqueda y selección de los datos, aún falta mucho para empezar con la creación de los modelos de Machine Learning, esto debido a que cada algoritmo de clasificación tiene sus propios requerimientos en cuanto a la colección de datos con los que va a entrenar, es decir, la adaptación de los datos a un modelo de entrenamiento específico; además de que los datos nunca serán ideales, pues se pueden encontrar datos nulos, datos inconsistentes, valores atípicos, con errores,  entre otros problemas que normalmente se presentan.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img06.svg' alt="")

    p.mb-5(data-aos="fade-right") Entonces:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.px-4.py-5
          p.mb-0 Es cuando entra en juego una de las tareas más importantes en los proyectos de ciencia de datos, constituyendo aproximadamente el 70 % del tiempo del proyecto, y se trata del preprocesamiento de los datos.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.BGIMG02.h-100.px-4.py-5
          p.text-white.mb-0 Es una labor ardua, en la que el objetivo es realizar la depuración de los datos, de tal manera que estos queden lo más consistentes posibles.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG03.h-100.px-4.py-5
          p.text-white.mb-0 Al realizar el preprocesamiento, se realiza una limpieza, evitando entradas y salidas de características que no se van a utilizar; también, al mejorar los datos, se mejora el rendimiento del modelo, con mejores resultados.

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img07.svg' alt="")
      .col-lg-9
        p(data-aos="fade-left") Antes de realizar cualquier acción para preparar los datos, normalmente, se realiza una exploración de los datos, con el objetivo de ir entendiéndolos y los problemas que se puedan presentar en ellos; dentro de esas actividades de exploración, las más frecuentes pueden ser:
        ul.lista-ul--color.ms-4
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle(style="color: #8054F8;")
            | Determinar el número de registros.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle(style="color: #8054F8;")
            | Establecer las características o atributos de los datos.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle(style="color: #8054F8;")
            | Determinar cuáles de los atributos corresponden a valores categóricos, numéricos o nominales.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle(style="color: #8054F8;")
            | Contar y ubicar los valores faltantes.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle(style="color: #8054F8;")
            | Establecer si existen formatos incorrectos.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle(style="color: #8054F8;")
            | Análisis de datos atípicos.

    p.mb-5(data-aos="fade-right") Luego de realizar la exploración de los datos, se continúa con el preprocesamiento de datos, y estas son las actividades que normalmente se realizan:

    .row.justify-content-center.mb-5
      .col-lg.col-md-6.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img08.svg' alt='')
          .tarjeta.BG05.p-4
            h5.text-center.mt-4 Limpieza de datos
            p.mb-0 Rellenar los valores que hacen falta, identificar y eliminar datos atípicos y los ruidosos.
      .col-lg.col-md-6.col-sm-8.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img09.svg' alt='')
          .tarjeta.BG05.p-4
            h5.text-center.mt-4 Transformación de datos
            p.mb-0 Normalización de los datos para reducción de ruido y las dimensiones.
      .col-lg.col-md-6.col-sm-8.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img10.svg' alt='')
          .tarjeta.BG05.p-4
            h5.text-center.mt-4 Reducción de datos
            p.mb-0 Atributos o registros de datos de ejemplo, para un control de datos más sencillo.
      .col-lg.col-md-6.col-sm-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img11.svg' alt='')
          .tarjeta.BG05.p-4
            h5.text-center.mt-4 Discretización de datos
            p.mb-0 Realizar la conversión de valores categóricos a numéricos, ya que es requerido por algunas técnicas de aprendizaje automático.

    p.mb-5(data-aos="fade-right") En cada una de las tareas que se realizan en el preprocesamiento, pueden surgir una serie de preguntas cla-ves. Conózcalas a continuación:

    AcordionA(tipo="b" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
      div(titulo="¿Qué hacer con los valores faltantes?")
        p.text-white Para atacar este problema, lo mejor es investigar cuál es la razón del porqué hay ausencias de valores, lo que permitirá realizar un mejor control de la situación. De acuerdo con esto, la acciones que se pueden realizar son:
        ul.lista-ul--color.text-white.ms-4
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Eliminación definitiva:] se quitarían los datos que faltan en la colección de datos.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Sustituciones con valor fijo:] se realiza un reemplazo de los valores que hacen falta por un valor fijo definido de acuerdo con el análisis del negocio; por ejemplo, colocar un 0 para valores numéricos, o la palabra otro para variables categóricas
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Sustituciones con la media:] para atributos faltantes, puede realizar el cálculo de la media para esa columna y reemplazar los valores vacíos con ese resultado.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Sustitución frecuente:] consiste en reemplazar los datos que son categóricos por la etiqueta que más se repita.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Sustitución de regresión:] se implementa un método de regresión con el que se reemplazan los valores faltantes por los valores con regresión.
      div(titulo="¿Qué hacer con los valores faltantes?")
        p.text-white Con la normalización, se escalan los datos numéricos en un intervalo determinado. Dentro de las técnicas para realizar la normalización de los valores más conocidos, se puede encontrar:
        ul.lista-ul--color.text-white.ms-4
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Normalización mínima máxima:] se convierten los datos linealmente a un intervalo específico, por ejemplo, al llevarlos a un intervalo que esté entre 0 y 1, el valor mínimo de esa columna tomará el 0 y el valor máximo, el 1.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Normalización de puntuación z:] con esta técnica, se escalan los datos teniendo en cuenta la desviación estándar y media: se divide la diferencia entre los valores y la media por la desviación estándar.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Escalado decimal:] escale los datos moviendo la coma decimal del valor del atributo.
      div(titulo="¿Qué hacer con los valores faltantes?")
        p.text-white Para la discretización de los valores, se puede hacer con la conversión de datos continuos en intervalos o en atributos nominales. Dentro de las estrategias para lograrlo, se puede usar lo siguiente:
        ul.lista-ul--color.text-white.ms-4
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Discretizar con el mismo ancho:] se deben tomar todos los valores del atributo y realizar la división en N grupos con el mismo tamaño, luego, se asignan los valores que se encuentran en una ubicación con el número de la ubicación.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Discretización igual alto:] consiste en dividir el rango de todos los valores posibles para un atributo en N grupos, cada uno con el mismo número de instancias, y asignar el valor en una posición al número de posición.
      div(titulo="¿Cómo reducir los datos?")
        p.text-white Hay varias formas de reducir el tamaño de los datos para facilitar su procesamiento. Dependiendo del tamaño y dominio de los datos, se pueden aplicar los siguientes métodos:
        ul.lista-ul--color.text-white.ms-4
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Muestreo de registros:] muestreo de registros de datos y selección de solo un subconjunto representativo de datos.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Muestreo de atributos:] selecciona solo un subconjunto de los atributos más importantes de los datos.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #8054F8 !important;")
            p.mb-0 #[b.BGP01 Agregación:] agrupa datos y almacena números para cada grupo. Por ejemplo, los datos de ingresos diarios de una cadena de restaurantes durante los últimos 20 años se pueden agregar a los ingresos mensuales para reducir la cantidad de datos.



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
