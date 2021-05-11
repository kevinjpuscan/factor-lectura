<template>
  <div>
    <ContainterQuestions>
      <Wrapper>
        <card-question
          v-for="(question, index) in this.$store.state.cuarto
            .questionsSecondary"
          class="card"
          :key="index"
        >
          <text-question
            :number="question.number"
            :question="question.question"
            :image="question.image"
            :description="question.description"
            :details="question.details"
          />
          <alternative-multiple
            :alternatives="question.alternatives"
            :number="question.number"
            store="cuarto/selectedOption"
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

export default {
  components: {
    ContainterQuestions,
    CardQuestion,
    TextQuestion,
    AlternativeMultiple,
    Wrapper,
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0;
}
</style>