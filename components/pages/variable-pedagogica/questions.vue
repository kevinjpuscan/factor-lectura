<template>
  <div>
    <ContainterQuestions>
      <Wrapper>
        <card-question
          v-for="(question, index) in this.$store.state.varPedagogica
            .questionsMain"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />
          <BinaryOption
            :alternatives="question.alternatives"
            :number="question.number"
            store="varPedagogica/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>
    </ContainterQuestions>
  </div>
</template>

<script>
import ContainterQuestions from "../../shared/ContainerQuestions";
import CardQuestion from "../../shared/CardQuestion";
import TextQuestion from "../../shared/TextQuestion";
import Wrapper from "../../ui/Wrapper";
import BinaryOption from "../../shared/BinaryOption";

export default {
  components: {
    ContainterQuestions,
    CardQuestion,
    TextQuestion,
    Wrapper,
    BinaryOption,
  },
  data: () => ({
    questionsMain: [
      {
        number: "1",
        question:
          "Antes de iniciar una lectura, ¿respondes un conjunto de preguntas propuestas por el docente relacionados con el tema que leerán?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
      {
        number: "2",
        question:
          "¿El docente antes de empezar la lectura te propone un reto o dificultad que te hace pensar y razonar, para luego dar solución con la lectura?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
      {
        number: "3",
        question:
          "¿En la sesión de lectura, el propósito es presentado en forma verbal o escrita por el docente?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
      {
        number: "4",
        question:
          "¿Durante tu sesión de lectura, el docente se mantiene cerca y absuelve tus dificultades que presentas en forma oportuna y precisa?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
      {
        number: "5",
        question:
          "¿Durante la lectura, el docente promueve la lectura silenciosa, en voz alta, en cadena y otros?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
      {
        number: "6",
        question:
          "Durante la lectura, ¿el docente promueve actividades como el sumillado, el subrayado, el resaltado, para identificar la idea principal, escenarios, personajes entre otros?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
      {
        number: "7",
        question:
          "¿Tus clases de lectura son realizadas en forma activa e interesante, durante todo el proceso?",
        alternatives: [
          { option: "SI", label: "SI" },
          { option: "NO", label: "NO" },
        ],
        selectedOptions: "",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0;
}
</style>