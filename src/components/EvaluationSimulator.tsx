import React, { useState } from 'react';
import { SAMPLE_RUBRIC_RAP1, SAMPLE_CHECKLIST_RAP1 } from '../data/evaluationInstruments';
import { 
  Award, 
  CheckCircle2, 
  User, 
  Sparkles, 
  RefreshCw, 
  Printer, 
  FileCheck, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';

interface ApprenticeCase {
  id: string;
  name: string;
  documentId: string;
  profile: string;
  defaultLevels: Record<string, 'inicial' | 'basico' | 'autonomo' | 'estrategico'>;
  defaultChecklist: Record<string, boolean>;
  notes: string;
}

const APPRENTICE_CASES: ApprenticeCase[] = [
  {
    id: 'app-1',
    name: 'Carlos Andrés Méndez',
    documentId: 'CC 1.098.765.432',
    profile: 'Aprendiz con sobresaliente capacidad analítica, usó mapa conceptual argumentado y sustentó con soltura ante el panel.',
    defaultLevels: {
      'crit-1': 'autonomo',
      'crit-2': 'estrategico',
      'crit-3': 'autonomo',
      'crit-4': 'autonomo'
    },
    defaultChecklist: {
      'chk-1': true,
      'chk-2': true,
      'chk-3': true,
      'chk-4': true,
      'chk-5': true,
      'chk-6': true
    },
    notes: 'Excelente correlación entre la Teoría General de Sistemas y los procesos de la empresa diagnosticada.'
  },
  {
    id: 'app-2',
    name: 'Mariana Gómez Salcedo',
    documentId: 'CC 1.123.456.789',
    profile: 'Elaboró una lista de chequeo y diagrama Ishikawa impecables, pero vaciló al responder ante preguntas imprevistas en la sustentación.',
    defaultLevels: {
      'crit-1': 'autonomo',
      'crit-2': 'autonomo',
      'crit-3': 'basico',
      'crit-4': 'estrategico'
    },
    defaultChecklist: {
      'chk-1': true,
      'chk-2': true,
      'chk-3': true,
      'chk-4': true,
      'chk-5': true,
      'chk-6': true
    },
    notes: 'Demuestra apropiación técnica sólida en el producto; se sugiere fortalecer la seguridad en la sustentación oral bajo presión.'
  },
  {
    id: 'app-3',
    name: 'Juan David Ríos Botero',
    documentId: 'CC 1.045.678.901',
    profile: 'Aprendiz con enfoque inicialmente memorístico; confunde algunos conceptos de BPMN y requiere plan de mejoramiento guiado.',
    defaultLevels: {
      'crit-1': 'basico',
      'crit-2': 'inicial',
      'crit-3': 'basico',
      'crit-4': 'basico'
    },
    defaultChecklist: {
      'chk-1': true,
      'chk-2': false,
      'chk-3': false,
      'chk-4': true,
      'chk-5': false,
      'chk-6': true
    },
    notes: 'Requiere reelaborar el diagrama de espina de pescado con la técnica de los 5 porqués para evidenciar apropiación causal.'
  }
];

export const EvaluationSimulator: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<ApprenticeCase>(APPRENTICE_CASES[0]);
  const [rubricSelections, setRubricSelections] = useState<Record<string, 'inicial' | 'basico' | 'autonomo' | 'estrategico'>>(APPRENTICE_CASES[0].defaultLevels);
  const [checklistSelections, setChecklistSelections] = useState<Record<string, boolean>>(APPRENTICE_CASES[0].defaultChecklist);
  const [instructorFeedback, setInstructorFeedback] = useState<string>(APPRENTICE_CASES[0].notes);

  const rubric = SAMPLE_RUBRIC_RAP1;
  const checklist = SAMPLE_CHECKLIST_RAP1;

  const handleSelectCase = (caseItem: ApprenticeCase) => {
    setSelectedCase(caseItem);
    setRubricSelections(caseItem.defaultLevels);
    setChecklistSelections(caseItem.defaultChecklist);
    setInstructorFeedback(caseItem.notes);
  };

  const handleSelectLevel = (critId: string, levelKey: 'inicial' | 'basico' | 'autonomo' | 'estrategico') => {
    setRubricSelections(prev => ({
      ...prev,
      [critId]: levelKey
    }));
  };

  const handleToggleChecklist = (chkId: string) => {
    setChecklistSelections(prev => ({
      ...prev,
      [chkId]: !prev[chkId]
    }));
  };

  // Calculate Weighted Rubric Score (0.0 to 5.0)
  let totalWeightedScore = 0;
  rubric.criteria.forEach((crit) => {
    const levelKey = rubricSelections[crit.id] || 'basico';
    const points = crit.levels[levelKey].points;
    totalWeightedScore += (points * crit.weight) / 100;
  });

  // Calculate Checklist Percentage
  const totalCheckItems = checklist.items.length;
  const passedCheckItems = checklist.items.filter(i => checklistSelections[i.id]).length;
  const checklistPercentage = Math.round((passedCheckItems / totalCheckItems) * 100);

  // Overall Status
  const isApproved = totalWeightedScore >= 3.5 && checklistPercentage >= 70;

  let generalLevel = 'Resolutivo / Básico';
  if (totalWeightedScore >= 4.5) generalLevel = 'Estratégico / Destacado';
  else if (totalWeightedScore >= 3.8) generalLevel = 'Autónomo / Competente';
  else if (totalWeightedScore < 3.0) generalLevel = 'Inicial / Requiere Apoyo';

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-800/40">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-500/30">
            <Award className="w-3.5 h-3.5" />
            Simulador Calificador en Vivo
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Simulador de Evaluación del RAP 1 sin Cuestionarios
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experimente cómo un instructor valora con rigor científico la <strong>apropiación del conocimiento</strong> 
            utilizando la <strong>Rúbrica Analítica Socioformativa</strong> y la <strong>Lista de Chequeo de Producto</strong>. 
            Seleccione casos de aprendices o califique manualmente las evidencias.
          </p>
        </div>
      </div>

      {/* Case Selector Pills */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Casos Simulados de Aprendices para Evaluación:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {APPRENTICE_CASES.map((appCase) => (
            <button
              key={appCase.id}
              onClick={() => handleSelectCase(appCase)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCase.id === appCase.id
                  ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-200 shadow-xs'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <User className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-sm">{appCase.name}</h4>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">{appCase.profile}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Scoring Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Grading Form */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Section 1: Rúbrica Analítica de Apropiación */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">
                  Instrumento 1: Rúbrica Analítica
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Valoración de Saberes Conceptuales y Causalidad (RAP 1)
                </h3>
              </div>
              <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">
                {rubric.criteria.length} Criterios
              </span>
            </div>

            <div className="space-y-5">
              {rubric.criteria.map((crit) => {
                const currentLevelKey = rubricSelections[crit.id] || 'basico';

                return (
                  <div key={crit.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{crit.name}</span>
                        <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-medium">
                          {crit.evidenceTypeFocus}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-indigo-700">
                        Peso: {crit.weight}%
                      </span>
                    </div>

                    {/* Level Selector Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['inicial', 'basico', 'autonomo', 'estrategico'] as const).map((lvlKey) => {
                        const levelData = crit.levels[lvlKey];
                        const isChosen = currentLevelKey === lvlKey;

                        let activeBadge = 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100';
                        if (isChosen) {
                          if (lvlKey === 'inicial') activeBadge = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-200 font-bold';
                          else if (lvlKey === 'basico') activeBadge = 'border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-200 font-bold';
                          else if (lvlKey === 'autonomo') activeBadge = 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-300 font-bold';
                          else if (lvlKey === 'estrategico') activeBadge = 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-300 font-bold';
                        }

                        return (
                          <button
                            key={lvlKey}
                            onClick={() => handleSelectLevel(crit.id, lvlKey)}
                            className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${activeBadge}`}
                          >
                            <span className="font-bold block text-[11px] truncate">{levelData.name}</span>
                            <span className="text-[10px] opacity-75">{levelData.points.toFixed(1)} pts</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Descriptor Preview */}
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Descriptor seleccionado: </strong>
                      {crit.levels[currentLevelKey].description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Lista de Chequeo de Producto */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                  Instrumento 2: Lista de Chequeo
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Cumplimiento de Estándares de Calidad Técnica del Entregable
                </h3>
              </div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                {passedCheckItems} / {totalCheckItems} Cumplidos ({checklistPercentage}%)
              </span>
            </div>

            <div className="space-y-2">
              {checklist.items.map((item) => {
                const isChecked = !!checklistSelections[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleChecklist(item.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                      isChecked ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white text-transparent'
                      }`}>
                        ✓
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-700">{item.code}</span>
                          <span className="font-semibold text-xs text-slate-900">{item.criterionDescription}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{item.qualityStandard}</p>
                      </div>
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md shrink-0 ${
                      isChecked ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isChecked ? 'CUMPLE' : 'NO CUMPLE'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Score Summary Card */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-6">
            
            {/* Header Status */}
            <div className="text-center space-y-2 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Dictamen Final del RAP 1
              </span>
              <div className="text-4xl font-extrabold text-slate-900">
                {totalWeightedScore.toFixed(2)}{' '}
                <span className="text-base font-normal text-slate-400">/ 5.0</span>
              </div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                isApproved ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
              }`}>
                {isApproved ? <CheckCircle2 className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                {isApproved ? 'COMPETENCIA ALCANZADA (APROBADO)' : 'POR MEJORAR (NO APROBADO)'}
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Nivel Socioformativo:</span>
                <span className="font-bold text-indigo-700">{generalLevel}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Lista de Chequeo Técnica:</span>
                <span className="font-bold text-emerald-700">{checklistPercentage}% Cumplido</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Tipo de Evaluación:</span>
                <span className="font-bold text-purple-700">Auténtica (Sin Cuestionario)</span>
              </div>
            </div>

            {/* Qualitative Feedback Area */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                Retroalimentación Cualitativa Formativa:
              </label>
              <textarea
                rows={4}
                value={instructorFeedback}
                onChange={(e) => setInstructorFeedback(e.target.value)}
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                placeholder="Escriba observaciones de mejora para el aprendiz..."
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Imprimir Dictamen de Evaluación
              </button>
              <button
                onClick={() => handleSelectCase(selectedCase)}
                className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Restablecer Valores Iniciales
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
