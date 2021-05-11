export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "¿Por dónde debe pasar la electricidad antes de estar lista para ingresar a la red del Sistema Nacional de Energía Interconectada?",
      alternatives: [
        { option: "A", label: "Por el armario de corriente continua." },
        { option: "B", label: "Por el armario de corriente alterna." },
        { option: "C", label: "Por los transformadores." },
        { option: "D", label: "Por los paneles fotovoltaicos." },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question: "Las plantas generadoras fotovoltaicos inaugurados en Arequipa son:",
      alternatives: [
        { option: "A", label: "El proyecto Majes y Repartición." },
        { option: "B", label: "El proyecto Arequipa y Majes." },
        { option: "C", label: "El proyecto la Joya y Arequipa." },
        { option: "D", label: "El proyecto Arequipa y Mollendo." },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question: "¿Qué se deduce al comparar los proyectos de Majes y Repartición?",
      alternatives: [
        { option: "A", label: "Arequipa se encuentra en el sur del territorio peruano." },
        { option: "B", label: "El proyecto Repartición será más beneficioso que Majes." },
        { option: "C", label: "La energía llegará a las casas a través de las torres de alta tensión." },
        { option: "D", label: "El funcionamiento de las plantas de energía solar es complejo." },
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question: "Con relación al medio ambiente ¿Cuál es el beneficio de generar energía utilizando los rayos del sol y no con combustibles fósiles?",
      alternatives: [
        { option: "A", label: "El beneficio es que genera contaminación para el medio ambiente." },
        { option: "B", label: "El beneficio es que consume mucha energía y espacio geográfico." },
        { option: "C", label: "El beneficio que brinda la energía solar al medio ambiente sin causarle daño." },
        { option: "D", label: "El beneficio que brinda la energía solar al espacio, pero hace daño." },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question: "La superficie que ocupa cada planta de generación fotovoltaica es de 102 hectáreas, esto si relacionamos con un campo de futbol será:",
      alternatives: [
        { option: "A", label: "Su área es mayor que 100 canchas de fútbol juntas." },
        { option: "B", label: "Su área será menor a 100 canchas de futbol juntas." },
        { option: "C", label: "Su parea será mayor a 200 manzanas de una ciudad." },
        { option: "D", label: "Su parea será menor a 52 manzanas juntas de una ciudad." },
      ],
      selectedOptions: "",
    },
    {
      number: "6",
      question: "¿Para qué han sido añadidas a la infografía las ilustraciones del mapa del Perú, de Arequipa y de la cancha de fútbol?",
      alternatives: [
        { option: "A", label: "Para complementar la información escrita sobre la ubicación y ayudar a la comprensión de la gran dimensión del área que abarcan los paneles de silicio." },
        { option: "B", label: "Para reemplazar la información escrita, evitando la lectura de toda la infografía, y para hacerla más atractiva a los seguidores del fútbol." },
        { option: "C", label: "Para incentivar la imaginación del lector sobre las regiones del país y sobre lo amplio del territorio que abarcan las plantas de generadores fotovoltaicos." },
        { option: "D", label: "Para ilustrar al lector sobre la importancia de la región Arequipa y las dimensiones del lugar donde se encuentran los paneles de silicio." },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question: "Consideras que este tipo de proyectos contribuyen con la conservación del medioambiente, ¿por qué?",
      alternatives: [
        { option: "A", label: "No porque ocupa mucho espacio en el ambiente." },
        { option: "B", label: "No por que genera mucho gasto económico para su implementación e instalación." },
        { option: "C", label: "Sí porque es una energía limpia, solo que genera contaminación visual." },
        { option: "D", label: "Sí porque es una energía limpia y no contamina como los combustibles fósiles." },
      ],
      selectedOptions: "",
    },
    {
      number: "8",
      question: "¿Cuál es la intención del autor al presentarnos esta infografía?",
      alternatives: [
        { option: "A", label: "Para que tengamos una idea del área que ocupa las plantas de energía fotovoltaicas y su importancia para las personas y el medio ambiente." },
        { option: "B", label: "Para que tengamos una idea del área que ocupa la estructura de la celda solar y su importancia para las personas." },
        { option: "C", label: "Que comprendamos el espacio que ocupan las plantas de energía y el gasto económico que generaran al país." },
        { option: "D", label: "Para que se tenga una idea de lo costoso que es instalar una planta fotovoltaica en el Perú." },
      ],
      selectedOptions: "",
    },
  ],
  questionsSecondary: [
    {
      number: "9",
      question: "Según el autor, ¿qué aspecto de las personas es afectado principalmente por la televisión peruana?",
      alternatives: [
        { option: "A", label: "Nuestra ética." },
        { option: "B", label: "Nuestra estética." },
        { option: "C", label: "Nuestra ciudadanía." },
        { option: "D", label: "Nuestra inteligencia." },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "El texto leído es:",
      alternatives: [
        { option: "A", label: "continuo argumentativo" },
        { option: "B", label: "discontinuo argumentativo" },
        { option: "C", label: "continuo descriptivo" },
        { option: "D", label: "narrativo" },
      ],
      selectedOptions: "",
    },
    {
      number: "11",
      question: "La televisión peruana es:",
      alternatives: [
        { option: "A", label: "Una fuente de desarrollo cultural" },
        { option: "B", label: "Una fuente de desarrollo personal y ético" },
        { option: "C", label: "Un obstáculo para el desarrollo de nuestra cultura publica" },
        { option: "D", label: "Un obstáculo para el desarrollo económico del país" },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question: "¿Cuál de los enunciados no es una idea trascendente para la comprensión del texto?",
      alternatives: [
        { option: "A", label: "Es complicado cambiar de elección cuando ya se ha formado un hábito basado en un gusto." },
        { option: "B", label: "La televisión peruana es un inconveniente para el desarrollo cultural de nuestra sociedad." },
        { option: "C", label: "No debemos eludir el problema de que la televisión afecta negativamente nuestra ciudadanía." },
        { option: "D", label: "La televisión basura nos reduce de ciudadanos a consumidores de espectáculos vacíos." },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question: "Luis y Tania son adolescentes de segundo de secundaria, les encanta ver los programas reality, están pendientes de lo que sucede con los personajes; incluso ven los programas de espectáculos que hablan sobre ellos. Además, tratan de imitar sus gestos, moda y forma de hablar.",
      description: "¿Cuál de los siguientes enunciados del texto no se relaciona directamente con el caso presentado?",
      alternatives: [
        { option: "A", label: "Se puede regular la televisión, y esto no significa prohibir programas. Pero, sobre todo, la televisión misma debe ofrecer alternativas. " },
        { option: "B", label: "Los medios de comunicación nos brindan modelos éticos y estéticos, y promueven hábitos y gustos. " },
        { option: "C", label: "La televisión basura es valorada no por su contenido, sino porque logra un efecto, que es el de imponerse en los hogares. " },
        { option: "D", label: "La televisión basura ha dado un paso adelante en su capacidad de reemplazar la realidad. Ahora resulta que ella misma es su propio objeto de observación." },
      ],
      selectedOptions: "",
    },
    {
      number: "14",
      question: "El autor del texto opina lo siguiente:",
      image: {
        src: "frase-1.png",
      },
      description: "¿Qué nos quiere decir con ello?",
      alternatives: [
        { option: "A", label: "Quiere decir que nosotros seleccionamos los canales que nos gusta o de nuestra preferencia." },
        { option: "B", label: "Quiere decir que los programas de televisión esta de acuerdo a nuestros intereses." },
        { option: "C", label: "Quiere decir que la televisión nos ayuda a desarrollarnos culturalmente en nuestro país." },
        { option: "D", label: "Quiere decirnos que nosotros no elegimos, que es la tele la que elige por nosotros." },
      ],
      selectedOptions: "",
    },
    {
      number: "15",
      question: "¿Con qué intención el autor ha presentado este texto?",
      alternatives: [
        { option: "A", label: "Porque quiere llamar la atención del lector y hacerlo reflexionar." },
        { option: "B", label: "Porque quiere que el lector siga los programas de televisión." },
        { option: "C", label: "Porque quiere que el lector comprenda y seleccione los programas a ver." },
        { option: "D", label: "Porque los programas de televisión en nuestro país son muy divertidos." },
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