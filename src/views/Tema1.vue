<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Genéricos y especializados

    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema01/t1-i1.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-4
            p.mb-0 En ocasiones, debido a malos procedimientos de manejo, instalación o diseño, es necesario realizar algún tipo de procedimiento en búsqueda de fallas o averías en las tarjetas electrónicas de los equipos presentes en el área de trabajo. La localización de imprevistos es de suma importancia dada la necesidad de aplicar alguno de los procesos mencionados en el componente formativo&nbsp;
              i Diagnóstico de equipos electrónicos.

    .row.flex.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-11
        .row 
          .col-lg-10.p-4.caja-01
            .row 
              .col-lg-8
                p.mb-0 No obstante, antes de dar paso con el tema de esta primera sección, es necesario revisar el numeral de&nbsp;
                  i pruebas y mediciones&nbsp;
                    | del componente formativo&nbsp;
                  i Descripción y funcionamiento de equipos electrónicos.&nbsp;
                  | Una vez repasados los conceptos relacionados con las pruebas que se ejecutan, en cada uno de los pasos del diagnóstico y posterior reparación de fallas de una tarjeta electrónica, es inevitable hablar sobre los tipos de herramientas necesarias para llevar a cabo cada una de las etapas de las fases anteriormente descritas. De igual manera, en esta sección, se tratan temas importantes para la interpretación de los resultados obtenidos en cada una de las fases a realizar para la corrección de fallas.
              .col-lg-4.d-none.d-lg-block
                figure.pa-caja-01
                  img(src='@/assets/template/tema01/t1-i7.svg')

    p.mb-5 La primera herramienta que se debe conocer es el multímetro. Este dispositivo es uno de los más frecuentemente utilizados dentro de un laboratorio, dada su capacidad de medir o monitorear múltiples variables eléctricas; de ahí su nombre.

    .row.d-flex.justify-content-center.mb-5
      .col-md-6
        ImagenInfografica.color-primario(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema01/t1-i3.svg')

          .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='57.3%', y='23%', numero='1')
            p El multímetro resulta útil a la hora de diagnosticar la posible falla o verificación del estado de la tarjeta electrónica.

          .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='89.4%', y='5.2%', numero='2')
            p A su vez, el multímetro ofrece la posibilidad de medir el comportamiento de diferentes variables. El dispositivo posee un botón, perilla o selector que permite cambiar de una opción de medida a otra.

          .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='40.5%', y='19.2%', numero='3')
            p De acuerdo con la opción seleccionada, para medir una tarjeta electrónica, se debe permutar la entrada de las puntas de prueba para una obtención adecuada y segura de los datos.

          .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='96.5%', y='34%', numero='4')
            p Cada uno de los fabricantes posee diferentes configuraciones para monitorear o realizar los diferentes procedimientos para los cuales fue diseñado; se recomienda entonces, leer el manual de usuario del fabricante y evitar daños o accidentes dentro del laboratorio de pruebas.

          .tarjeta.text-black.p-3.bg-acento-contenido-c2(x='4.3%', y='75.4%', numero='5')
            p Para ampliar la información sobre los multímetros lo invitamos a consultar en las referencias bibliográficas los documentos:&nbsp;
              i ¿Qué es un multímetro digital? y Electrónica aplicada:&nbsp;
              | electricidad, en los que podrá encontrar una definición más precisa y una descripción de las partes u opciones que posee un osciloscopio de forma general.

    h4 Firmas digitales y oscilogramas

    .row.mb-5
      .col-lg-7
        .row
          .col-lg-12
            p Las firmas digitales y los oscilogramas son representaciones gráficas que indican el comportamiento de una variable a lo largo del tiempo. Con este tipo de información, un profesional puede observar cómo cambia la variable de interés en un determinado lapso de tiempo; logrando de esta manera, detectar posibles errores o respuestas incorrectas frente a situaciones conocidas en instantes particulares. De esta manera, se brinda información valiosa de la sincronización que tiene la tarjeta electrónica, su tiempo de respuesta frente a cambios, en la o las entradas, y la forma que posee la salida frente a estímulos controlados.
          .col-lg-12
            .cajon.color-acento-botones.p-4
              p.mb-0 Toda esta información resulta valiosa en cada una de las pruebas de diagnóstico ya que permite, de manera rápida y eficiente, conocer el tipo de falla y atribuir a un bloque funcional, elemento, componente electrónico, pieza o zona, la responsabilidad de los resultados obtenidos; permitiendo de esta manera, brindar un conocimiento valioso para seleccionar la mejor intervención a realizar en la tarjeta electrónica o simplemente para validar la funcionalidad de la misma.
      .col-lg-5
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema01/t1-i4.svg') 

    h4 Voltaje e intensidad

    p El registro o firmas de voltaje e intensidad, dentro de los diagnósticos de una tarjeta electrónica, resultan una herramienta extremadamente útil dada la importancia que tienen estas dos variables en el funcionamiento de un dispositivo electrónico.
    p.mb-5 Por lo tanto, es fundamental conocer las diferentes propiedades que pueden tener este tipo de señales, dentro de un oscilograma:

    .tarjeta.slyderB_bg_01.p-5.mb-5(data-aos='zoom-in-right')
      SlyderA(tipo='b')
        .row
          .col-md-7.mb-4.mb-md-0.py-5
            h3 Frecuencia
            p La frecuencia indica la cantidad de ciclos completos que realiza una señal en un determinado tiempo. Generalmente la referencia es un segundo, donde su unidad de medida es el hertzio.

          .col-md-5
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/slider01/s1-i1.svg',
                alt=''
              ) 
        .row
          .col-md-7.mb-4.mb-md-0.py-5
            h3 Amplitud
            p Uno de los parámetros que siempre se debe considerar a la hora de medir una señal de tensión o intensidad eléctrica. La amplitud indica cuál es el valor máximo que alcanza una señal, tomando como referencia el centro de esta.

          .col-md-5
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/slider01/s1-i2.svg',
                alt=''
              ) 
        .row
          .col-md-7.mb-4.mb-md-0.py-5
            h3 Valor pico
            p En ocasiones el valor pico y la amplitud suelen confundirse debido a que ambos representan o indican el valor máximo de una señal eléctrica. La gran diferencia, entre estos dos conceptos, radica en que el valor pico de una señal se calcula con respecto al punto cero del eje vertical, es decir, cero voltios o cero amperios y la amplitud se calcula con respecto al centro de la señal independientemente de su posición.

          .col-md-5
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/slider01/s1-i3.svg',
                alt=''
              ) 
        .row
          .col-md-7.mb-4.mb-md-0.py-5
            h3 Valor pico a pico
            p En ocasiones se suele encontrar, en diversos materiales, que el valor pico a pico de una señal es el doble del valor pico. No obstante, este criterio sólo se cumple para aquellas señales centradas en cero. Una definición general para encontrar este dato es: la distancia que se encuentra entre el valor máximo y el valor mínimo de una señal en un determinado tiempo.

          .col-md-5
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/slider01/s1-i4.svg',
                alt=''
              ) 
        .row
          .col-md-7.mb-4.mb-md-0.py-5
            h3 Valor rms.
            p El valor eficaz de una señal eléctrica se define como el valor cuadrático medio de la magnitud de una variable física. De forma general, podemos ver el valor eficaz de una señal variante en el tiempo como su equivalente continuo.

          .col-md-5
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/slider01/s1-i5.svg',
                alt=''
              ) 
        .row
          .col-md-7.mb-4.mb-md-0.py-5
            h3 Periodo
            p El periodo de una señal representa el tiempo en el que se completa un ciclo, o bien, en el que una señal alcanza dos puntos equivalentes.

          .col-md-5
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/slider01/s1-i6.svg',
                alt=''
              ) 

    h4 Fuentes inteligentes

    .row.mb-5
      .col-lg-5
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema01/t1-i5.svg') 
      .col-lg-7
        .row
          .col-lg-12
            p Como hemos visto hasta el momento, la mayoría de las pruebas que se realizan para la obtención de medidas se basan en condiciones controladas para resguardar la seguridad e integridad de los componentes o elementos de una tarjeta electrónica. Además de realizar los procedimientos adecuados, también se debe tener control sobre las tensiones o corrientes que se suministran en cada fase del diagnóstico; es en este punto, donde entran en juego las fuentes de tensión inteligentes programables que permiten a los usuarios modificar el tipo de señal y sus parámetros con el fin de mantener en todo momento el entorno de trabajo.
          .col-lg-12
            .cajon.card-bg-acento-contenido.p-4
              p.mb-0 Este tipo de dispositivos, dependiendo de su configuración, aseguran una alta precisión en los valores suministrados y confiabilidad a la hora de realizar los procesos, permitiendo tener altas protecciones contra sobrecargas, sobretensiones, controles de temperatura, controles de polarización, etc.

    h4 Osciloscopio

    p En una sección anterior, se dijo que los oscilogramas permiten a los técnicos de mantenimiento diagnosticar y elegir el mejor procedimiento a realizar para corregir o verificar el estado de una placa electrónica. Dado la importancia de lo anterior, es necesario conocer la herramienta que permite la obtención de toda esa información.
    p.mb-5 A continuación, se presentan algunos de los elementos representativos de los osciloscopios:

    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-secundario.mb-5 
          .tarjeta.clr-paleYellow.p-4(titulo='¿Qué es?')
            p El osciloscopio es una herramienta electrónica que permite monitorear diversas variables a lo largo del tiempo para observar su comportamiento.
          .tarjeta.clr-paleYellow.p-4(titulo='¿Cuál es su<br> función?')
            p Alcalde, P. (2016), define la función del osciloscopio como “lo que hace un osciloscopio es mostrar en su pantalla la forma que posee una determinada tensión o corriente eléctrica. Es decir, representa en un eje de coordenadas las variaciones de estas magnitudes en función del tiempo” (p. 141).
          .tarjeta.clr-paleYellow.p-4(titulo='Importante')
            p Dada la importancia que posee este tipo de herramienta a la hora de verificar y diagnosticar, no solo tarjetas electrónicas sino también los diferentes equipos presentes en el área de mantenimiento, se considera importante revisar y estudiar los contenidos de la página 142 del libro&nbsp;
              i Electrónica aplicada: electricidad – electrónica,&nbsp;
              | publicado por Alcalde, P. (2016); asimismo, la información del blog de Donado (2022) sobre análisis técnico sobre el USO de un osciloscopio automotriz, disponible en el link:
            a.anexo.mb-4.mb-lg-0(
              href='https://autosoporte.com/analisis-tecnico-del-uso-del-osciloscopio-automotriz/',
              target='_blank'
            )
              .anexo__icono
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p
                strong Enlace web.
                | Análisis técnico sobre el USO de un osciloscopio automotriz.

      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos='zoom-in')
        figure
          img.m-auto(
            src='@/assets/template/tema01/t1-i6.svg',
            alt='alt',
            style='width: 450px'
          ) 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
