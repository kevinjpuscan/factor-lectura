<template>
  <div>
    <Main />
    <QuestionsMain />
    <secondary />
    <QuestionsSecondary />
    <Tertiary />
    <QuestionsTertiary />

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
import Main from "../components/pages/quinto/main";
import QuestionsMain from "../components/pages/quinto/questionsMain.vue";
import Button from "../components/ui/Button";
import Wrapper from "../components/ui/Wrapper";
import Secondary from "../components/pages/quinto/secondary";
import QuestionsSecondary from "../components/pages/quinto/questionsSecondary.vue";
import Tertiary from "../components/pages/quinto/tertiary";
import QuestionsTertiary from "../components/pages/quinto/questionsTertiary";

import localStorage from "@/utils/local-storage";
import repository from "@/utils/repository";
import LOCAL_KEYS from "@/constants/localKeys";

export default {
  components: {
    Main,
    QuestionsMain,
    Button,
    Wrapper,
    Secondary,
    QuestionsSecondary,
    Tertiary,
    QuestionsTertiary,
  },
  data: () => ({
    info: {},
    loading: false,
  }),
  mounted() {
    this.getInfoPerson();
  },
  computed: {
    questions() {
      return [
        ...this.$store.state.quinto.questionsMain,
        ...this.$store.state.quinto.questionsSecondary,
        ...this.$store.state.quinto.questionsTertiary,
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

      return disabled || this.loading;
    },
  },
  methods: {
    async save() {
      this.loading = true;
      const data = this.questions.reduce((field, question) => {
        field[`pregunta-${question.number}`] = question.selectedOptions;
        return field;
      }, {});

      const body = {
        records: [
          {
            fields: {
              ...this.info,
              ...data,
            },
          },
        ],
      };
      let response = await repository.save("/quinto", body);
      this.loading = false;
      if (response.status === 200) {
        this.$router.push("/#main");
      }
    },
    getInfoPerson() {
      const info = localStorage.get(LOCAL_KEYS.PERSON);
      if (!info) {
        this.$router.push("/#main");
      }
      this.info = info;
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