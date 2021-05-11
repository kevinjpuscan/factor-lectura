<template>
  <container-text>
    <Instruction>Lee el texto y selecciona la respuesta correcta</Instruction>
    <title-text>Arrugas</title-text>
    <image-section
      :img-file="require('~/assets/images/arrugas.png')"
      img-name="solar"
    />
    <section-text
      >Argumento de Arrugas: Aborda la vida en una residencia geriátrica, tras
      la llegada de <strong>Emilio</strong>, un antiguo ejecutivo bancario que
      padece de alzhéimer. Este entabla amistad con otros ancianos como
      <strong>Miguel</strong>, quien le intentará ayudar para que no lo
      trasladen al piso de impedidos.</section-text
    >
    <Bibliography
      >Tomado de Roca, Paco (2007). Arrugas. Bilbao: Astiberri ediciones.
      Recuperado de https://goo.gl/aEFA5Q</Bibliography
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
