<template>
  <container-text>
    <Instruction>Lee el texto y selecciona la respuesta correcta</Instruction>
    <title-text>Energía solar para el Perú</title-text>
    <image-section
      :img-file="require('~/assets/images/solar.png')"
      img-name="solar"
    />
  </container-text>
</template>

<script>
import ContainerText from "../../shared/ContainerText";
import TitleText from "../../shared/TitleText";
import Instruction from "../../shared/Instruction.vue";
import ImageSection from "../../shared/ImageSection.vue";
export default {
  components: {
    ContainerText,
    TitleText,
    Instruction,
    ImageSection,
  },
};
</script>
