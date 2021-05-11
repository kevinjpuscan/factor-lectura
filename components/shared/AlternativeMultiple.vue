<template>
  <div class="alternative-multiple">
    <div
      v-for="(alternative, index) in options"
      :class="`alternative ${alternative.active ? 'active' : ''}`"
      :key="index"
      @click="selectOption(alternative.option)"
    >
      <div class="option">{{ alternative.option }}</div>
      <div class="label">{{ alternative.label }}</div>
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
          option: "A",
          label:
            "Alternativa A Alternativa A Alternativa AAlternativa AAlternativa AAlternativa AAlternativa AAlternativa AAlternativa AAlternativa AAlternativa AAlternativa A",
        },
        { option: "B", label: "Alternativa B" },
        { option: "C", label: "Alternativa C" },
        { option: "D", label: "Alternativa D" },
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
.alternative {
  &:hover {
    background: rgb(238, 237, 237);
    transition: 0.4s;

    .option {
      background: rgb(238, 237, 237);
      color: black;
    }
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border: 1px solid rgb(224, 224, 224);
  background: white;
  color: gray;
  margin: 0.5rem 0;

  .option {
    border: 2px solid rgb(224, 224, 224);
    min-width: 25px;
    min-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    margin-left: -0.5rem;
    background: white;
  }

  .label {
    color: gray;
    font-weight: 300;
  }
}
.active,
.active:hover {
  transition: 0.5s;
  background: var(--principal-color);
  border: 1px solid var(--principal-dark);
  .option {
    transition: 0.5s;
    background: var(--principal-color);
    border: 1px solid var(--principal-dark);
  }
  .option,
  .label {
    transition: 0.5s;
    color: white;
  }
}
</style>