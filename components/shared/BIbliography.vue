<template>
  <Wrapper>
    <div class="bibliography">
      <slot />
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../ui/Wrapper";
export default {
  components: { Wrapper },
};
</script>

<style lang="scss" scoped>
.bibliography {
  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }
  color: gray;
  font-weight: 300;
  font-size: 14px;
  text-align: right;
  width: 100%;
}
</style>
