<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procedimientos técnicos y normativos

    .row.mb-5
      .col-lg-7
        .row
          .col-lg-12
            p Una vez se ha entendido la importancia que tienen los datos dentro de una organización y más aún dentro del área de mantenimiento, es hora de dar inicio a la etapa de diagnóstico en la reparación de tarjetas electrónicas. Esta etapa, busca que los profesionales responsables de realizar todas las intervenciones en el área de mantenimiento puedan conocer los temas relacionados con las pruebas de diagnóstico. Este tipo de procesos pretenden reducir costos dentro de una organización y contribuir en la reducción de la huella ambiental producida por el desperdicio electrónico resultante de cada una de las intervenciones.
          .col-lg-12
            .cajon.color-acento-botones.p-4
              p.mb-0 No obstante, cabe resaltar que, en ocasiones, durante el diagnóstico de equipos o tarjetas electrónicas, surgen diversos problemas que dificultan o impiden la reparación de un aparato electrónico; entre muchas razones se tienen la desaparición de fabricantes, poco personal especializado, falta de herramientas y la poca documentación del equipo. Por lo anterior, es muy importante establecer procesos adecuados que busquen aumentar la capacidad del equipo encargado de los mantenimientos y solventar todos los imprevistos surgidos en una empresa reduciendo, en gran medida, el número de tarjetas electrónicas que no se puedan reparar.
      .col-lg-5
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i1.svg') 

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Diagnóstico

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos='zoom-in')
        .bloque-derecha
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i4.svg")})` }'
            )
            .bloque-texto-g__texto.p-4.w-75
              p.mb-0 En la sección uno de este componente formativo, se presentaron algunos de los conceptos asociados al diagnóstico: firmas de voltaje, corriente y oscilogramas, los cuales permiten realizar pruebas que resultan útiles en el diagnóstico temprano y así evitar que un profesional tenga que evaluar&nbsp;
                i pin&nbsp;
                | por&nbsp;
                i pin&nbsp;
                | o elemento por elemento.

    p.mb-5 A continuación, se presentan algunos de los elementos y pruebas más comunes usadas para el diagnóstico de tarjetas electrónicas.

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-acento-contenido-c3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema03/t3-i5.svg',
                  alt='Texto que describa la imagen'
                )

          p.text-small.text-center En la mayoría de las ocasiones, las tarjetas electrónicas suelen estar compuestas por cientos de componentes dificultando la localización del problema específico de un aparato electrónico.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-acento-contenido-c3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema03/t3-i6.svg',
                  alt='Texto que describa la imagen'
                )

          p.text-small.text-center Resulta muy cómodo, por medio de las firmas digitales de voltaje y corriente, encontrar que secciones de una tarjeta no están funcionando de manera correcta.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-acento-contenido-c3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema03/t3-i7.svg',
                  alt='Texto que describa la imagen'
                )

          p.text-small.text-center Inyectar pequeñas señales sobre los bloques funcionales a examinar y al verificar si su respuesta es la adecuada, se podrá sectorizar la zona que se debe reparar o corregir.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-acento-contenido-c3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema03/t3-i8.svg',
                  alt='Texto que describa la imagen'
                )

          p.text-small.text-center Una de las estrategias, que también es muy conocida dentro del diagnóstico de las tarjetas electrónicas, es la inspección visual. Este tipo de proceso ayuda a los profesionales a identificar qué tipo de sectores del dispositivo se encuentran con afectaciones claras como quemaduras, pistas con defectos, componentes mal ubicados, humedades, etc.

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Comparación y contraste

    .row.mb-5
      .col-lg-7
        .row
          .col-lg-12
            p Dado que los datos por sí solos cobran sentido únicamente cuando existe la posibilidad de interpretar o comparar resultados con registros previos o historiales de medidas, es necesario empezar a hablar sobre la comprensión, contraste y análisis de los datos suministrados por las pruebas de diagnóstico. En las inspecciones mencionadas, resulta muy útil tener registros de pasadas pruebas realizadas a los equipos examinados o de equipos cuya composición interna sea la misma.
          .col-lg-12
            .cajon.color-acento-botones.p-4
              p.mb-0 Las comparaciones anteriores ayudan a los profesionales a identificar si un bloque funcional de un aparato electrónico se encuentra en los rangos o medidas adecuadas para su funcionamiento; dando como resultado la comprobación o verificación de las hipótesis planteadas en los diagramas de causa y efecto, el incremento en la comprensión del funcionamiento general de los componentes de una tarjeta electrónica. De esta manera, tener nociones claras sobre las posibles soluciones.
      .col-lg-5
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i2.svg') 

    .row.mb-5
      .col-lg-2 
        img(src='@/assets/template/tema03/t3-i3.svg', alt='AvatarTop')
      .col-lg-10
        p Pese a que las comparaciones de los datos resultan de gran ayuda en la interpretación de los resultados, no siempre se pueden hacer debido a diversos factores; entre ellos, la falta de equipos similares o la adquisición de un único dispositivo. Dado lo anterior, es muy importante conocer qué tipo de pruebas existen con el fin de poder realizar una correcta interpretación de los datos obtenidos y proceder de la mejor manera.

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Tipos de prueba

    .row.flex.justify-content-center.mb-5
      .col-lg-10
        .row 
          .col-lg-10.p-5.caja-03
            .row 
              .col-lg-9
                p.mb-0 En muchas ocasiones, debido a la disponibilidad de equipos similares o por falta de documentación, es necesario realizar pruebas específicas que ayuden a los profesionales a diagnosticar, de la mejor manera, las tarjetas electrónicas en busca de imperfecciones o averías.
              .col-lg-3.d-none.d-lg-block
                figure.pa-caja-03
                  img(src='@/assets/template/tema03/t3-i9.svg') 

    p.mb-5 A continuación, se presentan algunos tipos de prueba que ayudan al diagnóstico de las tarjetas electrónicas:

    .row.d-flex.justify-content-center.mb-5
      .col-md-8
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
              img(
                src='@/assets/template/tema03/t3-i10.svg',
                alt='Texto que describa la imagen'
              )

          div(x='21%', y='47%', tooltip='Inspección visual', numero='1')
            h5 Inspección visual
            p Pese a que ya se mencionó en este documento la importancia que tiene la inspección visual dentro del diagnóstico de tarjetas electrónicas, cabe resaltar que, al ser un método dependiente de la experticia del profesional encargado de la revisión, es muy común que se lleven a cabo en todas las fases del diseño, ensamble y revisión de tarjetas electrónicas. En muchas ocasiones, dada la cantidad de dispositivos electrónicos a diagnosticar o verificar en el área de mantenimiento, suele ser común encontrar herramientas cuyo objetivo es realizar las inspecciones visuales de cada una de las tarjetas electrónicas mediante la comparación de fotografías sacadas en diferentes ángulos del dispositivo y un&nbsp;
              i Goal standard&nbsp;
              | (tarjeta con la calidad deseada), con el objetivo de agilizar los procesos y reducir el tiempo de inactividad de un equipo, aumentando la productividad de una empresa.
          div(
            x='54.4%',
            y='57%',
            tooltip='Pruebas de pista y soldadura',
            numero='2'
          )
            h5 Pruebas de pista y soldadura
            p De los principales fallos que se producen, después del diseño y ensamble de tarjetas electrónicas, se encuentran los asociados a las pistas y soldaduras.; Estos dos elementos, de la tarjeta electrónica, son los responsables de permitir el paso y circulación de la corriente eléctrica, en un circuito, y se identifican con la ayuda de un multímetro configurado para medir continuidad. Con este tipo de pruebas, se puede verificar si un tramo del circuito se encuentra desconectado (circuito abierto) o si se encuentra en cortocircuito. Pese a que en la gran mayoría de mediciones este tipo de procedimientos es suficiente para la localización del problema, en ocasiones, dada su composición y estructura, resulta difícil realizar este tipo de pruebas sin comprometer la integridad de los demás componentes del dispositivo. En respuesta a este problema, se suele implementar el uso de herramientas que se apoyan en imágenes de rayos x para la visualización de las pistas de manera óptima sin realizar procesos invasivos; lo que reduce, en gran medida, los daños producidos a la hora de verificar el estado de cada pista y soldadura.

          div(x='37.5%', y='80%', tooltip='Pruebas en circuito', numero='3')
            h5 Pruebas en circuito
            p Anteriormente, se mencionó que en algunos casos la mejor opción para poder localizar la falla en un equipo electrónico era la de comparar la respuesta de cada bloque funcional de una tarjeta electrónica averiada con una completamente funcional; no obstante, esto no suele ser fácil de conseguir debido a diversos factores. Las pruebas en circuito o ICT por sus siglas en inglés (In circuit test), tienen como objetivo revisar cada uno de los componentes presentes en una tarjeta electrónica mediante la excitación y medición de las diferentes variables eléctricas asociadas a un equipo. Revisar componente formativo número 2 sección 3.1 “Variables eléctricas y electrónicas”, en busca de elementos que se encuentren en malas condiciones para ser identificados y reemplazados antes de probar la funcionalidad de una tarjeta. Ya que este proceso revisa todos los componentes de un aparato electrónico resulta tedioso y en ocasiones confuso. Es por este motivo que se recomienda tomar nota, de acuerdo a lo visto en la sección 2 de este documento y en el plano esquemático usado en el diseño de la tarjeta o el suministrado por el fabricante, para evitar redundancia en las mediciones u omitir elementos. Finalmente, una vez se han detectado todos los componentes que no se encuentran en las condiciones óptimas es necesario empezar con el reemplazo de cada uno de los elementos que están fallando (INGUN, s. f.).

          div(x='71.5%', y='23.5%', tooltip='Test funcional', numero='4')
            h5 Test funcional
            p En la gran mayoría de los pasos anteriores no se garantiza la localización de todas las posibles fallas de una tarjeta electrónica; es por esta razón por la cual se realiza el test de funcionamiento. Este tipo de proceso busca emular las condiciones en las cual se va a desempeñar la tarjeta y observar los resultados obtenidos por la misma; de esta manera, el experto encargado puede verificar qué etapas se encuentran en condición de falla o avería. Posteriormente, se conecta el dispositivo a una fuente de alimentación lo que puede causar averías mucho más graves de las que se tienen si algún componente, pista o soldadura se encuentra en cortocircuito o en malas condiciones. Dada la importancia de este tipo de prueba resulta de suma importancia ejecutarse una vez realizadas todas las pruebas anteriores. En muchas organizaciones o fábricas este tipo de pruebas son realizadas de forma manual, semiautomática o automática de acuerdo al nivel de intervención humana del proceso (INGUN, s. f.).
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
