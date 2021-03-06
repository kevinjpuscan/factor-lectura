export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question:
        "Antes de iniciar una lectura, ¿respondes un conjunto de preguntas propuestas por el docente relacionados con el tema que leerán?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question:
        "¿El docente antes de empezar la lectura te propone un reto o dificultad que te hace pensar y razonar, para luego dar solución con la lectura?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question:
        "¿En la sesión de lectura, el propósito es presentado en forma verbal o escrita por el docente?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question:
        "¿Durante tu sesión de lectura, el docente se mantiene cerca y absuelve tus dificultades que presentas en forma oportuna y precisa?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question:
        "¿Durante la lectura, el docente promueve la lectura silenciosa, en voz alta, en cadena y otros?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "6",
      question:
        "Durante la lectura, ¿el docente promueve actividades como el sumillado, el subrayado, el resaltado, para identificar la idea principal, escenarios, personajes entre otros?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question:
        "¿Tus clases de lectura son realizadas en forma activa e interesante, durante todo el proceso?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "8",
      question:
        "Después de la lectura, ¿el docente te orienta que realices un resumen, organizador gráfico, cuestionario, opinión crítica, entre otros sobre el tema leído?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question:
        "¿Después de la lectura, el docente te entrega una ficha para verificar si has comprendido o no sobre el tema o lectura tratada?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question:
        "Para promover la lectura fuera del aula, ¿tu docente te propone algunas estrategias como: La maleta viajera, Préstamo de libros, La noticia del día, El mejor informativo del aula, entre otros?",
      alternatives: [
        { option: "SI", label: "SI" },
        { option: "NO", label: "NO" },
      ],
      selectedOptions: "",
    },
  ],
})

export const mutations = {
  selectedOption(state, { number, option, questionsArray }) {
    state[questionsArray].map(question => {
      if (question.number === number) {
        question.selectedOptions = option
      }
    })

  }
}