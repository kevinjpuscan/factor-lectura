export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "Sexo:",
      alternatives: [
        { option: "A", label: "Hombre" },
        { option: "B", label: "Mujer" },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question: "¿Cuál es su nivel educativo?",
      alternatives: [
        { option: "A", label: "Sin nivel." },
        { option: "B", label: "Primaria." },
        { option: "C", label: "Secundaria." },
        { option: "D", label: "Superior no universitario." },
        { option: "E", label: "Superior universitario." },
      ],
      selectedOptions: "",
    },
    {
      type: "text",
      number: "3",
      question: "En su familia, ¿qué fiestas tradicionales celebran?",
      selectedOptions: "",
    },
    {
      type: "text",
      number: "4",
      question: "En su familia, ¿qué platos típicos de Cajamarca preparan en ocasiones especiales?",
      selectedOptions: "",
    },
    {
      type: "text",
      number: "5",
      question: "En su familia, ¿qué vestimenta típica de Cajamarca utilizan en ocasiones especiales? ",
      selectedOptions: "",
    },
    {
      type: "text",
      number: "6",
      question: "En su familia, ¿qué música de Cajamarca prefieren escuchar?",
      selectedOptions: "",
    },
    {
      type: "text",
      number: "7",
      question: "¿Qué textos o relatos de su localidad acostumbran a contar en su familia? ",
      selectedOptions: "",
    },
    {
      number: "8",
      question: "¿Le gusta leer?",
      alternatives: [
        { option: "A", label: "Nunca" },
        { option: "B", label: "Casi nunca" },
        { option: "C", label: "A veces" },
        { option: "D", label: "Casi siempre" },
        { option: "E", label: "Siempre" },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question: "¿En sus horas de descanso o tiempo libre le agrada leer? ",
      alternatives: [
        { option: "A", label: "Nunca" },
        { option: "B", label: "Casi nunca" },
        { option: "C", label: "A veces" },
        { option: "D", label: "Casi siempre" },
        { option: "E", label: "Siempre" },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "¿Acostumbra a leer por lo menos una hora diaria?",
      alternatives: [
        { option: "A", label: "Nunca" },
        { option: "B", label: "Casi nunca" },
        { option: "C", label: "A veces" },
        { option: "D", label: "Casi siempre" },
        { option: "E", label: "Siempre" },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question: "¿Realiza una lectura permanente en paneles, avisos, formularios, recetas, fechas de vencimiento, entre otros?",
      alternatives: [
        { option: "A", label: "Nunca" },
        { option: "B", label: "Casi nunca" },
        { option: "C", label: "A veces" },
        { option: "D", label: "Casi siempre" },
        { option: "E", label: "Siempre" },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question: "¿Prefiere leer textos en soporte virtual - celular o computadora (periódicos, revistas, libros, avisos, etc.)?",
      alternatives: [
        { option: "A", label: "Nunca" },
        { option: "B", label: "Casi nunca" },
        { option: "C", label: "A veces" },
        { option: "D", label: "Casi siempre" },
        { option: "E", label: "Siempre" },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question: "¿Prefiere leer textos en soporte físico (periódicos, revistas, libros, avisos, etc.)?",
      alternatives: [
        { option: "A", label: "Nunca" },
        { option: "B", label: "Casi nunca" },
        { option: "C", label: "A veces" },
        { option: "D", label: "Casi siempre" },
        { option: "E", label: "Siempre" },
      ],
      selectedOptions: "",
    },
  ]
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