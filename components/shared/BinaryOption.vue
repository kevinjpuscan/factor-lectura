<template>
  <div class="binary-option">
    <div
      v-for="(alternative, index) in options"
      :class="`alternative ${alternative.active ? 'active' : ''}`"
      :key="index"
      @click="selectOption(alternative.option)"
    >
      {{ alternative.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alternatives: {
      type: Array,
      default: () => [
        {
          option: "SI",
          label: "SI",
        },
        { option: "NO", label: "NO" },
      ],
    },
    number: {
      type: String,
      default: "0",
    },
    store: {
      type: String,
      default: "",
    },
    questionsArray: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    optionSelected: "",
  }),
  computed: {
    options() {
      return this.alternatives.map((alternative) => {
        return {
          ...alternative,
          active: alternative.option === this.optionSelected,
        };
      });
    },
  },
  methods: {
    selectOption(option) {
      this.optionSelected = option;
      this.$store.commit(this.store, {
        number: this.number,
        option,
        questionsArray: this.questionsArray,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.binary-option {
  display: flex;
  align-items: center;
  justify-content: center;
}
.alternative {
  @media only screen and (max-width: 800px) {
    min-width: 100px;
    min-height: 100px;
    font-size: 30px;
    border-radius: 8px;
  }
  &:hover {
    background: rgb(238, 237, 237);
    color: black;
    transition: 0.4s;
  }

  border-radius: 10px;
  min-width: 150px;
  min-height: 150px;
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(224, 224, 224);
  background: white;
  color: gray;
  margin: 1rem;
}
.active,
.active:hover {
  transition: 0.5s;
  background: var(--principal-color);
  border: 1px solid var(--principal-dark);
  color: white;
}
</style>