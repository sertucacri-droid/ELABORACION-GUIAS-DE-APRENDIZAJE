import { FlowchartNode } from '../types/guide';

export const FLOWCHART_STEPS: FlowchartNode[] = [
  {
    id: 'step-1',
    phaseNumber: 1,
    title: 'Análisis de la Estructura Curricular y Proyecto Formativo',
    category: 'curricular',
    swimlane: 'Diseño Curricular',
    shortDesc: 'Revisión del Programa de Formación, Código, Proyecto Formativo, Fase y Competencia a intervenir.',
    detailedSteps: [
      'Identificar la denominación y código del Programa de Formación en la plataforma curricular.',
      'Ubicar la fase actual del Proyecto Formativo (Análisis, Planeación, Ejecución o Evaluación) y la actividad macro del proyecto.',
      'Identificar la Competencia técnica o transversal asignada y su duración en horas.',
      'Asegurar coherencia entre los lineamientos institucionales y el perfil de egreso del aprendiz.'
    ],
    pedagogicalKey: 'Alineamiento macro-curricular: La guía no es un documento aislado; responde directamente a las necesidades del proyecto formativo.',
    criticalRule: 'No iniciar la redacción de la guía sin tener claridad exacta de la fase del proyecto y la competencia asociada.',
    examples: [
      'Programa: Análisis y Desarrollo de Software (ADSO). Fase: Análisis. Proyecto: "Sistema de Información para la Gestión Comunitaria". Competencia: "Especificar los requisitos del software según estándares".'
    ],
    noQuestionnaireTip: 'El contexto del proyecto formativo es el insumo principal para plantear problemas reales que reemplazarán las preguntas teóricas descontextualizadas.',
    inputs: ['Diseño Curricular', 'Proyecto Formativo Institucional', 'Matriz de Correlación'],
    outputs: ['Ficha de Identificación de la Guía', 'Competencia y Fase definidas'],
    nextNodes: ['step-2']
  },
  {
    id: 'step-2',
    phaseNumber: 2,
    title: 'Focalización y Desglose del Resultado de Aprendizaje (RAP 1)',
    category: 'analisis_rap',
    swimlane: 'Diseño Curricular',
    shortDesc: 'Delimitación del primer Resultado de Aprendizaje (RAP 1), sus saberes (conceptos, procesos y actitudes) y alcance temporal.',
    detailedSteps: [
      'Seleccionar el primer Resultado de Aprendizaje (RAP 1) establecido en el programa.',
      'Desglosar el verbo de acción, el objeto de conocimiento, la condición de calidad y la finalidad.',
      'Mapear los Conocimientos de Conceptos y Principios (Saber: teorías, normas, principios científicos/técnicos).',
      'Mapear los Conocimientos de Proceso (Saber Hacer: destrezas psicomotoras, algoritmos, procedimientos).',
      'Definir los Criterios de Actitud (Saber Ser: rigor metodológico, ética, trabajo en equipo, bioseguridad).'
    ],
    pedagogicalKey: 'Desglose tridimensional del saber: Garantiza que el RAP 1 se aborde como una competencia viva y no como memorización de contenidos.',
    criticalRule: 'El RAP no se redacta ni se modifica; se toma textualmente del diseño curricular aprobado.',
    examples: [
      'RAP 1: "Caracterizar los procesos de la organización de acuerdo con el marco metodológico y las necesidades del cliente". Horas estimadas: 40 horas.'
    ],
    noQuestionnaireTip: 'Al desglosar los saberes conceptuales en "relaciones lógicas y aplicaciones prácticas" en lugar de "definiciones", se sientan las bases para instrumentos de evaluación alternativos.',
    inputs: ['Competencia Curricular', 'Lista de Resultados de Aprendizaje'],
    outputs: ['RAP 1 Desglosado', 'Matriz de Saberes (Saber, Saber Hacer, Saber Ser)'],
    nextNodes: ['step-3']
  },
  {
    id: 'step-3',
    phaseNumber: 3,
    title: 'Estructuración de la Secuencia Didáctica de Actividades',
    category: 'actividades',
    swimlane: 'Metodología Didáctica',
    shortDesc: 'Diseño de los 4 momentos metodológicos: Reflexión Inicial, Contextualización, Apropiación y Transferencia.',
    detailedSteps: [
      'Actividad 3.1 Reflexión Inicial: Planteamiento de una situación problémica, dilema moral o caso de choque para motivar y activar la curiosidad.',
      'Actividad 3.2 Contextualización e Identificación de Conocimientos: Actividad diagnóstica donde el aprendiz confronta lo que sabe frente a lo que necesita aprender.',
      'Actividad 3.3 Apropiación del Conocimiento (Cognición): Construcción de conceptos, comprensión profunda de modelos teóricos y procedimentales.',
      'Actividad 3.4 Transferencia del Conocimiento: Aplicación directa del aprendizaje en la resolución de problemas reales vinculados al proyecto formativo.'
    ],
    pedagogicalKey: 'Ciclo del Aprendizaje Experiencial (Kolb / Modelo SENA): Del despertar del interés a la ejecución práctica en el contexto productivo.',
    criticalRule: 'Cada momento debe tener un propósito pedagógico específico y no saltar directamente a la entrega de productos sin pasar por la apropiación cognitiva.',
    examples: [
      'Reflexión: Caso de fracaso por mala captura de requisitos. Contextualización: Diagnóstico de técnicas conocidas. Apropiación: Cuadro comparativo de metodologías ágiles vs tradicionales y mapa conceptual. Transferencia: Documento de especificación con cliente real.'
    ],
    noQuestionnaireTip: 'El momento de Apropiación es el núcleo donde se verifica si el aprendiz interiorizó el conocimiento. Si la actividad exige sintetizar, contrastar o modelar, la evaluación jamás requerirá un cuestionario.',
    inputs: ['RAP 1 Desglosado', 'Perfil del Aprendiz'],
    outputs: ['Secuencia de las 4 Actividades Didácticas Formuladas'],
    nextNodes: ['step-4']
  },
  {
    id: 'step-4',
    phaseNumber: 4,
    title: 'Selección de Herramientas Pedagógicas Activas',
    category: 'herramientas',
    swimlane: 'Metodología Didáctica',
    shortDesc: 'Definición de metodologías activas y organizadores cognitivos para propiciar la apropiación de conocimientos por el aprendiz.',
    detailedSteps: [
      'Seleccionar herramientas para la apropiación conceptual: Mapas Conceptuales Jerárquicos, Cuadros Comparativos Multicriterio, Diagramas de Ishikawa (Causa-Efecto).',
      'Seleccionar herramientas para la apropiación procedimental: Estudios de Casos Guiados, Aprendizaje Basado en Problemas (ABP), Juegos de Roles, Simuladores Técnicos.',
      'Establecer el rol del aprendiz (protagonista, indagador, analista, ejecutor) y el rol del instructor (mediador cognitivo, facilitador, retroalimentador).',
      'Definir la modalidad de interacción (trabajo colaborativo, parejas de co-diseño, plenarias de debate socrático).'
    ],
    pedagogicalKey: 'Mediación instrumental: La herramienta pedagógica estructura el pensamiento del estudiante obligándolo a procesar y aplicar información en lugar de memorizarla.',
    criticalRule: 'No confundir herramienta tecnológica (ej. PowerPoint, Word) con herramienta pedagógica (ej. Matriz de Análisis Crítico, Método de Casos, Modelo Canvas).',
    examples: [
      'Herramienta 1: Diagrama Causa-Efecto (Ishikawa) para analizar cuellos de botella en requerimientos.',
      'Herramienta 2: Estudio de Caso semiestructurado para comparar metodologías de desarrollo.',
      'Herramienta 3: Debate Socrático con defensa de argumentos técnicos ante un comité de evaluación ficticio.'
    ],
    noQuestionnaireTip: 'Las herramientas pedagógicas activas generan productos cognitivos tangibles (un mapa argumentado, una solución a un caso, un diagrama funcional) que sirven como evidencia directa para evaluar sin preguntas de opción múltiple.',
    inputs: ['Actividades Didácticas Diseñadas', 'Catálogo de Técnicas Didácticas Activas'],
    outputs: ['Matriz de Herramientas Pedagógicas Asignadas por Actividad'],
    nextNodes: ['step-5']
  },
  {
    id: 'step-5',
    phaseNumber: 5,
    title: 'Determinación de Criterios y Tipos de Evidencia del RAP 1',
    category: 'evaluacion',
    swimlane: 'Evaluación Formativa',
    shortDesc: 'Vinculación de los Criterios de Evaluación del diseño curricular con las evidencias de Conocimiento, Desempeño y Producto.',
    detailedSteps: [
      'Extraer los Criterios de Evaluación oficiales asociados al RAP 1 desde el currículo.',
      'Clasificar y diseñar las evidencias para el RAP 1: Evidencia de Conocimiento (apropiación conceptual evidenciada a través de análisis, mapas o sustentaciones), Evidencia de Desempeño (ejecución y actitud técnica observada) y Evidencia de Producto (entregable tangible).',
      'Ponderar la relevancia de cada evidencia asegurando que la evidencia de conocimiento refleje comprensión profunda y no simple repetición.',
      'Verificar que exista alineamiento constructivo: RAP 1 ↔ Actividad de Apropiación ↔ Criterio de Evaluación ↔ Evidencia requerida.'
    ],
    pedagogicalKey: 'Alineamiento Constructivo (John Biggs): El aprendiz aprende lo que evalúa el sistema; por tanto, los criterios deben premiar el raciocinio y la solución práctica.',
    criticalRule: 'Cada criterio de evaluación curricular debe estar respaldado por al menos una evidencia comprobable.',
    examples: [
      'Criterio: "Aplica técnicas de recolección de información según el tipo de organización". Evidencia de Conocimiento: "Matriz comparativa argumentada y sustentación de elección técnica". Evidencia de Desempeño: "Simulación de entrevista con cliente". Evidencia de Producto: "Acta de requisitos técnicos caracterizados".'
    ],
    noQuestionnaireTip: '¿Cómo sustituir el cuestionario en la evidencia de conocimiento? Mediante: 1) Sustentación oral estructurada de decisiones, 2) Mapa conceptual jerárquico con justificación de relaciones, 3) Resolución de dilema técnico por escrito.',
    inputs: ['Criterios de Evaluación Curriculares', 'Herramientas Pedagógicas Seleccionadas'],
    outputs: ['Matriz de Evidencias de Aprendizaje del RAP 1'],
    nextNodes: ['step-6']
  },
  {
    id: 'step-6',
    phaseNumber: 6,
    title: 'Diseño de Instrumentos de Evaluación Alternativos (NO CUESTIONARIO)',
    category: 'instrumentos',
    swimlane: 'Evaluación Formativa',
    shortDesc: 'Construcción técnica de Rúbricas Analíticas, Listas de Chequeo y Guías de Observación para valorar la apropiación del RAP 1.',
    detailedSteps: [
      'Descartar pruebas objetivas y cuestionarios memorísticos cerrados.',
      'Diseñar el Instrumento 1: Rúbrica Socioformativa / Analítica de Conocimiento y Apropiación (con descriptores de niveles de dominio: Inicial, Receptivo, Resolutivo, Autónomo, Estratégico).',
      'Diseñar el Instrumento 2: Lista de Chequeo de Producto con indicadores de calidad técnica, rigor procedimental y completitud.',
      'Diseñar el Instrumento 3: Guía de Observación Sistemática para valorar el Desempeño y la argumentación en vivo durante la socialización o simulación.',
      'Redactar instrucciones claras para el aprendiz sobre cómo será valorado antes de que inicie la actividad (evaluación transparente y formativa).'
    ],
    pedagogicalKey: 'Evaluación Auténtica (Wiggins / Tobón): Medir la competencia en situaciones contextualizadas que reflejan el ejercicio profesional real.',
    criticalRule: 'Prohibido usar escalas arbitrarias sin descriptores cualitativos (evitar "Excelente/Bueno/Regular" sin explicar qué significa cada nivel).',
    examples: [
      'Instrumento para RAP 1: Rúbrica Analítica de 4 dimensiones: Dominio conceptual de métodos, Argumentación técnica de decisiones, Análisis causal de problemas y Coherencia de la propuesta.'
    ],
    noQuestionnaireTip: 'La Rúbrica Analítica permite evaluar con exactitud matemática y pedagógica el saber conceptual (por ejemplo: si el aprendiz distingue los fundamentos y los justifica con base en normas), superando con creces la memoria a corto plazo de un cuestionario.',
    inputs: ['Matriz de Evidencias', 'Criterios de Evaluación'],
    outputs: ['Rúbricas Analíticas', 'Listas de Chequeo', 'Guías de Observación Formuladas'],
    nextNodes: ['step-7']
  },
  {
    id: 'step-7',
    phaseNumber: 7,
    title: 'Consolidación de Ambientes, Recursos y Glosario Formativo',
    category: 'consolidacion',
    swimlane: 'Metodología Didáctica',
    shortDesc: 'Definición de espacios de aprendizaje (físico, virtual, taller), materiales consumibles, tecnologías requeridas y fuentes bibliográficas.',
    detailedSteps: [
      'Determinar ambientes requeridos (aulas polivalentes, laboratorios de cómputo, talleres especializados, plataforma LMS).',
      'Listar materiales de formación, software con licencias o código abierto y herramientas de apoyo.',
      'Elaborar el Glosario de Términos Técnicos indispensables para el RAP 1.',
      'Compilar la Referencia Bibliográfica en formato APA asegurando fuentes actualizadas y de rigor académico.'
    ],
    pedagogicalKey: 'Ecología del aprendizaje: Garantizar que el aprendiz cuente con todos los mediadores físicos, digitales y conceptuales para el éxito formativo.',
    criticalRule: 'Los recursos listados deben ser coherentes con las actividades descritas; no listar herramientas que no se utilicen en la secuencia.',
    examples: [
      'Ambiente: Taller de desarrollo de software con acceso a internet. Software: Modeladores UML (StarUML), herramientas colaborativas (Miro/Figma). Bibliografía: Pressman (2020), Sommerville (2019).'
    ],
    noQuestionnaireTip: 'Brindar fuentes bibliográficas de calidad empodera al aprendiz para consultar la teoría requerida en la resolución de su caso, en lugar de recibir respuestas masticadas para un test.',
    inputs: ['Secuencia Didáctica', 'Herramientas Pedagógicas'],
    outputs: ['Ambientes, Recursos, Glosario y Bibliografía Formal'],
    nextNodes: ['step-8']
  },
  {
    id: 'step-8',
    phaseNumber: 8,
    title: 'Validación Metodológica y Alineamiento Pedagógico',
    category: 'decision',
    swimlane: 'Diseño Curricular',
    shortDesc: 'Control de calidad: ¿Existe alineamiento constructivo entre RAP 1, actividades de apropiación e instrumentos sin cuestionario?',
    detailedSteps: [
      'Verificar Checklist de Calidad Metodológica:',
      '1. ¿El RAP 1 orienta directamente todas las actividades de la guía?',
      '2. ¿Las actividades de apropiación usan herramientas pedagógicas activas para generar comprensión profunda?',
      '3. ¿Los instrumentos de evaluación descartan totalmente el cuestionario memorístico?',
      '4. ¿La rúbrica y lista de chequeo evalúan el saber conceptual a través de análisis y argumentación?',
      '5. ¿El aprendiz conoce previamente los criterios de evaluación y descriptores de dominio?'
    ],
    pedagogicalKey: 'Ciclo de Mejora Continua y Validez Pedagógica: Una guía bien alineada garantiza una tasa de apropiación del 100% y aprendizaje significativo perdurable.',
    criticalRule: 'Si no hay coherencia entre la actividad y el instrumento de evaluación, se debe retroceder al Paso 3 o Paso 6.',
    examples: [
      'Aprobado: Guía metodológicamente blindada lista para publicación en la plataforma institucional y entrega a los aprendices.'
    ],
    noQuestionnaireTip: 'Si supera esta validación, el instructor cuenta con un dossier de evidencias irrefutable que demuestra la competencia del aprendiz sin depender de notas de memoria.',
    inputs: ['Borrador de Guía de Aprendizaje Completa'],
    outputs: ['Guía de Aprendizaje Oficial Aprobada', 'Instrumentos de Evaluación Listos para Ejecución'],
    nextNodes: []
  }
];

export const SWIMLANES_INFO = [
  {
    id: 'Diseño Curricular',
    name: 'Dimensión Curricular e Institucional',
    color: 'border-blue-500 bg-blue-50/50 text-blue-900',
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Alineación con el diseño curricular, perfil de egreso, proyecto formativo y delimitación del RAP 1.'
  },
  {
    id: 'Metodología Didáctica',
    name: 'Dimensión Pedagógica y Didáctica',
    color: 'border-emerald-500 bg-emerald-50/50 text-emerald-900',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Secuencia de las 4 actividades (Reflexión, Contextualización, Apropiación, Transferencia) y herramientas pedagógicas activas.'
  },
  {
    id: 'Evaluación Formativa',
    name: 'Dimensión de Evaluación Alternativa (Sin Cuestionarios)',
    color: 'border-purple-500 bg-purple-50/50 text-purple-900',
    badge: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Criterios de calidad, evidencias auténticas y diseño de Rúbricas Analíticas, Listas de Chequeo y Guías de Observación.'
  }
];
