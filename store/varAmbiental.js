export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "¿El lugar donde vive en la actualidad o donde se ubica su vivienda está integrado:",
      alternatives: [
        { option: "A", label: "de 1 a 499 habitantes? " },
        { option: "B", label: "de 500 a 1999 habitantes?" },
        { option: "C", label: "de 2000 a más habitantes?" },
      ],
      selectedOptions: "",
    },
    {
      type: "text",
      number: "2",
      question: "¿Cuántas habitaciones tiene en total su vivienda, sin contar baños, cocina, pasadizo, garaje?",
      selectedOptions: "",
    },
    {
      type: "text",
      number: "3",
      question: "¿Cuántas habitaciones se usan exclusivamente para dormir? ",
      selectedOptions: "",
    },
    {
      number: "4",
      question: "Su vivienda es ocupada por:",
      alternatives: [
        { option: "A", label: "Sus hijos menores Ud. y su esposa." },
        { option: "B", label: "Sus hijos menores Ud. y su esposa y su hijo con su esposa." },
        { option: "C", label: "Sus hijos menores Ud. y su esposa y sus hijos(as) con su esposa(os) u otros." },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question: "Cerca de su vivienda existen: ",
      alternatives: [
        { option: "A", label: "árboles, bosques." },
        { option: "B", label: "parques con plantas." },
        { option: "C", label: "no existe ninguno de estos espacios." },
      ],
      selectedOptions: "",
    },
  ],
  questionsSecondary: [
    {
      number: "6",
      question: "En el barrio o lugar donde vive realizan alguna de las siguientes acciones:",
      alternatives: [
        { option: "A", label: "Queman los residuos sólidos (basuras) constantemente." },
        { option: "B", label: "Usan vehículos que botan mucho humo." },
        { option: "C", label: "No se presentan ninguno de esos casos." },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question: "Para cocinar sus alimentos u otras actividades utilizan",
      alternatives: [
        { option: "A", label: "gas" },
        { option: "B", label: "leña, carbón" },
        { option: "C", label: "estiércol de animales" },
      ],
      selectedOptions: "",
    },
    {
      number: "8",
      question: "En el barrio o lugar donde vive se generan ruidos molestos como:",
      alternatives: [
        { option: "A", label: "talleres" },
        { option: "B", label: "vehículos, aviones" },
        { option: "C", label: "ninguno de estos" },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question: "En el barrio o lugar donde vive realizan actividades como: ",
      alternatives: [
        { option: "A", label: "En domicilios escuchan equipos en alto volumen." },
        { option: "B", label: "En la calle realizan yunzas, polladas." },
        { option: "C", label: "Ninguno de estas actividades." },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "En su vivienda los residuos sólidos (basura)",
      alternatives: [
        { option: "A", label: "Los recoge en una sola bolsa, saco u otro depósito." },
        { option: "B", label: "Los separa en depósitos diferentes (plásticos, papel y cartón, otros)." },
        { option: "C", label: "Los separa solo las botellas descartables." },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question: "En su hogar o vivienda qué hacen con los residuos sólidos (basura):",
      alternatives: [
        { option: "A", label: "Sacan y entregan al carro recolector." },
        { option: "B", label: "Separan y procesan para compost o abono." },
        { option: "C", label: "Eliminan al botadero o espacios libres." },
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