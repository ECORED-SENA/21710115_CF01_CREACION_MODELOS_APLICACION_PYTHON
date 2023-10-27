<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Aquí finaliza el estudio de los temas de este componente formativo #[b “El algoritmo ideal”]. En este punto, analice el esquema que se muestra a continuación y haga su propia síntesis de los conceptos y aspectos estudiados. #[b ¡Adelante!]

    .row.justify-content-center
      .col-lg-8.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de los contenidos de este componente formativo. Tema principal: Modelos y aplicación de algoritmos de clasificación con Python. Temas integradores: Creación de modelos de machine learning, Selección y procesamiento de datos, Métricas de evaluación.")
    .row.justify-content-center
      .col-auto(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
.banner-interno__titulo__icono i
    color: $color-sistema-texto
</style>
