<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Creación de modelos de #[em Machine Learning]

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8.px-lg-0.order-lg-1.order-2
        p.mb-5(data-aos="fade-right") Un modelo de #[em Machine Learning] es:
        ul.lista-ul--color.ms-4.mb-5
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #8054F8;")
            span Un archivo que se entrena con el fin de identificar ciertos tipos de patrones.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #8054F8;")
            span Dicho entrenamiento se realiza a través de una colección de datos y un algoritmo que lo que hace es buscar información de los datos.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #8054F8;")
            span Al entrenar el modelo, este va “aprendiendo” de los datos.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #8054F8;")
            span Por ejemplo, si se lleva al contexto cuando un profesor le muestra el color a un niño, pero, además, le dice el nombre de ese color, el niño aprende, y la próxima vez que vea el color ya lo identificará y podrá reconocerlo.
        .BG01.p-lg-5.p-4(data-aos="fade-right")
          p.me-lg-4.mb-0 Cuando el modelo es entrenado, puede usarse para describir datos desconocidos; por ejemplo, si se desea crear una aplicación que permita detectar las emociones del cliente de una empresa, estas emociones se identificarían de acuerdo con sus expresiones faciales. Para realizar el entrenamiento, se le indican a la máquina cientos de imágenes con rostros de diferentes emociones y se le indica qué emoción corresponde a cada imagen; este modelo, creado a partir de este entrenamiento, aprende de los datos y se podría usar en una aplicación que identifique las emociones de cualquier rostro.
      .col-lg-4.col-8.px-lg-0.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img01.png' alt="")

    .BGM02.p-md-5.p-4.mb-5
      p.mb-5 Algunas generalidades sobre el #[em Machine Learning], las cuales usted debe tener presentes, son:
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img02.png' alt="")
        .col-lg-8(data-aos="fade-left")
          .tarjeta.BG03.p-4
            SlyderA(tipo="b")
              div
                p.mt-4 #[b.BGP01 Afianzamiento]
                p.mb-0 #[em Machine Learning] es un término que se empieza a escuchar, cada vez, con más frecuencia; es una dependencia de la Inteligencia Artificial (AI).
              div
                p.mt-4 #[b.BGP01 Intencionalidad]
                p.mb-0 Su principal objetivo es la creación de sistemas que estén en la capacidad de aprender, de manera autónoma, a partir de una colección de datos.
              div
                p.mt-4 #[b.BGP01 Análisis de datos]
                p.mb-0 Lo anterior, permite tener la percepción y análisis de un gran volumen de datos, lo que facilita muchos procesos del ser humano.
              div
                p.mt-4 #[b.BGP01 Entrenamiento]
                p.mb-0 Para la construcción de dichos modelos, se requiere, como base fundamental, una colección de datos desde la cual el algoritmo seleccionado empieza su proceso de entrenamiento.
              div
                p.mt-4 #[b.BGP01 Predicciones]
                p.mb-0 Posteriormente, se realizan las predicciones de acuerdo con una variable objetivo.
              div
                p.mt-4 #[b.BGP01 Algoritmos de clasificación]
                p.mb-0 En este componente formativo, para la creación de los modelos, se utilizarán específicamente algoritmos que denominamos de clasificación, que están dentro de la categoría de aprendizaje supervisado.

    p.mb-5(data-aos="fade-right") En el aprendizaje supervisado, se le indica a la máquina información histórica para que realice el entrenamiento y aprenda de esa información; una vez ha aprendido, se estaría en la capacidad de realizar el reconocimiento y predecir sin necesidad de saber la respuesta.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Este tipo de aprendizaje toma como base el comportamiento humano, en cual se está bajo la supervisión de un profesor que proporciona a sus estudiantes un número importante de buenos ejemplos para que sean memorizados y, posteriormente, el alumno pueda generar sus propias reglas para estos ejemplos ya aprendidos.
        p El siguiente, es un ejemplo que permite entender lo anteriormente expuesto; preste suma atención:
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04")
          div(titulo="<span style='text-shadow: 2px 2px 10px #FFF'>Entender el modelo</span>")
            p.text-white.mb-5 Se entrenará un modelo teniendo en cuenta una colección de imágenes de animales, en la cual se especifica el nombre de cada uno.
            .row.justify-content-center
              .col-lg-9
                img(src='@/assets/curso/tema1/img04.svg' alt="Imagen que muestra los tres animales que se usarán para el ejemplo: vaca, león, serpiente.")
          div(titulo="<span style='text-shadow: 2px 2px 10px #FFF'>Establecer la colección de datos</span>")
            p.text-white.mb-5 Se establece la colección de datos, la cual está formada por una imagen y el nombre asociado a esa imagen; estos datos son procesados por los algoritmos de lenguaje supervisado que le permitirán al modelo aprenderlos.
            .row.justify-content-center
              .col-lg
                img(src='@/assets/curso/tema1/img05.svg' alt="Ilustración que muestra la imagen de los animales, los cuales serán incluidos como datos para ser procesados por el algoritmo.")
          div(titulo="<span style='text-shadow: 2px 2px 10px #FFF'>Realizar el proceso de entrenamiento</span>")
            p.text-white.mb-5 Una vez se realice el proceso de entrenamiento, se creará un modelo capaz de identificar una imagen sin que se deba especificar el significado, ya que este ha realizado su aprendizaje con los datos que previamente se le han introducido.
            .row.justify-content-center
              .col-lg-9
                img(src='@/assets/curso/tema1/img06.svg' alt="Ilustración que muestra la imagen de la serpiente del ejemplo, siendo identificada por el modelo. El resultado es una Serpiente.")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img03.png' alt="")

    p.text-center.mb-5(data-aos="fade-left") De acuerdo con lo explicado anteriormente, se puede decir que:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-sm-8.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.px-4.py-5
          p.mb-0 Un modelo de #[em Machine Learning] es el resultado que se obtiene cuando se realiza el entrenamiento a un algoritmo con datos.
      .col-xl-4.col-lg-6.col-sm-8.mb-4(data-aos="flip-up")
        .tarjeta.BGIMG02.h-100.px-4.py-5
          p.text-white.mb-0 Después de realizar el entrenamiento, al indicarle un modelo con una entrada, también se le proporciona una salida.
      .col-xl-4.col-lg-6.col-sm-8.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG03.h-100.px-4.py-5
          p.text-white.mb-0 Por ejemplo, cuando se usa un algoritmo predictivo, es decir, aquel que permite aprender de un conjunto de datos y que, al enfrentarlo a nuevos datos, podría determinar o predecir de qué se tratan, se creará un modelo predictivo.

    p.mb-5(data-aos="fade-right") Es muy importante reafirmar lo dicho hasta ahora. El video que se propone enseguida, destaca los aspectos más relevantes sobre #[em Machine Learning]; explórelo atentamente:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/J9w6KquPKbE?si=hw2Mzyl2xntwJupv" title="¿Qué es Machine Learning?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. ¿Qué es Machine Learning?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-3.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img07.svg' alt="")
      .col-lg(data-aos="fade-left")
        p.mb-0 Para empezar a crear los modelos, se requiere definir muy bien la variable objetivo; por ejemplo, saber qué estudiantes pasarán o perderán un curso, qué pacientes de una clínica padecerán cáncer o qué clientes pueden abandonar los servicios que les ofrece una empresa.

    p.mb-5(data-aos="fade-right") Para crear un modelo de #[em Machine Learning], hay que tener en cuenta algunas consideraciones, como las que aquí se sugieren:

    TabsA.color-acento-botones.mb-4(data-aos="fade-right")
      .tarjeta.BG05.p-4(titulo="Recolectar datos")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p De acuerdo con cada problema, se debe realizar una muy buena investigación y obtención de datos, garantizando que sean de muy buena calidad y cantidad, pues esto determinará su eficiencia.
            p.mb-0 Dicha información puede venir de bases de datos privadas o públicas, las cuales proveen información que puede ser descargada en formato CSV o compartida mediante API con estructuras tipo JSON; también puede hacer uso de la técnica #[em Web Scraping], que consiste en conseguir información publicada en páginas web mediante un #[em software] especializado que se va almacenando en tablas, de manera #[em online] o local.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img08.svg' alt="")
      .tarjeta.BG05.p-4(titulo="Preparar los datos")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p.mb-0 Este paso permite hacer visualizaciones de los datos para determinar si existen correlaciones entre las diversas variables; se puede realizar corrección de valores nulos, datos atípicos, conversión de datos categóricos a numéricos, establecer si es necesario la creación de columna #[em dummy], normalización de los datos y corrección de errores. Es importante hacer un mezclado y separación de los datos, pues de estos normalmente se utiliza 80 % para realizar el entrenamiento y 20 % se dejan para realizar las pruebas al modelo.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img09.svg' alt="")
      .tarjeta.BG05.p-4(titulo="Escogiendo el modelo")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p.mb-0 Son múltiples los modelos que existen y que se pueden escoger dependiendo de la problemática u objetivo que se quiera resolver.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img10.svg' alt="")
      .tarjeta.BG05.p-4(titulo="Entrenando la máquina")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p.mb-0 Luego de seleccionar el modelo, se realiza el entrenamiento. En este proceso, se deben visualizar mejoras. Es importante inicializar los pesos del modelo aleatoriamente, ya que estos afectan la relación entre la entrada y la salida. Los pesos se ajustan automáticamente a medida que se realizan más entrenamientos. Se deben observar todas las respuestas obtenidas y proceder con las correcciones necesarias.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img11.svg' alt="")
      .tarjeta.BG05.p-4(titulo="Evaluación")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p.mb-0 Lo que se busca con la evaluación es obtener la precisión del modelo entrenado, en la cual se verifica su exactitud; dependiendo del requerimiento del negocio, se aceptarán diferentes porcentajes, lo ideal es siempre buscar un nivel de exactitud superior al 90 %.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img12.svg' alt="")
      .tarjeta.BG05.p-4(titulo="Configuración de parámetros")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p Con los resultados obtenidos, se determina si se realizaron buenas predicciones; en caso de no obtener el resultado esperado, es muy probable que se estén presentando problemas de #[em overfitting] o de #[em underfitting], y se deba retroceder a entrenar nuevamente el modelo.
            p.mb-0 Se podría pensar en aumentar el número de iteraciones del modelo o realizar ajustes al valor máximo de error permitido, entre otros. Cada algoritmo tiene sus propias configuraciones, que es necesario conocer para que puedan ser ajustadas a determinadas situaciones.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img13.svg' alt="")
      .tarjeta.BG05.p-4(titulo="Predicción")
        .row.justify-content-center
          .col-lg-10.order-lg-1.order-2
            p.mb-0 En este punto, ya se han logrado buenas evaluaciones y el modelo debería estar listo para empezar a predecir datos con información completamente nueva.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img14.svg' alt="")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Algoritmos de clasificación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Este tipo de algoritmos es utilizado en problemas cuyos resultados estén basados en la obtención de etiquetas discretas, lo que quiere decir que las respuestas a una pregunta o problema están alojadas dentro de una colección de datos finita; por ejemplo, en la detección de correo malicioso, se puede detectar si es #[em spam] o no, o en la calificación de servicio de un restaurante se puede determinar si es bueno, malo o excelente; en otras palabras, el resultado está enmarcado en un rango de salidas definido.
        .tarjeta.BG01.p-4(data-aos="fade-right")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img08.svg' alt="")
            .col-lg-10
              p.mb-0 Cuando el modelo es entrenado para obtener resultados del tipo verdadero o falso, se le conoce como #[b.BGP06 clasificación binaria.] Por ejemplo, se podrían crear modelos de clasificación con respuestas binarias para predecir si un alumno aprueba un curso o no, o los clientes comprarán un producto nuevo o no; este tipo de etiquetas se representan con un 0 para falso y 1 para verdadero.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img15.png' alt="")

    .h5.text-center(data-aos="fade-right")  Así mismo:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 Estos algoritmos también pueden implementarse cuando se requiera predecir más de dos objetivos.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img16.svg' alt="")
      .row.justify-content-center.align-items-center.text-start
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img17.svg' alt="")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 En tal caso, se denominan de #[b.BGP01 clasificación multicategoría,] y son usados en la segmentación de clientes, en la categorización de imágenes y audios.
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 Otro uso que se les puede dar es el de analizar textos que ayuden a establecer cuál es el sentimiento de una persona.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img18.svg' alt="")
      .row.justify-content-center.align-items-center.text-start
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img19.svg' alt="")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 La forma en cómo trabajan los algoritmos consiste en entregarles una colección de muestras, patrones, ejemplos o prototipos base, para que se tomen como la representación de las clases o variables.
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 En esta misma colección, se relacionan con la etiqueta de clase correcta las colecciones, valga la redundancia, que se relacionan correctamente con la etiqueta resultado, a esto se le denomina conjunto de entrenamiento.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img20.svg' alt="")
      .row.justify-content-center.align-items-center.text-start
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img21.svg' alt="")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 El algoritmo aprende de ese conjunto de datos, ya que se le indica qué variables se asocian al resultado y, con ese conocimiento, se estará en la capacidad de predecir el resultado para nuevas entradas con las que el modelo nunca haya tenido relación.

    .tarjeta.BGIMG04.p-4.mb-5
      .row.justify-content-center
        .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 La siguiente gráfica, muestra cómo se clasifican los datos. Suponga que el modelo se entrenó con mariposas, colibríes y colores, estos son clasificados de acuerdo con sus características. Cuando el modelo se enfrente a nuevos datos con características similares al modelo entrenado, pero que no conoce este, estaría en la capacidad de identificarlos asociándolos a una clase, ya sea por el color o por la figura de la imagen.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Clasificación de datos
          img(src='@/assets/curso/tema1/img22.png' alt="Imagen que muestra un conjunto de mariposas azules, un conjunto de colibríes verdes y un conjunto integrado por una mariposa y un colibrí.")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img23.png' alt="")
      .col-lg-7(data-aos="fade-left")
        p Los principales algoritmos de clasificación son:
        .row.justify-content-center
          .col-lg-4.col.sm-6.mb-4
            .tarjeta.BG01.p-3
              p.mb-0 K-vecinos cercanos
          .col-lg-4.col.sm-6.mb-4
            .tarjeta.BG01.p-3
              p.mb-0 Regresión logística
          .col-lg-4.col.sm-6.mb-4
            .tarjeta.BG01.p-3
              p.mb-0 Árboles de decisión
          .col-lg-4.col.sm-6.mb-lg-0.mb-4
            .tarjeta.BG01.p-3
              p.mb-0 Bosques aleatorios
          .col-lg-4.col.sm-6.mb-lg-0.mb-4
            .tarjeta.BG01.p-3
              p.mb-0 #[em Naive Bayes]
          .col-lg-4.col.sm-6
            .tarjeta.BG01.p-3
              p.mb-0 Otros algoritmos

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 K-vecinos cercanos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") #[em K-nearest-neighbor] es un algoritmo que se basa en el aprendizaje supervisado, el cual, se utiliza para clasificar muestras nuevas de valores discretos o realizar predicciones en valores continuos. Es un algoritmo fácil de entender, lo que lo hace ideal para principiantes en el mundo del #[em Machine Learning].
        p Este algoritmo funciona comparando los datos nuevos con los datos de entrenamiento, encontrando, los puntos o características más parecidas a los datos nuevos. De esta forma, se identifica cuáles han sido aprendidas durante el proceso de entrenamiento.
        .tarjeta.BG05.p-4(data-aos="fade-right")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img25.svg' alt="")
            .col-lg-10
              p.mb-0 En aprendizaje no supervisado, se encuentra un algoritmo que se denomina #[em k-means], el cual se debe diferenciar, ya que, para este, la #[em k] tiene que ver con el número de grupos que se desean clasificar, mientras que en el algoritmo #[em Knn (K-nearest neigbor)], la #[em k] tiene que ver con el número de puntos vecinos que se deben tener en cuenta, por su cercanía, para realizar la clasificación en #[em n] grupos que sean conocidos previamente, pues este se trata de un algoritmo basado en la supervisión.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img24.png' alt="")

    .row.justify-content-center.mb-5
      .col-xxl-4.col-lg-6.col-sm-8.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.px-4.py-5
          p.mb-0 La técnica #[em K-nearest-neighbor] intenta predecir realizando una clasificación del dato tomando como base los datos que lo rodean.
      .col-xxl-4.col-lg-6.col-sm-8.mb-4(data-aos="flip-up")
        .tarjeta.BGIMG02.h-100.px-4.py-5
          p.text-white.mb-0 En un algoritmo supervisado, la colección de datos con los que se entrena está etiquetada con una clase o resultado esperado.
      .col-xxl-4.col-lg-6.col-sm-8.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG03.h-100.px-4.py-5
          p.text-white.mb-0 Por otro lado, un algoritmo basado en instancia no realiza un aprendizaje explícitamente de un modelo, (como lo haría el algoritmo de árbol de decisión o el de regresión lineal); lo que realiza es un entrenamiento, memorizando las instancias que serán la base principal de conocimiento, que se utilizará para predecir nuevos datos.

    p.mb-5 Comprenda, con mayor propiedad, los aspectos mencionados hasta este punto; observe la ejemplificación que se propone enseguida:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img26.svg' alt="")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04")
          div(titulo="1. Planteamiento")
            p.text-white.mb-0 Para una colección de datos donde cada instancia se refiere a un cliente de un banco, en la cual se conocen para cada uno sus características o atributos, como pueden ser edad, patrimonio, ingresos, gastos, hijos, entre otros; además, se tiene un atributo o clase objetivo que indica si cada uno de ellos puede ser candidato o no para realizarle un préstamo, el atributo o clase objetivo es el que se intentará predecir.
          div(titulo="2. Situación")
            p.text-white.mb-0 Para realizar el modelo, se divide la colección de datos en dos partes y se deben seleccionar de manera aleatoria; la parte del entrenamiento con el 80 % de los datos y se deja otro 20 % con el resto de los datos para hacer las pruebas que ayudarán a validar el modelo.
          div(titulo="3. Acción")
            p.text-white.mb-0 Se debe establecer un valor para #[em k], preferiblemente que sea pequeño; luego se le pasa al algoritmo una instancia de la colección que se ha separado para pruebas, para que sea procesado. Tras realizar este proceso, el algoritmo se encarga de seleccionar las #[em k] instancias de la colección de datos de entrenamiento que más se parezcan o sean más cercanas, dicha cercanía se establece dependiendo de la métrica de similitud que se utilice; la asignación se realiza a la instancia de la clase con mayor frecuencia dentro de las #[em k] instancias que han sido seleccionadas como más cercanas.

    p(data-aos="fade-right") El algoritmo #[em K-Nearest-Neighbor] es un algoritmo muy simple, pero con el que se obtienen buenos resultados.
    p(data-aos="fade-right") Para tener en cuenta:
    .BGM07.p-md-5.p-4.mb-5
      .BG01.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-8.p-4.order-lg-1.order-2
             ul.lista-ul--color.ms-4.mb-0
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-check-circle(style="color: #8054F8;")
                span Este algoritmo es muy sensible a la variable #[em k].
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-check-circle(style="color: #8054F8;")
                span En la medida en que se cambie este valor, también cambiarán los resultados, para lo cual se recomienda realizar muchas pruebas con distintas instancias para fijarlo.
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-check-circle(style="color: #8054F8;")
                span También se debe tener en cuenta la métrica de similitud que se vaya a implementar, ya que esto determina fuertemente la relación de cercanía que se irá obteniendo en la construcción del modelo.
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-check-circle(style="color: #8054F8;")
                span Para establecer los puntos que sean similares y con mayor cercanía, se debe encontrar la distancia entre esos puntos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img27.jpg' alt="")

      p.mb-5(data-aos="fade-right") Dentro de las técnicas más utilizadas para el cálculo de estas medidas, se pueden encontrar:
      .row.justify-content-center
        .col-lg-10(data-aos="zoom-in")
          .BG03.p-5
            SlyderA(tipo="b")
              .row
                .col-lg-8.order-lg-2.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img28.svg', alt='Gráfica de un plano donde se representa la distancia euclidiana: la distancia más corta de un punto a otro.')
                .col-lg-4.order-lg-1
                  h3
                    span(style="background-color: #D8DCFC; padding: 2px") Distancia euclidiana
                  p Es una de las técnicas más básicas, pero muy utilizada en los proyectos de <em>Machine Learning</em>. En principio, está pensada solo para usarla con variables numéricas. En caso de requerirse para trabajar con valores categóricos, se debe, antes, utilizar un mecanismo de conversión a números.


              .row
                .col-lg-8.order-lg-2.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img29.svg', alt='Gráfica de un plano donde se representa la distancia Manhattan: distancia entre un punto A y un punto B, habiendo bordeado uno o más puntos, previamente.')
                .col-lg-4.order-lg-1
                  h3
                    span(style="background-color: #D8DCFC; padding: 2px") Distancia Manhattan
                  p También denominada distancia de taxi. En el siguiente gráfico, se puede apreciar que la línea verde no es el camino más cercano de un punto a otro. Ello, porque el recorrido bordea otro punto, antes del punto de llegada.

              .row
                .col-lg-8.order-lg-2.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img30.svg', alt='Gráfica del diagrama de Minkowski.')
                .col-lg-4.order-lg-1
                  h3
                    span(style="background-color: #D8DCFC; padding: 2px") Distancia Minkowski
                  p Es una métrica en un espacio vectorial normalizado. Es considerada como una generalización de la distancia euclidiana y la distancia de taxi.
            //SlyderB(:datos="datosSlyder")

    p.mb-5(data-aos="fade-right") En general, se puede decir que en el algoritmo #[em Knn] se deben realizar los siguientes pasos:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BG08.h-100.p-4
          .h4.text-white.text-center.mb-0 Encontrar los vecinos más cercanos
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.BG08.h-100.p-4
          .h4.text-white.text-center.mb-0 Votar por las etiquetas
      .col-lg-3.col-sm-6.col-10(data-aos="fade-left")
        .tarjeta.BG08.h-100.p-4
          .h4.text-white.text-center.mb-0 Calcular las distancias

    p.mb-5(data-aos="fade-right") Hasta este punto, ya se sabe cómo funciona el algoritmo #[em K-nearest-neighbor], y con qué parámetro fundamental es la determinación de #[em k]. No obstante, tenga presente que:

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.BG05.p-4(titulo="Número de vecinos")
            p.mb-0 El número de vecinos se debe elegir cuando se está realizando la construcción del modelo; se puede decir que #[em k] es una variable o parámetro de control en la predicción.
          .tarjeta.BG05.p-4(titulo="Colecciones de datos y sus exigencias propias")
            p.mb-0 Pero no es un valor que esté definido fácilmente, dependiendo de alguna problemática específica o una colección de datos puntual; cada colección de datos tendrá sus propias exigencias.
          .tarjeta.BG05.p-4(titulo="Sesgos")
            p.mb-0 Se han realizado investigaciones que han logrado determinar que las cantidades pequeñas de vecinos son con las que se obtendrían sesgos más bajos, pero también implican tener una alta varianza.
          .tarjeta.BG05.p-4(titulo="Límite de decisión y varianza")
            p.mb-0 Por otro lado, al seleccionar un gran número de vecinos, se logra obtener un límite de decisión más suave, lo que implica una varianza menor, pero el sesgo sería más alto.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img31.svg' alt="")

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img32.svg' alt="")
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.BG05.p-4(titulo="Modelos y valores")
            p.mb-0 La recomendación es elegir números impares para las clases en las que las cantidades sean par y, definitivamente, realizar varios modelos en los que se apliquen diferentes valores para #[em k] e ir determinando con cuál se obtienen mejores resultados.
          .tarjeta.BG05.p-4(titulo="Su debilidad")
            p.mb-0 La debilidad de este algoritmo es su lentitud cuando realiza el proceso de clasificación, debido a que el objetivo principal de este algoritmo no es la búsqueda de un modelo óptimo.
          .tarjeta.BG05.p-4(titulo="Su estrategia")
            p.mb-0 Su estrategia se basa en que cada instancia de los datos que se seleccionaron para la prueba sea comparada con toda la colección de datos destinados para el entrenamiento y los resultados obtenidos dirán cuáles serán los ajustes que se deban tomar.
          .tarjeta.BG05.p-4(titulo="Validación")
            p.mb-0 Ello implica validaciones con distintas #[em k], evaluar si las instancias seleccionadas para el entrenamiento fueron las correctas o validar las métricas de similitud utilizadas.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Regresión logística

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Las herramientas que son utilizadas para la clasificación son fundamentales en el mundo del #[em Machine Learning]. Cerca de un 70 % de los problemas corresponden a clasificación. En esta oportunidad, se abordará el algoritmo de regresión logística, que es muy común y útil cuando se trata de resolver problemas de clasificación binaria, es decir, cuando el resultado es un 0 o un 1.
        .tarjeta.BG08.p-4.mb-5(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img33.svg" alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 Explore el archivo “Algoritmos de regresión” y profundice en las generalidades y aspectos clave de la regresión logística. ¡Adelante!
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Algoritmo_de_regresion.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img34.svg' alt="")

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Árboles de decisión

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Esta es una técnica muy utilizada en el mundo del #[em Machine Learning], la estrategia que sigue este algoritmo consiste en crear un modelo capaz de predecir el valor o clase de una observación, partiendo de una serie de reglas obtenidas de datos históricos. Son muchos los profesionales que utilizan esta técnica para generar estrategias comerciales de negocio, o en el área de la salud, en modelos que ayudan con los diagnósticos médicos.
        p.mb-0  A continuación, se muestra la estructura general básica de un árbol de decisión. Detállela con atención:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img35.svg' alt="")

    .BGIMG05.p-4.mb-5
      .row.justify-content-center
        .col-lg-6(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img36.svg', alt='Figura que muestra un árbol de decisión con sus respectivas ramificaciones, enlazadas por: nodo principal, nodos raíz, nodos intermedios y nodos terminales.')

            .tarjeta.BG01.p-3(x="42.2%" y="15%" numero="+")
              .h5.mb-2 Inicialización
              p.mb-0 El árbol se inicializa con un nodo principal, llamado nodo raíz; en este nodo, se empieza tomando las decisiones teniendo en cuenta los atributos de los datos.
            .tarjeta.BG01.p-3(x="62.5%" y="48%" numero="+")
              .h5.mb-2 Decisiones y nuevos atributos
              p.mb-0 Dichos nodos raíz se separan en nodos intermedios, en los cuales se continúa realizando la toma de decisiones a partir de nuevos atributos.
            .tarjeta.BG01.p-3(x="21.5%" y="75%" numero="+")
              .h5.mb-2 Ramas y resultados
              p.mb-0 Los nodos intermedios se interconectan con las ramas, en las que se indican cuáles fueron los resultados tomados.
            .tarjeta.BG01.p-3(x="77.5%" y="89%" numero="+")
              .h5.mb-2 Nodos terminales
              p.mb-0 Finalmente, se encuentran los nodos terminales, donde se muestra el resultado obtenido, luego de seguir una ruta que conllevó una serie de decisiones.

    p.mb-5(data-aos="fade-right") Sobre el árbol de decisión, tenga presente los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.BG05.p-4(titulo="Uso")
            p.mb-0 El árbol de decisión puede ser utilizado en la predicción de cualquier tipo de dato, ya sea categórico o numérico.
          .tarjeta.BG05.p-4(titulo="Otras denominaciones")
            p.mb-0 A los árboles de decisión también se les conoce como árboles de clasificación y árboles de regresión.
          .tarjeta.BG05.p-4(titulo="Método de construcción")
            p.mb-0 La construcción de los árboles de decisión se basa en un método heurístico denominado partición recursiva.
          .tarjeta.BG05.p-4(titulo="Finalidad")
            p.mb-0 El objetivo es que, a medida que el árbol vaya tomando decisiones, se armen grupos, cada vez más consistentes, en los que predomine un valor o clase.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img37.svg' alt="")

    p(data-aos="fade-right") Para entender mejor el funcionamiento de este algoritmo, se presenta un ejemplo en el que una entidad bancaria quiere realizar un modelo para tomar decisiones sobre a cuáles clientes se les aprueban préstamos o no.
    p.mb-5(data-aos="fade-right") Analice atentamente la gráfica que se muestra enseguida:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span Ejemplo árboles de decisión
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img38.svg' alt="Gráfica de un árbol de decisión con los elementos del ejemplo propuesto: la entidad bancaria realiza modelo de decisiones para aprobar, o no, préstamos a sus clientes.")

    p.mb-5(data-aos="fade-right") ¿Cuándo terminar las ramificaciones? A continuación, se dan algunas opciones muy prácticas y de acertado uso:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img39.png' alt="")
      .col-lg-9(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-acento-botones.h-100.p-4
              .h4.text-center Opción 1
              p.mb-0 En cada rama, se terminaría el proceso en la medida en que las variables dejen de generar grupos uniformes.
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-acento-botones.h-100.p-4
              .h4.text-center Opción 2
              p.mb-0 Cuando al separar por una variable en la iteración #[em n], no se genera un grupo más uniforme que el que se tiene en la iteración #[em n-1].
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-acento-botones.h-100.p-4
              .h4.text-center Opción 3
              p.mb-0 Si este paso no terminara el proceso, este se acabaría cuando se acaben las comparaciones con todas las variables.
          .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4
            .tarjeta--boton.color-acento-botones.h-100.p-4
              .h4.text-center Opción 4
              p.mb-0 También, como alternativa, se podría definir que el árbol llegue a un límite que esté previamente parametrizado por el usuario.
          .col-lg-4.col-sm-6.col-10
            .tarjeta--boton.color-acento-botones.h-100.p-4
              .h4.text-center Opción 5
              p.mb-0 Normalmente, se establece un máximo para la profundidad del árbol, o también por un número específico de muestras en los nodos internos.

    p.mb-5(data-aos="fade-right") Es muy importante que se limite el crecimiento del árbol, ya que se haría tan complejo que puede llevar a lo que se conoce como:

    .row.justify-content-center.mb-5
      .col-xxl-4.col-xl-5.col-lg-6.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG02.h-100.px-4.py-5
          .h5.text-center.text-white.mb-3 Sobreajuste (#[em overfitting])
          p.text-white.mb-0 Que básicamente se refiere a que se lograrían muy buenos resultados con los datos de entrenamiento, pero predicciones deficientes para nuevas observaciones.
      .col-xxl-4.col-xl-5.col-lg-6.col-sm-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG03.h-100.px-4.py-5
          .h5.text-center.text-white.mb-3 Pruning (poda del árbol)
          p.text-white.mb-0 Consiste en realizar una revisión a los datos y descartar nodos que no aportan información. Realmente, este proceso es importante para la precisión de las predicciones, pues permite un equilibrio en lo simple de las decisiones que deba tomar el árbol.

    p.mb-5(data-aos="fade-right") Para conocer las ventajas y las desventajas de la técnica de árbol de decisión, revise el esquema que, a continuación, se muestra:

    .BGIMG05.p-4.mb-5
      .row.justify-content-center
        .col-lg-6(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img40.svg', alt='Esquema que expone y describe algunas ventajas y desventajas del uso de un árbol de decisión.')

            .tarjeta.BG01.p-3(x="8%" y="4.5%" numero="+")
              .h5.mb-2 Fácil de entender
              p.mb-0 No son necesarios mayores conocimientos estadísticos para poder entender o interpretar las salidas que generan los árboles de decisión.
            .tarjeta.BG01.p-3(x="3%" y="19.5%" numero="+")
              .h5.mb-2 Exploración de datos
              p.mb-0 Es una de las técnicas con las que se pueden identificar, rápidamente, las variables más importantes y la relación entre ellas; es posible la creación de nuevas características con las que se pueda predecir mucho mejor la variable objetivo.
            .tarjeta.BG01.p-3(x="8%" y="35%" numero="+")
              .h5.mb-2 Limpieza de datos
              p.mb-0 El algoritmo de decisión, comparado con otras técnicas de modelado, es menos exigente en lo que tiene que ver con la limpieza de los datos; es importante recordar que este es uno de los pasos en ciencia de datos que mayor tiempo consume.
            .tarjeta.BG01.p-3(x="15%" y="50%" numero="+")
              .h5.mb-2 Tipo de datos
              p.mb-0 Se puede trabajar con todo tipo de variables, ya sean numéricas o categóricas.
            .tarjeta.BG01.p-3(x="12%" y="65.5%" numero="+")
              .h5.mb-2 No paramétrico
              p.mb-0 Este algoritmo se considera no paramétrico, lo que quiere decir que no se tienen suposiciones sobre la distribución del espacio y la estructura del clasificador.
            .tarjeta.BG01.p-3(x="97%" y="14%" numero="+")
              .h5.mb-2 Sobreajuste
              p.mb-0 Es uno de los problemas que se presentan en este algoritmo, para solucionarlo, se pueden colocar restricciones en la parametrización del modelo y eliminar ramas en el análisis.
            .tarjeta.BG01.p-3(x="97%" y="28%" numero="+")
              .h5.mb-2 Dispersión
              p.mb-0 Las técnicas basadas en árboles no fueron pensadas para funcionar con características que estén dispersas, se tendrían que reprocesar estas características en el caso de que las variables sean categóricas y de gran dimensión, usando estadísticas numéricas, o se podría utilizar un modelo que sea lineal, que para estos casos sería el más indicado.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Bosques aleatorios

    p.mb-5(data-aos="fade-right") Los algoritmos de bosques aleatorios, hacen parte del aprendizaje supervisado. Esta técnica se basa en los algoritmos de árboles de decisión y es mucho más fácil y flexible de usar. Se puede implementar en la solución a problemas tanto de clasificación como de regresión.

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 4.
          span Ejemplo Dataset bosques aleatorios
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img41.svg' alt="Imagen que muestra un ejemplo de bosques aleatorios, mediante tres árboles de decisión, con sus respectivas ramificaciones, especificando cuáles se determinaron por mayoría o por promedio, llegando a un resultado final.")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        p(data-aos="fade-right") La estrategia de los bosques aleatorios se basa en la combinación de una gran cantidad de árboles de decisión, en la que se realiza un entrenamiento de cada uno de esos árboles de decisión para obtener una muestra diferente de las observaciones.
        p(data-aos="fade-right") Los siguientes, son algunos aspectos importantes sobre los bosques aleatorios, que se deben tener en cuenta:
        .tarjeta.BG05.p-4
          ul.lista-ul--color.ms-4
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle(style="color: #8054F8;")
              span Para obtener las predicciones de un algoritmo de bosque aleatorio, se toman todos los resultados de los árboles de decisión y se promedian las predicciones individuales de cada uno de ellos.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle(style="color: #8054F8;")
              span Una de las principales desventajas de los árboles de decisión es el sobreajuste (#[em overfit]), con los datos, mediante el cual se realiza el entrenamiento.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle(style="color: #8054F8;")
              span El bosque aleatorio resulta siendo de gran ayuda, pues permite la disminución de ese problema, ya que promedia cada resultado obtenido por la predicción de cada árbol.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle(style="color: #8054F8;")
              span Esta técnica ofrece una mejor precisión en la predicción que cuando se trabaja con un solo árbol de decisión.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle(style="color: #8054F8;")
              span También este algoritmo puede ayudar a buscar características que sean importantes en la colección de datos, a través del algoritmo de Boruta.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img42.svg' alt="")

    p.mb-5 Esta técnica se ha utilizado en múltiples aplicaciones, de las cuales se pueden destacar las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.px-4.py-5
          p.mb-0 Cuando vemos diversos productos al visitar una página de comercio electrónico.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.BGIMG02.h-100.px-4.py-5
          p.text-white.mb-0 En el área de la salud, se puede implementar para la identificación de las enfermedades de pacientes, tomando como base el análisis del historial médico.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG03.h-100.px-4.py-5
          p.text-white.mb-0 En las entidades financieras, puede ser utilizada para determinar con facilidad si un cliente es fraudulento o legítimo.

    p.mb-5(data-aos="fade-right") Para implementar este tipo de algoritmo, se deben contemplar algunos pasos, como los que se muestran a continuación:

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-acento-botones.h-100.p-4
          .h4.text-center Opción 1
          p.mb-0 En cada rama, se terminaría el proceso en la medida en que las variables dejen de generar grupos uniformes.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta--boton.color-acento-botones.h-100.p-4
          .h4.text-center Opción 2
          p.mb-0 Con cada muestra que selecciona el algoritmo, se crea un árbol de decisión, para luego obtener el resultado de la predicción de cada uno.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta--boton.color-acento-botones.h-100.p-4
          .h4.text-center Opción 3
          p.mb-0 Con cada uno de los resultados previstos, se procede a realizar una votación; en caso de ser un problema de clasificación, se tomará la moda; y para los casos de regresión, se usa la media.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-acento-botones.h-100.p-4
          .h4.text-center Opción 4
          p.mb-0 Para finalizar, el algoritmo de bosques aleatorios escogerá el resultado de las predicciones que más votos acumulen como la predicción final.

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 #[em Naive Bayes]

    p.mb-5(data-aos="fade-right") Este algoritmo se basa en el teorema de Bayes, también conocido como el teorema de la probabilidad condicionada, es un clasificador muy útil y ampliamente usado, por su sencilla implementación y rapidez. Consiste en una técnica para clasificación y predicciones supervisadas, mediante la cual se diseña un modelo para predecir la probabilidad de los posibles resultados.

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span Algoritmo de Bayes
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img43.svg' alt="Imagen que presenta el algoritmo de Bayes donde la Probabilidad a posteriori es igual a Probabilidad a priori por Probabilidad condicional sobre Probabilidad total.")

    p.mb-5(data-aos="fade-right") Para entender mejor el funcionamiento de esta técnica, preste atención al siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BfgKd2sDWto?si=7I2kXuMS2LL1tauS" title="Funcionamiento de Naive Bayes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Funcionamiento de #[em Naive Bayes]

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Otros algoritmos

    p.mb-5(data-aos="fade-right") Otros algoritmos de clasificación que se pueden encontrar son los siguientes:

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-end.w-100.pe-4(data-aos="fade-right")
        h3.t-ac.zindex-2.ps-3.mb-1 Máquina de vectores de soporte
        img.zindex-1(src='@/assets/curso/temas/img01.svg' style="position: absolute; left: 100px; max-width: 295px;")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Los SVM, por sus siglas en inglés, generan una muy alta precisión comparándolos con otros algoritmos de clasificación, como lo pueden ser los árboles de decisión o el de regresión logística; su estrategia se basa en su Kernel, que permite manejar espacios de entradas que son no lineales; este algoritmo es utilizado en una gran cantidad de aplicaciones, como, por ejemplo, la detección de intrusos, clasificar el correo electrónico, páginas web, artículos de noticias, la detección de rostros, entre otros.
        p.mb-0 Este algoritmo separa las diferentes clases, gracias a que construye un hiperplano en un espacio multidimensional óptimo e iterativo que es utilizado para minimizar los errores; el objetivo principal de los SVM es buscar el hiperplano marginal que mejor separe la colección de los datos en clases.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img44.png' alt="")

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img45.svg' alt="")
      .col-lg-7(data-aos="fade-left")
        p Estos son algunos conceptos clave, relacionados con la máquina de vectores de soporte:
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04")
          div(titulo="Vector de soporte")
            p.text-white.mb-0 Se define como los puntos que están más cerca del hiperplano; estos puntos ayudan a definir mucho mejor la línea que los separa mediante el cálculo de los márgenes; estos puntos toman mayor relevancia cuando se realiza la construcción del clasificador.
          div(titulo="Hiperplano")
            p.text-white.mb-0 Es una frontera de decisión que se encarga de separar un conjunto de ejemplos que tienen una asociación a la clase diferente.
          div(titulo="Margen")
            p.text-white.mb-0 Es un espacio entre las dos líneas en los puntos más cercanos de la clase. Se calcula como la distancia perpendicular desde la línea hasta los vectores de soporte o puntos más cercanos. Si el margen es mayor entre las clases, entonces se considera un buen margen; un margen menor es un mal margen.

    p.mb-5(data-aos="fade-right") La siguiente tabla, muestra algunas ventajas y desventajas del uso de la máquina de vectores de soporte:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Ventajas y desventajas de máquina de vectores de soporte
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8; font-size: 18px;") Ventajas
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8; font-size: 18px;") Desventajas
            tbody
              tr(data-aos="fade-right")
                td(style="border: 1px solid #8054F8") Buena precisión.
                td(style="border: 1px solid #8054F8") No se recomienda para grandes colecciones de datos.
              tr(data-aos="fade-right")
                td(style="border: 1px solid #8054F8") Predicciones rápidas con relación al algoritmo de #[em Naive Bayes].
                td(style="border: 1px solid #8054F8") Es sensible con el tipo de núcleo que se utilice.
              tr(data-aos="fade-right")
                td(style="border: 1px solid #8054F8") Utiliza menos recursos computacionales.
                td(style="border: 1px solid #8054F8") Con clases que están superpuestas, funciona mal.
              tr(data-aos="fade-right")
                td(style="border: 1px solid #8054F8") Con un buen margen de separación y espacio dimensional elevado, funcionan mucho mejor.
                td(style="border: 1px solid #8054F8")

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-end.w-100.pe-4(data-aos="fade-right")
        h3.t-ac.zindex-2.ps-3.mb-1 Métodos combinatorios
        img.zindex-1(src='@/assets/curso/temas/img01.svg' style="position: absolute; left: 100px; max-width: 295px;")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") También se conocen como métodos de conjunto; sus estrategias se basan en una combinación de múltiples algoritmos de aprendizaje con el objetivo de buscar un mejor rendimiento predictivo, que los algoritmos utilizados solos.
        .tarjeta.BG09.p-4(data-aos="fade-right")
          p.mb-0 El uso de esta técnica aumenta los recursos computacionales, ya que estos supuestos se analizan simultáneamente y una manera de mitigar estos costos computacionales es usar algoritmos rápidos, como los árboles de decisión.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img46.svg' alt="")

    p.mb-5(data-aos="fade-right") Los siguientes, son los métodos combinatorios más comunes:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img47.svg' alt="")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04")
          div(titulo="Agregación <em>Bootstrap</em>")
            p.text-white La idea es simple, si se tienen muchas muestras de entrenamiento, se puede usar cada una de ellas para entrenar un modelo, que luego se usará para hacer predicciones. De esta forma, se tendrán tantas predicciones como modelos y, por tanto, muestras de entrenamiento. El proceso de promediar todas las predicciones tiene dos ventajas importantes: simplifica la solución y reduce en gran medida la varianza.
            .row.align-items-center
              .col-lg-6.order-lg-1.order-2
                ul.lista-ul--color.text-white.ms-4
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    span El conjunto de datos de entrenamiento se vuelve a muestrear repetidamente.
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    span Entrene un modelo con cada conjunto de datos.
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    span Las predicciones se obtienen promediando las predicciones del modelo (decisión mayoritaria en el caso de clasificación).
              .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img48.svg' alt="")
          div(titulo="<em>Boosting</em>")
            p.text-white Es un método general de aprendizaje lento, en el que muchos modelos obtenidos por un método con poco poder predictivo se combinan y potencian para producir un mejor predictor. Los árboles de decisión pequeños (construidos con poca profundidad) son excelentes para esta tarea, son predictores muy pobres (aprendices débiles), son fáciles de componer y generar muy rápidamente.
            ul.lista-ul--color.text-white.ms-4
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #8054F8 !important;")
                span Los árboles se cultivan secuencialmente, se trata de mejorar las clasificaciones anteriores.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #8054F8 !important;")
                span A diferencia de los bosques aleatorios y de embolsado, puede haber problemas de sobreajuste (si la cantidad de árboles es grande y la tasa de aprendizaje es alta).
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #8054F8 !important;")
                span Las observaciones pueden considerarse ponderadas iterativamente, asignando más peso a aquellas que son más difíciles de clasificar.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #8054F8 !important;")
                span El modelo final es un modelo aditivo (promedio ponderado de árboles).
          div(titulo="Subespacios aleatorios")
            p.text-white.mb-0 En este método, cada modelo se entrena con todos los ejemplos, pero solo considera un #[b.BGP01 subconjunto de los atributos.] El tamaño de estos subconjuntos es el parámetro del método, y de nuevo, el resultado es el promedio o votación de los resultados individuales de los modelos.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo:
          '<span style="background-color: #D8DCFC; padding: 2px">Distancia euclidiana</span>',
        texto:
          ' Es una de las técnicas más básicas, pero muy utilizada en los proyectos de <em>Machine Learning</em>. En principio, está pensada solo para usarla con variables numéricas. En caso de requerirse para trabajar con valores categóricos, se debe, antes, utilizar un mecanismo de conversión a números.',
        imagen: require('@/assets/curso/tema1/img28.svg'),
      },
      {
        titulo:
          '<span style="background-color: #D8DCFC; padding: 2px">Distancia Manhattan</span>',
        texto:
          'También denominada distancia de taxi. En el siguiente gráfico, se puede apreciar que la línea verde no es el camino más cercano de un punto a otro. Ello, porque el recorrido bordea otro punto, antes del punto de llegada.',
        imagen: require('@/assets/curso/tema1/img29.svg'),
      },
      {
        titulo:
          '<span style="background-color: #D8DCFC; padding: 2px">Distancia Minkowski</span>',
        texto:
          'Es una métrica en un espacio vectorial normalizado. Es considerada como una generalización de la distancia euclidiana y la distancia de taxi.',
        imagen: require('@/assets/curso/tema1/img30.svg'),
      },
    ],
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
