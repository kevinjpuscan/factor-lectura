<template>
  <div>
    <div class="question">
      <div class="question__number">{{ number }}.</div>
      <div>
        <div class="question__question">{{ question }}</div>
        <div class="question__question"></div>
        <div v-for="(detail, index) in details" :key="index">
          {{ detail }}
        </div>
        <div v-if="image" class="question-images">
          <div class="question__title-image">{{ image.title }}</div>
          <img :src="`/_nuxt/assets/images/${image.src}`" :alt="image.title" />
        </div>
        <div v-if="description" class="question__question">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: "1",
    },
    question: {
      type: String,
      default: "?",
    },
    details: {
      type: Array,
      default: () => [],
    },
    image: {
      type: Object,
      default: () => null,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.question {
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
  display: flex;
  font-weight: 400;
  font-size: 24px;

  .question__number {
    font-weight: 600;
    color: gray;
    margin-right: 0.5rem;
  }

  .question__question {
    font-weight: 400;
    color: rgb(38, 38, 39);
  }
  .question__title-image {
    @media only screen and (max-width: 800px) {
      font-size: 12px;
    }
    font-size: 16px;
    text-align: center;
  }
}
</style>