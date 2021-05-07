<template>
  <div class="container-questions">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container-questions {
  @media only screen and (max-width: 800px) {
    padding: 2rem 0;
  }
  padding: 5rem 0;
  min-height: 100vh;
  background: rgb(250, 250, 250);
}
</style>