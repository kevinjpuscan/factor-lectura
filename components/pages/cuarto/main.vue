<template>
  <container-text>
    <Instruction>Lee el texto y selecciona la respuesta correcta</Instruction>
    <title-text>La señorita Cora</title-text>

    <section-text
      >No entiendo por qué no me dejan pasar la noche en la clínica con el nene,
      al fin y al cabo, soy su madre y el doctor De Luisi nos recomendó
      personalmente al director. Podrían traer un sofá cama y yo lo acompañaría
      para que se vaya acostumbrando, entró tan pálido el pobrecito como si
      fueran a operarlo enseguida, yo creo que es ese olor de las clínicas, su
      padre también estaba nervioso y no veía la hora de irse, pero yo estaba
      segura de que me dejarían con el nene. Después de todo tiene apenas quince
      años y nadie se los daría, siempre pegado a mí, aunque ahora con los
      pantalones largos quiere disimular y hacerse que es hombre grande. La
      impresión que le habrá hecho cuando se dio cuenta de que no me dejaban
      quedarme, menos mal que su padre le dio charla, le hizo poner el piyama y
      meterse en la cama. Y todo por esa mocosa de enfermera, yo me pregunto si
      verdaderamente tiene órdenes de los médicos o si lo hace por pura maldad.
      Pero bien que se lo dije, bien que le pregunté si estaba segura de que
      tenía que irme. No hay más que mirarla para darse cuenta de quién es, con
      esos aires de vampiresa y ese delantal ajustado, una chiquilina de
      porquería que se cree la directora de la clínica. […] Pero mañana por la
      mañana, eso sí, lo primero que hago es hablar con el doctor De Luisi para
      que la ponga en su lugar a esa mocosa presumida. Habrá que ver si la
      frazada abriga bien al nene, voy a pedir que por las dudas le dejen otra a
      mano. Pero sí, claro que me abriga, menos mal que se fueron de una vez,
      mamá cree que soy un chico y me hace hacer cada papelón. Seguro que la
      enfermera va a pensar que no soy capaz de pedir lo que necesito, me miró
      de una manera cuando mamá le estaba protestando... Está bien, si no la
      dejaban quedarse qué le vamos a hacer, yo soy bastante grande para dormir
      solo de noche, me parece. Y en esta cama se dormirá bien, a esta hora ya
      no se oye ningún ruido, a veces de lejos el zumbido del ascensor que me
      hace acordar a esa película de miedo que también pasaba en una clínica,
      cuando a medianoche se abría poco a poco la puerta y la mujer paralítica
      en la cama veía entrar al hombre de la máscara blanca...
    </section-text>

    <section-text
      >La enfermera es bastante simpática, volvió a las seis y media con unos
      papeles y me empezó a preguntar mi nombre completo, la edad y esas cosas.
      Yo guardé la revista en seguida porque hubiera quedado mejor estar leyendo
      un libro de veras y no una fotonovela, y creo que ella se dio cuenta, pero
      no dijo nada, seguro que todavía estaba enojada por lo que le había dicho
      mamá y pensaba que yo era igual que ella y que le iba a dar órdenes o algo
      así. Me preguntó si me dolía el apéndice y le dije que no, que esa noche
      estaba muy bien. “A ver el pulso”, me dijo, y después de tomármelo anotó
      algo más en la planilla y la colgó a los pies de la cama. “¿Tienes
      hambre?”, me preguntó, y yo creo que me puse colorado porque me tomó de
      sorpresa que me tuteara, es tan joven que me hizo impresión. Le digo que
      no, aunque era mentira porque a esa hora siempre tengo hambre. “Esta noche
      vas a cenar muy liviano”, dijo ella, y cuando quise darme cuenta ya me
      había quitado el paquete de caramelos de menta y se iba. […] Al rato vino
      mamá y qué alegría verlo tan bien, yo que me temía que hubiera pasado la
      noche en blanco el pobre querido, pero los chicos son así, en la casa
      tanto trabajo y después duermen a pierna suelta, aunque estén lejos de su
      mamá que no ha cerrado los ojos la pobre. […] El doctor De Luisi entró
      para revisar al nene y yo me fui un momento afuera porque ya está
      grandecito, y me hubiera gustado encontrármela a la enfermera de ayer para
      verle bien la cara y ponerla en su sitio nada más que mirándola de arriba
      abajo, pero no había nadie en el pasillo. Casi en seguida salió el doctor
      De Luisi y me dijo que al nene iban a operarlo a la mañana siguiente, que
      estaba muy bien y en las mejores condiciones para la operación, a su edad
      una apendicitis es una tontería. […]</section-text
    >
    <image-section
      :img-file="require('~/assets/images/dr.png')"
      img-name="solar"
    />
    <section-text
      >La enfermera de la tarde se llama la señorita Cora, se lo pregunté a la
      enfermera chiquita cuando me trajo el almuerzo; me dieron muy poco de
      comer y de nuevo pastillas verdes y unas gotas con gusto a menta […]. El
      nene de mamá ya no está tan garifo como ayer, se le nota en la cara que
      tiene un poco de miedo, es tan chico que casi me da lástima. Se sentó de
      golpe en la cama cuando me vio entrar y escondió la revista debajo de la
      almohada. La pieza estaba un poco fría y fui a subir la calefacción,
      después traje el termómetro y se lo di. “¿Te lo sabes poner?”, le
      pregunté, y las mejillas parecía que iban a reventársele de rojo que se
      puso. Dijo que sí con la cabeza y se estiró en la cama mientras yo bajaba
      las persianas y encendía el velador. Cuando me acerqué para que me diera
      el termómetro seguía tan ruborizado que estuve a punto de reírme, pero con
      los chicos de esa edad siempre pasa lo mismo, les cuesta acostumbrarse a
      esas cosas…</section-text
    >

    <LitleText
      >Tomado de Cortázar, J. (1966). Todos los fuegos el fuego. Recuperado de
      https://goo.gl/j7XWQz</LitleText
    >
  </container-text>
</template>

<script>
import ContainerText from "../../shared/ContainerText";
import TitleText from "../../shared/TitleText";
import Instruction from "../../shared/Instruction.vue";
import ImageSection from "../../shared/ImageSection.vue";
import SectionText from "../../shared/SectionText";
import LitleText from "../../shared/LitleText";
export default {
  components: {
    ContainerText,
    TitleText,
    Instruction,
    ImageSection,
    SectionText,
    LitleText,
  },
};
</script>
