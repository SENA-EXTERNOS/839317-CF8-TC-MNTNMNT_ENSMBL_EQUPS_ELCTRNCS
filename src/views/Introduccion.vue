<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Apreciado aprendiz, bienvenido a este componente formativo, con una temática orientada hacia la reparación de tarjetas electrónicas. Se aprenderá sobre los elementos genéricos y especializados, documentos de procesos, procedimientos técnicos y normativos, entre otros. Finalmente, podrá identificar los procedimientos y técnicas de retrabajo.

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:        
      .col-lg-4
        figure(data-aos='zoom-in')
          img(
            src='@/assets/template/introduccion/t-i1.svg',
          )      

    .col-12
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/AHZKXnbOys8',
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
