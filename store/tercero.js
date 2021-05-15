export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "En el siguiente cuadro, se presentan los hechos en forma desordenada. Elige una alternativa que considere la secuencia de lo sucedido en el relato.",
      image: {
        src: "tabla.png",
      },
      alternatives: [
        { option: "A", label: "1 - 2 - 3 - 4 - 5" },
        { option: "B", label: "4 - 3 - 1 - 5 - 2 " },
        { option: "C", label: "4 - 5 - 1 - 3 - 2" },
        { option: "D", label: "3 - 5 - 2 - 1 - 4" },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question: "El esfuerzo intelectual dice que retrasa el alzhéimer, así que leeremos un par de horas todos los días, dice: ",

      alternatives: [
        { option: "A", label: "Emilio" },
        { option: "B", label: "Miguel" },
        { option: "C", label: "Juan" },
        { option: "D", label: "Emilio y Miguel " },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question: "En la lectura, se habla de un lugar denominado el “piso de impedidos”. ¿A quiénes podemos encontrar ahí?",

      alternatives: [
        { option: "A", label: "A los que están declarados por fallecer." },
        { option: "B", label: "A la enfermera y los pacientes." },
        { option: "C", label: "A los que han perdido la memoria. " },
        { option: "D", label: "A los ancianos que requieren ayuda y leen mucho." },
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question: "De acuerdo a la lectura, ¿qué representa en nuestra sociedad ser impedido?",

      alternatives: [
        { option: "A", label: "Ser una persona que estorba siempre. " },
        { option: "B", label: "Ser una persona que no aporta a la comunidad." },
        { option: "C", label: "Ser una persona inclusiva o con discapacidad, pero trabaja muy bien. " },
        { option: "D", label: "Ser una persona que pierde su identidad." },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question: "Según el texto, se puede llegar a la siguiente conclusión:",

      alternatives: [
        { option: "A", label: "Miguel y Emilio aplican estrategias lectoras para retener lo que leen." },
        { option: "B", label: "Miguel y Emilio se ayudan mutuamente para evitar el alzhéimer." },
        { option: "C", label: "Miguel ayuda a Emilio para mermar la enfermedad de Alzheimer." },
        { option: "D", label: "Emilio ayuda a Miguel a evitar agudizar la enfermedad de Alzheimer." },
      ],
      selectedOptions: "",
    },
    {
      number: "6",
      question: "Se evidencia que una persona está con alzhéimer cuando:",

      alternatives: [
        { option: "A", label: "Se observa la recuperación de la memoria a largo plazo." },
        { option: "B", label: "Se observa la recuperación de la memoria a corto plazo." },
        { option: "C", label: "Se observa la pérdida de memoria a corto plazo." },
        { option: "D", label: "Se observa que no pierde la memoria solo ocasionalmente." },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question: "Algunos hijos consideran que es mejor dejar a sus padres ancianos al cuidado y atención de un asilo, ¿qué opinas de esta decisión?",

      alternatives: [
        { option: "A", label: "No es correcto porque creo que los hijos tenemos la obligación de cuidar a nuestros padres ancianos, además ellos dieron todo por nosotros." },
        { option: "B", label: "Si es correcto por que los padres ancianos quitan mucho tiempo para atenderlos, además son muy molestosos." },
        { option: "C", label: "No es correcto por que los padres ancianos deben seguir sirviendo a los hijos hasta el día que ellos tengan vida." },
        { option: "D", label: "solo a y b." },
      ],
      selectedOptions: "",
    },
  ],
  questionsSecondary: [
    {
      number: "8",
      question: "¿Cuáles son las dos formas de comercio ambulatorio?",
      alternatives: [
        { option: "A", label: "Los conglomerados y las paraditas." },
        { option: "B", label: "El comunal y el familiar." },
        { option: "C", label: "El vecinal y el local." },
        { option: "D", label: "Concentraciones y paraditas." },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question: "De acuerdo al texto, ¿por qué se dice que el comerciante ambulante está marcado por la supervivencia?",
      alternatives: [
        { option: "A", label: "Porque debe trabajar como informal para mantener una familia." },
        { option: "B", label: "Porque es una actividad informal que se desarrolla en las calles." },
        { option: "C", label: "Porque de él depende satisfacer sus necesidades para vivir." },
        { option: "D", label: "Porque logra mantenerse ante situaciones adversas." },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "¿Qué quiere decir la expresión subrayada en el siguiente texto?",
      image: {
        src: 'frase-2.png'
      },
      alternatives: [
        { option: "A", label: "Se refiere a una zona o lugar que ocupan los ambulantes." },
        { option: "B", label: "Se refiere a una zona comercial del Centro Histórico de Lima." },
        { option: "C", label: "Se refiere al plano de la ciudad de Lima, capital del Perú." },
        { option: "D", label: "Se refiere a las características de la ciudad de Lima." },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question: "Relaciona los párrafos con su correspondiente subtema y marca la alternativa correcta.",
      image: {
        src: "relacion.png",
      },
      alternatives: [
        { option: "A", label: "II A - III B - I C " },
        { option: "B", label: "III C - II B - I A " },
        { option: "C", label: "III A - II C - I B" },
        { option: "D", label: "I B - II A - III C" },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question: "En la expresión: El comercio ambulatorio es un problema latente en nuestra sociedad y se da no solo en la capital sino en las principales ciudades de nuestro país. Esta afirmación no lleva a concluir ",
      alternatives: [
        { option: "A", label: "El comercio ambulatorio es una actividad formal que se realiza en la vía publica" },
        { option: "B", label: "El comercio ambulatorio es una actividad informal que se da en la vía pública" },
        { option: "C", label: "El comercio ambulatorio es una actividad informal que se da dentro los supermercados" },
        { option: "D", label: "El comercio ambulatorio es una actividad informal que solo se produce en Lima" },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question: "Si un gobierno de turno diera solución al problema del comercio ambulatorio:",
      alternatives: [
        { option: "A", label: "Disminuyera la gente en las calles de la ciudad." },
        { option: "B", label: "Se ordenaría el tráfico vehicular." },
        { option: "C", label: "Mejoraría las condiciones de vida de muchas familias." },
        { option: "D", label: "Mejoraría las ventas y aumentaran las tiendas comerciales." },
      ],
      selectedOptions: "",
    },
    {
      number: "14",
      question: "¿Cuál fue la intención del autor al escribir este texto?",
      alternatives: [
        { option: "A", label: "Presentar al comercio ambulatorio como una alternativa de desarrollo" },
        { option: "B", label: "Presentar al comercio ambulatorio como una actividad negativa para generar economía" },
        { option: "C", label: "Presentar al comercio ambulatorio como una de las fuentes de desarrollo personal y familiar" },
        { option: "D", label: "Presentar al comercio ambulatorio como un problema nacional que necesita urgente solución" },
      ],
      selectedOptions: "",
    },
    {
      number: "15",
      question: "Si fueras una autoridad de tu localidad, ¿qué harías con el comercio ambulatorio? Explica tu respuesta",
      alternatives: [
        { option: "A", label: "Si fuera una autoridad, lo que haría con el comercio ambulatorio es sacra de las calles y enviarles a sus casas a fin de que no incomoden en la vía pública." },
        { option: "B", label: "Si fuera una autoridad, lo que haría con el comercio ambulatorio es formalizarlo para que brinden un verdadero servicio respetando las vías públicas, porque todos tenemos derecho de vivir en una ciudad ordenada." },
        { option: "C", label: "Si fuera una autoridad, lo que haría con el comercio ambulatorio, aplicar multas muy fuertes de esa manera eviten de salir a vender en las calles." },
        { option: "D", label: "Si fuera una autoridad, lo que haría con el comercio ambulatorio, dialogaría con todos los comerciantes para llegar a un acuerdo y abandonen la vía pública y trabajen por las noches." },
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