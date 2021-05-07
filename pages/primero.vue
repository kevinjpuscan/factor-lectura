<template>
  <div>
    <Main />
    <Questions />

    <Wrapper>
      <div class="actions">
        <Button extended>Enviar Respuestas</Button>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import Main from "../components/pages/primero/main";
import Questions from "../components/pages/primero/questions.vue";
import Button from "../components/ui/Button";
import Wrapper from "../components/ui/Wrapper";

export default {
  components: {
    Main,
    Questions,
    Button,
    Wrapper,
  },
};
</script>

<style lang="scss" scoped>
p {
  width: 100%;
  padding: 3rem 1.5rem;
  font-size: 25px;
  text-justify: justify;
  margin-bottom: -80px;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
}
</style>