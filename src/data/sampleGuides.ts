import { LearningGuide } from '../types/guide';
import { SAMPLE_RUBRIC_RAP1, SAMPLE_CHECKLIST_RAP1, SAMPLE_OBSERVATION_RAP1 } from './evaluationInstruments';

export const SAMPLE_LEARNING_GUIDE_ADSO: LearningGuide = {
  id: 'guia-adso-rap1',
  code: 'GFPI-G-001-ADSO-F1',
  version: '03 - Formación Profesional Integral',
  denomination: 'Guía de Aprendizaje N° 01: Caracterización de Procesos y Fundamentación de Requisitos de Software',
  program: {
    name: 'Tecnología en Análisis y Desarrollo de Software',
    code: '228118',
    level: 'Tecnólogo',
    modality: 'Presencial / Dual con mediación TIC'
  },
  project: {
    name: 'Diseño y Desarrollo de un Ecosistema Web y Móvil para la Transformación Digital de Mipymes',
    code: 'PROY-228118-04',
    phase: 'Fase 1: ANÁLISIS',
    activity: 'Actividad de Proyecto 1: Determinar las especificaciones funcionales y no funcionales de la solución de software con base en la caracterización de los procesos organizacionales.'
  },
  competence: {
    name: 'Establecer los requisitos de la solución de software de acuerdo con estándares y procedimiento técnico.',
    code: '220501092',
    durationHours: 96
  },
  learningOutcomes: {
    rap1: {
      id: 'rap-1',
      code: '220501092-01 (RAP 1)',
      statement: 'Caracterizar los procesos de la organización de acuerdo con el marco metodológico y las necesidades del cliente.',
      hours: 48,
      knowledgeDimensions: {
        concepts: [
          'Teoría General de Sistemas y Enfoque de Procesos (Entradas, Procesos, Salidas, Retroalimentación).',
          'Tipología de Procesos: Estratégicos, Misionales (Cadena de Valor) y de Apoyo.',
          'Marcos metodológicos de gestión de proyectos y ciclo de vida de software: Predictivo (Cascada / RUP) vs Ágil (Scrum / Kanban / Lean).',
          'Técnicas de elicitación de requerimientos: Entrevistas a profundidad, observación pasiva, revisión documental, lluvia de ideas.',
          'Notación estándar de modelado de procesos (BPMN 2.0 y diagramas de actividad UML).'
        ],
        procedures: [
          'Identificar actores, eventos disparadores y límites del sistema en el entorno cliente.',
          'Elaborar el mapa de procesos de la organización cliente aplicando jerarquía analítica.',
          'Diseñar y aplicar instrumentos de recolección de información sin sesgos cognitivos.',
          'Modelar diagramas causa-efecto (Ishikawa) para detectar cuellos de botella e ineficiencias.',
          'Redactar matrices comparativas justificando la elección de marcos metodológicos para el proyecto.'
        ],
        attitudes: [
          'Escucha activa y empatía profesional en la interacción con usuarios clave.',
          'Rigor y objetividad científica en el registro de hallazgos del diagnóstico.',
          'Compromiso ético con la confidencialidad de la información corporativa del cliente.',
          'Trabajo colaborativo y capacidad para recibir y aplicar retroalimentación constructiva.'
        ]
      },
      evaluationCriteria: [
        'Identifica los componentes del proceso organizacional siguiendo los lineamientos de la Teoría General de Sistemas.',
        'Aplica técnicas de recolección de información para la caracterización de procesos según el contexto del cliente.',
        'Elabora mapas y flujogramas de procesos empleando la simbología técnica estandarizada (BPMN / UML).',
        'Justifica con solvencia técnica la elección del marco metodológico de desarrollo frente a las particularidades del proyecto.',
        'Argumenta el análisis causal de ineficiencias operativas utilizando organizadores gráficos estructurados.'
      ]
    },
    otherRaps: [
      {
        code: '220501092-02 (RAP 2)',
        statement: 'Recectar los requisitos del sistema de software siguiendo técnicas de elicitación y estándares vigentes.'
      },
      {
        code: '220501092-03 (RAP 3)',
        statement: 'Validar los requisitos del software con los interesados aplicando técnicas de prototipado y especificación formal.'
      }
    ]
  },
  introduction: `Estimado Aprendiz:

Bienvenido a la primera guía de aprendizaje del programa de Análisis y Desarrollo de Software. En el sector productivo contemporáneo, más del 65% de los fracasos en proyectos tecnológicos no ocurren por fallas en el código de programación, sino por una comprensión defectuosa de los procesos de negocio de la organización. Un desarrollador de software de excelencia no es un simple codificador; es un analista capaz de sumergirse en la realidad de una empresa, comprender cómo fluyen sus operaciones, diagnosticar sus dolores críticos y modelar soluciones sistemáticas de alto impacto.

A través de esta guía abordaremos el primer Resultado de Aprendizaje (RAP 1). Para garantizar una apropiación sólida y auténtica del conocimiento, descartamos las pruebas de memoria o cuestionarios de selección múltiple. En su lugar, asumirá el rol de un Consultor Junior de Arquitectura y Procesos, utilizando herramientas de análisis causal, matrices multicriterio, estudios de caso y sustentaciones técnicas ante un panel evaluador. ¡Éxitos en esta experiencia transformadora!`,
  activities: [
    {
      id: 'act-3-1',
      code: '3.1',
      title: 'Actividad de Reflexión Inicial: La Autopsia del Software Fantasma',
      phase: 'reflexion',
      phaseName: 'Reflexión Inicial (Despertar cognitivo y motivación)',
      description: 'Lectura y análisis reflexivo del caso histórico de la aerolínea "AeroGlobal", cuyo sistema de reservas de 8 millones de dólares colapsó en su lanzamiento debido a que el equipo de desarrollo jamás comprendió cómo interactuaban las tripulaciones de tierra con los despachadores de carga. El aprendiz responde de manera reflexiva: ¿Por qué programar rápido sin entender el proceso equivale a construir un edificio sobre arena movediza? ¿Qué responsabilidad ética tiene el analista frente al cliente?',
      pedagogicalTool: 'Dilema Situacional Provocador y Rutina de Pensamiento "Ver - Pensar - Cuestionar"',
      toolDetails: 'El instructor comparte una cápsula narrativa con testimonios reales. El aprendiz redacta un microrrelato reflexivo de 2 párrafos para socializar en la sesión de apertura.',
      learnerRole: 'Observador empático que reconoce la vulnerabilidad de las soluciones técnicas cuando ignoran la realidad del usuario.',
      instructorRole: 'Dinamizador del debate, estimula preguntas socráticas sin dar respuestas inmediatas.',
      estimatedHours: 4,
      deliveryMethod: 'Plenaria grupal',
      evidenceProduced: 'Bitácora reflexiva individual (No calificable - Formativa diagnóstica)'
    },
    {
      id: 'act-3-2',
      code: '3.2',
      title: 'Actividad de Contextualización: Diagnóstico Vivencial y Cuadro SQA',
      phase: 'contextualizacion',
      phaseName: 'Contextualización e Identificación de Conocimientos',
      description: 'El aprendiz identifica los saberes previos que posee sobre procesos, diagramas de flujo y métodos de trabajo. Diligencia las dos primeras columnas del Cuadro SQA (S: Lo que Sé; Q: Lo que Quiero aprender) ante un desafío hipotético: "Mapear paso a paso cómo funciona el proceso de matrícula de una institución educativa y detectar dónde se pierden los datos".',
      pedagogicalTool: 'Cuadro SQA (Saber - Querer Saber - Aprendido) y Lluvia de Ideas Estructurada en Tablero Digital',
      toolDetails: 'Uso de un lienzo digital interactivo colaborativo. Los aprendices agrupan tarjetas según afinidad temática y contrastan sus nociones intuitivas contra la complejidad real de una organización.',
      learnerRole: 'Autodiagnosticador honesto que hace explícita su zona de desarrollo próximo.',
      instructorRole: 'Cartógrafo de saberes previos: identifica vacíos conceptuales, mitos y fortalezas colectivas.',
      estimatedHours: 6,
      deliveryMethod: 'Equipos colaborativos',
      evidenceProduced: 'Matriz SQA preliminar y mapa de expectativas formativas'
    },
    {
      id: 'act-3-3',
      code: '3.3',
      title: 'Actividad de Apropiación: Estudio de Caso Guiado, Diagrama Ishikawa y Matriz Comparativa',
      phase: 'apropiacion',
      phaseName: 'Apropiación del Conocimiento (Conceptualización y Procedimiento)',
      description: 'Actividad central para dominar los saberes del RAP 1. Subactividades integradas:\n1. Construcción de un Mapa Conceptual Jerárquico Argumentado que interconecte la Teoría General de Sistemas con la clasificación de procesos y BPMN.\n2. Resolución del Estudio de Caso "Logística Express": Aplicación de la técnica de los 5 Porqués y Diagrama de Ishikawa para desglosar por qué se retrasan los envíos.\n3. Elaboración de una Matriz Comparativa Multicriterio donde se contraste el enfoque Tradicional (Cascada/RUP) frente al Enfoque Ágil (Scrum) para 3 perfiles de clientes distintos, justificando la recomendación técnica.',
      pedagogicalTool: 'Tríada Didáctica Activa: Mapa Conceptual Novak + Diagrama Ishikawa + Matriz Multicriterio',
      toolDetails: 'Se proveen guías de orientación técnica, normas BPMN oficiales y casos de estudio con datos operacionales. Se exige justificación bibliográfica bajo normas APA.',
      learnerRole: 'Investigador, modelador analítico y sintetizador riguroso que no memoriza, sino que estructura relaciones causales.',
      instructorRole: 'Tutor metodológico, orientador de talleres de modelado y validador de rigor técnico.',
      estimatedHours: 20,
      deliveryMethod: 'Equipos colaborativos',
      evidenceProduced: 'Dossier Analítico de Apropiación (Evaluado con Rúbrica Analítica sin cuestionario)'
    },
    {
      id: 'act-3-4',
      code: '3.4',
      title: 'Actividad de Transferencia: Diagnóstico Real de la Empresa Cliente y Sustentación Técnica',
      phase: 'transferencia',
      phaseName: 'Transferencia del Conocimiento (Aplicación Contextualizada)',
      description: 'El equipo de aprendices aplica todo lo interiorizado en el RAP 1 directamente sobre la empresa real asignada para su Proyecto Formativo:\n1. Aplica un instrumento de entrevista técnica con el cliente.\n2. Construye el Mapa de Procesos de la organización y modela el proceso crítico en BPMN.\n3. Elabora el Documento Técnico de Caracterización de Procesos.\n4. Sustenta en vivo (15 min) ante un panel técnico, respondiendo preguntas de contingencia y defendiendo la metodología de desarrollo elegida.',
      pedagogicalTool: 'Aprendizaje Basado en Proyectos Reales (ABPr) + Panel de Sustentación Socrático',
      toolDetails: 'El aprendiz actúa como consultor ante el instructor y representantes de la comunidad formativa. Se evalúa el producto y la defensa oral sin ningún examen escrito.',
      learnerRole: 'Consultor tecnológico que presenta soluciones profesionales y defiende sus propuestas con seguridad técnica.',
      instructorRole: 'Evaluador con Lista de Chequeo y Guía de Observación Sistemática; retroalimenta en tiempo real con enfoque constructivo.',
      estimatedHours: 18,
      deliveryMethod: 'Equipos colaborativos',
      evidenceProduced: 'Informe de Caracterización Real + Sustentación Oral en Panel'
    }
  ],
  evaluationPlan: {
    rapFocus: 'RAP 1: Caracterizar los procesos de la organización de acuerdo con el marco metodológico y las necesidades del cliente.',
    criterios: [
      'Identifica los componentes del proceso organizacional siguiendo los lineamientos de la Teoría General de Sistemas.',
      'Aplica técnicas de recolección de información para la caracterización de procesos según el contexto del cliente.',
      'Elabora mapas y flujogramas de procesos empleando la simbología técnica estandarizada.',
      'Justifica con solvencia técnica la elección del marco metodológico de desarrollo frente a las particularidades del proyecto.',
      'Argumenta el análisis causal de ineficiencias operativas utilizando organizadores gráficos estructurados.'
    ],
    evidencias: [
      {
        tipo: 'Conocimiento',
        descripcion: 'Dossier de Apropiación Conceptual: Mapa conceptual argumentado, análisis causal en espina de pescado y matriz comparativa multicriterio.',
        instrumentoNoCuestionario: 'Rúbrica Analítica de Apropiación Conceptual (RUB-RAP1-001) - 4 niveles de dominio socioformativo',
        ponderacion: 35
      },
      {
        tipo: 'Producto',
        descripcion: 'Documento Técnico de Diagnóstico y Modelado de Procesos de la Mipyme (Proyecto Formativo).',
        instrumentoNoCuestionario: 'Lista de Chequeo de Producto (LCH-RAP1-002) - 6 estándares de calidad técnica verificables',
        ponderacion: 35
      },
      {
        tipo: 'Desempeño',
        descripcion: 'Sustentación Oral en Panel Técnico y Respuestas a Preguntas de Contingencia Metodológica.',
        instrumentoNoCuestionario: 'Guía de Observación Sistemática (GOS-RAP1-003) - 4 dimensiones de argumentación y dominio en vivo',
        ponderacion: 30
      }
    ],
    instruments: [
      {
        id: 'inst-rubrica',
        type: 'rubrica_analitica',
        name: SAMPLE_RUBRIC_RAP1.title,
        description: 'Evalúa la profundidad conceptual, análisis causal y rigor metodológico sin preguntas tipo test.',
        targetEvidence: 'Dossier de Apropiación Conceptual (Evidencia de Conocimiento)',
        evidenceType: 'Conocimiento',
        instructions: SAMPLE_RUBRIC_RAP1.instructions,
        criteriaCount: SAMPLE_RUBRIC_RAP1.criteria.length,
        data: SAMPLE_RUBRIC_RAP1
      },
      {
        id: 'inst-lista',
        type: 'lista_chequeo',
        name: SAMPLE_CHECKLIST_RAP1.title,
        description: 'Verifica el cumplimiento de estándares técnicos y normativos en el entregable del proyecto.',
        targetEvidence: 'Documento Técnico de Caracterización de Procesos (Evidencia de Producto)',
        evidenceType: 'Producto',
        instructions: 'Marque el cumplimiento o incumplimiento de cada estándar y registre observaciones de mejora.',
        criteriaCount: SAMPLE_CHECKLIST_RAP1.items.length,
        data: SAMPLE_CHECKLIST_RAP1
      },
      {
        id: 'inst-observacion',
        type: 'guia_observacion',
        name: SAMPLE_OBSERVATION_RAP1.title,
        description: 'Registra en tiempo real la solvencia discursiva, el léxico técnico y la capacidad de resolver dilemas en la sustentación.',
        targetEvidence: 'Defensa Oral ante Panel Técnico (Evidencia de Desempeño)',
        evidenceType: 'Desempeño',
        instructions: 'Valore el comportamiento observable del aprendiz durante la ronda de preguntas técnicas.',
        criteriaCount: SAMPLE_OBSERVATION_RAP1.items.length,
        data: SAMPLE_OBSERVATION_RAP1
      }
    ]
  },
  environmentAndResources: {
    ambientes: [
      'Ambiente de aprendizaje polivalente con mesas de trabajo colaborativo modulares.',
      'Laboratorio de desarrollo con conexión a internet de alta velocidad (mínimo 100 Mbps).',
      'Plataforma virtual institucional LMS para entrega de evidencias y acceso a biblioteca digital.'
    ],
    materiales: [
      'Lienzos en gran formato (papel bond / pizarra acrílica) y marcadores para lluvia de ideas.',
      'Cuentas educativas en software de modelado colaborativo (Miro, Figma o Draw.io).',
      'Guías de casos de estudio impresas y digitales con transcripciones operativas reales.'
    ],
    equipos: [
      'Computador por aprendiz o pareja de trabajo con navegadores actualizados.',
      'Sistema audiovisual para proyección de paneles de sustentación y videoconferencias.',
      'Software de modelado BPMN (Bizagi Modeler / Camunda Desktop) y herramientas UML instaladas.'
    ]
  },
  glossary: [
    {
      term: 'BPMN (Business Process Model and Notation)',
      definition: 'Estándar internacional gráfico para el modelado de procesos de negocio que proporciona una notación gráfica comprensible tanto para usuarios de negocio como para desarrolladores técnicos.'
    },
    {
      term: 'Cadena de Valor',
      definition: 'Modelo conceptual de Michael Porter que describe el rango de actividades que una empresa realiza para diseñar, producir, comercializar, entregar y dar soporte a su producto.'
    },
    {
      term: 'Elicitación de Requisitos',
      definition: 'Proceso de investigación, descubrimiento y extracción de las necesidades y restricciones del software interactuando con los usuarios y partes interesadas.'
    },
    {
      term: 'Marco Metodológico Ágil',
      definition: 'Enfoque iterativo e incremental para la gestión de proyectos y desarrollo de software centrado en entregas frecuentes, colaboración y adaptación continua al cambio.'
    },
    {
      term: 'Resultado de Aprendizaje (RAP)',
      definition: 'Enunciado que describe lo que se espera que el aprendiz conozca, comprenda y sea capaz de demostrar al finalizar un periodo formativo determinado.'
    },
    {
      term: 'Rúbrica Socioformativa',
      definition: 'Matriz de evaluación auténtica basada en el enfoque de competencias que valora el desempeño del estudiante a través de niveles de dominio progresivos y descriptores cualitativos contextualizados.'
    }
  ],
  references: [
    'Object Management Group (OMG). (2014). Business Process Model and Notation (BPMN) Version 2.0.2. OMG Document.',
    'Pressman, R. S., & Maxim, B. R. (2020). Ingeniería del software: Un enfoque práctico (9.ª ed.). McGraw-Hill.',
    'Sommerville, I. (2019). Ingeniería de software (10.ª ed.). Pearson Educación.',
    'Tobón, S. (2017). Evaluación socioformativa: Estrategias e instrumentos. Mount Dora: Kresearch.',
    'Wiggins, G., & McTighe, J. (2005). Understanding by Design (2nd ed.). ASCD.'
  ]
};
