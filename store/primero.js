export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "El texto leído es de tipo:",
      alternatives: [
        { option: "A", label: "Argumentativo" },
        { option: "B", label: "Narrativo" },
        { option: "C", label: "Expositivo" },
        { option: "D", label: "Descriptivo" },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question:
        "El transportista que contó la historia en el texto leído fue:",
      alternatives: [
        { option: "A", label: "Don Guillermo" },
        { option: "B", label: "Don Grimaldo" },
        { option: "C", label: "Don Grabiel" },
        { option: "D", label: "Don Gaspar" },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question: "Según el texto, Virginia vivió en un pueblo llamado:",
      alternatives: [
        { option: "A", label: "Huancavelica." },
        { option: "B", label: "La Oroya." },
        { option: "C", label: "La Mejorada." },
        { option: "D", label: "Huancayo." },
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question: "¿Qué le sorprendió a Guillermo en el cementerio?",
      alternatives: [
        {
          option: "A",
          label: "Ver su casaca en un costado del nicho de la joven.",
        },
        {
          option: "B",
          label: "Ver su casaca sucia y maltratada después de mucho tiempo.",
        },
        {
          option: "C",
          label: "Encontrar a una mujer joven y bella en la carretera.",
        },
        {
          option: "D",
          label: "Saber que la joven estaba muerta hace muchos años",
        },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question:
        "¿Por qué el narrador sospechó que la historia podía ser cierta?",
      alternatives: [
        {
          option: "A",
          label:
            "Porque su abuelo también le había contado la misma historia.",
        },
        {
          option: "B",
          label: "Porque fue al cementerio a recuperar su casaca.",
        },
        {
          option: "C",
          label: "Porque investigó sobre Virginia y cómo murió.",
        },
        { option: "D", label: "Porque comprobó que virginia había muerto." },
      ],
      selectedOptions: "",
    },
    {
      number: "6",
      question: "¿Cual es el propósito del texto leído?",
      alternatives: [
        { option: "A", label: "Narrar un hecho misterioso." },
        { option: "B", label: "Narrar una noticia sucedida." },
        { option: "C", label: "Describir las características de un lugar." },
        { option: "D", label: "Argumenta sobre un tema muy importante." },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question:
        "¿Cuál es la intención del autor al utilizar los paréntesis en el texto leído?",
      alternatives: [
        { option: "A", label: "Para escribir los nombres de personajes" },
        {
          option: "B",
          label: "Para encerrar aclaraciones y hacer precisiones",
        },
        { option: "C", label: "Para cumplir con las reglas de ortografía" },
        {
          option: "D",
          label: "Para nombrar lugares importantes en la historia",
        },
      ],
      selectedOptions: "",
    },
  ],
  questionsSecondary: [
    {
      number: "8",
      question: "El emisor del recibo es:",
      alternatives: [
        { option: "A", label: "Grifos Soria S.A." },
        { option: "B", label: "Juan Orlando Gonzales Benites" },
        { option: "C", label: "Usuario, emisor y SUNAT" },
        { option: "D", label: "Juan Orlando Benites Gonzales" },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question: "El texto leído es",
      alternatives: [
        { option: "A", label: "Continuo" },
        { option: "B", label: "Discontinuo" },
        { option: "C", label: "Mixto" },
        { option: "D", label: "Todas las alternativas" },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "En el recibo leído la retención Imp. Renta (10%) es:",
      alternatives: [
        { option: "A", label: "00 soles" },
        { option: "B", label: "70 soles" },
        { option: "C", label: "4.70 soles" },
        { option: "D", label: "11.60 soles" },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question:
        "¿Por qué el recibo por honorarios es importante para el trabajo formal?",
      alternatives: [
        {
          option: "A",
          label:
            "Porque nos ayuda a describir el trabajo realizado por el profesional. ",
        },
        {
          option: "B",
          label:
            "Porque nos ayuda a comprobar los pagos mensuales a la SUNAT. ",
        },
        {
          option: "C",
          label:
            "Porque nos ayuda a registrar los pagos por servicios prestados.",
        },
        {
          option: "D",
          label:
            "Porque nos ayuda a informar sobre los ingresos al empleador.",
        },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question:
        "¿Qué significan, respectivamente, los términos totales por honorarios y total neto recibido?",
      alternatives: [
        {
          option: "A",
          label:
            "Dinero que recibe el trabajador y dinero que paga la empresa",
        },
        {
          option: "B",
          label: "Dinero que paga la empresa y descuentos que hace la AFP. ",
        },
        {
          option: "C",
          label:
            "Descuentos que hace la SUNAT y dinero que recibe el trabajador. ",
        },
        {
          option: "D",
          label:
            "Dinero que paga la empresa y dinero que recibe el trabajador.",
        },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question:
        "¿A quién pertenece la información que se presenta en el recuadro inferior de la izquierda? ",
      alternatives: [
        { option: "A", label: "A la imprenta que elaboró los recibos. " },
        { option: "B", label: "A la SUNAT. " },
        { option: "C", label: "A la empresa Grifos Soria S. A." },
        { option: "D", label: "Es la información adicional del emisor." },
      ],
      selectedOptions: "",
    },
    {
      number: "14",
      question:
        "¿Crees que es importante que los trabajadores independientes emitan recibos por honorarios? ¿Por qué?",
      alternatives: [
        {
          option: "A",
          label:
            "Sí, porque gracias a ello muchos peruanos no pagan nada en la SUNAT",
        },
        {
          option: "B",
          label:
            "Sí, porque es una obligación formal del contribuyente y un derecho del usuario.",
        },
        {
          option: "C",
          label: "No, porque si no pagas te haces más rico pronto",
        },
        {
          option: "D",
          label:
            "No, porque los trabajadores independientes tienen un sueldo",
        },
      ],
      selectedOptions: "",
    },
    {
      number: "15",
      question:
        "Según el recibo leído ¿Crees que es importante la retención por comisión de AFP?",
      alternatives: [
        {
          option: "A",
          label:
            "No, porque la AFP es muy pobre y la retención que hace lo necesita",
        },
        {
          option: "B",
          label: "Si, porque necesita una comisión para trabajar",
        },
        {
          option: "C",
          label:
            "No, porque la AFP debería eliminar todo tipo de comisiones ",
        },
        { option: "D", label: "Si, porque la AFP tiene poco dinero" },
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