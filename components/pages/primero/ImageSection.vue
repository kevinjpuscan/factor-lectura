<template>
  <wrapper>
    <img src="~/assets/images/recibo.png" alt="recibo" class="image" />
  </wrapper>
</template>

<script>
import Wrapper from "../../ui/Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss" scoped>
.image {
  @media only screen and (max-width: 800px) {
    padding: 2rem 0;
  }
  padding: 5rem 0;
}
</style>