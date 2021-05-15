<template>
  <div>
    <ContainterQuestions>
      <TitleText>CUESTIONARIO – VARIABLE FACTOR CUTURAL</TitleText>
      <Wrapper>
        <card-question
          v-for="(question, index) in [
            this.$store.state.varCultural.questionsMain[0],
          ]"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />

          <alternative-multiple
            v-if="!question.type"
            :alternatives="question.alternatives"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>

      <TitleText>NIVEL EDUCATIVO</TitleText>
      <Wrapper>
        <card-question
          v-for="(question, index) in [
            this.$store.state.varCultural.questionsMain[1],
          ]"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />

          <alternative-multiple
            v-if="!question.type"
            :alternatives="question.alternatives"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>

      <TitleText>COSTRUMBRES</TitleText>
      <Wrapper>
        <card-question
          v-for="(
            question, index
          ) in this.$store.state.varCultural.questionsMain.slice(2, 7)"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />

          <alternative-multiple
            v-if="!question.type"
            :alternatives="question.alternatives"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>

      <TitleText>HABITO LECTOR</TitleText>
      <Wrapper>
        <card-question
          v-for="(
            question, index
          ) in this.$store.state.varCultural.questionsMain.slice(7, 13)"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />

          <alternative-multiple
            v-if="!question.type"
            :alternatives="question.alternatives"
            :number="question.number"
            store="varCultural/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varCultural/selectedOption"
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
import AlternativeMultiple from "../../shared/AlternativeMultiple";
import Wrapper from "../../ui/Wrapper";
import TitleText from "../../shared/TitleText";
import OptionText from "../../shared/OptionText";

export default {
  components: {
    ContainterQuestions,
    CardQuestion,
    TextQuestion,
    AlternativeMultiple,
    Wrapper,
    TitleText,
    OptionText,
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0;
}
</style>