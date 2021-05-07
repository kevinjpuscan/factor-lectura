<template>
  <Wrapper>
    <div class="title-text">
      <slot />
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../ui/Wrapper";
export default {
  name: "TitleText",
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss" scoped>
.title-text {
  @media only screen and (max-width: 800px) {
    padding: 2rem 0;
    font-size: 32px;
  }
  padding: 2rem 0;
  font-weight: 600;
  font-size: 42px;
}
</style>