<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @media only screen and (max-width: 800px) {
    padding: 0 1.5rem;
  }
  padding: 0rem 20rem;
}
</style>