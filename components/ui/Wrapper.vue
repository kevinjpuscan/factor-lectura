<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 0 30rem;

  @media only screen and (max-width: 2048px) {
    padding: 0 20rem;
  }
  @media only screen and (max-width: 1400px) {
    padding: 0 10rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 0 1.5rem;
  }
}
</style>