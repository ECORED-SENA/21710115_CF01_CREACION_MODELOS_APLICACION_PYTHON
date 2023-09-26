<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Crear el modelo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Después de la exploración y el preprocesamiento, se continúa con la construcción del modelo, como se puede ver la variable con la que aprenderá el modelo se basa en texto que ya se ha divido en palabras y que se debe empezar a cuantificar para poder pasar la información para que el modelo lo pueda entender. 
        p.mb-0 Como se ha venido desarrollando todas las unidades se realizará una serie de pasos que permitan en este caso la construcción de un modelo, para conocerlos revise con atención el recurso propuesto: 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img01.png' alt="Imagen decorativa")

    .BGM05.p-md-5.p-4.mb-5
      .BG03.p-4
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              .h5.t-ac Paso 1 Separación de datos
              p Se deben separar los datos en los datos entrenamiento y las clases de la siguiente manera, el dataframe mensaje corresponde a las instancias y atributos, mientras que las etiquetas a las clases.
              .row.px-4.mb-5
                .col-auto
                  .BG12.p-4
                    p.t-aw.mb-0 mensaje = pd.#[span.t-ab DataFrame]&#40;df&#91;#[span.t-an 'mensaje']&#93;&#41;
                    p.text-white.mb-2 etiquetas = pd.#[span.t-ab DataFrame]&#40;df&#91;#[span.t-an 'salida']&#93;&#41;
                    p.t-aw.mb-0 #[span.t-ac print](mensaje.#[span.t-ab head]())
                    p.t-aw.mb-0 #[span.t-ac print](etiquetas.#[span.t-ab head]())
              p.mb-0 El resultado es un dataframe independiente en el que se dividen los datos de aprendizaje de las clases, como se observa en la imagen.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure.mb-4
                img(src='@/assets/curso/tema6/img02.jpg' alt="Captura de pantalla en la que se muestra el resultado de un dataframe independiente.")
              p.mb-0 Separación de los datos
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              .h5.t-ac Paso 2 Conversión de palabras a vectores
              p Lo que se quiere con este procedimiento es realizar el recuento de los tokens o palabras que se obtienen de los mensajes de correo electrónico, el objetivo es crear una matriz que realice un recuento por cada una de las palabras y las construya como un atributo. Para obtener este resultado debe ejecutar los siguientes comandos.
              .row.px-4.mb-5
                .col-auto
                  .BG12.p-4
                    p.t-aw.mb-0 #[span.t-ac from] sklearn.feature_extraction.text import TfidfVectorizer
                    p.t-aw.mb-0 vectorizer = TfidfVectorizer() vector = vectorizer.fit_transform(df['mensaje']) vector.shape
              p.mb-0 El resultado que se obtiene lo puede observa en la imagen.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema6/img03.jpg' alt="Captura de pantalla en la que se muestra la conversión de palabras a vectores.")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              .h5.t-ac Paso 3 Objetivo encontrado
              p.mb-0 Ya se ha logrado cuantificar cada una de las palabras del texto de tal manera que estos serán los datos con los que entrenaremos el modelo. Lo que resta es almacenar esta variable a una que servirá para el siguiente paso del entrenamiento, para el ejemplo la denominaremos instancias.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema6/img04.jpg' alt="Imagen decorativa")

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Entrenamiento
    
    p.mb-5(data-aos="fade-right") Se puede decir que se tiene la base para empezar a realizar el entrenamiento de los datos, toda vez que ya se sabe cuáles son los datos de entrada y las clases, y ambas se encuentran en valores numéricos tal como se requiere. En el siguiente recurso se dan a conocer algunas recomendaciones importantes para realizar el entrenamiento:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-4.col-sm-6.col-8.col-10.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema6/img05.svg' alt="Imagen decorativa")
          .h5 Selección de datos
          p.mb-0 Seleccionar los datos de manera aleatoria. No se deben escoger datos que sean continuos o de manera organizada.
      .col-xl-3.col-md-4.col-sm-6.col-8.col-10.mb-4(data-aos="flip-right")
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema6/img06.svg' alt="Imagen decorativa")
          .h5 Separar los datos
          p.mb-0 Reserve una muestra que por lo general equivalen al veinte por ciento de los datos, los cuales debe asegurarse que no se utilizaron en el aprendizaje.
      .col-xl-3.col-md-4.col-sm-6.col-8.col-10.mb-4(data-aos="flip-left")
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema6/img07.svg' alt="Imagen decorativa")
          .h5 Entrenar los datos
          p.mb-0 Seleccione el ochenta por ciento de los datos para realizar el entrenamiento de los datos.
      .col-xl-3.col-md-4.col-sm-6.col-8.col-10.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema6/img08.svg' alt="Imagen decorativa")
          .h5 Selección de algoritmo
          p.mb-0 De acuerdo con el requerimiento seleccione el algoritmo o algoritmos de clasificaciones que mejor le vayan dependiendo al tipo de problema a resolver.

    p.mb-5(data-aos="fade-right") Para realizar el entrenamiento seguir cada uno de los siguientes pasos:

    .row.justify-content-center.mb-5
      .col-lg-10.BG05.px-0.py-4
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 1
        p.mx-4.mb-5(data-aos="fade-right") Cmo primer paso se procede a realizar a seleccionar los datos de entrenamiento y de prueba, para ellos haga usos de los siguientes comandos.
        .row.px-4.mb-5
          .col-auto
            .BG12.p-4
              p.t-aw.mb-0 from sklearn.model_selection import GridSearchCV,train_test_split,StratifiedKFold,cross_val_score,learning_curve
              p.t-aw.mb-0 X_train, X_test, y_train, y_test = train_test_split(instancias, df['salida'], test_size=0.2, random_state=131)
        p.mx-4(data-aos="fade-right") #[b ·X_train:] corresponde a los datos de entrenamiento.
        p.mx-4(data-aos="fade-right") #[b ·X_test:] Aquí se guardan los datos que son separados para realizar las pruebas.
        p.mx-4(data-aos="fade-right") #[b ·y_train:] etiquetas de salida correspondientes a las instancias de entrenamiento.
        p.mx-4(data-aos="fade-right") #[b ·y_test:] etiquetas de salida que corresponde a las instancias seleccionadas de entrenamiento.
        p.mx-4(data-aos="fade-right") #[b ·instancias:] datos preparados para el entrenamiento.
        p.mx-4(data-aos="fade-right") #[b ·df&#91;'salida'&#93;:] etiquetas o clases de salida de la clasificación de las instancias.
        p.mx-4(data-aos="fade-right") #[b ·test_size:] valor entre 0 y 1 que indica cual es el porcentaje de datos de prueba que será separados, para nuestro ejemplo serán del 20 por ciento es decir 0.2.
        p.mx-4.mb-5(data-aos="fade-right") #[b ·random_state:] este parámetro se utiliza para realizar la mezcla de los datos aleatoriamente tal como se recomienda anteriormente, el número corresponde al número de llamados de la función y la mezcla se realiza antes de la división de los datos.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 2
        p.mx-4(data-aos="fade-right") Lo que sigue es la selección del algoritmo de clasificación, en este caso se utilizará el de Naive Bayes, y Regresión Logística.
        p.mx-4(data-aos="fade-right") Se importan las librerías necesarias para poder implementarlas.
        .row.px-4.mb-5
          .col-auto
            .BG12.p-4
              p.t-aw.mb-0 from sklearn.naive_bayes import MultinomialNB
              p.t-aw.mb-0 from sklearn.linear_model import LogisticRegression
        p.mx-4(data-aos="fade-right") Para utilizar el algoritmo de Naive Bayes, se le asigna la configuración a la variable NB,
        p.mx-4(data-aos="fade-right") #[b.BGP12 NB = MultinomialNB(alpha=0.5)]
        p.mx-4(data-aos="fade-right") Tener en cuenta el siguiente parámetro.
        p.mx-4(data-aos="fade-right") #[b.BGP12 alpha=] parámetro de suavizado de Laplace si se omite por defecto asignaría 1, para nuestro caso se establecerá en 0.5
        p.mx-4(data-aos="fade-right") Para el algoritmo de regresión logística se utilizará esta configuración, que se almacenará en la variable RL.
        p.mx-4(data-aos="fade-right") #[b.BGP12 RL = LogisticRegression(solver='liblinear', penalty='l1')]
        p.mx-4(data-aos="fade-right") #[b Solver:] algoritmo para utilizar en el problema de optimización. El valor predeterminado es 'lbfgs'. Para elegir un solucionador, es posible que se desee considerar los siguientes aspectos:
        p.mx-4(data-aos="fade-right") ·Para conjuntos de datos pequeños, 'liblinear' es una buena opción, mientras que 'sag' y 'saga' son más rápidos para conjuntos grandes;
        p.mx-4(data-aos="fade-right") ·Para problemas multiclase, solo 'newton-cg', 'sag', 'saga' y 'lbfgs' manejan la pérdida multinomial;
        p.mx-4.mb-5(data-aos="fade-right") ·'liblinear' se limita a esquemas de uno contra el resto.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 3
        p.mx-4(data-aos="fade-right") Se utilizan los siguientes comandos para realizar el entrenamiento con el algoritmo de Naive Bayes usar los siguientes comandos.
        p.mx-4(data-aos="fade-right") #[b.BGP12 NB.fit(X_train,y_train)]
        p.mx-4(data-aos="fade-right") Para realizar el entrenamiento con el algoritmo de Regresión Logística, de igual manera use el mismo comando, pero con su respectiva configuración almacenada en la variable RL
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12 RL.fit(X_train,y_train)]

    p.mb-5(data-aos="fade-right") Todos estos pasos se ven unificados de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3
              img.w-75(src='@/assets/curso/tema6/img09.svg' alt="Imagen decorativa")
            .col-lg.col-9
              p.text-white.mb-2 Importación de las librerías:
              p.text-white.mb-2 from sklearn.naive_bayes import MultinomialNB
              p.t-aw.mb-0 from sklearn.linear_model import LogisticRegression
        .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3
              img.w-75(src='@/assets/curso/tema6/img10.svg' alt="Imagen decorativa")
            .col-lg.col-9
              p.text-white.mb-2 Configuración de los parámetros de los algoritmos de clasificación:
              p.text-white.mb-2 NB = MultinomialNB(alpha=0.2)
              p.t-aw.mb-0 RL = LogisticRegression(solver='liblinear', penalty='l1')
        .tarjeta.color-acento-contenido.p-4(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3
              img.w-75(src='@/assets/curso/tema6/img11.svg' alt="Imagen decorativa")
            .col-lg.col-9
              p.text-white.mb-2 Entrenamiento:
              p.text-white.mb-2 NB.fit(X_train,y_train)
              p.t-aw.mb-0 RL.fit(X_train,y_train)
    
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Evaluación
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6/img12.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p En esta etapa del proceso se debe realizar la evaluación de los modelos. Una vez entrenados se debe probar qué tan eficientes han sido dichos modelos, es importante recordar que en principio se separó un conjunto de datos correspondientes al veinte por ciento, y son estos los que ayudarán a probar el modelo y ver qué tan eficiente es.
        p.mb-0 Para el proceso de evaluación se debe seguir algunos pasos para conocerlos, revise con atención el siguiente recurso educativo:

    .row.justify-content-center.mb-4
      .col-lg-10.BG05.px-0.py-4
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 1
        p.mx-4(data-aos="fade-right") Se deben importar las librerías necesarias para realizar las métricas.
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12 from sklearn import metrics]

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 2
        p.mx-4(data-aos="fade-right") Realizar la predicción de los datos con el modelo entrenado, primero con Naive Bayes y posteriormente con regresión logística, recordemos que los modelos son NB y RL respectivamente; para realizar la predicción, utilice los datos de prueba y ejecute el siguiente comando.
        p.mx-4(data-aos="fade-right") #[b.BGP12 y_pred_NB = NB.predict(X_test)]
        p.mx-4(data-aos="fade-right") Los resultados se almacenan en y_pred_NB, y para el modelo de regresión logística realice el mismo procedimiento, pero almacenando en una variable diferente.
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12 y_pred_RL = RL.predict(X_test)]
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 3
        p.mx-4(data-aos="fade-right") Las salidas de la predicción del modelo entrenado se deben comparar con las salidas correctas para ese conjunto de datos, y de esta manera saber el porcentaje de aciertos para cada uno de los modelos. La comparativa se realiza implementando las siguientes líneas de código.
        p.mx-4(data-aos="fade-right") Para el modelo de Naive Bayes, utilice el siguiente comando:
        p.mx-4(data-aos="fade-right") #[b.BGP12 metrics.accuracy_score(y_test, y_pred_NB)]
        p.mx-4.mb-5(data-aos="fade-right") Y el resultado que se obtiene se aprecia en la siguiente imagen.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/img13.jpg' alt="Porcentaje de aciertos para el modelo utilizando Naive Bayes")
        
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 4
        p.mx-4.mb-5(data-aos="fade-right") De igual manera se debe comparar en el modelo de regresión logística, cuál es resultado obtenido, ejecutando el mismo comando así:
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/img14.jpg' alt="Captura de pantalla en el que muestra el mdelo de regresión logística.")
        p.mx-4.mb-5(data-aos="fade-right") Como se indicó en las recomendaciones, se dejaron los datos para las pruebas y efectivamente sirvieron para validar la efectividad del modelo, el resultado arrojado es del 98 % donde se utilizó el algoritmo de clasificación Naive Bayes, mientras que con el modelo donde se implementó regresión logística se obtuvo un porcentaje de acierto del 95 %.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Predicciones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Con los modelos evaluados se procede a realizar las predicciones, esta vez con entradas completamente nuevas. Con el aprendizaje realizado el modelo debería estar en la capacidad de clasificar los datos en correos electrónicos normales o maliciosos. 
        p Es importante aclarar que los nuevos datos que le pasen al modelo deben estar relacionados con la temática bajo la cual este modelo fue entrenado, ósea con mensajes de correos electrónicos.
        p Para realizar las predicciones se tomará el modelo con mayor efectividad que arrojó la evaluación, que sería el que se entrenó con el algoritmo de clasificación #[em Naive] Bayes con un porcentaje del 98 por ciento.
        p.mb-0 Se establecerán múltiples entradas y para este fin se deben seguir los pasos expuestos en el recurso educativo:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img15.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-10.BG05.px-0.py-4
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 1
        p.mx-4(data-aos="fade-right") Definir las entradas.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0  Entrada1=['free mobile now']
              p.t-aw.mb-0  Entrada2=['Sorry Mr James']
              p.t-aw.mb-0  Entrada3=['I need your help']
              p.t-aw.mb-0  Entrada4=['call me text']

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 2
        p.mx-4(data-aos="fade-right") Crear una función para realizar las predicciones, de la siguiente manera
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0  def clasificar(resultado):
              p.t-aw.mb-0  &nbsp;&nbsp;&nbsp;&nbsp;if resultado == 1:
              p.t-aw.mb-0  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print ("Este es un Mensaje Malicioso")
              p.t-aw.mb-0  &nbsp;&nbsp;&nbsp;&nbsp;else: print ("Es un Mensaje Normal")
        p.mx-4.mb-5(data-aos="fade-right") La función espera por un resultado en caso de ser 1 lo clasifica como mensaje malicioso de lo contrario como mensaje normal.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 3
        p.mx-4(data-aos="fade-right") Vectorizar las entradas nuevas, así:
        p.mx-4(data-aos="fade-right") #[b.BGP12 salida=vectorizer.transform(Entrada1)]
        p.mx-4.mb-5(data-aos="fade-right") Se deben transformar los datos y dejarlos de igual manera de cómo se entrenaron.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 4
        p.mx-4(data-aos="fade-right") Predecir y mostrar el resultado Realizar la predicción con la salida de los datos vectorizados y evaluar el resultado con la función de clasificación. resultado = NB.predict(salida) #[span.t-ac print]('Mensaje: ',Entrada1) clasificar(resultado) El resultado para la primera entrada se aprecia en la imagen.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/img16.jpg' alt="Captura de pantalla en la que se evidencia la predicción de entradas.")

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 5
        .h5.mx-4(data-aos="fade-right") Predecir más entradas.
        p.mx-4(data-aos="fade-right") Realizar más pruebas para verificar la efectividad del modelo, las demás entradas de nuestro ejemplo dan como resultado la información de la imagen.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/img17.jpg' alt="Captura de pantalla en la que se evidencia la predicción de entradas.")

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 6
        p.mx-4(data-aos="fade-right") Finalmente, el código completo del proceso de predicción es el siguiente.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 Entrada1=['free mobile now']
              p.t-aw.mb-0 Entrada2=['Sorry Mr James']
              p.t-aw.mb-0 Entrada3=['I need your help']
              p.text-white.mb-2 Entrada4=['call me text']
              p.t-aw.mb-0 def clasificar(resultado):
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;if resultado == 1:
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print ("Este es un Mensaje Malicioso")
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;else:
              p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print ("Es un Mensaje Normal")
              p.t-aw.mb-0 salida=vectorizer.transform(Entrada1)
              p.t-aw.mb-0 resultado = NB.predict(salida)
              p.t-aw.mb-0 #[span.t-ac print]('Mensaje 1: ',Entrada1)
              p.text-white.mb-2 clasificar(resultado)
              p.t-aw.mb-0 salida=vectorizer.transform(Entrada2)
              p.t-aw.mb-0 resultado = NB.predict(salida)
              p.t-aw.mb-0 #[span.t-ac print]('Mensaje 2: ',Entrada2)
              p.text-white.mb-2 clasificar(resultado)
              p.t-aw.mb-0 salida=vectorizer.transform(Entrada3)
              p.t-aw.mb-0 resultado = NB.predict(salida)
              p.t-aw.mb-0 #[span.t-ac print]('Mensaje 3: ',Entrada3)
              p.text-white.mb-2 clasificar(resultado)
              p.t-aw.mb-0 salida=vectorizer.transform(Entrada4)
              p.t-aw.mb-0 resultado = NB.predict(salida)
              p.t-aw.mb-0 #[span.t-ac print]('Mensaje 4: ',Entrada4)

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Evaluar el modelo y análisis de errores
    
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6/img18.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p Finalmente, para analizar el modelo en cuanto al número de errores que se pueden presentar, ya sea porque se realiza la clasificación de correos electrónicos maliciosos como normales, o viceversa, se utilizará la técnica denominada matriz de confusión.
        p.mb-0 Para implementar dicha técnica se deben seguir los pasos expuestos en el recurso propuesto:

    .row.justify-content-center.mb-4
      .col-lg-10.BG05.px-0.py-4
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 1. Importar las librerías
        p.mx-4(data-aos="fade-right") Para realizar la implementación usaremos la librería que nos ayuda con el proceso, que es la primera, y la segunda librería que nos permitirá las visualizaciones gráficas.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 from sklearn.metrics import confusion_matrix
              p.t-aw.mb-0 #[span.t-ac import] seaborn #[span.t-ac as] sns
          
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 2. Realizar la predicción con las pruebas
        p.mx-4(data-aos="fade-right") Procedemos nuevamente a realizar las predicciones con nuestro conjunto de datos de prueba, ya que son los indicados para generar un análisis que permita determinar qué tantos errores se presentan en nuestro modelo.
        p.mx-4(data-aos="fade-right") Para realizar este procedimiento utilice las siguientes líneas de código que le permitirán calcular las predicciones con el modelo y también asignar las predicciones correctas.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 y_pred_NB = NB.predict(X_test)
              p.t-aw.mb-0 y_correctas_NB = y_test
        p.mx-4.mb-5(data-aos="fade-right") Como se aprecia, la primera línea corresponde a las predicciones con el modelo entrenado usando el algoritmo Naive Bayes, pasándole como entradas los datos de prueba que fueron separados, y la segunda línea simplemente le reasignamos a una nueva variable los valores de salida correcto de los datos de prueba.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 3. Analizar los errores
        p.mx-4(data-aos="fade-right") Con los datos de las salidas de las predicciones y las salidas correctas se aplica el método de matriz de confusión, de la siguiente manera.
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12 MC = confusion_matrix(y_correctas_NB, y_pred_NB)]

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 4. Graficar resultados
        p.mx-4(data-aos="fade-right") Implemente las salidas de manera gráfica para entender mucho mejor los datos resultantes; para ello, utilice los siguientes comandos.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 f, ax = plt.subplots(figsize =(5,5))
              p.t-aw.mb-0 sns.heatmap(MC,annot = True,linewidths=0.5,linecolor="blue",fmt = ".0f",ax=ax)
              p.t-aw.mb-0 plt.xlabel("y_pred_NB")
              p.t-aw.mb-0 plt.ylabel("y_correctas_NB")
              p.t-aw.mb-0 plt.show()

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 5. Analizar gráfico
        p.mx-4(data-aos="fade-right") El resultado que arroja la técnica de matriz de confusión se puede observar en la siguiente gráfica, en la cual existe un equilibrio ya que la veces en las que predijo correos normales como maliciosos es de 10 y en las que predijo correos maliciosos como maliciosos como normales fue de 8.
        .row.justify-content-center.mb-5
          .col-lg-4.col-8.px-lg-0.px-4
            figure.mb-4(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/img19.png' alt="Imagen decorativa")
            p.mb-0 Matriz de confusión


</template>

<script>
export default {
  name: 'Tema6',
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
