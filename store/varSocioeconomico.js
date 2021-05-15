export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "Sexo",
      alternatives: [
        { option: "A", label: "Hombre" },
        { option: "B", label: "Mujer" },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question: "¿Su hogar está integrado por las siguientes personas?",
      alternatives: [
        { option: "A", label: "Usted, esposa(o) e hijos o Usted e hijos." },
        { option: "B", label: "Usted, esposa(o) e hijos, un abuelo o un tío." },
        { option: "C", label: "Usted, esposa(o) e hijos, un abuelo o un tío y otra persona que no es familia." },
        { option: "D", label: "Usted y otras personas que no son parientes." },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question: "¿Cuál es su estado civil o conyugal?  ",
      alternatives: [
        { option: "A", label: "conviviente." },
        { option: "B", label: "casado(a)." },
        { option: "C", label: "viudo (a)." },
        { option: "D", label: "divorciado (a)." },
        { option: "E", label: "separado (a)." },
        { option: "F", label: "soltero(a). " }
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question: "La vivienda que ocupa su hogar es:",
      alternatives: [
        { option: "A", label: "Alquilada." },
        { option: "B", label: "Propia comprándola a plazos." },
        { option: "C", label: "b)	Propia totalmente pagada." },
        { option: "D", label: "Otorgado por otro hogar o institución." },
        { option: "E", label: "Otra forma." },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question: "El tipo de su vivienda es:",
      alternatives: [
        { option: "A", label: "Casa independiente." },
        { option: "B", label: "Departamento en edificio." },
        { option: "C", label: "Choza." },
        { option: "D", label: "Vivienda improvisada." },
        { option: "E", label: "Local no destinado para vivienda humana." },
      ],
      selectedOptions: "",
    },
    {
      number: "6",
      question: "El material predominante en las paredes de su vivienda es",
      alternatives: [
        { option: "A", label: "Ladrillo o bloque de cemento." },
        { option: "B", label: "Piedra con barro." },
        { option: "C", label: "Adobe." },
        { option: "D", label: "Tapia." },
        { option: "E", label: "Madera" },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question: "El material predominante en los pisos de su vivienda es",
      alternatives: [
        { option: "A", label: "Parquet o madera pulida." },
        { option: "B", label: "Loseta o cerámica." },
        { option: "C", label: "Madera (entablada)." },
        { option: "D", label: "Cemento pulido o cemento con ocre." },
        { option: "E", label: "Tierra." },
      ],
      selectedOptions: "",
    },
    {
      number: "8",
      question: "El material predominante en los techos de su vivienda es:",
      alternatives: [
        { option: "A", label: "Concreto armado (cemento y fierro)." },
        { option: "B", label: "Tejas." },
        { option: "C", label: "Planchas de calamina." },
        { option: "D", label: "Planchas de eternit." },
        { option: "E", label: "Otro material." },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question: "El agua que utiliza en su hogar procede principalmente de:",
      alternatives: [
        { option: "A", label: "Red pública fuera de la vivienda." },
        { option: "B", label: "Caño o pileta de usos púbico." },
        { option: "C", label: "Pozo (agua subterránea)." },
        { option: "D", label: "Puquio o manantial." },
        { option: "E", label: "Río, acequia, lago o laguna." },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "¿Cuál es el tipo de alumbrado que tiene en su hogar:",
      alternatives: [
        { option: "A", label: "Electricidad." },
        { option: "B", label: "Gas." },
        { option: "C", label: "Panel solar." },
        { option: "D", label: "Vela." },
        { option: "E", label: "Mechero." },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question: "¿Cuál es el combustible que usa en el hogar para cocinar sus alimentos?",
      alternatives: [
        { option: "A", label: "Electricidad." },
        { option: "B", label: "Gas (balón GLP)." },
        { option: "C", label: "Carbón." },
        { option: "D", label: "Gas natural (sistema de tubería)." },
        { option: "E", label: "Madera leña." },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question: "Los servicios higiénicos que tiene en su domicilio están conectados a:",
      alternatives: [
        { option: "A", label: "Red pública de desagüe fuera de la vivienda." },
        { option: "B", label: "Letrina." },
        { option: "C", label: "Pozo séptico, tanque séptico o biodigestor." },
        { option: "D", label: "Acequia o canal." },
        { option: "E", label: "Campo abierto o aire libre." },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question: "Cuenta con teléfono móvil, ¿de qué operador?",
      alternatives: [
        { option: "A", label: "Movistar" },
        { option: "B", label: "Claro" },
        { option: "C", label: "Bitel" },
        { option: "D", label: "Entel" },
        { option: "E", label: "No cuenta con este servicio." },
      ],
      selectedOptions: "",
    },
    {
      number: "14",
      question: "¿Su hijo realiza alguna de estas actividades para apoyar económicamente en la familia?",
      alternatives: [
        { option: "A", label: "Vende periódicos." },
        { option: "B", label: "Vende panes, caramelos." },
        { option: "C", label: "Carga cosas en carretilla (mercado)." },
        { option: "D", label: "Otras actividades diversas." },
        { option: "E", label: "No realiza ninguna actividad." },
      ],
      selectedOptions: "",
    },
    {
      number: "15",
      question: "En la actualidad Ud. se encuentra laborando en:",
      alternatives: [
        { option: "A", label: "Sector estatal." },
        { option: "B", label: "Sector privado." },
        { option: "C", label: "Sector independiente." },
        { option: "D", label: "Labores eventuales diversas." },
        { option: "E", label: "En ninguno." },
      ],
      selectedOptions: "",
    },
    {
      number: "16",
      question: "¿A qué actividad económica se dedica para obtener ingresos económicos?",
      alternatives: [
        { option: "A", label: "Comercio." },
        { option: "B", label: "Transportes y comunicación." },
        { option: "C", label: "Construcción." },
        { option: "D", label: "Agricultura/minería." },
        { option: "E", label: "Empleado público o privado" },
        { option: "F", label: "Otras actividades" },
      ],
      selectedOptions: "",
    },
    {
      number: "17",
      question: "¿Cuál es su ingreso económico familiar promedio al mes?",
      alternatives: [
        { option: "A", label: "de 0 a 500 soles." },
        { option: "B", label: "de 501 a 1000 soles." },
        { option: "C", label: "de 1001 a 2000 soles." },
        { option: "D", label: "de 2000 a 3000 soles." },
        { option: "E", label: "de 3000 soles a más" },
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