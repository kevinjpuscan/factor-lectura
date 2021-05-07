<template>
  <button :class="`button ${extend}`" :disabled="disabled" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    extend() {
      return this.extended ? "extended" : "";
    },
  },
  methods: {
    click(event) {
      this.$emit("click", event);
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  &:disabled {
    background: rgb(224, 224, 224);
    color: rgb(119, 119, 119);
    border: 1px solid rgb(224, 224, 224);
  }

  &:hover {
    background: var(--principal-light);
    border: 1px solid var(--principal-color);
  }
  @media only screen and (max-width: 800px) {
    padding: 1rem 3rem;
  }
  padding: 1.5rem 4.5rem;
  border-radius: 8px;
  background: var(--principal-color);
  border: 1px solid var(--principal-dark);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.extended {
  width: 100%;
}
</style>