<template>
  <container-text>
    <Instruction>Lee el texto y selecciona la respuesta correcta</Instruction>
    <title-text>Maldito celular</title-text>
    <image-section
      :img-file="require('~/assets/images/celular.png')"
      img-name="celular"
    />
    <section-text
      >El descontento con la calidad del servicio de telefonía celular es
      amplio. Las compañías le atribuyen la responsabilidad al Ministerio de
      Transportes y Comunicaciones (MTC) y a las municipalidades que —por la
      presión del miedo que acompaña a la ignorancia— ponen trabas o prohíben la
      instalación de más antenas. En el Perú debería haber al menos 22 000
      antenas y unas 10 000 en Lima para tener un servicio adecuado, pero hay
      menos de 8000 y 3900, respectivamente.
    </section-text>

    <section-text>
      Al margen de ello, habría que preguntarse por qué si las operadoras saben
      que la infraestructura es insuficiente, siguen vendiendo equipos como si
      estuvieran en campaña todo el año, ofreciendo planes y coberturas y
      velocidades de conexión y calidades de servicio con los que saben
      perfectamente que no van a poder cumplir. (Por eso la batería de su equipo
      dura menos de lo que debería, las llamadas se cortan y el servicio de
      internet es intermitente).
    </section-text>

    <section-text>
      Sin más antenas, una manera de incentivar la inversión es reduciendo y
      equilibrando el costo de terminación de llamadas (CTLL), lo que cobra, por
      ejemplo, Telefónica para que las llamadas de los demás operadores lleguen
      a sus teléfonos en su red. Por ocho años se permitió que Claro le cobrara
      a Telefónica bastante más de lo que esta le cobraba a aquella. Gracias a
      ello, Claro amplió su red de servicio y, a la vez, obtuvo un beneficio
      adicional de USD 30 millones cada año. ¿Por qué pagaba menos? Porque si
      una red tiene pocos celulares, la mayoría de las llamadas terminarán en
      red ajena.
    </section-text>

    <section-text>
      Hoy se busca dar ese tratamiento (mucho más acotado en plazos, precios y
      beneficios) a Bitel y a Entel, que podrían mejorar sus ofertas y
      promociones, y así hacer el mercado más competitivo. Pero alguien se
      opone.
    </section-text>

    <section-text> Claro, ¡son 30 millones! </section-text>
    <Bibliography
      >Tomado de Davelouis, Luis (s/f). Maldito celular. Perú21. Recuperado de
      https://goo.gl/A1r0hL</Bibliography
    >
  </container-text>
</template>

<script>
import ContainerText from "../../shared/ContainerText";
import TitleText from "../../shared/TitleText";
import Instruction from "../../shared/Instruction.vue";
import ImageSection from "../../shared/ImageSection.vue";
import SectionText from "../../shared/SectionText";
import Bibliography from "../../shared/Bibliography";
export default {
  components: {
    ContainerText,
    TitleText,
    Instruction,
    ImageSection,
    SectionText,
    Bibliography,
  },
};
</script>
