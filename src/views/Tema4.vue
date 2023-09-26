<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Análisis Exploratorio

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Como se sabe este es uno de los pasos más importantes en los proyectos de ciencia de datos pues ayuda a entender los datos y a establecer si existe algún tipo de problema; desde allí, se determinan acciones para corregirlos o adecuarlos dependiendo de las necesidades identificadas.
        p Para entender mejor lo anteriormente dicho se desarrollará un ejemplo centrado en la creación de un modelo que permita la identificación de correos que pueden llegar a ser maliciosos.
        p Se parte del hecho de que ya se ha realizado la búsqueda de la información y se cuenta con los insumos para empezar a trabajar.
        p.mb-0 En primer lugar, cabe suponer que se cuenta con una colección de datos correspondientes a mensajes de correos electrónicos que han sido catalogados como normales y maliciosos, de manera que se debe empezar con la exploración de los datos para ir entendiéndolos. Este proceso se realiza siguiendo unos pasos específicos, los cuales se presentan en el siguiente recurso:

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-end.w-100.pe-4(data-aos="fade-right")
        h3.t-ac.zindex-2.ps-3.mb-1 Proceso de exploración de datos
        img.zindex-1(src='@/assets/curso/temas/img01.svg' style="position: absolute; left: 100px; max-width: 295px;")

    .row.justify-content-center.mb-4
      .col-lg-10.BG05.px-0.py-4
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 1
        p.mx-4.mb-5(data-aos="fade-right") Entorno configurado: lo primero que se debe hacer es asegurarse de tener el entorno de trabaja configurado, en caso de no ser así, remitirse la primera parte de este componente y realice el proceso.
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 2
        p.mx-4.mb-5(data-aos="fade-right") Abrir la aplicación JupiterLab de Anaconda y crear un nuevo Notebook. Observe la imagen
        
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img02.jpg' alt="Captura de pantalla para la creación de un notebook")
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 3
        .row.justify-content-center.px-4.mb-5
          .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
            p Importar las librerías necesarias para la exploración de los datos, para nuestro ejemplo las librerías a utilizar en esta etapa son Pandas, Numpy, Matplolib. La importación se realiza utilizando los siguientes comandos.
            .row
              .col-auto
                .BG12.p-4
                  p.t-aw.mb-0 #[span.t-ac import] pandas #[span.t-ac as] pd
                  p.t-aw.mb-0 #[span.t-ac import] numpy #[span.t-ac as] np
                  p.t-aw.mb-0 #[span.t-ac import] matplotlib.pyplot #[span.t-ac as] plt
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/tema4/img03.svg' alt="Imagen decorativa")
        
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 4
        p.mx-4(data-aos="fade-right") Se debe realizar la lectura de los archivos para el análisis: para el ejemplo trabajado el archivo en el cual están almacenados los datos es tipo CSV, y el comando necesario para realizar la lectura es la siguiente.
        p.mx-4(data-aos="fade-right") #[b.BGP12 df=pd.#[span.t-ab read_csv]('correosmaliciosos.csv')]
        p.mx-4(data-aos="fade-right") #[b.BGP12 pd:] es el nombre de la librería que identifica a pandas.
        p.mx-4(data-aos="fade-right") #[b.BGP12 read_csv:] función que permite leer datos en formato CSV.
        p.mx-4(data-aos="fade-right") #[b.BGP12 correosmaliciosos.csv:] archivo con los datos en formato CSV y ubicado en la misma carpeta del Notebook, en caso de estar ubicado en una ruta diferente deberá especificar la ruta completa, por ejemplo: 'C:/proyecto/correosmalicisos.csv', lo que indica que su ubicación esta en la carpeta proyecto de la unidad local C:
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12 df=] variable que almacena la información leída del archivo y que de denomina dataframe, lo que significa que se tienen los datos en dos dimensiones determinados por filas y columnas, o instancias y atributos.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 5
        p.mx-4(data-aos="fade-right") Una vez importados los datos, se procede con las primeras visualizaciones; para ello, podemos hacer usos de los siguientes comandos.
        p.mx-4(data-aos="fade-right") #[b.BGP12 df]
        p.mx-4(data-aos="fade-right") Solamente usando la variable o dataframe en el cual se guardaron los datos podemos visualizar los cinco primeros y cinco últimos registros de la colección de datos.
        p.mx-4.mb-5(data-aos="fade-right") Utilice el comando #[b.BGP12 df.#[span.t-ab head](),] para visualizar los primeros 5 registros del conjunto de datos. En caso de requerir visualizar muchos más datos, coloque dentro del comando #[b.BGP12 df.#[span.t-ab head](),] el número de registros que quiera ver, por ejemplo, si necesita visualizar los 10 primeros use el comando de la siguiente manera #[b.BGP12 df.#[span.t-ab head](10).]
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img04.jpg' alt="Visualización de los datos con df")
        p.mx-4.mb-5(data-aos="fade-right") Utilice el comando #[b.BGP12 df.#[span.t-ab head](),] para visualizar los primeros 5 registros del conjunto de datos.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img05.jpg' alt="Comandos para visualizar los primeros cinco registros del total.")
        
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 6
        p.mx-4.mb-5(data-aos="fade-right") Entendiendo cada uno de los datos presentes en la colección de datos, para profundizar más sobre cada uno de los datos el comando que podemos utilizar es el siguiente, #[b.BGP12 df.#[span.t-ab info]().] Con este comando podemos determinar el tipo de dato, la totalidad de datos por cada atributo, de igual manera total genera de registros y columnas y totalizado por cada tipo de dato.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img06.jpg' alt="Captura de pantalla en la que se detallan los datos.")
        p.mx-4.mb-5(data-aos="fade-right") Con el resultado se puede decir que tenemos una totalidad de 5572 registros y 5 columnas o atributos. Una columna de tipo numérica int64 denominada Unnamed: 0, 4 columnas de tipo object, denominadas fecha, salida, ciudad, y mensaje lo que quiere decir que son datos categóricos.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 7
        p.mx-4.mb-5(data-aos="fade-right") #[b Determinar datos nulos:] para realizar una revisión de todas las columnas determinando en cuales existe presencia de valores nulos o vacíos, utilice el comando, #[b.BGP12 df.#[span.t-ab isnull]().#[span.t-ab sum](), la función #[span.t-ab isnull](),] ayuda a determinar cuántos valores son vacíos y con la función  #[b.BGP12 #[span.t-ab sum](),] se realiza la suma de todos los valores nulos por cada columna, el resultado aplicado a nuestros datos es el siguiente.
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img07.jpg' alt="Captura de pantalla para analizar los datos nulos.")
        p.mx-4.mb-5(data-aos="fade-right") El resultado nos muestra que en la columna mensaje hay una presencia de cuatro valores vacíos.

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 8
        p.mx-4.mb-5(data-aos="fade-right") Análisis individual, veamos el contenido de las columnas que hacen parte de la colección de datos, por ejemplo, se realizan agrupaciones para determinar la participación porcentual y se analiza el contenido dentro de la columna salida. Con el siguiente comando se puede establecer los tipos de datos que están presentes en esa columna y cuánto es el total por cada característica. 
        p.mx-4.mb-5(data-aos="fade-right") #[b.BGP12 df&#91;#[span.t-an 'salida']&#93;.#[span.t-ab value_counts]()]
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img08.jpg' alt="Comando que analiza cada característica de la columna salida.")

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 9
        p.mx-4.mb-5(data-aos="fade-right") Análisis gráfico, ahora veamos con el apoyo de los gráficos la participación porcentual de cada uno de valores, ejecutando el siguiente comando.
        .row.px-4.mb-5
          .col-auto
            .BG12.p-4
              p.t-aw.mb-0 #[span.t-ac import] matplotlib.pyplot #[span.t-ac as] pl
              p.t-aw.mb-0 etiquetas = #[span.t-an 'Normal'], #[span.t-an 'Malicioso'] rebanada = (0, 0.1)
              p.t-aw.mb-0 fig1, ax1 = plt.#[span.t-ab subplots]() ax1.#[span.t-ab pie](df[#[span.t-an 'salida']].#[span.t-ab value_counts](), explode=rebanada, labels=etiquetas, autopct=#[span.t-an '%1.1f%%'], shadow=True, startangle=90) ax1.#[span.t-ab axis](#[span.t-an 'equal'])
              p.t-aw.mb-0 plt.#[span.t-ab show]()
        p.mx-4.mb-5(data-aos="fade-right") El resultado que se debe obtener es el siguiente:
        .row.justify-content-center.mb-5
          .col-lg-8.px-lg-0.px-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img09.jpg' alt="Participación porcentual de cada etiqueta de la columna salida.")

        .row.mb-4(data-aos="fade-right")
          .col-auto
            .BGT09.px-4.py-2
              .h5.mb-0 Paso 10
        p.mx-4.mb-5(data-aos="fade-right") Análisis de resultados, se puede decir que con la exploración realizada se encontró la siguiente información:
        .px-4.tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            tbody(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8; font-size: 18px;") Total de registros
                td(style="background-color: #FFF;border: 1px solid #8054F8; font-size: 18px;") 5572
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Columnas
                td(style="background-color: #FFF;border: 1px solid #8054F8;") 5
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Nombre de columnas
                td(style="background-color: #FFF;border: 1px solid #8054F8;") 1. #[em unanemed]: 0
                  p.mb-0 2. fecha
                  p.mb-0 3. salida
                  p.mb-0 4. ciudad
                  p.mb-0 5. mensaje
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Valores nulos
                td(style="background-color: #FFF;border: 1px solid #8054F8;") Columna mensaje con 4 registros
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Tipos de columna
                td(style="background-color: #FFF;border: 1px solid #8054F8;") 1 numérica, 4 categóricas
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Variable objetivo
                td(style="background-color: #FFF;border: 1px solid #8054F8;") Salida
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Variables para el aprendizaje
                td(style="background-color: #FFF;border: 1px solid #8054F8;") fecha, ciudad, mensaje
              tr(data-aos="fade-right")
                th(style="background-color: #F7F4FF; border: 1px solid #8054F8;") Participación porcentual de la variable de salida
                td(style="background-color: #FFF;border: 1px solid #8054F8;") 1. Normal (86.6%)
                  p.mb-0  2. Malicioso(13.4%)
        

</template>

<script>
export default {
  name: 'Tema4',
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
