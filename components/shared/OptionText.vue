<template>
  <div>
    <input
      class="text"
      type="text"
      placeholder="Escribe tu respuesta"
      v-model="optionSelected"
    />
  </div>
</template>

<script>
export default {
  props: {
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
  watch: {
    optionSelected(val) {
      this.$store.commit(this.store, {
        number: this.number,
        option: val,
        questionsArray: this.questionsArray,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  &:focus {
    outline-color: transparent;
    border-bottom: 2px solid var(--principal-color);
    outline-style: none;
  }

  &::placeholder {
    font-weight: 200;
    color: rgb(177, 177, 177);
  }
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
  font-size: 32px;
  border: none;
  border-bottom: 1px solid var(--principal-light);
  width: 100%;
  padding: 0.2rem 0;
  margin: 1rem 0;
  outline-color: transparent;
}
</style>