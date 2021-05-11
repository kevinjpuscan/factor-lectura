<template>
  <container-text>
    <title-text>Televisión y sociedad</title-text>
    <image-section
      :img-file="require('~/assets/images/tv.png')"
      img-name="tv"
    />
    <section-text
      >La televisión peruana se ha convertido en un serio obstáculo para el
      saneamiento de nuestra cultura pública. Desde los programas de
      entretenimiento hasta los de noticias o comentario político, la
      programación diaria, esa que consume una enorme proporción de nuestra
      población, solo ofrece insignificancia, vulgaridad o una imagen deformante
      de nuestra realidad.
    </section-text>
    <section-text
      >¿Cómo explicar esta degradación, sus orígenes y sus efectos? Muchas veces
      se señala que la televisión es un reflejo de la sociedad. Pero ¿qué
      ocurriría si esto fuera al revés, es decir, que la sociedad fuera el
      reflejo de la televisión?</section-text
    >
    <section-text
      >Pensar así no resulta tan descabellado. Los medios de comunicación nos
      brindan modelos éticos y estéticos, y promueven hábitos y gustos. La
      televisión es, sin lugar a dudas, el medio más persuasivo. Es más, para
      resultar convincente y persuasiva, no necesita ser de calidad; a la
      televisión solo le basta recurrir a técnicas muy sencillas para impactar
      en la imaginación de millones de personas.</section-text
    >
    <section-text
      >Afirmar que los televidentes “elegimos” qué canal ver y que mediante
      nuestra elección validamos la oferta televisiva es muy simplista. Los
      medios de comunicación son un camino de ida y vuelta. Ellos tienen el
      poder de formar los gustos del público e incluso de influir en su forma de
      pensar. Una vez que se ha formado un hábito, una vez que se ha logrado
      definir un gusto, es difícil cambiar de elección.</section-text
    >
    <section-text
      >La llamada televisión basura es una realidad innegable. No es, como
      algunos confunden, televisión popular. Es, más bien, televisión que
      interfiere en el desarrollo humano de las personas, pues alimenta los
      instintos básicos, no las capacidades superiores como son, por ejemplo, la
      crítica, la ética y la estética. La televisión basura es valorada no por
      su contenido, sino porque logra un efecto, que es el de imponerse en los
      hogares. Además, fomenta la competencia agresiva, la humillación del otro,
      la curiosidad obscena, el racismo y el machismo.
    </section-text>
    <section-text
      >Asimismo, la televisión basura ha dado un paso adelante en su capacidad
      de reemplazar la realidad. Ahora resulta que ella misma es su propio
      objeto de observación. En efecto, la televisión basura habla de sí misma.
      Son sus personajes y sus escenas los que se convierten en noticia. Es un
      espectáculo sobre el espectáculo, un mundo que finalmente parece cerrado
      en sí mismo, porque no está interesado en lo que ocurre
      afuera.</section-text
    >
    <section-text
      >El impacto de la televisión basura en nuestras vidas es enorme.
      Principalmente afecta nuestra condición ciudadana al reducirnos a
      consumidores de espectáculos vacíos. Es un instrumento de distracción,
      propiamente dicho, que nos aleja del mundo y nos impide mirar nuestro
      entorno.</section-text
    >
    <section-text
      >Se puede regular la televisión, y esto no significa prohibir programas.
      Pero, sobre todo, la televisión misma debe ofrecer alternativas. Muchos de
      los que niegan el poder de los medios son los mismos que invierten en
      publicidad en ellos. Dado que este poder existe, tiene sentido que sea
      considerado como un bien público que debe servir a los
      ciudadanos.</section-text
    >
    <section-text
      >Las respuestas no son sencillas, y es necesario ser muy cuidadosos para
      no atropellar las libertades que constituyen nuestra democracia. Sin
      embargo, una televisión como la que tenemos afecta de modos negativos,
      pero efectivos, el fortalecimiento de nuestra ciudadanía; este es un
      problema que no podemos evadir indefinidamente.</section-text
    >
    <bibliography
      >Adaptado de Lerner Febres, Salomón (19 de junio de 2015). Televisión y
      sociedad. Recuperado dehttps://goo.gl/GaQW24</bibliography
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
