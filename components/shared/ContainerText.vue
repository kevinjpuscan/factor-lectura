<template>
  <div class="container-text">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container-text {
  @media only screen and (max-width: 800px) {
    padding: 2rem 0;
  }
  padding: 5rem 0;
  min-height: 100vh;
  background: white;
}
</style>