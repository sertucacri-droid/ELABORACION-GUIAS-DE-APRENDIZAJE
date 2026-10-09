export interface RubricLevel {
  name: string;
  scoreRange: string;
  points: number;
  description: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  weight: number; // Porcentaje ej: 25%
  evidenceTypeFocus: 'Conocimiento' | 'Desempeño' | 'Producto';
  levels: {
    inicial: RubricLevel;
    basico: RubricLevel;
    autonomo: RubricLevel;
    estrategico: RubricLevel;
  };
}

export interface ChecklistItem {
  id: string;
  code: string;
  criterionDescription: string;
  evidenceFocus: 'Conocimiento Aplicado' | 'Procedimiento' | 'Formato y Normativa';
  verificationQuestion: string;
  qualityStandard: string;
}

export interface ObservationItem {
  id: string;
  indicator: string;
  dimension: 'Dominio Conceptual' | 'Seguridad y Argumentación' | 'Resolución de Contingencias' | 'Ética y Rigor';
  observableBehaviors: string;
}

export const SAMPLE_RUBRIC_RAP1: {
  title: string;
  code: string;
  rapAssociated: string;
  instructions: string;
  criteria: RubricCriterion[];
} = {
  title: 'Rúbrica Analítica de Apropiación Conceptual y Análisis Crítico (RAP 1)',
  code: 'RUB-RAP1-001',
  rapAssociated: 'RAP 1: Caracterizar los procesos de la organización de acuerdo con el marco metodológico y las necesidades del cliente.',
  instructions: 'Este instrumento valora la comprensión profunda y la capacidad de argumentación técnica del aprendiz sin recurrir a cuestionarios de memoria. Seleccione el nivel de dominio demostrado por el aprendiz en cada dimensión.',
  criteria: [
    {
      id: 'crit-1',
      name: 'Dominio Conceptual y Taxonomía del Marco Metodológico',
      weight: 30,
      evidenceTypeFocus: 'Conocimiento',
      levels: {
        inicial: {
          name: 'Receptivo / Inicial',
          scoreRange: '0.0 - 2.9 (No Aprobado)',
          points: 2.0,
          description: 'Menciona conceptos de forma aislada o confunde terminología básica (ej. confunde procesos con procedimientos o metodologías ágiles con predictivas). Depende de definiciones textuales sin explicarlas.'
        },
        basico: {
          name: 'Resolutivo / Básico',
          scoreRange: '3.0 - 3.7 (Aprobado Básico)',
          points: 3.5,
          description: 'Identifica y define correctamente los conceptos teóricos del RAP 1, pero tiene dificultades para explicar cómo interactúan entre sí cuando cambian las condiciones del entorno organizacional.'
        },
        autonomo: {
          name: 'Autónomo / Competente',
          scoreRange: '3.8 - 4.5 (Aprobado Destacado)',
          points: 4.2,
          description: 'Explica con solvencia técnica las relaciones lógicas entre procesos, normas y marcos metodológicos. Justifica con precisión técnica por qué un marco es idóneo para el caso en estudio sin cometer errores conceptuales.'
        },
        estrategico: {
          name: 'Estratégico / Experto',
          scoreRange: '4.6 - 5.0 (Excelente)',
          points: 5.0,
          description: 'Domina los conceptos con profundidad analítica; contrasta críticamente distintos paradigmas metodológicos, identifica vacíos normativos en el caso y propone adaptaciones conceptuales innovadoras y pertinentes.'
        }
      }
    },
    {
      id: 'crit-2',
      name: 'Capacidad de Análisis Causal y Diagnóstico Sistémico',
      weight: 25,
      evidenceTypeFocus: 'Conocimiento',
      levels: {
        inicial: {
          name: 'Receptivo / Inicial',
          scoreRange: '0.0 - 2.9 (No Aprobado)',
          points: 2.0,
          description: 'Señala síntomas superficiales del problema sin identificar causas estructurales. No logra conectar la teoría del proceso con las fallas observadas.'
        },
        basico: {
          name: 'Resolutivo / Básico',
          scoreRange: '3.0 - 3.7 (Aprobado Básico)',
          points: 3.5,
          description: 'Identifica causas directas del problema mediante el organizador gráfico (Ishikawa o mapa), pero no logra priorizar cuáles tienen mayor impacto sobre el resultado global.'
        },
        autonomo: {
          name: 'Autónomo / Competente',
          scoreRange: '3.8 - 4.5 (Aprobado Destacado)',
          points: 4.2,
          description: 'Aplica el análisis causal (5 Porqués / Espina de Pescado) discriminando causas raíz de efectos secundarios. Correlaciona las variables técnicas con el impacto en el negocio del cliente.'
        },
        estrategico: {
          name: 'Estratégico / Experto',
          scoreRange: '4.6 - 5.0 (Excelente)',
          points: 5.0,
          description: 'Realiza un diagnóstico sistémico integral; prevé cuellos de botella no evidentes, modela escenarios de riesgo futuro y cuantifica el impacto multidimensional del problema con rigor.'
        }
      }
    },
    {
      id: 'crit-3',
      name: 'Sustentación y Argumentación Técnica de Decisiones',
      weight: 25,
      evidenceTypeFocus: 'Desempeño',
      levels: {
        inicial: {
          name: 'Receptivo / Inicial',
          scoreRange: '0.0 - 2.9 (No Aprobado)',
          points: 2.0,
          description: 'No logra defender técnicamente su propuesta ante cuestionamientos del instructor o pares. Responde basándose en opiniones subjetivas ("a mí me pareció mejor") sin sustento normativo.'
        },
        basico: {
          name: 'Resolutivo / Básico',
          scoreRange: '3.0 - 3.7 (Aprobado Básico)',
          points: 3.5,
          description: 'Respalda sus decisiones citando la bibliografía sugerida, pero vacila ante preguntas de contingencia o variaciones en los requisitos del cliente.'
        },
        autonomo: {
          name: 'Autónomo / Competente',
          scoreRange: '3.8 - 4.5 (Aprobado Destacado)',
          points: 4.2,
          description: 'Argumenta con solidez y léxico técnico profesional cada decisión tomada. Responde con agilidad a contra-argumentos demostrando interiorización genuina de las normas técnicas.'
        },
        estrategico: {
          name: 'Estratégico / Experto',
          scoreRange: '4.6 - 5.0 (Excelente)',
          points: 5.0,
          description: 'Sustenta como un consultor técnico sénior; utiliza datos empíricos, marcos de referencia internacionales y principios éticos. Inspira confianza y persuade mediante razonamiento deductivo impecable.'
        }
      }
    },
    {
      id: 'crit-4',
      name: 'Rigor Metodológico del Entregable / Modelo Construido',
      weight: 20,
      evidenceTypeFocus: 'Producto',
      levels: {
        inicial: {
          name: 'Receptivo / Inicial',
          scoreRange: '0.0 - 2.9 (No Aprobado)',
          points: 2.0,
          description: 'El entregable (mapa conceptual / matriz / informe) presenta inconsistencias graves en notación técnica, desorganización y ausencia de secciones críticas requeridas.'
        },
        basico: {
          name: 'Resolutivo / Básico',
          scoreRange: '3.0 - 3.7 (Aprobado Básico)',
          points: 3.5,
          description: 'El entregable cumple con la estructura mínima requerida, aunque presenta imprecisiones menores de notación o trazabilidad entre requerimientos y procesos.'
        },
        autonomo: {
          name: 'Autónomo / Competente',
          scoreRange: '3.8 - 4.5 (Aprobado Destacado)',
          points: 4.2,
          description: 'El artefacto es coherente, claro, sigue fielmente los estándares de modelado y demuestra orden metodológico en cada uno de sus componentes técnicos.'
        },
        estrategico: {
          name: 'Estratégico / Experto',
          scoreRange: '4.6 - 5.0 (Excelente)',
          points: 5.0,
          description: 'El documento es de calidad profesional publicable o para entrega a cliente real. Incluye trazabilidad completa, glosario contextual y aportes de valor agregado no solicitados expresamente.'
        }
      }
    }
  ]
};

export const SAMPLE_CHECKLIST_RAP1: {
  title: string;
  code: string;
  rapAssociated: string;
  productName: string;
  items: ChecklistItem[];
} = {
  title: 'Lista de Chequeo de Producto: Caracterización y Matriz Metodológica (RAP 1)',
  code: 'LCH-RAP1-002',
  rapAssociated: 'RAP 1: Caracterizar los procesos de la organización de acuerdo con el marco metodológico y las necesidades del cliente.',
  productName: 'Documento Técnico de Diagnóstico y Matriz de Modelado de Procesos',
  items: [
    {
      id: 'chk-1',
      code: 'ITEM-01',
      criterionDescription: 'Identificación y delimitación formal del alcance de los procesos organizacionales.',
      evidenceFocus: 'Conocimiento Aplicado',
      verificationQuestion: '¿El documento diferencia con claridad los procesos estratégicos, misionales y de apoyo basándose en la tipología teórica?',
      qualityStandard: 'Debe contener el mapa de procesos completo sin omitir interacciones clave.'
    },
    {
      id: 'chk-2',
      code: 'ITEM-02',
      criterionDescription: 'Aplicación de la técnica de recolección de información según el contexto.',
      evidenceFocus: 'Procedimiento',
      verificationQuestion: '¿Se evidencia el uso justificado de al menos dos técnicas activas (entrevista semiestructurada, observación o revisión documental)?',
      qualityStandard: 'Incluye instrumentos de recolección diligenciados y transcripciones síntesis.'
    },
    {
      id: 'chk-3',
      code: 'ITEM-03',
      criterionDescription: 'Análisis causal de fallas o cuellos de botella mediante organizador gráfico.',
      evidenceFocus: 'Conocimiento Aplicado',
      verificationQuestion: '¿El diagrama Ishikawa / Árbol de problemas categoriza las causas siguiendo el modelo metodológico estudiado?',
      qualityStandard: 'Mínimo 4 categorías con causas primarias y secundarias desglosadas con la técnica de los 5 porqués.'
    },
    {
      id: 'chk-4',
      code: 'ITEM-04',
      criterionDescription: 'Justificación teórica de la metodología de trabajo seleccionada.',
      evidenceFocus: 'Conocimiento Aplicado',
      verificationQuestion: '¿El informe incluye una matriz comparativa que fundamente por qué la metodología elegida es superior a las alternativas para este cliente?',
      qualityStandard: 'Comparación frente a mínimo 3 criterios técnicos (flexibilidad, costo, tiempo, riesgo).'
    },
    {
      id: 'chk-5',
      code: 'ITEM-05',
      criterionDescription: 'Fidelidad y coherencia en la notación técnica de modelado (BPMN / UML).',
      evidenceFocus: 'Procedimiento',
      verificationQuestion: '¿Los diagramas de flujo de proceso utilizan la simbología estandarizada sin inventar figuras ni bifurcaciones ambiguas?',
      qualityStandard: '100% de símbolos validados según el estándar oficial internacional.'
    },
    {
      id: 'chk-6',
      code: 'ITEM-06',
      criterionDescription: 'Presentación formal, citas bibliográficas y normas APA aplicadas.',
      evidenceFocus: 'Formato y Normativa',
      verificationQuestion: '¿Las fuentes conceptuales y referencias normativas están citadas de acuerdo con la norma APA vigente?',
      qualityStandard: 'Mínimo 3 fuentes académicas o manuales técnicos oficiales referenciados.'
    }
  ]
};

export const SAMPLE_OBSERVATION_RAP1: {
  title: string;
  code: string;
  rapAssociated: string;
  situation: string;
  items: ObservationItem[];
} = {
  title: 'Guía de Observación Sistemática: Sustentación Oral y Panel Socrático (RAP 1)',
  code: 'GOS-RAP1-003',
  rapAssociated: 'RAP 1: Caracterizar los procesos de la organización de acuerdo con el marco metodológico y las necesidades del cliente.',
  situation: 'Defensa técnica individual / por parejas del diagnóstico y respuestas a preguntas de contingencia del panel evaluador.',
  items: [
    {
      id: 'obs-1',
      indicator: 'Precisión y fluidez en el vocabulario técnico especializado.',
      dimension: 'Dominio Conceptual',
      observableBehaviors: 'Usa términos propios de la disciplina con naturalidad; evita modismos o explicaciones coloquiales imprecisas cuando se requiere exactitud técnica.'
    },
    {
      id: 'obs-2',
      indicator: 'Respuesta fundamentada ante preguntas inesperadas de cambio de escenario.',
      dimension: 'Resolución de Contingencias',
      observableBehaviors: 'Cuando el evaluador plantea un cambio en el caso (ej. recorte de presupuesto o cambio de cliente), el aprendiz reacciona adaptando su marco conceptual sin contradecirse.'
    },
    {
      id: 'obs-3',
      indicator: 'Demostración de pensamiento crítico y análisis ético en las decisiones.',
      dimension: 'Ética y Rigor',
      observableBehaviors: 'Considera el impacto social, normativo y de seguridad de la información en su propuesta técnica.'
    },
    {
      id: 'obs-4',
      indicator: 'Seguridad, coherencia discursiva y respeto hacia las observaciones recibidas.',
      dimension: 'Seguridad y Argumentación',
      observableBehaviors: 'Mantiene una postura profesional receptiva, anota las observaciones y defiende sus tesis con cortesía y argumentos basados en evidencia empírica.'
    }
  ]
};
