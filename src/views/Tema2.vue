<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Documentos de procesos

    .row.flex.justify-content-center.mb-5(data-aos='fade-right')
      .col-lg-11
        .row 
          .col-lg-2
          .col-lg-10.p-4.caja-02
            .row 
              .col-lg-2.d-none.d-lg-block
                figure.pa-caja-02
                  img(src='@/assets/template/tema02/t2-i18.svg')
              .col-lg-10
                p.mb-0 Dentro de los pasos a realizar en los procesos o etapas de un proyecto, se encuentra la documentación de cada una de las intervenciones realizadas o por realizar. El beneficio que trae esta práctica, es la de poder transmitir los conocimientos y generar manuales o guías para las intervenciones futuras de equipos similares. Otro valor agregado que tiene la documentación, es la de poder adaptar o mejorar las estrategias aplicadas a un proceso o intervención con el fin de optimizar cada una de las fases para reducir costos y tiempos.

    p.mb-5 A continuación, se presentan los elementos que deben ser considerados en la documentación de procesos:

    SlyderF.mb-5(columnas='col-lg-6 col-xl-4')(data-aos='fade-left')
      .tarjeta.color-01.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/template/tema02/t2-i1.svg', alt='AvatarTop')
        h2.text-center Determinar el alcance
        p.text-center Para el desarrollo de un documento de proceso se deben determinar los alcances que va a tener la intervención. Por lo tanto, se debe contemplar un cronograma de actividades, los objetivos de cada una de las etapas e identificar los procedimientos prioritarios.

      .tarjeta.color-01.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/template/tema02/t2-i2.svg', alt='AvatarTop')
        h2.text-center Delimitar cada una de las fases
        p.text-center La delimitación de cada una de las fases a realizar, permite definir la responsabilidad de cada uno de los grupos, departamentos o dependencias asociadas al área de mantenimiento.

      .tarjeta.color-01.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/template/tema02/t2-i3.svg', alt='AvatarTop')
        h2.text-center Recursos necesarios para la intervención
        p.text-center Se deben contemplar todos los posibles recursos que se van a utilizar a lo largo de la ejecución de proyecto; tales como materiales, equipos, herramientas, componentes, personal, etc.

      .tarjeta.color-01.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/template/tema02/t2-i4.svg', alt='AvatarTop')
        h2.text-center Detallar cada una de las fases
        p.text-center Con todos los pasos anteriores ejecutados, es hora de empezar a detallar cada una de las fases en etapas más pequeñas con el fin de asignar responsabilidades a cada uno de los profesionales disponibles, de acuerdo con sus habilidades.

      .tarjeta.color-01.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/template/tema02/t2-i5.svg', alt='AvatarTop')
        h2.text-center Identificar riesgos existentes
        p.text-center Se requiere identificar cada uno de los riesgos existentes dentro de las fases a ejecutar en las intervenciones a los equipos y buscar las maneras de evitarlos; buscando siempre mantener la seguridad y salud en el trabajo.

      .tarjeta.color-01.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/template/tema02/t2-i6.svg', alt='AvatarTop')
        h2.text-center Documentar el proceso
        p.text-center Con cada uno de los pasos anteriores ejecutados, es hora de iniciar la documentación de procesos. A continuación, se presentan los conceptos asociados con la generación de documentos del proceso de reparación de tarjetas electrónicas.

    h4 Elementos indispensables para la documentación de procesos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='zoom-in')
      .bloque-texto-g__img(
        :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i7.png")})` }'
      )
      .bloque-texto-g__texto.py-4.px-4
        p.mb-0 La documentación, dentro de una organización, resulta ser muy importante a la hora de tomar decisiones. No obstante, antes de realizar cualquier tipo de procedimiento, se deben tener los datos, porque estos son fundamentales para aportar información requerida. El video que se presenta a continuación, detalla cada uno de los elementos indispensables en la documentación de procesos.

    figure.mb-5(data-aos='fade-right')
      .video
        iframe(
          width='560',
          height='315',
          src='https://www.youtube.com/embed/G3v1xfR_Md4',
          title='YouTube video player',
          frameborder='0',
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen
        ) 

    .row.mb-5.f-caja-02(data-aos='fade-up-right')
      .col-lg-12
        .row.justify-content-center
          .col-lg-11.s-card-01
            .row
              .col-lg-5.d-none.d-lg-block.pt-5.px-5          
                    figure
                      img(src='@/assets/template/tema02/t2-i20.svg')
              .col-lg-7
                .titulo-segundo.color-acento-contenido
                  h2 Importante
                p Con lo indispensable que resulta el&nbsp;
                  i software,&nbsp;
                  | a la hora de gestionar la documentación de todos los procesos realizados o planeados para la verificación o mantenimiento de las tarjetas electrónicas, se presentan los principales proveedores de&nbsp;
                  i software ofimáticos: Office 365, Libreoffice y Google docs.&nbsp;
                  | De los anteriores se destacan los dos últimos gracias a sus prestaciones y a la posibilidad de adquirirlos bajo ningún costo. 

    h4 Hoja de vida y servicio

    .row.flex.justify-content-center.mb-5(data-aos='fade-up-left')
      .col-lg-11
        .row 
          .col-lg-10.p-4.caja-01
            .row 
              .col-lg-8
                p.mb-0 Como se ha visto hasta el momento, la información asociada a un equipo electrónico, dispositivo o aparato, resulta de gran importancia a la hora de tomar decisiones dentro de una organización. Es por esto que relacionar dicho historial a un equipo electrónico es crítico. La hoja de vida y servicio, de aparatos electrónicos, es un documento donde se encuentran dispuestos todos los procesos realizados al dispositivo, la identificación propia que posee el equipo y la descripción de las características generales que posee el mismo dentro de la organización.
              .col-lg-4.d-none.d-lg-block
                figure.pa-caja-01
                  img(src='@/assets/template/tema02/t2-i19.svg')

    br
    br
    br

    .row.mb-5
      .col-lg-2 
        img(src='@/assets/template/tema02/t2-i8.svg', alt='AvatarTop')(data-aos='zoom-in')
      .col-lg-10
        p Debido a que cada organización o empresa tiene sus propias plantillas con respecto a la hoja de servicio de un equipo, resulta complicado proporcionar una estructura general. A continuación, se muestran los datos mínimos que debe llevar este tipo de documento:

    .slyderB_bg_02.tarjeta.tarjeta--gris.p-5(data-aos='fade-left')
      PasosB.color-acento-botones
        .row.p-5(titulo='')
          .col-lg-8
            h3 Identificación del dispositivo
            p Se busca, de acuerdo con la marca y las características propias del dispositivo en conjunto, con un serial poder diferenciar al equipo de los demás.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i9.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Fecha de recepción y uso
            p Este tipo de información ayuda a los técnicos del área de mantenimiento a conocer la cantidad de tiempo que lleva el equipo trabajando dentro de una organización y agendar de manera precisa los mantenimientos correctivos y preventivos necesarios para prolongar su vida útil.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i10.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Garantías
            p En una organización, es muy común que se adquieran constantemente equipos nuevos para la realización de nuevas tareas o para mejorar los procesos actuales; por esta razón, es importante conocer si un equipo electrónico se encuentra o no bajo garantía antes de proceder a realizar cualquier tipo de intervención. Véase el componente formativo 3 sección “políticas de garantías” para conocer la definición y demás consideraciones a tener en cuenta ante esta característica del equipo electrónico.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i11.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Fechas de mantenimiento
            p En este apartado del documento se encuentran detallados los agendamientos de las intervenciones que se deben realizar al equipo en torno a los mantenimientos preventivos y correctivos, siendo esta una de las secciones más importantes.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i12.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Precauciones
            p En esta sección del documento, se deben documentar todas las consideraciones que un profesional debe tener en cuenta antes de manipular u operar el equipo electrónico. Esto es fundamental dentro del área de mantenimiento para evitar accidentes o daños dentro de la organización o empresa.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i13.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Observaciones generales
            p Las observaciones generales son todos esos detalles que el profesional encargado de la revisión del equipo va notando a lo largo de las diferentes inspecciones visuales y demás procedimientos realizados a un equipo electrónico. Por ejemplo, desgaste de pintura, abolladuras, etc.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i14.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Diagrama de causa y efecto
            p Como se observó en el componente formativo número 3 en la sección “Relación causa efecto”, la corrección de un fallo es crítica, pero también lo es la solución de aquellas acciones que conllevaron o produjeron dicho imprevisto. Los diagramas de causa y efecto buscan, de manera gráfica, ordenar las posibles razones que llevaron a producir los diferentes fallos del equipo electrónico. Estos diagramas también se pueden ver como un ordenamiento lógico de todas las ideas o hipótesis que tenga un grupo de trabajo sobre el origen del fallo del equipo electrónico, resultando útil a la hora de tomar decisiones sobre los procedimientos a realizar, con el fin de eliminar las acciones que están produciendo u originando fallos en los aparatos electrónicos de una organización (Experience, 2022).
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i15.svg')
        .row.p-5(titulo='')
          .col-lg-8
            h3 Flujo de proceso
            p Al igual que en el caso anterior, un diagrama de flujo busca mediante gráficos describir el funcionamiento de un proceso de manera simple. El objetivo de esta práctica, es dar una representación visual de cada una de las actividades presentes en un proceso, indicar la secuencia lógica que se debe seguir, facilitar la comprensión de la evolución del flujo y resumir las actividades fundamentales asociadas a cada una de las etapas del proceso. Dentro de la reparación de tarjetas electrónicas, un diagrama de flujo busca ordenar las diferentes intervenciones a realizar con el fin de verificar y/o diagnosticar el funcionamiento de las mismas. Para el desarrollo y diseño de este gráfico, se recomienda un trabajo conjunto con todos los profesionales disponibles o expertos en la intervención de tarjetas electrónicas para elaborar planes adecuados y evitar, en todo momento, los tiempos excesivos de un equipo en el área de mantenimiento. Es decir, optimizar todos los procesos relacionados con el diagnóstico de placas electrónicas.
          .col-lg-4
            figure
              img(src='@/assets/template/tema02/t2-i16.svg')
</template>

<script>
export default {
  name: 'Tema2',
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
