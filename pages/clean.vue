<template>
  <div>Limpiando</div>
</template>

<script>
import LOCAL_KEYS from "@/constants/localKeys";
import localStorage from "@/utils/local-storage";

export default {
  mounted() {
    this.cleanInfo();
  },
  methods: {
    cleanInfo() {
      localStorage.clear(LOCAL_KEYS.PERSON);
      this.$router.push("/");
    },
  },
};
</script>