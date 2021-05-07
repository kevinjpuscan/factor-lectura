<template>
  <Wrapper>
    <div class="instruction">
      <slot />
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../ui/Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss" scoped>
.instruction {
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }

  font-weight: 600;
  font-size: 30px;
}
</style>