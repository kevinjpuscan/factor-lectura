<template>
  <container-text>
    <title-text>El comercio ambulatorio</title-text>
    <image-section
      :img-file="require('~/assets/images/comercio.png')"
      img-name="tv"
    />
    <section-text
      >El comercio ambulatorio es un problema latente en nuestra sociedad y se
      da no solo en la capital sino en las principales ciudades de nuestro país.
      Se llama comercio ambulatorio a la actividad comercial informal que se
      desarrolla en las calles, ya sea de forma cambiante o en un lugar fijo
      ocupado durante determinadas horas del día. En el Perú, este tipo de
      comercio existe debido a una demanda de la población que promueve esta
      forma de abastecimiento por bajos ingresos económicos o, simplemente, por
      hábito cultural, así como a la demanda por trabajo de personas
      desempleadas, lo cual genera la búsqueda de ingresos de esta manera. Se
      reconoce que el ejercicio de esta actividad en la vía pública impone
      serios límites para su crecimiento.
    </section-text>
    <section-text
      >Es preciso tener en cuenta la heterogeneidad de formas en que el comercio
      ambulatorio se desarrolla. Generalizando, podemos establecer que se
      producen dos formas de concentraciones de ambulantes: los conglomerados y
      las paraditas. Los conglomerados son las concentraciones de más de 2000
      comerciantes ambulantes, que captan una clientela interdistrital, tal como
      fueron Gamarra en La Victoria, Las Malvinas en Breña, Angélica Gamarra en
      Los Olivos, etc. Por su parte, las paraditas son concentraciones más
      pequeñas que varían desde 10 hasta menos de 2000 ambulantes, y que captan,
      preferentemente, a clientes de la misma zona o barrio, tal como las
      concentraciones en Villa María del Triunfo, Villa El Salvador, Comas,
      etc.</section-text
    >
    <section-text
      >El perfil del comerciante ambulante demuestra que, más que estrategias
      individuales, el comercio ambulatorio se inserta dentro de una dinámica
      familiar y comunal de supervivencia. La gran presencia de mujeres y
      hombres casados o convivientes es un indicador importante de esta
      afirmación. Además, se trata de una economía que no solo se limita a los
      comerciantes, sino que incorpora a un sector de las familias de la
      comunidad. El carácter vecinal del comerciante ambulante es un punto muy
      importante que se debe considerar, pues su negocio surge a partir de una
      demanda local. Por lo tanto, las relaciones comerciales con sus clientes
      están, en principio, marcadas por la cotidianidad e, incluso, la cercanía
      afectiva, que son lazos convenientes para atenuar la precaria situación de
      esta forma de supervivencia.</section-text
    >
    <section-text
      >Actualmente, existen cerca de 15 000 ambulantes en el Cercado de Lima. De
      este total, se ubican unos 2500 en el Mercado Central, 2000 en Mesa
      Redonda y unos 2800 en el Damero de Pizarro, informó a El Comercio
      Christian Rosenthal, nuevo gerente de Fiscalización y Control del
      municipio limeño. El Damero de Pizarro corresponde al trazado fundacional
      de la ciudad de Lima, capital del Perú.
    </section-text>
    <section-text
      >En resumen, el comercio ambulatorio es una actividad comercial informal
      que se da en forma de conglomerados y paraditas en la capital y las
      principales ciudades de nuestro país debido al hábito cultural, el
      desempleo, etc.</section-text
    >

    <bibliography
      >Tomado de El subrayado y el parafraseo. (s/f). Universidad Cesar Vallejo.
      Recuperado de https://goo.gl/v4LMJm</bibliography
    >
  </container-text>
</template>

<script>
import ContainerText from "../../shared/ContainerText";
import TitleText from "../../shared/TitleText";
import ImageSection from "../../shared/ImageSection";
import SectionText from "../../shared/SectionText";
import Bibliography from "../../shared/Bibliography";

export default {
  components: {
    ContainerText,
    TitleText,
    SectionText,
    Bibliography,
    ImageSection,
  },
};
</script>
