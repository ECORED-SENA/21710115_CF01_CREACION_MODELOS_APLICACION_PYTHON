<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Métricas de evaluación

    p(data-aos="fade-right") Las métricas de evaluación sirven para medir el rendimiento de un modelo entrenado; lo que se busca es mejorar el poder predictivo del modelo, antes de enviarlo a producción.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png' alt="")
      .col-lg-8
        p(data-aos="fade-left") Al no realizar las métricas de evaluación, se corre el riesgo de obtener malas predicciones, lo cual se debe a que el modelo no aprende; en estos casos, solo memoriza. Por lo tanto, no puede generalizar a causa de datos no vistos anteriormente.
        p(data-aos="fade-left") Una de las métricas de evaluación más usada es la #[b.BGP01 Matriz de confusión.] Se trata de una representación de los resultados de las predicciones; estos resultados son representados en forma de matriz, son obtenidos a través de las pruebas binarias que se utilizan para descubrir el rendimiento del modelo de clasificación y comparados con un conjunto de datos de prueba, de los cuales ya se conocen los valores reales.
        p(data-aos="fade-left") La matriz de confusión se representa de la siguiente manera:
        .row.justify-content-center.mb-5
          .col-lg-11
            .titulo-sexto.color-acento-contenido(data-aos="fade-left")
              h5 Figura 6.
              span Representación matriz de confusión
            .tabla-a.color-acento-contenido
              table(data-aos="zoom-in"  alt="Texto alternativo tabla")
                tbody(style="border-color: transparent")
                  tr(data-aos="fade-right")
                    th(style="background-color: #F7F4FF; border: 1px solid #8054F8; font-size: 18px;" colspan="4") Resultado de la predicción
                  tr(data-aos="fade-right")
                    td(style="width: 20%;border: 1px solid #8054F8" rowspan="3") Valor actual
                    td(style="width: 20%;border: 1px solid #8054F8")
                    td(style="width: 30%;border: 1px solid #8054F8") Positivo
                    td(style="width: 30%;border: 1px solid #8054F8") Negativo
                  tr(data-aos="fade-right")
                    td(style="width: 20%;border: 1px solid #8054F8") Positivo
                    td(style="width: 30%;border: 1px solid #8054F8") TN<br>Verdadero Negativo
                    td(style="width: 30%;border: 1px solid #8054F8") FN<br>Falso Negativo
                  tr(data-aos="fade-right")
                    td(style="width: 20%;border: 1px solid #8054F8") Negativo
                    td(style="width: 30%;border: 1px solid #8054F8") FP<br>Falso Positivo
                    td(style="width: 30%;border: 1px solid #8054F8") TP<br>Verdadero Positivo

    p.mb-5(data-aos="fade-right") Como se muestra en la anterior figura, las predicciones pueden ser uno de 4 resultados posibles; se basa en si coincide, o no, con el valor real:

    .BGM10.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .BGP06.p-4
            .row.justify-content-center
              .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img02.svg' alt="")
              .col-lg-9(data-aos="fade-left")
                ul.lista-ul--color.ms-4.mb-0
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    p.mb-0 #[b.BGP05 Verdadero Positivo:] valor predicho es verdadero y el valor es verdadero en realidad.
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    p.mb-0 #[b.BGP05 Verdadero Negativo:] valor predicho es falso y el valor es falso en la realidad.
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    p.mb-0 #[b.BGP05 Falso Positivo:] valor predicho es verdadero y el valor es falso en la realidad.
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #8054F8 !important;")
                    p.mb-0 #[b.BGP05 Falso Negativo:] valor predicho es falso y el valor es verdadero en la realidad.

      p.mb-5(data-aos="fade-right") Para aceptar o rechazar una hipótesis, se debe tener en cuenta: si esta es nula y falsa, debe ser descartada; y si es nula y verdadera, debe ser aceptada.

      .mb-5.d-flex
        .d-flex.flex-wrap.align-items-end.w-100.pe-4(data-aos="fade-right")
          h3.t-ac.zindex-2.ps-3.mb-1 Tipos de errores
          img.zindex-1(src='@/assets/curso/temas/img01.svg' style="position: absolute; left: 100px; max-width: 295px;")

      p.mb-5(data-aos="fade-right") Existen dos tipos de errores que pueden ocurrir, se les conoce como errores de #[b.BGP01 TIPO I] y errores de #[b.BGP01 TIPO II.]

      .row.justify-content-center.mb-5
        .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta.BGIMG01.h-100.px-4.py-5
            .h4 Error de TIPO I
            p.mb-0 Este error equivale a los falsos positivos (FP), es el rechazo de una hipótesis nula, pero esta es verdadera.
        .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-left")
          .tarjeta.BGIMG02.h-100.px-4.py-5
            .h4.text-white Error de TIPO II
            p.text-white.mb-0 Este error equivale a los falsos negativos (FN), consiste en aceptar una hipótesis falsa nula.

    p.mb-5(data-aos="fade-right") Conozca cómo se pueden evaluar este tipo de errores:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG04")
          div(titulo="Exactitud")
            p.text-white Esta métrica es usada cuando las clases son aproximadamente iguales en tamaño; se encarga de medir el porcentaje de casos en que el modelo ha acertado:
            p.text-white.mb-0 Exactitud = (TP + TN) / (TP + TN + FP + TP)
          div(titulo="Precisión")
            p.text-white Esta métrica es usada para medir la calidad del modelo en tareas de clasificación. Se usa la siguiente fórmula:
            p.text-white Precisión = TP / (TP + FP)
          div(titulo="Exhaustividad")
            p.text-white Esta métrica es usada para mostrar la cantidad de verdaderos positivos que el modelo es capaz de identificar. Se usa la siguiente fórmula para calcular la exhaustividad:
            p.text-white Exhaustividad = TP / (TP + FN)
          div(titulo="Puntuación F1")
            p.text-white Esta métrica combina la precisión y exhaustividad en un solo valor, comprendido entre 0 y 1, donde la mejor puntuación es 1 y la peor es 0. Esta métrica se calcula utilizando la fórmula de la media armónica entre la precisión y la exhaustividad:
            p.text-white F1 = 2 *((precisión * exhaustividad) / (precisión + exhaustividad))
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img03.png' alt="")

    p.mb-5(data-aos="fade-right") Otra forma de desarrollar el proceso de evaluación es por medio del Análisis ROC (#[em Receiver Operating Characteristic]), que se define como característica operativa del receptor; es una forma útil de evaluar la precisión de las predicciones de modelo al trazar la sensibilidad frente a la especificidad de una prueba de clasificación (ya que el umbral varía en todo un rango de resultados de pruebas de diagnóstico).

    .BGM11.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img04.svg' alt="")
        .col-lg-9
          p(data-aos="fade-left") El área completa bajo una curva ROC determinada, o AUC, formula una estadística importante que representa la probabilidad de que la predicción esté en el orden correcto cuando se observa una variable de prueba (para un sujeto seleccionado aleatoriamente del grupo de casos, y el otro seleccionado aleatoriamente del grupo de control).
          p(data-aos="fade-left") El Análisis ROC admite la inferencia en relación con una sola AUC, curvas de precisión/exhaustividad (PR), y proporciona opciones para comparar dos curvas ROC que se generan de grupos independientes o sujetos emparejados.
          .tarjeta.color-acento-contenido.p-4(data-aos="fade-left")
            p.text-white.mb-0 Las curvas PR representan la precisión frente a la exhaustividad, tienden a ser más informativas cuando las muestras de datos observados son muy asimétricas, y proporcionan una alternativa a las curvas ROC para datos con una alta asimetría en la distribución de clase.

      p.mb-5(data-aos="fade-right") Preste atención al siguiente ejemplo de aplicación del método ROC:

      .BGM02.p-md-5.p-4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            .tarjeta.BG03.p-4
              SlyderA(tipo="b")
                div
                  p.mt-4 #[b.BGP01 Conjunto de archivos ]
                  p.mb-0 Un banco tiene interés en clasificar a sus clientes dependiendo de si se retrasarán o no en el pago de sus préstamos; por tanto, se desarrollan modelos especiales para tomar estas decisiones. Se puede utilizar el Análisis ROC para evaluar y valorar la precisión de las predicciones del modelo.
                div
                  p.mt-4 #[b.BGP01 Estadísticos]
                  p.mb-0 AUC, grupo negativo, valores perdidos, clasificación positiva, valor de corte, grado de convicción, intervalo de confianza asintótica bilateral, distribución, error estándar, diseño de grupo independiente, diseño de muestra emparejada, supuesto no paramétrico, supuesto de distribución exponencial binegativo, punto medio, punto de corte, curva PR, interpolación por pasos, significación asintótica (bilateral), Sensibilidad y (1 - Especificidad), Precisión y Exhaustividad.
                div
                  p.mt-4 #[b.BGP01 Métodos]
                  p.mb-0 Se comparan las áreas bajo dos curvas ROC que se generan a partir de grupos independientes o sujetos emparejados. Comparar dos curvas ROC puede proporcionar más información en cuanto a la precisión que resulta de dos acercamientos de diagnósticos comparativos.
                div
                  p.mt-4 #[b.BGP01 Datos]
                  p.mb-0 Consideraciones de datos sobre el Análisis ROC. Las curvas PR representan la precisión frente a la exhaustividad y tienden a ser más informativas cuando las muestras de datos observados son muy asimétricas. Una interpolación lineal simple puede producir erróneamente una estimación excesivamente optimista de una curva PR.
                div
                  p.mt-4 #[b.BGP01 Supuestos]
                  p.mb-0 La predicción estará en el orden correcto cuando se observa una variable de prueba para un sujeto seleccionado aleatoriamente del grupo de casos, y el otro seleccionado aleatoriamente del grupo de control. Cada grupo definido contendrá al menos una observación válida. Solo se utiliza una variable de agrupación única para un procedimiento único.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img05.svg' alt="")

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

<style lang="sass"></style>
