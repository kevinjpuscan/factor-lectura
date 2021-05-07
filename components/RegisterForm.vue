<template>
  <div>
    <b-field label="Estudiante">
      <b-input value=""></b-input>
    </b-field>
    <b-field label="Padre">
      <b-input value=""></b-input>
    </b-field>
    <b-field label="Grado y sección">
      <b-select placeholder="Grado" v-model="indexGradoSelected" required>
        <option v-for="(grado, index) in grados" :value="index" :key="index">
          {{ grado.label }}
        </option>
      </b-select>

      <b-select placeholder="A/B/C" v-model="sectionSelected" required>
        <option
          v-for="(section, index) in sections"
          :value="section"
          :key="index"
        >
          {{ section }}
        </option>
      </b-select>
    </b-field>

    <b-button type="is-primary" @click="logs">Primary</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      indexGradoSelected: null,
      sections: [],
      sectionSelected: "",
    };
  },
  watch: {
    indexGradoSelected: function (val) {
      this.sections = this.grados[val].sections;
    },
  },
  methods: {
    logs() {
      console.log("holaMUndo");
      console.log(this.indexGradoSelected);
    },
  },
};
</script>