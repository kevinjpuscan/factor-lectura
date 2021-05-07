<template>
  <div class="card-question">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-question {
  @media only screen and (max-width: 800px) {
    padding: 1.5rem;
  }
  padding: 2rem 5rem;
  background: white;
  color: rgb(38, 38, 39);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px;
  overflow: hidden;
}
</style>