export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "¿Cuál de los siguientes enunciados se afirma en el texto?",
      alternatives: [
        { option: "A", label: "El director recomendó al doctor De Luisi de manera especial. " },
        { option: "B", label: "El nene entró pálido como si fueran a operarlo enseguida." },
        { option: "C", label: "La madre estaba segura de que ella y su esposo se quedarían con su hijo." },
        { option: "D", label: "La enfermera se creía la directora general de la clínica." },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question: "Indica el orden en que ocurren los sucesos en el texto.",
      details: ['I. La enfermera no deja a la madre quedarse con el nene.',
        'II. El nene es internado en la clínica.',
        'III. La enfermera trajo el termómetro y el nene se puso rojo.',
        'IV. La madre y el doctor De Luisi conversan acerca de la operación del nene',
        'V. La enfermera le toma el pulso al nene.'],
      alternatives: [
        { option: "A", label: "I - III - IV - V - II " },
        { option: "B", label: "II - III - I - IV - V " },
        { option: "C", label: "II - I - V - IV - III " },
        { option: "D", label: "I - II - IV - III – V" },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question: "¿Cuál de los enunciados contiene una conclusión a partir de la lectura?",
      alternatives: [
        { option: "A", label: "Los adolescentes son más autónomos de lo que piensan sus madres." },
        { option: "B", label: "Las madres siempre son protectoras, incluso con sus esposos. " },
        { option: "C", label: "Los padres son más débiles para enfrentar situaciones de salud. " },
        { option: "D", label: "Los médicos y las enfermeras no están siempre capacitados." },
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question: "Lee el siguiente fragmento:",
      description: 'Luego deduce: ¿con qué intención el autor empleó las estrategias de monólogo interior y perspectiva múltiple?',
      image: { src: 'frase-3.png' },
      alternatives: [
        { option: "A", label: "Quería presentar lo que la madre y el hijo sienten al mismo tiempo frente a la situación planteada en el fragmento. " },
        { option: "B", label: "Quería presentar una situación retadora a los lectores al explicar los sentimientos tanto de la madre como del hijo." },
        { option: "C", label: "Quería presentar las características de madre e hijo, de manera diferente e interesante para los lectores." },
        { option: "D", label: "Quería presentar lo que piensan tanto la madre como el hijo, para comprender mejor la situación comunicativa." },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question: "¿Según el texto como se pueda calificar o como se puede caracterizar a la madre del nene?",
      alternatives: [
        { option: "A", label: "Es responsable, muy tolerante y muy humilde." },
        { option: "B", label: "Es sobreprotectora, poco tolerante y altanera." },
        { option: "C", label: "Es sobreprotectora, trabajadora y callada." },
        { option: "D", label: "Es sobreprotectora, muy tolerante y muy humilde." },
      ],
      selectedOptions: "",
    },
    {
      number: "6",
      question: "En el fragmento:",
      details: [`"Después de todo tiene apenas quince años y nadie se los daría, siempre pegado a mí, aunque ahora con los pantalones largos quiere disimular y hacerse que es hombre grande"`],
      description: '¿Cómo hace sentir la madre a su hijo?',
      alternatives: [
        { option: "A", label: "La madre avergüenza a hijo al tratarle como a un joven." },
        { option: "B", label: "La madre trata como a un joven a su hijo." },
        { option: "C", label: "La madre trata como a un adolescente a su hijo." },
        { option: "D", label: "La madre avergüenza al hijo al tratarlo como un niño." },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question: "¿Cuál es la intención del autor al presentar este texto?",
      alternatives: [
        { option: "A", label: "Presentar a los personajes y sus reacciones que tienen ante un pequeño conflicto." },
        { option: "B", label: "Presentar las opiniones de los personajes para ayudarles a solucionar." },
        { option: "C", label: "Presentar los puntos de vista de los diferentes personajes para comprenderlos mejor." },
        { option: "D", label: "Presentar los puntos de vista del doctor y la enfermera para apoyar como paciente." },
      ],
      selectedOptions: "",
    },
    {
      number: "8",
      question: "¿Te parece correcta la actitud de la enfermera?, ¿por qué?",
      alternatives: [
        { option: "A", label: "Sí, porque a los hijos se debe dar oportunidad que sean independientes." },
        { option: "B", label: "Sí, porque la enfermera quería ver solo al nene y conversar con calma." },
        { option: "C", label: "No, porque las madres deben cuidar a los hijos así sean viejos." },
        { option: "D", label: "No, porque las madres deben proteger en todo momento a los hijos sin fijar la edad." },
      ],
      selectedOptions: "",
    },

  ],
  questionsSecondary: [
    {
      number: "9",
      question: "A partir de la información brindada por los textos leídos, selecciona la alternativa que presenta ideas opuestas.",
      alternatives: [
        { option: "A", label: "Me gusta el Twitter porque es la dictadura de la brevedad. No me gusta el Twitter porque ofrece un nuevo pretexto para el aislamiento. " },
        { option: "B", label: "Adoro el Twitter porque adoro las paradojas. Odio el Twitter porque nadie hace lo que dice en su afán por escribirlo. " },
        { option: "C", label: "Me gusta el Twitter porque puede ser peligroso. No me gusta el Twitter porque revela información confidencial." },
        { option: "D", label: "Me fascina el Twitter porque me hace empático con todos. No me gusta el Twitter porque está lleno de solitarios." },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "Elige la alternativa que contenga la idea contrapuesta:",
      image: { src: 'frase-4.png' },
      alternatives: [
        { option: "A", label: "defiende que la veracidad de la información es real." },
        { option: "B", label: "sustenta que esa información es trivial." },
        { option: "C", label: "sustenta que esa información es de poca trascendencia." },
        { option: "D", label: "sustenta que esa información es detallada." },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question: "Luego de leer ambos textos, se puede concluir que:",
      details: ['I. Twitter es la plataforma con más usuarios a nivel mundial, superando a Facebook y Hi5. ',
        'II. Twitter no solo es una red social que aísla a las personas, también es una herramienta que las conecta',
        'III. Twitter es empleado por personas solitarias que gritan ayuda y no pueden cortar con internet',
        'IV. Twitter genera dos posturas en cuanto a su uso, pero ambas resaltan la difusión veloz de la información que posee'],
      alternatives: [
        { option: "A", label: "Solo I" },
        { option: "B", label: "II y IV" },
        { option: "C", label: "I y III" },
        { option: "D", label: "Solo IV" },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question: "Señala la opción que resulta ser un contraargumento del siguiente argumento:",
      img: { src: "frase-5.png" },
      alternatives: [
        { option: "A", label: "Confío en Twitter porque consume mucho tiempo, como todo lo que resulta entretenido en el ciberespacio." },
        { option: "B", label: "Confío en Twitter porque la información que circula en sus venas cada vez adquiere más importancia." },
        { option: "C", label: "Confío en Twitter porque es la manera más rápida y efectiva de dar a conocer la problemática del mundo." },
        { option: "D", label: "Confío en Twitter porque me puedo convertir en una celebridad o un líder de opinión durante mi tiempo libre." },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question: "¿Cuál es la intención del autor al presentar estos textos?",
      alternatives: [
        { option: "A", label: "que los lectores analicen las ventajas y desventajas del Twitter." },
        { option: "B", label: "que conozcan la velocidad de la información que transmite y usen con frecuencia." },
        { option: "C", label: "que los lectores utilicen su tiempo libre en transmitir información por Twitter." },
        { option: "D", label: "que todas las personas tengan su Twitter para comunicarse sin necesidad de internet." },
      ],
      selectedOptions: "",
    },
    {
      number: "14",
      question: "¿Cuál es tu opinión respecto al siguiente fragmento de la lectura?",
      details: ['“Me gusta el Twitter porque al final resultó que no era tan inocente y que, en ciertos casos, hasta puede ser peligroso”'],
      alternatives: [
        { option: "A", label: "El Twitter es importante en la vida de las personas, en algunos casos es peligros por que pueden ver tus comunicaciones." },
        { option: "B", label: "El Twitter es genial solo que es peligros cuando utilizamos mal con los amigos en los colegios y familia." },
        { option: "C", label: "El Twitter es una herramienta muy importante, con una utilidad enorme, al mismo tiempo peligrosa dependiendo de la forma como se utilice." },
        { option: "D", label: "solo a y b." },
      ],
      selectedOptions: "",
    },
    {
      number: "15",
      question: "¿Crees que sería importante el uso del Twitter en el colegio?",
      alternatives: [
        { option: "A", label: "Sí, porque sería útil para comunicarse con nuestros compañeros y docentes mediante mensajes breves y rápidos." },
        { option: "B", label: "Sí, porque sería útil para compartir audio y video con amigos en forma rápida y sin necesidad de internet." },
        { option: "C", label: "Sí, porque sería útil para compartir textos o mensajes amplios donde informo detalladamente sobre aspectos del curso o área de aprendizaje." },
        { option: "D", label: "solo b y c" },
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