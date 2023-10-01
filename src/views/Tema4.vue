<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimientos y técnicas de retrabajo

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema04/t4-i1.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-4
            p.mb-0 Con el diagnóstico de una tarjeta electrónica realizado de manera correcta e identificado el fallo o los posibles fallos presentes en el dispositivo, es momento de realizar todos los procedimientos para dar comienzo a la reparación. 

    p.mb-5 Los procedimientos y técnicas de retrabajo tienen unas características especiales; a continuación, se enuncian algunas de ellas:

    .slyderB_bg_02.tarjeta.tarjeta--gris.p-5.mb-5(data-aos='zoom-in')
      PasosB.color-acento-botones
        .row.p-5(titulo='')
          .col-lg-8
            h3 Retrabajo
            p El retrabajo, en una tarjeta electrónica, es el proceso por medio del cual un profesional del área de mantenimiento debe desmontar, desoldar o reconstruir las imperfecciones encontradas mediante las pruebas de diagnóstico y volver a montar o soldar aquellos elementos o piezas que se encontraban en malas condiciones.

          .col-lg-4
            figure
              img(src='@/assets/template/tema04/t4-i7.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Herramientas
            p Dado que todos los procesos que se realizan implican, en la gran mayoría de las ocasiones, el uso de la herramienta cautín, se deben seguir las mismas recomendaciones que se tuvieron a la hora del montaje y ensamble de los componentes electrónicos; esto con el fin de preservar la integridad de la placa en todo momento.
          .col-lg-4
            figure
              img(src='@/assets/template/tema04/t4-i8.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Normas y reglas
            p Para evitar los daños térmicos, es importante seguir todas las normas y reglas técnicas al momento de realizar el diseño y montaje de placas electrónicas

          .col-lg-4
            figure
              img(src='@/assets/template/tema04/t4-i9.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Uso de componentes
            p En la actualidad gracias al uso de componentes SMD, BGA o micro BGA, resulta muy complicado cumplir con el objetivo mencionado anteriormente. Sin embargo, es aquí donde entran en juego las normas y técnicas de retrabajo que buscan mantener o corregir las imperfecciones de las tarjetas electrónicas.


          .col-lg-4
            figure
              img(src='@/assets/template/tema04/t4-i10.svg')
    
              

    h4 Imperfecciones físicas

    p Con los procesos de diseño, fabricación y ensamble de equipos electrónicos, cada una de las tarjetas electrónicas es propensa o sensible a diferentes factores físicos que pueden causar imperfecciones en la estructura de la misma o a la de los componentes electrónicos.
    p.mb-5 A continuación, se presentan algunos de los elementos que deben ser revisados en lo que se refiere a las imperfecciones físicas:


    .col-md-12.mb-5
      ImagenInfografica.color-transparent(data-aos='zoom-in')
        template(v-slot:imagen)
          figure
            img(src='@/assets/template/tema04/t4-i11.svg')

        .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='9.2%', y='85.5%', numero='')
          p Un profesional debe ser capaz de identificar cada una de estas imperfecciones con el fin de poder decidir cuál es el mejor procedimiento para realizar y las herramientas a implementar en cada uno de ellos.

        .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='30%', y='85.5%', numero='')
          p En las etapas de diseño y ensamble de una tarjeta electrónica es inevitable que este tipo de dispositivos se expongan a cambios bruscos de temperatura que puedan provocar que algunas piezas puedan levantarse o romperse, adicionalmente, puede ocasionar que algunos componentes o elementos puedan resultar dañados. 

        .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='50%', y='85.5%', numero='')
          p Es por este motivo que es necesario seguir las recomendaciones de cada uno de los fabricantes de componentes electrónicos de acuerdo con las condiciones que se deben asegurar para cuidar el componente a la hora de montarlo sobre la PCB.

        .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='70.2%', y='85.5%', numero='')
          p Las diferentes empresas generalmente deben almacenar las tarjetas electrónicas dada la gran cantidad a las cuales se les debe inspeccionar antes de ser usadas, provocando de esta manera la generación de hongos o artefactos producidos por la humedad, situación que produce corrosión, cortocircuitos y defectos en los diferentes componentes.

        .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='90.2%', y='85.5%', numero='')
          p Se debe almacenar cada uno de los dispositivos en lugares ventilados y con bajas corrientes de humedad para evitar la producción de estas imperfecciones físicas.     


    h4 Cambio de componentes

    .row.my-5
      .col-lg-2 
        img(src='@/assets/template/tema04/t4-i3.svg' alt='AvatarTop')(data-aos='zoom-in')
      .col-lg-10
        p A la hora de realizar procesos de retrabajo a una tarjeta electrónica, casi siempre estamos hablando de cambiar algún tipo de componente electrónico de la misma. Este tipo de intervención resulta crítico en el dispositivo dado que es necesario exponer a cambios de temperatura el aparato electrónico; tanto para el retiro del componente como para la instalación del nuevo elemento. 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-derecha.mb-5
            .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/template/tema04/t4-i2.svg')})`}"
              )
              .bloque-texto-g__texto.p-4.w-75
                p.mb-0 Esta exposición puede no solo afectar la integridad de los componentes que se encuentran en buenas condiciones sino también a la estructura de la tarjeta; dado lo anterior, el experto encargado del procedimiento debe ser capaz no solo de identificar qué tipo de elemento va a sustituir sino también la ubicación, el tipo de herramienta a utilizar y los insumos necesarios para el correcto montaje. A la hora de reconocer el componente a reemplazar el técnico de mantenimiento debe reconocer si un elemento es SMD, THT o una combinación de los anteriores.

        .cajon.color-acento-botones.p-4
            p.mb-0 Adicionalmente el profesional, tiene la responsabilidad de tener a la mano la documentación hecha en el proceso de diseño y ensamble; de ahí la importancia de la sección&nbsp;
              i genéricos y especializados&nbsp;
              | que se desarrolla en este componente y la documentación suministrada por el fabricante para no averiar el elemento a instalar. Es necesario aplicar todas las recomendaciones realizadas en el montaje inicial para mantener la integridad de la tarjeta, (¿Cómo encontrar defectos en un PCB?, s. f.) 

     
    h4 Cambio de pistas y soldaduras     

    .row.my-5
      .col-lg-7
        .row
          .col-lg-12
            p Para poder usar las tarjetas electrónicas, dentro de una empresa sin tener inconvenientes relacionados al mal diseño, montaje o reparación de las mismas, es necesario que cada uno de los integrantes del área de mantenimiento siga las recomendaciones técnicas mínimas que se establecen para una correcta aplicación de soldadura en cada uno de los elementos usados en el proceso de montaje o retrabajo.
            p A continuación, se presentan algunos de los criterios que establecen las condiciones físicas mínimas en las cuales debe oscilar una adecuada aplicación de soldadura, como el grosor, la cantidad de desplazamiento sobre los ejes de la tarjeta, longitud y altura. Cada uno de estos parámetros varía en función del tipo de elemento y proceso; de ahí, la importancia de identificar la clase de elemento que se va a instalar: 
      .col-lg-5
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema04/t4-i4.svg')   
          
    .row.mb-5
      .col-lg-8.order-2.order-lg-1
        TabsC.color-secundario.mb-5 
          .tarjeta.clr-paleYellow.p-4(titulo='Cambios de temperatura')
            p Los cambios de temperatura pueden llegar a ocasionar grandes daños dentro de una tarjeta electrónica siendo uno de los más comunes el levantamiento o corte de una pista, al ser este elemento el responsable de comunicar o servir de vía para la corriente eléctrica. Es crucial, resolver este problema antes de proceder con otra actividad dado que, si no se resuelve, la tarjeta será obsoleta y gastaremos tiempo en reparaciones innecesarias.
          .tarjeta.clr-paleYellow.p-4(titulo='Modificación de la tarjeta')
            p Aunque no es recomendable que un profesional modifique o vulnere la integridad de una tarjeta para poder conectar una pista rota, en ocasiones, dados los altos costos o la desaparición del fabricante, un técnico de mantenimiento debe enfrentarse a este tipo de imprevistos. 

          .tarjeta.clr-paleYellow.p-4(titulo='Experticia')
            p Pese a que el procedimiento no es complicado y que la solución es conectar dos extremos completos con un cable o alambre, muchas veces por la estructura de la tarjeta (composición de varias capas) o por el tamaño de la pista se requiere de experticia por parte del profesional para no acrecentar la falla.
          .tarjeta.clr-paleYellow.p-4(titulo='Solución')
            p Independientemente del tipo de solución que se aplique, para resolver este tipo de avería, se recomienda aplicar a la solución brindada por el técnico, un revestimiento de conformación para evitar cortocircuitos y cuidar la integridad del dispositivo de las condiciones ambientales del entorno.

      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos='zoom-in')
        figure
          img.m-auto(
            src='@/assets/template/tema04/t4-i5.svg',
            alt='alt',
            style='width: 450px'
          )                        

    .row.justify-content-center.align-items-center 
      .col-lg-3
        img.img-a.img-t(src='@/assets/template/tema04/t4-i6.svg') 
      .col-lg-5
        p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
   

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
