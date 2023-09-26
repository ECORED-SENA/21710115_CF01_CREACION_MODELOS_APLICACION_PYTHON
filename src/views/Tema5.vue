<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Preprocesamiento de los datos con Python

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Con el análisis exploratorio de los datos, se va haciendo una idea de cuáles serán las variables objetivas y de cuáles serán los atributos para el aprendizaje; de igual manera, se podrá determinar las correcciones necesarias que se deben realizar a los datos.
        p.mb-0 Se debe recordar que el objetivo es realizar un modelo que permita la detección de mensajes de correo electrónico y los clasifique como mensajes normales o maliciosos. Con esta premisa y el análisis que se ha realizado previamente se procede con los pasos para el preprocesamiento de los datos, tal y como se exponen a continuación.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-end.w-100.pe-4(data-aos="fade-right")
        h3.t-ac.zindex-2.ps-3.mb-1 Preprocesamiento de los datos
        img.zindex-1(src='@/assets/curso/temas/img01.svg' style="position: absolute; left: 100px; max-width: 295px;")

    .row.justify-content-center.mb-4
      .col-lg-10.BG05.px-0.py-4
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 1
        p.mx-4(data-aos="fade-right") Definir los atributos que harán parte del análisis: para este caso, aunque se tienen cuatro columnas el análisis se va a centrar en la columna mensaje como análisis para el entrenamiento y como variable objetivo o resultante será la columna salida.
        p.mx-4(data-aos="fade-right") Lo que quiere decir que solamente se debe dejar en la colección de datos esas dos columnas, para realizar este proceso se debe ejecutar el siguiente comando.
        p.mx-4(data-aos="fade-right") #[b.BGP12 df=df.#[span.t-ab drop](&#91;#[span.t-an 'Unnamed: 0'], #[span.t-an 'fecha'], #[span.t-an 'ciudad']&#93;, axis=1)]
        p.mx-4.mb-5(data-aos="fade-right") Este comando permite eliminar del #[b.BGP12  dataframe] las columnas que no se quieren analizar solamente dejando nuestra variable objetivo y las de análisis. Si se ejecuta el comando #[b.BGP12 df.#[span.t-ab head](),] se debe obtener el resultado de las primeras 5 filas, pero ya solamente de las dos columnas seleccionadas:
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/img02.jpg' alt="Captura de pantalla al eliminar columnas.")
        
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 2
        p.mx-4(data-aos="fade-right") Eliminar valores nulos: en la exploración de los datos se encontró que en la columna mensaje existen registros nulos, de manera que para este caso se procede con la eliminación de estos registros, aunque esta no es la única decisión.
        p.mx-4(data-aos="fade-right") En este caso son pocos registros y tomaremos la decisión de quitarlos de nuestra colección de datos.
        p.mx-4(data-aos="fade-right") Para proceder ejecute las siguientes líneas de comando.
        p.mx-4(data-aos="fade-right") #[b.BGP12  df=df.#[span.t-ab dropna]()]
        p.mx-4.mb-5(data-aos="fade-right") Con este comando se eliminará todas las filas si en cualquiera de sus atributos o columnas encuentra un valor nulo. Recordemos que el total de registros era de 5572 una vez ejecutado el comando el resultado obtenido es el siguiente, con el comando shape, rápidamente se puede ver el total de registros y total de columnas.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/img03.jpg' alt="Captura de pantalla al eliminar columnas.")
        
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 3
        p.mx-4(data-aos="fade-right") Para el ejemplo la variable objetivo es un texto de tipo categórico y es necesario que se realice su transformación para que puedan ser procesados por los algoritmos de clasificación que implementaremos.
        p.mx-4.mb-5(data-aos="fade-right") La variable que se utilizará para realizar el aprendizaje corresponde a los mensajes y para realizar la adecuación de estos es la librería nltk
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 #[span.t-ac import] nltk
              p.t-aw.mb-0 nltk.#[span.t-ab download](#[span.t-ac "punkt"])
              p.t-aw.mb-0 #[span.t-ac import] warnings warnings.#[span.t-ab filterwarnings](#[span.t-an 'ignore'])
              p.t-aw.mb-0 #[span.t-ac from] wordcloud #[span.t-ac import] WordCloud
        p.mx-4(data-aos="fade-right") Como primer análisis de los mensajes se creará una nube de palabras que permitan identificar cuáles de ellas hacen parte de los mensajes normales y cuáles de los mensajes maliciosos.
        p.mx-4.mb-5(data-aos="fade-right") Primero se debe dos variables vacías de la siguiente manera.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 palabrasNormales = '' 
              p.t-aw.mb-0 palabraMaliciosos = ''

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 4
        p.mx-4.mb-5(data-aos="fade-right") Posteriormente se debe recorrer el dataframe en busca de los mensajes que coincidan con las etiquetas Malicioso, de la siguiente manera.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 #[span.t-ac for] mensaje #[span.t-ac in] df&#91;df&#91;#[span.t-an 'salida']&#93; == #[span.t-an 'Malicioso']&#93;.mensaje:
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;texto = mensaje.#[span.t-ab lower]()
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;tokens = nltk.#[span.t-ab word_tokenize](texto)
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;#[span.t-ac for] palabras #[span.t-ac in] tokens:
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;palabrasMalicioso = palabrasMalicioso + palabras + ' '
        p.mx-4(data-aos="fade-right") #[b.BGP12  #[span.t-ac for] mensaje #[span.t-ac in] df&#91;df&#91;#[span.t-an 'salida']&#93; == #[span.t-an 'Malicioso']&#93;.mensaje:] recorre cada elemento en los cuales la etiqueta de la columna salida coincide con Malicioso.
        p.mx-4(data-aos="fade-right") #[b.BGP12  texto = mensaje.#[span.t-ab lower]():] convierte cada una de las coincidencias en minúscula.
        p.mx-4(data-aos="fade-right") #[b.BGP12  tokens = nltk.#[span.t-ab word_tokenize](texto):] separa el mensaje en una lista de todas las palabras que la conforman.
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12  #[span.t-ac for] palabras #[span.t-ac in] tokens:] recorre cada una de las palabras para ser almacenadas en una sola cadena de texto

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 5
        p.mx-4(data-aos="fade-right") El objetivo de implementar dicho código es tomar todos los mensajes que coincidan con la etiqueta de salida malicioso, convertirlas a minúsculas para estandarizar todos los textos, luego separar cada palabra en una sola cadena de texto, que servirá para analizar cuál de las palabras tienen mayor representación.
        p.mx-4.mb-5(data-aos="fade-right") Una vez con todas las palabras en una sola cadena de texto se procede a generar la nube de palabras.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0  cloudMalicioso = #[span.t-ac WordCloud](width=500, height=300,
              p.t-aw.mb-0  background_color=#[span.t-an 'white']).#[span.t-ab generate](palabrasMalicioso)
        p.mx-4(data-aos="fade-right") La variable la denominamos cloudMalicioso y con la librería WordCloud, generarmos la nube de palabras con la variable que previamente ya hemos usado para tal fin denominada palabrasMalicioso.
        p.mx-4.mb-5(data-aos="fade-right") Se procede con la grafica implementando los siguientes códigos.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0  plt.#[span.t-ab figure]( figsize=(10,8))
              p.t-aw.mb-0  plt.#[span.t-ab imshow](cloudMalicioso)
              p.t-aw.mb-0  plt.#[span.t-ab axis](#[span.t-an "off"])
              p.t-aw.mb-0  plt.#[span.t-ab tight_layout](pad=0)
              p.t-aw.mb-0  plt.#[span.t-ab show]()
        p.mx-4.mb-5(data-aos="fade-right") El resultado de ejecutar las siguientes líneas de código será la representación de nube de palabras como se aprecia en la imagen.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/img04.jpg' alt="Captura de pantalla de una representación visual de nubes de palabras, como resultado del código ejecutado.")

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 6
        p.mx-4.mb-5(data-aos="fade-right") Se realiza el mismo procedimiento, pero esta vez detectando los mensajes de los correos que están marcados como Normal, el código quedaría de la siguiente manera.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 #[span for] mensaje #[span.t-ac in] df&#91;df&#91;#[span.t-an 'salida']&#93; == #[span.t-an 'Normal']&#93;.mensaje:
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;texto = mensaje.#[span.t-ab lower]()
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;tokens = nltk.#[span.t-ab word_tokenize](texto)
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;#[span for] palabras #[span.t-ac in] tokens:
              p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;palabrasNormal = palabrasNormal + palabras + ' '
              p.t-aw.mb-0 cloudNormal = #[span.t-ac WordCloud](width=500, height=300,
              p.text-white.mb-2 background_color=#[span.t-an 'white']).#[span.t-ab generate](palabrasNormal)
              p.t-aw.mb-0 plt.#[span.t-ab figure]( figsize=(10,8))
              p.t-aw.mb-0 plt.#[span.t-ab imshow](cloudNormal)
              p.t-aw.mb-0 plt.#[span.t-ab axis](#[span.t-an "off"])
              p.t-aw.mb-0 plt.#[span.t-ab tight_layout](pad=0)
              p.t-aw.mb-0 plt.#[span.t-ab show]()
        p.mx-4.mb-5(data-aos="fade-right") Y la nube de palabras que se obtiene para este caso es la siguiente:
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/img05.jpg' alt="Captura de pantalla de una representación visual de nubes de palabras, como resultado del código ejecutado en este paso.")

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 7
        p.mx-4.mb-5(data-aos="fade-right") Ahora se deben convertir las etiquetas de salida: para que la máquina entienda los datos se procede con las transformaciones de las etiquetas normal y malicioso, la estrategia sería asignarle un número a cada una de estas de la siguiente manera:
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            .tabla-a.color-acento-contenido
              table(data-aos="zoom-in"  alt="Texto alternativo tabla")
                tbody(style="border-color: transparent")
                  tr(data-aos="fade-right")
                    th(style="background-color: #FFF; border: 1px solid #8054F8; font-size: 18px;") Etiqueta
                    th(style="background-color: #FFF;border: 1px solid #8054F8; font-size: 18px;") Valor
                  tr(data-aos="fade-right")
                    td(style="background-color: #FFF; border: 1px solid #8054F8;") Normal
                    td(style="background-color: #FFF;border: 1px solid #8054F8;") 0
                  tr(data-aos="fade-right")
                    td(style="background-color: #FFF; border: 1px solid #8054F8;") Malicioso
                    td(style="background-color: #FFF;border: 1px solid #8054F8;") 1
        p.mx-4.mb-5(data-aos="fade-right") Para realizar la transformación de estos datos ejecute la siguiente línea de comandos.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 df = df.#[span.t-ab replace]([#[span.t-an 'Normal'],#[span.t-an 'Malicioso']],[0, 1])
              p.t-aw.mb-0 df.#[span.t-ab head](10)
        p.mx-4.mb-5(data-aos="fade-right") El resultado se puede observar en la imagen.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/img06.jpg' alt="Captura de pantalla en el que se evidencia la información de acuerdo a la etiqueta.")
        p.mx-4.mb-5(data-aos="fade-right") Como se aprecia en la columna salida ya se visualiza la información correspondiente a 0 para la etiqueta Normal y 1 para la etiqueta.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 8
        p.mx-4.mb-5(data-aos="fade-right") Ahora se debe eliminar la información que no aporta nada para el modelo de tal manera que se procede con la eliminación de los signos de puntuación, y de las palabras vacías, para ello se hace uso de la librería NTKL.
        .row.px-4.mb-5
          .col-auto(data-aos="fade-right")
            .BG12.p-4
              p.t-aw.mb-0 #[span.t-ac import] nltk
              p.t-aw.mb-0 #[span.t-ac from] nltk.corpus #[span.t-ac import] stopwords
              p.text-white.mb-2 #[span.t-ac import] string
              p.text-white.mb-2 def #[span.t-ab eliminarPuntuacion](texto):
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;texto = texto.#[span.t-ac translate](#[span.t-ac str].#[span.t-ac maketrans]('', '', #[span.t-ac string].punctuation))
              p.t-aw.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;texto = word #[span.t-ac for] word #[span.t-ac in] texto.#[span.t-ab split]() if word.#[span.t-ab lower]() not in
              p.text-white.mb-2 stopwords.#[span.t-ab words](#[span.t-an 'english'])
              p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;return " ".#[span.t-ab join](texto)
              p.t-aw.mb-0 df(#[span.t-an 'mensaje']) = df(#[span.t-an 'mensaje']).#[span.t-ab apply](eliminarPuntuacion)
              p.t-aw.mb-0 df
        p.mx-4.mb-5(data-aos="fade-right") El resultado se puede ver comparando los resultados antes y después de la depuración:
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/img07.jpg' alt="Captura de pantalla al hacer uso de la librería NTKL")


</template>

<script>
export default {
  name: 'Tema5',
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
