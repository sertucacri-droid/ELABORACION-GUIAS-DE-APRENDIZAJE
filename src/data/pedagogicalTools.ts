import { PedagogicalToolInfo } from '../types/guide';

export const PEDAGOGICAL_TOOLS: PedagogicalToolInfo[] = [
  {
    id: 'estudio-casos',
    name: 'Estudio de Caso Real / Situacional',
    category: 'Práctica / Simulación',
    description: 'Análisis minucioso de una situación verídica o simulada del sector productivo donde surgen retos técnicos, dilemas operativos o fallas de sistema que requieren diagnóstico y propuesta de solución fundamentada.',
    howToApply: [
      '1. El instructor presenta el caso con datos técnicos reales, restricciones operativas y objetivos de la organización.',
      '2. El aprendiz analiza individualmente la situación y detecta las variables críticas usando los conceptos del RAP 1.',
      '3. En equipos o individualmente, se debate la solución técnica idónea y se fundamentan las decisiones.',
      '4. Se socializa la propuesta ante el grupo y se retroalimenta la pertinencia metodológica.'
    ],
    knowledgeAppropriationMechanism: 'Transforma conceptos teóricos abstractos en herramientas vivas para resolver problemas. El aprendiz no repite definiciones; las ejecuta para diagnosticar y proponer soluciones viables.',
    learnerRole: 'Investigador, analista crítico y diagnosticador que defiende soluciones con rigor técnico.',
    instructorRole: 'Facilitador del caso, moderador de preguntas socráticas y mediador de conclusiones técnicas.',
    compatibleEvidences: ['Informe de Diagnóstico de Caso', 'Propuesta de Intervención Técnica', 'Sustentación de Solución'],
    recommendedInstruments: ['Rúbrica Analítica de Resolución de Casos', 'Lista de Chequeo de Criterios Técnicos'],
    icon: 'Briefcase'
  },
  {
    id: 'diagrama-ishikawa',
    name: 'Diagrama Causa-Efecto (Espina de Pescado / Ishikawa)',
    category: 'Cognitiva',
    description: 'Herramienta gráfica de análisis causal estructurado que permite descomponer un problema central en sus causas raíz organizadas por categorías (Personas, Métodos, Máquinas/Tecnología, Materiales, Medidas y Entorno).',
    howToApply: [
      '1. Se define con precisión el problema o efecto en la cabeza del pescado.',
      '2. Se identifican las espinas mayores según las categorías del dominio técnico del RAP 1.',
      '3. El aprendiz aplica la técnica de los "5 Porqués" para encontrar las causas subyacentes.',
      '4. Se elabora un informe o sustentación justificando las prioridades de intervención.'
    ],
    knowledgeAppropriationMechanism: 'Fuerza al aprendiz a categorizar, jerarquizar y correlacionar variables complejas. La apropiación se evidencia cuando el aprendiz diferencia síntomas de causas estructurales.',
    learnerRole: 'Analista de causalidad y sintetizador lógico de procesos técnicos.',
    instructorRole: 'Guía metodológico y evaluador de la coherencia en las relaciones causa-efecto.',
    compatibleEvidences: ['Diagrama de Causa-Efecto documentado', 'Matriz de Priorización de Causas Raíz'],
    recommendedInstruments: ['Rúbrica de Análisis Causal y Pensamiento Sistémico', 'Lista de Chequeo de Rigor Estructural'],
    icon: 'GitFork'
  },
  {
    id: 'mapa-conceptual-argumentado',
    name: 'Mapa Conceptual Jerárquico Argumentado (Novak)',
    category: 'Cognitiva',
    description: 'Red representacional de proposiciones donde los conceptos clave del RAP 1 se organizan de lo general a lo específico mediante palabras de enlace reflexivas y justificaciones técnicas explícitas en cada nodo.',
    howToApply: [
      '1. Seleccionar los 12-15 conceptos esenciales del RAP 1.',
      '2. Jerarquizar los conceptos por niveles de inclusión y dependencia lógica.',
      '3. Conectar los conceptos con verbos y proposiciones que evidencien comprensión profunda (no meros conectores vacíos).',
      '4. Añadir notas al pie o sustentación oral breve explicando por qué se establecieron dichos enlaces.'
    ],
    knowledgeAppropriationMechanism: 'Demuestra la estructura cognitiva del aprendiz (Ausubel). Si un aprendiz memorizó sin comprender, no podrá relacionar conceptos transversales ni explicar la bidireccionalidad de las proposiciones.',
    learnerRole: 'Cartógrafo conceptual y arquitecto de su propia red de conocimientos.',
    instructorRole: 'Evaluador de la solidez de las proposiciones y de la profundidad en la jerarquía conceptual.',
    compatibleEvidences: ['Mapa Conceptual Digital con Notas Técnicas', 'Defensa Gráfica del Modelo Conceptual'],
    recommendedInstruments: ['Rúbrica Analítica de Estructuras Conceptuales', 'Matriz de Validación Proposicional'],
    icon: 'Network'
  },
  {
    id: 'matriz-comparativa',
    name: 'Matriz Comparativa Multicriterio y Justificación Técnica',
    category: 'Cognitiva',
    description: 'Instrumento analítico en tabla de doble entrada que contrasta 3 o más enfoques, metodologías, herramientas o normativas técnicas bajo criterios homologados (ej. viabilidad, rendimiento, costo, escalabilidad, seguridad).',
    howToApply: [
      '1. Definir los elementos a contrastar pertinentes al RAP 1.',
      '2. Establecer criterios de ponderación objetivos y técnicamente relevantes.',
      '3. Completar la matriz con datos verificables y fuentes bibliográficas confiables.',
      '4. Redactar una conclusión ejecutiva dictaminando cuál opción es óptima para un escenario dado y por qué.'
    ],
    knowledgeAppropriationMechanism: 'Exige niveles superiores de pensamiento (Análisis y Evaluación en la taxonomía de Bloom). El aprendiz no se queda en describir qué es una técnica; discierne cuándo y por qué debe emplearse.',
    learnerRole: 'Evaluador comparativo y tomador de decisiones fundamentadas.',
    instructorRole: 'Validador de los criterios de contraste y de la objetividad de la ponderación.',
    compatibleEvidences: ['Matriz Comparativa Multicriterio', 'Dictamen Técnico de Selección'],
    recommendedInstruments: ['Rúbrica de Análisis Comparativo y Juicio Crítico'],
    icon: 'Table'
  },
  {
    id: 'simulacion-roles',
    name: 'Simulación de Situaciones y Juego de Roles Profesional',
    category: 'Práctica / Simulación',
    description: 'Dramatización estructurada de un entorno laboral donde los aprendices asumen roles profesionales (ej. analista vs cliente, auditor vs auditado, diseñador vs usuario final) para negociar y aplicar estándares.',
    howToApply: [
      '1. Se entrega un guion de situación con roles, intereses contrapuestos y restricciones técnicas.',
      '2. Los aprendices preparan sus argumentos técnicos basados en el material del RAP 1.',
      '3. Se lleva a cabo la simulación en un tiempo controlado (15 a 20 minutos).',
      '4. De-briefing grupal: reflexión sobre aciertos técnicos, comunicación asertiva y dominio conceptual demostrado.'
    ],
    knowledgeAppropriationMechanism: 'Integra los tres saberes: Saber (conceptos técnicos), Saber Hacer (comunicación técnica y negociación) y Saber Ser (ética, paciencia, empatía y rigor profesional).',
    learnerRole: 'Profesional en ejercicio que reacciona a contingencias con base en su conocimiento técnico.',
    instructorRole: 'Observador activo con guía de cotejo, moderador del debriefing formativo.',
    compatibleEvidences: ['Grabación o Bitácora de la Simulación', 'Acta de Acuerdos Técnicos Generada en la Sesión'],
    recommendedInstruments: ['Guía de Observación Sistemática de Desempeño', 'Rúbrica de Habilidades de Negociación Técnica'],
    icon: 'Users'
  },
  {
    id: 'taller-aplicado-canvas',
    name: 'Taller de Modelado y Canvas de Arquitectura / Procesos',
    category: 'Práctica / Simulación',
    description: 'Lienzo visual donde el aprendiz mapea flujos de proceso, entradas, salidas, actores y requerimientos de calidad para un sistema o proceso productivo específico.',
    howToApply: [
      '1. Se provee la plantilla del Canvas adaptada a la temática del RAP 1.',
      '2. El aprendiz diligencia cada bloque vinculando requerimientos técnicos y normas.',
      '3. Se ejecuta una revisión por pares (coevaluación) con preguntas desafiantes.',
      '4. Se ajusta la versión final del lienzo con base en la retroalimentación recibida.'
    ],
    knowledgeAppropriationMechanism: 'Evidencia la capacidad de síntesis, visión holística y modelado arquitectónico. Reemplaza cualquier pregunta de falso/verdadero por la construcción de un sistema coherente.',
    learnerRole: 'Modelador de procesos y diseñador de soluciones integrales.',
    instructorRole: 'Coach metodológico y auditor de consistencia interna del lienzo.',
    compatibleEvidences: ['Lienzo Canvas Completo con Justificación', 'Matriz de Trazabilidad de Requisitos'],
    recommendedInstruments: ['Lista de Chequeo de Completitud y Coherencia', 'Rúbrica de Modelado Arquitectónico'],
    icon: 'LayoutGrid'
  }
];
