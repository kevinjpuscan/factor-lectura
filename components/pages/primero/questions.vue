<template>
  <div>
    <ContainterQuestions>
      <Wrapper>
        <card-question
          v-for="(question, index) in this.$store.state.primero.questionsMain"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />
          <alternative-multiple
            :alternatives="question.alternatives"
            :number="question.number"
            store="primero/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>
    </ContainterQuestions>
    <ImageSection />
    <ContainterQuestions>
      <Wrapper>
        <card-question
          v-for="(question, index) in this.$store.state.primero
            .questionsSecondary"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
          />
          <alternative-multiple
            :alternatives="question.alternatives"
            :number="question.number"
            store="primero/selectedOption"
            questionsArray="questionsSecondary"
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
import ImageSection from "./ImageSection";
import BinaryOption from "../../shared/BinaryOption";
import OptionText from "../../shared/OptionText";

export default {
  components: {
    ContainterQuestions,
    CardQuestion,
    TextQuestion,
    AlternativeMultiple,
    Wrapper,
    ImageSection,
    BinaryOption,
    OptionText,
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0;
}
</style>