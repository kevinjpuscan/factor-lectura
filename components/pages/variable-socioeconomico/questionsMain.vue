<template>
  <div>
    <ContainterQuestions>
      <TitleText>CUESTIONARIO – VARIABLE FACTOR SOCIOECONÓMICO</TitleText>
      <TitleText>FAMILIA HOGAR</TitleText>
      <Wrapper>
        <card-question
          v-for="(
            question, index
          ) in this.$store.state.varSocioeconomico.questionsMain.slice(0, 3)"
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
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>

      <TitleText>VIVIENDA</TitleText>
      <Wrapper>
        <card-question
          v-for="(
            question, index
          ) in this.$store.state.varSocioeconomico.questionsMain.slice(3, 8)"
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
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>

      <TitleText>SERVICIOS</TitleText>
      <Wrapper>
        <card-question
          v-for="(
            question, index
          ) in this.$store.state.varSocioeconomico.questionsMain.slice(8, 13)"
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
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
        </card-question>
      </Wrapper>

      <TitleText>INGRESOS ECONÓMICOS</TitleText>
      <Wrapper>
        <card-question
          v-for="(
            question, index
          ) in this.$store.state.varSocioeconomico.questionsMain.slice(13, 17)"
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
            store="varSocioeconomico/selectedOption"
            questionsArray="questionsMain"
          />
          <option-text
            v-if="question.type === 'text'"
            :number="question.number"
            store="varSocioeconomico/selectedOption"
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