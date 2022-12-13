<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-8
        p Apreciado aprendiz, sea bienvenido a este recurso educativo que está orientado a la reparación de tarjetas electrónicas. Con el desarrollo de este componente formativo, aprenderá sobre los elementos genéricos y especializados, documentos de procesos, procedimientos técnicos y normativos, entre otros. Finalmente, podrá identificar los procedimiento y técnicas de retrabajo.
        p En el siguiente video conocerá, de manera general, los saberes que se desarrollan a lo largo de este ciclo formativo.
        p.color-primario Le deseamos una grata experiencia de aprendizaje.
      .col-lg-4
        figure(data-aos='zoom-in')
          img(
            src='@/assets/template/introduccion/t-i1.svg',
          )      

    .col-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/2L91WMqw96A',
            title='YouTube video player',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          )         
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
