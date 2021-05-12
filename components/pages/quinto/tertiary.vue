<template>
  <container-text>
    <Instruction
      >Realiza de manera individual la lectura del siguiente texto y responde
      las preguntas que se te presentan.</Instruction
    >
    <title-text
      >Día del Trabajo Infantil: hay 1,65 millones de menores que trabajan en el
      Perú</title-text
    >
    <image-section
      :img-file="require('~/assets/images/ninio.png')"
      img-name="niño"
    />

    <section-text
      >La mayoría labora más horas de las permitidas y en condiciones de
      explotación. Los que trabajan en la calle ganan solo S/9 al
      día.</section-text
    >
    <section-text
      >Marlon tiene 11 años y desde los 10 trabaja en los campos de arroz de
      Tumbes. Pese a los operativos realizados por las autoridades, todos los
      días el pequeño sigue sumergiendo su menudo cuerpo en el agua para sembrar
      arroz.</section-text
    >
    <section-text
      >Su jornada, al igual que la de un adulto, empieza a las cinco de la
      mañana y termina a las cuatro de la tarde. No le queda tiempo para
      estudiar. Marlon no tiene infancia. No sabe que mañana se celebra el Día
      del Niño. Él solo quiere ganar su dinero. Por su duro trabajo, le dan una
      propina diaria de 20 soles.</section-text
    >
    <section-text
      >Así como Marlon, en el Perú hay 1 659 000 niños y adolescentes que
      trabajan y casi la mitad se encuentra en condiciones de
      explotación</section-text
    >
    <section-text
      >Según las cifras del INEI al 2011, de los siete millones de niños y
      adolescentes (entre 6 y 17 años) que existen en el país, 832 000 tienen
      entre 6 y 13 años, menos de la edad establecida para
      trabajar.</section-text
    >
    <section-text
      >Ellos no pueden realizar labores peligrosas en minas, fábricas de
      ladrillos, carbón, coheterías, entre otros. Tampoco pueden exponer su vida
      vendiendo en las calles. Pese a ello, más del 50 % de los menores trabaja
      en condiciones deplorables.</section-text
    >
    <title-text>Falta supervisión</title-text>
    <section-text
      >Nayda Ramos, adjunta de los Derechos del Niño de la Defensoría del
      Pueblo, recordó que, según la legislación vigente, los municipios y las
      direcciones regionales de trabajo son los encargados de llevar un registro
      del trabajo formal que realizan los menores. No obstante, una supervisión
      detectó que la mayoría de dependencias no cuenta con dicho
      registro.</section-text
    >
    <section-text
      >“Esto quiere decir que, en ciudades grandes, como Arequipa, Chiclayo,
      Huaraz, Huamanga, Ica, Trujillo, Tumbes e incluso Lima, no se fiscaliza si
      los menores trabajadores cumplen los horarios establecidos por la ley,
      reciben los beneficios que les corresponden o están en condición de
      explotación”, manifestó Ramos.</section-text
    >
    <section-text
      >La especialista detalló a Perú21 que, durante la inspección, se detectó
      que en once regiones los adolescentes reciben sueldos por debajo del
      mínimo vital; en otras nueve regiones los menores trabajan más horas de
      las permitidas, y en doce regiones hay niños trabajando en oficios
      riesgosos. Al parecer ignoramos que “Un niño que trabaja pierde más de lo
      que gana”.</section-text
    >
    <LitleText
      >Adaptado de Perú 21 (2015, 12 de junio). Día del Trabajo Infantil: hay
      1,65 millones de menores que trabajan en el Perú. Recuperado de
      https://goo.gl/l38Llo</LitleText
    >

    <image-section
      :img-file="require('~/assets/images/chart-trabajo-infantil.png')"
      img-name="niño"
    />
  </container-text>
</template>

<script>
import ContainerText from "../../shared/ContainerText";
import TitleText from "../../shared/TitleText";
import ImageSection from "../../shared/ImageSection";
import SectionText from "../../shared/SectionText";
import LitleText from "../../shared/LitleText";
import Instruction from "../../shared/Instruction";

export default {
  components: {
    ContainerText,
    TitleText,
    SectionText,
    LitleText,
    ImageSection,
    Instruction,
  },
};
</script>
