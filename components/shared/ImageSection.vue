<template>
  <wrapper>
    <img :src="imgFile" :alt="imgName" class="image" />
  </wrapper>
</template>

<script>
import Wrapper from "../ui/Wrapper";
export default {
  props: {
    imgFile: {
      type: String,
      default: () => "",
    },
    imgName: {
      type: String,
      default: "",
    },
  },
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
  width: 100%;
}
</style>