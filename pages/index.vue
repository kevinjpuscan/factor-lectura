<template>
  <div class="container">
    <section class="header">
      <h2>UNIVERSIDAD NACIONAL DE CAJAMARCA</h2>
      <h3>ESCUELA DE POSGRADO</h3>
      <img :src="require('~/assets/images/unc.png')" alt="unc logo" />
      <h3>UNIDAD DE POSGRADO DE LA FACULTAD DE EDUCACIÓN</h3>
      <h3>DOCTORADO EN CIENCIAS MENCION: EDUCACIÓN</h3>
      <a href="#main" class="link">Empezar</a>
    </section>
    <section class="main" id="main">
      <div v-if="!isRegistered" class="form">
        <Wrapper>
          <div class="form-group">
            <label for="name student">Estudiante:</label>
            <input v-model="student" class="input-text" type="text" value="" />
          </div>

          <div class="form-group">
            <label for="name student">Padre de familia:</label>
            <input v-model="father" class="input-text" type="text" value="" />
          </div>

          <div class="form-group">
            <label for="name student">Grado y Sección:</label>
            <div class="inline">
              <select
                v-model="indexGradoSelected"
                name="grado"
                class="input-text"
                id="grado"
              >
                <option
                  v-for="(grado, index) in grados"
                  :key="index"
                  :value="index"
                >
                  {{ grado.label }}
                </option>
              </select>
              <select
                v-model="sectionSelected"
                name="seccion"
                class="input-text"
                id="grado"
              >
                <option
                  v-for="(section, index) in sections"
                  :key="index"
                  :value="section"
                >
                  {{ section }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <button @click="save" class="btn-main">Registrar</button>
          </div>
        </Wrapper>
      </div>

      <div v-else>
        <div class="personal-info"></div>
        <div class="evaluation">
          <a :href="evaluationLink" class="link-main"> Evaluación </a>
        </div>
        <div class="cuestionaries">
          <a href="/variable-ambiental" class="link-secondary">
            Variable Ambiental</a
          >
          <a href="/variable-cultural" class="link-secondary">
            Variable Cultural</a
          >
          <a href="/variable-socioeconomico" class="link-secondary">
            Variable Socieconómico</a
          >
          <a href="/variable-pedagogica" class="link-secondary">
            Variable Pedagógica</a
          >
        </div>

        <div>
          <button v-if="isTestMode" @click="cleanInfo">Limpiar</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Wrapper from "@/components/ui/Wrapper";
import LOCAL_KEYS from "@/constants/localKeys";
import localStorage from "@/utils/local-storage";

export default {
  components: { Wrapper },
  data: () => ({
    info: {},
    isRegistered: false,
    student: "",
    father: "",
    grados: [
      {
        label: "Primero",
        sections: ["A", "B", "C"],
      },
      {
        label: "Segundo",
        sections: ["A", "B"],
      },
      {
        label: "Tercero",
        sections: ["A", "B"],
      },
      {
        label: "Cuarto",
        sections: ["A", "B"],
      },
      {
        label: "Quinto",
        sections: ["A", "B", "C"],
      },
    ],
    indexGradoSelected: 0,
    sections: ["A", "B", "C"],
    sectionSelected: "A",
  }),
  mounted() {
    const css = `
      html {
        scroll-behavior: smooth;
      }
    `;
    this.styleTag = document.createElement("style");
    this.styleTag.appendChild(document.createTextNode(css));
    document.head.appendChild(this.styleTag);
    this.getPersonData();
  },
  destroyed() {
    this.styleTag.remove();
  },
  computed: {
    evaluationLink() {
      return "/" + this.grados[Number(this.info.grado) - 1].label.toLowerCase();
    },
    isTestMode() {
      if (!this.info.estudiante) {
        return false;
      }
      if (this.info.estudiante === "test") {
        return true;
      }
      return false;
    },
  },
  watch: {
    indexGradoSelected: function (val) {
      this.sections = this.grados[val].sections;
    },
  },
  methods: {
    save() {
      if (!this.student || !this.father) {
        alert("Completar todos los campos");
        return;
      }
      const info = {
        estudiante: this.student,
        padre: this.father,
        grado: Number(this.indexGradoSelected) + 1,
        seccion: this.sectionSelected,
      };
      this.info = info;
      localStorage.save(LOCAL_KEYS.PERSON, info);
      this.isRegistered = true;
    },
    getPersonData() {
      const infoPerson = localStorage.get(LOCAL_KEYS.PERSON);
      if (infoPerson) {
        this.isRegistered = true;
        this.info = infoPerson;
      }
    },
    cleanInfo() {
      this.info = {};
      this.isRegistered = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  color: var(--principal-color);
  margin: 1rem 0;
  font-size: 1.7rem;
  font-weight: 700;
}
.form {
  width: 100%;
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .header,
  .main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    img {
      max-width: 100px;
      margin: 1rem 0;
    }
  }
  .main {
    background: rgb(243, 243, 243);
  }
}
</style>
