<template>
  <Wrapper>
    <div class="section-text">
      <slot />
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../ui/Wrapper";
export default {
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss" scoped>
.section-text {
  @media only screen and (max-width: 800px) {
    font-size: 20px;
    padding-bottom: 1.5rem;
  }
  padding-bottom: 1rem;
  font-weight: 300;
  font-size: 24px;
  text-align: justify;
}
</style>
