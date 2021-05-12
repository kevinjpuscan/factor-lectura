<template>
  <container-text>
    <Instruction
      >Lee el siguiente texto considerando las orientaciones</Instruction
    >
    <title-text>La portabilidad en el 2015</title-text>
    <image-section
      :img-file="require('~/assets/images/portabilidad.png')"
      img-name="portabilidad"
    />

    <bibliography
      >Tomado de Arauco, Orlando (2016, 6 de enero). La portabilidad en el 2015.
      [Infografía]. La República. Recuperado de
      http://larepublica.pe/economía/731425-la-portabilidad-en-el-2015</bibliography
    >
  </container-text>
</template>

<script>
import ContainerText from "../../shared/ContainerText";
import TitleText from "../../shared/TitleText";
import ImageSection from "../../shared/ImageSection";
import SectionText from "../../shared/SectionText";
import Bibliography from "../../shared/Bibliography";
import Instruction from "../../shared/Instruction";

export default {
  components: {
    ContainerText,
    TitleText,
    SectionText,
    Bibliography,
    ImageSection,
    Instruction,
  },
};
</script>
