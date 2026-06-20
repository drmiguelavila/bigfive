// ============================================
// BIG FIVE TEST DATA — Modelo OCEAN (Costa & McCrae)
// 60 ítems IPIP, 5 dimensiones, 30 facetas (6 por dimensión)
// ============================================

const DIMENSIONS = {
  neurosis: {
    name: "Neurosis",
    color: "#9B59B6",
    intro: "La neurosis hace referencia a la tendencia a experimentar sentimientos negativos.",
    facets: ["ansiedad","ira","depresion","verguenza","inmoderacion","vulnerabilidad"]
  },
  extroversion: {
    name: "Extroversión",
    color: "#3B82F6",
    intro: "La extroversión se define por la relación de una persona con el mundo exterior.",
    facets: ["cordialidad","sociabilidad","confianza_asertividad","actividad","busqueda_emociones","alegria"]
  },
  apertura: {
    name: "Apertura a experiencias",
    color: "#EC4899",
    intro: "La apertura a experiencias describe el estilo cognitivo de una persona y permite distinguir entre la gente imaginativa y creativa de personas más sensatas y convencionales.",
    facets: ["imaginacion","interes_artistico","sensibilidad","ansias_aventura","intelecto","liberalismo"]
  },
  simpatia: {
    name: "Simpatía",
    color: "#F59E0B",
    intro: "La simpatía refleja la capacidad de una persona para mantener la armonía y cooperar con otros.",
    facets: ["confianza_social","moral","altruismo","cooperacion","modestia","empatia"]
  },
  meticulosidad: {
    name: "Meticulosidad",
    color: "#10B981",
    intro: "La meticulosidad hace referencia a la forma en que controlamos y dirigimos nuestros impulsos.",
    facets: ["autoeficacia","orden","sentido_deber","orientacion_objetivos","disciplina","prudencia"]
  }
};

const FACETS = {
  // ===== NEUROSIS =====
  ansiedad: {
    name: "Ansiedad",
    dimension: "neurosis",
    desc_high: "Los individuos más ansiosos están constantemente dudando de si huir o enfrentar las situaciones que se le presentan. Por este motivo, aquellos que presentan un alto nivel de ansiedad tienden a sentir que hay peligro acechándole a cada momento. Pueden temer a situaciones concretas o ser miedosos en general. Se sienten tensos, agitados y nerviosos con frecuencia.",
    desc_low: "Quienes obtienen una baja puntuación en ansiedad suelen ser personas valientes y tranquilas. No se sienten constantemente amenazadas y mantienen la calma incluso ante la incertidumbre."
  },
  ira: {
    name: "Ira",
    dimension: "neurosis",
    desc_high: "La gente que tiene una alta puntuación en ira tiende a enfadarse cuando las cosas no salen como quiere. Son especialmente sensibles en cuanto a que se les trate de forma justa, y pueden mostrarse muy resentidos con quien sienten que los ha engañado.",
    desc_low: "Los que tienen baja puntuación en este aspecto no se enfadan con facilidad. Esta escala mide la tendencia de una persona a enfadarse; que expresen abiertamente su enfado y hostilidad depende del nivel de simpatía de cada uno."
  },
  depresion: {
    name: "Depresión",
    dimension: "neurosis",
    desc_high: "Esta escala mide la tendencia de una persona a sentirse triste, desalentada y desanimada. Quienes tienen una alta puntuación tienen dificultades para iniciar actividades.",
    desc_low: "Los que obtienen menos puntos en esta escala suelen ser inmunes a sentimientos depresivos y mantienen un ánimo estable incluso ante la adversidad."
  },
  verguenza: {
    name: "Vergüenza",
    dimension: "neurosis",
    desc_high: "Las personas que sienten mucha vergüenza son muy sensibles a la opinión que los demás tengan de ellos. Les preocupa hacer el ridículo y ser rechazados, lo que provoca que se sientan inseguros e incómodos alrededor de otras personas.",
    desc_low: "Los que obtienen poca puntuación en esta escala no se sienten observados y juzgados constantemente por la gente que hay a su alrededor. Por este motivo, no se sienten nerviosos en situaciones sociales."
  },
  inmoderacion: {
    name: "Falta de moderación",
    dimension: "neurosis",
    desc_high: "Las personas con falta de moderación tienen problemas para resistirse a sus ansias y antojos. Suelen fijarse en obtener beneficios a corto plazo en lugar de pensar en las consecuencias a largo plazo.",
    desc_low: "Quienes obtienen una puntuación más baja no suelen tener deseos irresistibles y, en consecuencia, no suelen ceder ante las tentaciones con tanta facilidad."
  },
  vulnerabilidad: {
    name: "Vulnerabilidad",
    dimension: "neurosis",
    desc_high: "Las personas muy vulnerables experimentan pánico, confusión e impotencia cuando están sometidos a presión o estrés.",
    desc_low: "Los que obtienen puntuaciones bajas se mantienen mejor la calma, confianza y capacidad de pensar con claridad en situaciones de estrés."
  },

  // ===== EXTROVERSIÓN =====
  cordialidad: {
    name: "Cordialidad",
    dimension: "extroversion",
    desc_high: "La gente cordial gusta de otros de forma genuina, y expresan abiertamente sus sentimientos positivos hacia los demás. Hacen amigos rápidamente y no les cuesta formar relaciones cercanas con otras personas.",
    desc_low: "Quienes obtienen pocos puntos en esta escala no son necesariamente fríos y hostiles, pero no suelen acercarse a otros y se les considera reservados y distantes."
  },
  sociabilidad: {
    name: "Sociabilidad",
    dimension: "extroversion",
    desc_high: "La compañía de otros resulta muy gratificante para las personas sociables. Disfrutan estar rodeados de gente.",
    desc_low: "Alguien que obtiene baja puntuación en este aspecto, sin embargo, tiende a evitar las multitudes porque le resultan agobiantes. No es que no les guste la compañía de otros en ningún momento, pero necesitan mucha más privacidad y pasar tiempo en solitario que una persona con alta puntuación en esta escala."
  },
  confianza_asertividad: {
    name: "Confianza",
    dimension: "extroversion",
    desc_high: "Quienes tienen una alta puntuación en confianza gustan de hablar, tomar la iniciativa y dirigir a los demás. Suelen asumir el papel de líder dentro de los grupos.",
    desc_low: "Los que obtienen una puntuación baja suelen hablar poco y dejarse llevar."
  },
  actividad: {
    name: "Nivel de actividad",
    dimension: "extroversion",
    desc_high: "Los individuos muy activos llevan una vida muy ocupada y que avanza a un ritmo muy rápido. Se mueven constantemente y tienen mucha energía, con lo que es frecuente verlos involucrados en muchas actividades diferentes.",
    desc_low: "Las personas que obtienen una baja puntuación en esta escala avanzan a un ritmo mucho más relajado."
  },
  busqueda_emociones: {
    name: "Búsqueda de nuevas experiencias",
    dimension: "extroversion",
    desc_high: "Quienes obtienen una alta puntuación en este aspecto se aburren con facilidad y necesitan muchos estímulos. Adoran las luces brillantes y el ajetreo. Este tipo de personas son propicios a tomar riesgos y buscan nuevas experiencias constantemente.",
    desc_low: "Las personas de más baja puntuación se agobian fácilmente con el ruido y el escándalo, y son bastante adversos al cambio."
  },
  alegria: {
    name: "Alegría",
    dimension: "extroversion",
    desc_high: "Esta faceta mide únicamente el nivel de ánimo y sentimientos positivos (las emociones negativas son parte del apartado de Neurosis). Los que obtienen una puntuación alta en esta escala expresan con frecuencia un abanico de emociones positivas, tales como la felicidad, el entusiasmo, el optimismo o la alegría.",
    desc_low: "Quienes obtienen menos puntos son menos propensos a mostrar tanta energía y entusiasmo."
  },

  // ===== APERTURA =====
  imaginacion: {
    name: "Imaginación",
    dimension: "apertura",
    desc_high: "Este mundo es demasiado simple y ordinario para las personas más imaginativas. Quienes obtienen una alta puntuación en esta escala usan la fantasía como una forma de recrear un mundo más rico e interesante.",
    desc_low: "Los que tienen una puntuación baja se centran más en los hechos y menos en fantasías."
  },
  interes_artistico: {
    name: "Interés artístico",
    dimension: "apertura",
    desc_high: "Los que obtienen una alta puntuación en este aspecto aprecian la belleza, tanto en el arte como en la naturaleza. Es frecuente verlos involucrados en eventos artísticos y naturales. No necesariamente tienen que dedicarse a las artes o tener talento en este campo, aunque en muchos casos lo son; esta escala mide el interés y capacidad de apreciar la belleza tanto natural como artificial.",
    desc_low: "Las personas que tengan una baja puntuación en esta categoría cuentan con muy poco sentido de la estética y no se interesan por el arte."
  },
  sensibilidad: {
    name: "Sensibilidad",
    dimension: "apertura",
    desc_high: "Las personas con un alto nivel de sensibilidad son muy conscientes de sus propios sentimientos.",
    desc_low: "Los que tienen baja puntuación en esta escala no tienen tan claros sus sentimientos y tienden a no expresar sus emociones abiertamente."
  },
  ansias_aventura: {
    name: "Ansias de aventura",
    dimension: "apertura",
    desc_high: "Las personas más aventureras buscan constantemente probar nuevas actividades, viajar a otros países y experimentar cosas distintas. Les aburre la rutina y limitarse a lo conocido, con lo que no dudarán en probar caminos distintos para llegar a casa sólo por cambiar.",
    desc_low: "Quienes tienen menos puntuación en este aspecto se sienten incómodos ante los cambios y prefieren mantenerse en la rutina."
  },
  intelecto: {
    name: "Intelecto",
    dimension: "apertura",
    desc_high: "El intelecto y el interés por el arte son las dos características clave que definen a una persona abierta a experiencias. Los que obtienen una alta puntuación en intelecto gustan de jugar con las ideas. Tienen la mente muy abierta a formas de pensar nuevas y poco convencionales, y les encanta participar en debates. Disfrutan resolviendo puzzles, acertijos y rompecabezas.",
    desc_low: "Los que obtienen menos puntos en esta escala prefieren enfrentarse a personas o cosas concretas en lugar de ideas abstractas. Consideran estos ejercicios intelectuales una pérdida de tiempo."
  },
  liberalismo: {
    name: "Liberalismo",
    dimension: "apertura",
    desc_high: "El liberalismo psicológico hace referencia a la predisposición de una persona de desafiar a la autoridad, las costumbres y los valores tradicionales. En su forma más extrema, este liberalismo puede presentarse como hostilidad hacia las reglas, apoyo a criminales y aprecio a la ambigüedad, caos y el desorden.",
    desc_low: "Los que tienen una mente más conservadora prefieren la seguridad y estabilidad que les ofrece el seguir con la tradición."
  },

  // ===== SIMPATÍA =====
  confianza_social: {
    name: "Confianza",
    dimension: "simpatia",
    desc_high: "Alguien que tenga un alto nivel de confianza asume que todos a su alrededor son justos, honestos y con buenas intenciones.",
    desc_low: "Quienes confían poco suelen percibir a los demás como egoístas, retorcidos y, potencialmente, peligrosos."
  },
  moral: {
    name: "Moral",
    dimension: "simpatia",
    desc_high: "Quienes tienen una alta puntuación en esta escala no ven necesidad de fingir o manipular nada en sus interacción con los demás. Esto los convierte en personas directas y sinceras.",
    desc_low: "Los que obtienen menos puntos consideran que es necesario mantener un cierto nivel de engaño en situaciones sociales. Hay que aclarar que quienes sacan menos puntos en moralidad no necesariamente son inmorales e inescrupulosos; simplemente mantienen la guardia y más reticentes a revelar toda la verdad."
  },
  altruismo: {
    name: "Altruismo",
    dimension: "simpatia",
    desc_high: "Una persona altruista se siente bien con el simple hecho de ayudar a otros. Es por eso que, normalmente, están dispuestos ayudar a quien lo necesita. Para esta gente, el ayudar a otros no es un sacrificio, sino algo que les llena.",
    desc_low: "A quienes obtienen baja puntuación en esta escala, sin embargo, no les gusta especialmente prestar ayuda a otras personas. Si acuden en ayuda de alguien, lo hacen más por imposición que porque hacerlo les haga sentir bien."
  },
  cooperacion: {
    name: "Cooperación",
    dimension: "simpatia",
    desc_high: "Quienes sacan una alta puntuación en esta escala detestan los enfrentamientos. Están dispuestos a comprometerse o sacrificar sus propias necesidades con tal de llevarse bien con otros.",
    desc_low: "Los que obtienen menos puntos tienden a intimidar a los demás con tal de salirse con la suya."
  },
  modestia: {
    name: "Modestia",
    dimension: "simpatia",
    desc_high: "A los que sacan una puntuación alta en esta escala no les gusta decir que son mejor que los demás. En muchos casos, esta actitud puede derivar de una falta de autoestima.",
    desc_low: "Alguien con mucha autoestima tiende a no ser modesto en absoluto. Esta gente que se describe a sí misma como alguien superior a los demás suele ser percibida como antipática y arrogante."
  },
  empatia: {
    name: "Empatía",
    dimension: "simpatia",
    desc_high: "Quienes obtienen una alta puntuación en esta escala son personas bondadosas y compasivas. Sienten el dolor de otros y es muy fácil hacerlos sentir lástima.",
    desc_low: "Los que obtienen menos puntos no se ven muy afectados por el sufrimiento ajeno, y se enorgullecen de poder tomar decisiones de forma objetiva basándose únicamente en la razón. Les preocupa más la verdad e impartir una justicia e imparcial, en lugar de caer en la misericordia."
  },

  // ===== METICULOSIDAD =====
  autoeficacia: {
    name: "Autoeficacia",
    dimension: "meticulosidad",
    desc_high: "La autoeficacia describe la confianza de uno en sus propias habilidades para lograr cosas. Quienes tienen una alta puntuación en esta faceta tienen la inteligencia, voluntad y autocontrol necesario para alcanzar el éxito.",
    desc_low: "Los que obtienen una puntuación más baja no se consideran tan efectivos y sienten que no tienen las riendas de su propia vida."
  },
  orden: {
    name: "Orden",
    dimension: "meticulosidad",
    desc_high: "Las personas con un alto nivel de orden son muy organizadas. Les gusta vivir siguiendo una rutina y planificar sus horarios. Mantienen listas con sus asuntos pendientes y hacen planes.",
    desc_low: "Los que tienen una puntuación más baja son desorganizados y más dispersos."
  },
  sentido_deber: {
    name: "Sentido del deber",
    dimension: "meticulosidad",
    desc_high: "Esta escala refleja cuánto de fuerte es el sentido del deber de una persona. Quienes sacan una alta puntuación tienen un alto nivel de compromiso con sus obligaciones.",
    desc_low: "Los que tienen baja puntuación consideran que los contratos o las reglas suponen una gran limitación y no se rigen tanto por ellas. Se les suele considerar irresponsables."
  },
  orientacion_objetivos: {
    name: "Orientación a objetivos",
    dimension: "meticulosidad",
    desc_high: "Los que obtienen una alta puntuación en esta escala se esfuerzan muchísimo para alcanzar la excelencia. Su ambición por ser reconocidos por sus éxitos hace que se muevan constantemente en dirección a sus nobles metas. Suelen tener un camino muy marcado en la vida, pero si su puntuación es muy alta, pueden llegar a estar demasiado obsesionados con el trabajo.",
    desc_low: "Las personas con baja puntuación se contentan con hacer una mínima cantidad de trabajo, con lo que es fácil que los clasifiquen como vagos."
  },
  disciplina: {
    name: "Disciplina",
    dimension: "meticulosidad",
    desc_high: "La disciplina (también conocida por muchos como la fuerza de voluntad) es la habilidad de una persona para persistir en una tarea difícil o desagradable hasta que logre completarla. Aquellos dotados de mucha disciplina pueden superar la reticencia a iniciar nuevas tareas y mantenerse en ellas a pesar de las distracciones.",
    desc_low: "Las personas que carecen de disciplina, en cambio, posponen constantemente las cosas y tienen dificultades para continuarlas. Es frecuente que no logren completarlas, incluso aquellas que realmente tienen ganas de terminar."
  },
  prudencia: {
    name: "Prudencia",
    dimension: "meticulosidad",
    desc_high: "La prudencia describe la tendencia a considerar distintas opciones antes de actuar. Quienes sacan una alta puntuación en prudencia suelen tomarse su tiempo para tomar una decisión.",
    desc_low: "Los que tienen pocos puntos en este aspecto tienden a decir o hacer lo primero que les viene a la cabeza, sin replantearse posibles alternativas o las posibles consecuencias de cada una."
  }
};

// 60 ITEMS IPIP — 2 por faceta. R = reverse scored (puntuación invertida)
const QUESTIONS = [
  // ===== NEUROSIS (12) =====
  {id:1, facet:"ansiedad", text:"Me preocupo por muchas cosas.", reverse:false},
  {id:2, facet:"ansiedad", text:"Rara vez me siento ansioso o temeroso.", reverse:true},
  {id:3, facet:"ira", text:"Me enfado con facilidad.", reverse:false},
  {id:4, facet:"ira", text:"Rara vez me siento irritado.", reverse:true},
  {id:5, facet:"depresion", text:"A menudo me siento triste o desanimado.", reverse:false},
  {id:6, facet:"depresion", text:"Rara vez me siento melancólico o sin energía.", reverse:true},
  {id:7, facet:"verguenza", text:"Me siento incómodo en presencia de otros.", reverse:false},
  {id:8, facet:"verguenza", text:"Rara vez me siento avergonzado o cohibido.", reverse:true},
  {id:9, facet:"inmoderacion", text:"Me cuesta resistirme a mis antojos.", reverse:false},
  {id:10, facet:"inmoderacion", text:"Tengo facilidad para resistir tentaciones.", reverse:true},
  {id:11, facet:"vulnerabilidad", text:"Me siento abrumado por el estrés con facilidad.", reverse:false},
  {id:12, facet:"vulnerabilidad", text:"Mantengo la calma incluso en situaciones difíciles.", reverse:true},

  // ===== EXTROVERSIÓN (12) =====
  {id:13, facet:"cordialidad", text:"Hago amigos con facilidad.", reverse:false},
  {id:14, facet:"cordialidad", text:"Mantengo distancia con las personas que no conozco.", reverse:true},
  {id:15, facet:"sociabilidad", text:"Disfruto estar en medio de mucha gente.", reverse:false},
  {id:16, facet:"sociabilidad", text:"Prefiero pasar tiempo a solas que rodeado de gente.", reverse:true},
  {id:17, facet:"confianza_asertividad", text:"Tomo la iniciativa cuando estoy en grupo.", reverse:false},
  {id:18, facet:"confianza_asertividad", text:"Prefiero dejar que otros tomen las decisiones.", reverse:true},
  {id:19, facet:"actividad", text:"Siempre estoy ocupado haciendo algo.", reverse:false},
  {id:20, facet:"actividad", text:"Prefiero un ritmo de vida pausado y relajado.", reverse:true},
  {id:21, facet:"busqueda_emociones", text:"Busco emociones fuertes y experiencias intensas.", reverse:false},
  {id:22, facet:"busqueda_emociones", text:"Evito lugares ruidosos y con mucha actividad.", reverse:true},
  {id:23, facet:"alegria", text:"Suelo sentirme alegre y de buen ánimo.", reverse:false},
  {id:24, facet:"alegria", text:"Rara vez me entusiasmo por algo.", reverse:true},

  // ===== APERTURA (12) =====
  {id:25, facet:"imaginacion", text:"Tengo una imaginación muy activa.", reverse:false},
  {id:26, facet:"imaginacion", text:"Prefiero centrarme en hechos concretos antes que en fantasías.", reverse:true},
  {id:27, facet:"interes_artistico", text:"Me conmueve profundamente el arte y la belleza.", reverse:false},
  {id:28, facet:"interes_artistico", text:"No me interesa especialmente el arte.", reverse:true},
  {id:29, facet:"sensibilidad", text:"Soy muy consciente de mis propios sentimientos.", reverse:false},
  {id:30, facet:"sensibilidad", text:"Rara vez expreso mis emociones abiertamente.", reverse:true},
  {id:31, facet:"ansias_aventura", text:"Disfruto probando actividades nuevas y desconocidas.", reverse:false},
  {id:32, facet:"ansias_aventura", text:"Prefiero la rutina antes que el cambio constante.", reverse:true},
  {id:33, facet:"intelecto", text:"Disfruto debatiendo ideas abstractas.", reverse:false},
  {id:34, facet:"intelecto", text:"Considero una pérdida de tiempo pensar en teorías.", reverse:true},
  {id:35, facet:"liberalismo", text:"Cuestiono la autoridad y las normas tradicionales.", reverse:false},
  {id:36, facet:"liberalismo", text:"Prefiero la seguridad de seguir la tradición.", reverse:true},

  // ===== SIMPATÍA (12) =====
  {id:37, facet:"confianza_social", text:"Confío en que las personas tienen buenas intenciones.", reverse:false},
  {id:38, facet:"confianza_social", text:"Sospecho de las intenciones ocultas de los demás.", reverse:true},
  {id:39, facet:"moral", text:"Soy directo y sincero al hablar con los demás.", reverse:false},
  {id:40, facet:"moral", text:"A veces es necesario manipular un poco la situación.", reverse:true},
  {id:41, facet:"altruismo", text:"Ayudar a otros me hace sentir genuinamente bien.", reverse:false},
  {id:42, facet:"altruismo", text:"No me interesa especialmente ayudar a desconocidos.", reverse:true},
  {id:43, facet:"cooperacion", text:"Prefiero ceder antes que entrar en un conflicto.", reverse:false},
  {id:44, facet:"cooperacion", text:"Defiendo mi postura aunque genere fricción.", reverse:true},
  {id:45, facet:"modestia", text:"Evito decir que soy mejor que los demás.", reverse:false},
  {id:46, facet:"modestia", text:"Sé que tengo cualidades superiores a la mayoría.", reverse:true},
  {id:47, facet:"empatia", text:"Siento profundamente el dolor de los demás.", reverse:false},
  {id:48, facet:"empatia", text:"Prefiero tomar decisiones basadas en la razón, no en emociones.", reverse:true},

  // ===== METICULOSIDAD (12) =====
  {id:49, facet:"autoeficacia", text:"Confío en mi capacidad para lograr lo que me propongo.", reverse:false},
  {id:50, facet:"autoeficacia", text:"Siento que no tengo control sobre mi propia vida.", reverse:true},
  {id:51, facet:"orden", text:"Mantengo todo organizado y en su lugar.", reverse:false},
  {id:52, facet:"orden", text:"Suelo ser desordenado en mi vida diaria.", reverse:true},
  {id:53, facet:"sentido_deber", text:"Cumplo mis compromisos sin importar el esfuerzo que requieran.", reverse:false},
  {id:54, facet:"sentido_deber", text:"Las reglas y obligaciones me parecen limitantes.", reverse:true},
  {id:55, facet:"orientacion_objetivos", text:"Me esfuerzo constantemente por alcanzar la excelencia.", reverse:false},
  {id:56, facet:"orientacion_objetivos", text:"Me conformo con hacer lo mínimo necesario.", reverse:true},
  {id:57, facet:"disciplina", text:"Termino las tareas difíciles aunque me cueste.", reverse:false},
  {id:58, facet:"disciplina", text:"Suelo posponer las cosas constantemente.", reverse:true},
  {id:59, facet:"prudencia", text:"Pienso bien las cosas antes de actuar.", reverse:false},
  {id:60, facet:"prudencia", text:"Actúo por impulso sin pensar en las consecuencias.", reverse:true}
];
