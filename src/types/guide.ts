export type ActivityPhase = 'reflexion' | 'contextualizacion' | 'apropiacion' | 'transferencia';

export interface LearningActivity {
  id: string;
  code: string;
  title: string;
  phase: ActivityPhase;
  phaseName: string;
  description: string;
  pedagogicalTool: string;
  toolDetails: string;
  learnerRole: string;
  instructorRole: string;
  estimatedHours: number;
  deliveryMethod: 'Individual' | 'Equipos colaborativos' | 'Plenaria grupal';
  evidenceProduced?: string;
}

export interface NonQuestionnaireInstrument {
  id: string;
  type: 'rubrica_analitica' | 'lista_chequeo' | 'guia_observacion' | 'matriz_estudio_caso' | 'portafolio_evaluativo';
  name: string;
  description: string;
  targetEvidence: string;
  evidenceType: 'Conocimiento' | 'Desempeño' | 'Producto';
  instructions: string;
  criteriaCount: number;
  data: any;
}

export interface LearningGuide {
  id: string;
  code: string;
  version: string;
  denomination: string;
  program: {
    name: string;
    code: string;
    level: string; // Técnico, Tecnólogo, Especialización, Formación Continua
    modality: string;
  };
  project: {
    name: string;
    code: string;
    phase: string;
    activity: string;
  };
  competence: {
    name: string;
    code: string;
    durationHours: number;
  };
  learningOutcomes: {
    rap1: {
      id: string;
      code: string;
      statement: string;
      hours: number;
      knowledgeDimensions: {
        concepts: string[]; // Saber: conceptos y teorías
        procedures: string[]; // Saber Hacer: habilidades y técnicas
        attitudes: string[]; // Saber Ser: valores y postura profesional
      };
      evaluationCriteria: string[];
    };
    otherRaps?: {
      code: string;
      statement: string;
    }[];
  };
  introduction: string;
  activities: LearningActivity[];
  evaluationPlan: {
    rapFocus: string;
    criterios: string[];
    evidencias: {
      tipo: 'Conocimiento' | 'Desempeño' | 'Producto';
      descripcion: string;
      instrumentoNoCuestionario: string;
      ponderacion: number;
    }[];
    instruments: NonQuestionnaireInstrument[];
  };
  environmentAndResources: {
    ambientes: string[];
    materiales: string[];
    equipos: string[];
  };
  glossary: { term: string; definition: string }[];
  references: string[];
}

export interface FlowchartNode {
  id: string;
  phaseNumber: number;
  title: string;
  category: 'curricular' | 'analisis_rap' | 'actividades' | 'herramientas' | 'evaluacion' | 'instrumentos' | 'consolidacion' | 'decision';
  swimlane: 'Diseño Curricular' | 'Metodología Didáctica' | 'Evaluación Formativa';
  shortDesc: string;
  detailedSteps: string[];
  pedagogicalKey: string;
  criticalRule: string;
  examples: string[];
  noQuestionnaireTip: string;
  inputs: string[];
  outputs: string[];
  nextNodes?: string[];
  conditionYes?: string;
  conditionNo?: string;
}

export interface PedagogicalToolInfo {
  id: string;
  name: string;
  category: 'Cognitiva' | 'Colaborativa' | 'Práctica / Simulación' | 'Metacognitiva';
  description: string;
  howToApply: string[];
  knowledgeAppropriationMechanism: string;
  learnerRole: string;
  instructorRole: string;
  compatibleEvidences: string[];
  recommendedInstruments: string[];
  icon: string;
}
