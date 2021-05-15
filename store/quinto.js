export const state = () => ({
  questionsMain: [
    {
      number: "1",
      question: "¿Cuál es el problema que se expone en el texto “Maldito celular”?",
      alternatives: [
        { option: "A", label: "La irresponsabilidad del MTC que pone trabas." },
        { option: "B", label: "El alto costo de terminación de llamadas." },
        { option: "C", label: "La mala calidad de los servicios de telefonía celular." },
        { option: "D", label: "La falta de ampliación de redes para la calidad del servicio." },
      ],
      selectedOptions: "",
    },
    {
      number: "2",
      question: "¿Cuál es la intención del autor al escribir el texto?",
      alternatives: [
        { option: "A", label: "Exponer por qué las operadoras incumplen con sus servicios. " },
        { option: "B", label: "Exponer las razones por las cuales no hay mejoras en la telefonía celular." },
        { option: "C", label: "Exponer los problemas de la telefonía celular en el Perú y cómo revertirlos." },
        { option: "D", label: "Proyectar lo que podría lograrse si el MTC permitiera la colocación de antenas." },
      ],
      selectedOptions: "",
    },
    {
      number: "3",
      question: "Lee el siguiente párrafo presentado en el texto:",
      image: { src: "frase-6.png" },
      description: "Pero, ¿a qué se refiere el autor cuando expresa “Pero alguien se opone”?",
      alternatives: [
        { option: "A", label: "Una de las empresas prestadoras de servicio no permite que entre al mercado con mejores condiciones, claro, porque tenía un beneficio de 30 millones por año." },
        { option: "B", label: "Una de las empresas prestadoras de servicio, acepta que entren al mercado con mejores condiciones, claro porque tienen muchos equipos en el mercado" },
        { option: "C", label: "Una de las empresas prestadoras de servicio no permite que vendan más equipos de otros operadores, claro porque tiene el mejor servicio y no quiere que le hagan la competencia." },
        { option: "D", label: "solo a y b" },
      ],
      selectedOptions: "",
    },
    {
      number: "4",
      question: "¿Por qué crees que el autor del texto escogió el título “Maldito celular”?",
      alternatives: [
        { option: "A", label: "Porque tenía un celular con deficiencias y le molestaba mucho." },
        { option: "B", label: "Porque tiene mala calidad del servicio de telefonía y hace renegar mucho." },
        { option: "C", label: "Porque por culpa del celular ha tenido muchos problemas en casa y en trabajo." },
        { option: "D", label: "Porque está feliz con su celular y el servicio que tiene." },
      ],
      selectedOptions: "",
    },
    {
      number: "5",
      question: "Según tu experiencia, ¿qué juicio harías tú sobre la posición de las compañías de telefonía móvil que operan en el Perú y el rol que tiene el Ministerio de Transportes y Comunicaciones para su regulación?",
      alternatives: [
        { option: "A", label: "Las operadoras no están siendo honestas en la prestación del servicio. Faltan al código de ética al no prestar un buen servicio. Buscan obtener beneficios monetarios sin importarles cómo. El ministerio de transportes y comunicaciones no regula los términos del servicio en beneficio del usuario." },
        { option: "B", label: "Las operadoras no están siendo honestas en la prestación del servicio. Por brindar un servicio deficiente, pero los usuarios están contentos, y el ministerio de transporte y comunicaciones a puesto las normas claras y precisas en beneficio de los usuarios." },
        { option: "C", label: "Las operadoras no están siendo honestas en la prestación del servicio. Por que se basan en contratos firmados desde hace muchos años con autoridades corruptas y frente a ello el Ministerio de transportes y comunicaciones ha regulados nuevamente todos los términos del contrato en beneficio del usuario." },
        { option: "D", label: "solo b y c" },
      ],
      selectedOptions: "",
    },
  ],
  questionsSecondary: [
    {
      number: "6",
      question: "Según el texto, ¿cuál de los enunciados es correcto?",
      alternatives: [
        { option: "A", label: "La compañía Claro se sitúa como la tercera empresa que perdió 390 826 clientes en el 2015." },
        { option: "B", label: "Las compañías Claro y Movistar perdieron 400 000 clientes que se cambiaron a la compañía Entel. " },
        { option: "C", label: "21 799 clientes de la nueva compañía Bitel se trasladaron a la compañía Claro en el 2015. " },
        { option: "D", label: "La compañía Movistar sumó 129 679 clientes; aun así, es la empresa con más pérdida de clientes." },
      ],
      selectedOptions: "",
    },
    {
      number: "7",
      question: "¿Cuál es el propósito del texto?",
      alternatives: [
        { option: "A", label: "Dar a conocer los cambios de operadores telefónicos por parte de los clientes de teléfonos móviles. " },
        { option: "B", label: "Explicar los cambios de los usuarios de teléfonos móviles a las nuevas compañías Entel y Bitel. " },
        { option: "C", label: "Explicar las razones por las cuales los usuarios de teléfonos móviles migran de una compañía operadora a otra. " },
        { option: "D", label: "Mostrar cuáles son las empresas líderes en telefonía celular." },
      ],
      selectedOptions: "",
    },
    {
      number: "8",
      question: "De acuerdo con los dos gráficos del texto, se puede concluir que la portabilidad:",
      details: [
        'I. Ha tenido impacto en los meses de julio y diciembre de 2015 por el ingreso de aguinaldos. ',
        'II. Ha generado ganancias por igual a todas las operadoras.',
        'III. Las nuevas empresas han usado estrategias novedosas para captar clientes. ',
        'IV. Ha cambiado la oferta y la demanda de las operadoras de telefonía móvil.'
      ],
      alternatives: [
        { option: "A", label: "I y II" },
        { option: "B", label: "III y IV" },
        { option: "C", label: "I y III" },
        { option: "D", label: "I y IV" },
      ],
      selectedOptions: "",
    },
    {
      number: "9",
      question: "La empresa que se benefició por más líneas portadas de otras es Entel‚ mientras que la empresa que perdió más portabilidad en el 2015 es Movistar. De acuerdo con esta información, ¿qué significa portabilidad?",
      alternatives: [
        { option: "A", label: "Traslado de un cliente de una compañía de telefonía celular a otra recibiendo un nuevo número telefónico." },
        { option: "B", label: "Traslado de un cliente de una compañía de telefonía celular a otra manteniendo el mismo número telefónico. " },
        { option: "C", label: "Traslado masivo de los clientes de una compañía celular a otra para obtener un equipo nuevo. " },
        { option: "D", label: "Traslado masivo de los clientes de una compañía celular a otra para obtener un número nuevo." },
      ],
      selectedOptions: "",
    },
    {
      number: "10",
      question: "De acuerdo con la información presentada sobre la portabilidad, ¿crees que el texto causará impacto en los lectores y se cambiarán de operadora?",
      alternatives: [
        { option: "A", label: "Sí, porque al ver la cantidad de personas que hacen portabilidad piensan que el servicio es mejor y cambian de operador" },
        { option: "B", label: "Sí, porque al ver la cantidad de personas que hacen portabilidad piensan que tiene mejores ofertas en cuanto al precio y calidad de servicio y cambian de operador." },
        { option: "C", label: "No, porque les interesa poco la cantidad de personas que hacen portabilidad, pero cambian de operador si saber por qué" },
        { option: "D", label: "solo a y b" },
      ],
      selectedOptions: "",
    },
  ],
  questionsTertiary: [
    {
      number: "11",
      question: "Escribe V si es verdadero o F si es falso según corresponda:",
      details: [
        '( ) Al 2011 la cifra de niños que trabajan es de 1 659 000. Sus edades van de 5 a 17 años.',
        '( ) En nueve ciudades importantes, sin incluir Lima, no se cuenta con registro de trabajo de niños.',
        '( ) El tema del texto es “Trabajos peligrosos que realizan los niños en el Perú”. ',
        '( ) El 50 % de niños que trabajan lo hacen en condiciones inhumanas y sin seguro ni protección. ',
        '( ) El tema del texto es “Trabajo forzado e ilegal en los niños y jóvenes del país”.',
      ],
      alternatives: [
        { option: "A", label: "F - F - F - V – F" },
        { option: "B", label: "V - V - F - F - V" },
        { option: "C", label: "V - F - F - V - F " },
        { option: "D", label: "V - F - F - V – V" },
      ],
      selectedOptions: "",
    },
    {
      number: "12",
      question: "Analiza la siguiente información estadística del texto y deduce una consecuencia:",
      image: {
        src: "ninios-trabajadores.png",
      },
      description: 'El trabajo de menores en nuestro país sin regulación trae como efecto: ',
      alternatives: [
        { option: "A", label: "Personal técnico calificado." },
        { option: "B", label: "Desigualdad de oportunidades." },
        { option: "C", label: "Deserción escolar en la secundaria." },
        { option: "D", label: "Violencia y maltrato familiar" },
      ],
      selectedOptions: "",
    },
    {
      number: "13",
      question: "Según el texto leído, ¿a qué conclusión podemos llegar?",
      alternatives: [
        { option: "A", label: "El trabajo forzado en los menores de edad no debe permitirse." },
        { option: "B", label: "La condición real de los menores de edad frente a la explotación." },
        { option: "C", label: "La explotación infantil es una problemática alarmante que no es atendida por las autoridades. " },
        { option: "D", label: "El trabajo infantil es un problema presente en todo el país" },
      ],
      selectedOptions: "",
    },
    {
      number: "14",
      question: "Lee el siguiente fragmento:",
      image: {
        src: "frase-7.png"
      },
      description: '¿Estás de acuerdo con la frase? Escoge una idea que concuerde con tu fundamentación.',
      alternatives: [
        { option: "A", label: "De acuerdo, porque un niño estudiando está construyendo su futuro con éxito." },
        { option: "B", label: "De acuerdo, porque un niño que trabaja tiene dinero siempre y no le falta nada." },
        { option: "C", label: "De acuerdo, porque un niño que trabaja pierde oportunidades para su desarrollo personal." },
        { option: "D", label: "De acuerdo, porque un niño que trabaja puede mantener a su familia y el mismo." },
      ],
      selectedOptions: "",
    },
    {
      number: "15",
      question: "Contrasta la siguiente información y luego responde la pregunta:",
      image: {
        src: "chart-ninios.png",
      },
      description: '¿Crees que la información presentada en ambos textos ayuda a entender la razón por la cual los menores entre 5 y 17 años trabajan?  Escoge una idea que fundamenta tu respuesta.',
      alternatives: [
        { option: "A", label: "No, porque solo nos indican la cantidad de menores que trabajan e incluso que no se cuenta con un registro, pero no vemos causas." },
        { option: "B", label: "No, porque solo nos indica las formas de trabajo de los menores y sus ganancias." },
        { option: "C", label: "No, porque describe las actividades que realizan los niños en cada región del Perú." },
        { option: "D", label: "Solo b y c." },
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