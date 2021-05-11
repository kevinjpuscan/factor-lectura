<template>
  <div>
    <Main />
    <QuestionsMain />
    <secondary />
    <QuestionsSecondary />

    <Wrapper>
      <div class="actions">
        <Button extended :disabled="isDisabled" @click="save"
          >Enviar Respuestas</Button
        >
      </div>
    </Wrapper>
  </div>
</template>

<script>
import Main from "../components/pages/tercero/main";
import QuestionsMain from "../components/pages/tercero/questionsMain.vue";
import Button from "../components/ui/Button";
import Wrapper from "../components/ui/Wrapper";
import Secondary from "../components/pages/tercero/secondary";
import QuestionsSecondary from "../components/pages/tercero/questionsSecondary.vue";

export default {
  components: {
    Main,
    QuestionsMain,
    Button,
    Wrapper,
    Secondary,
    QuestionsSecondary,
  },
  computed: {
    questions() {
      return [
        ...this.$store.state.tercero.questionsMain,
        ...this.$store.state.tercero.questionsSecondary,
      ];
    },
    isDisabled() {
      let disabled = false;
      this.questions.map((question) => {
        if (question.selectedOptions === "") {
          disabled = true;
          return;
        }
      });

      return disabled;
    },
  },
  methods: {
    save() {
      const body = this.questions.map((question) => {
        const field = {};
        field[`pregunta-${question.number}`] = question.selectedOptions;
        return field;
      });

      console.log(body);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  width: 100%;
  padding: 3rem 1.5rem;
  font-size: 25px;
  text-justify: justify;
  margin-bottom: -80px;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
}
</style>