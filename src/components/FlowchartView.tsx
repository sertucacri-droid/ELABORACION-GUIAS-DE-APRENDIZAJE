import React, { useState } from 'react';
import { 
  FLOWCHART_STEPS, 
  SWIMLANES_INFO 
} from '../data/flowchartData';
import { FlowchartNode } from '../types/guide';
import { 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle, 
  Layers, 
  Eye, 
  ShieldAlert, 
  BookOpen, 
  Wrench, 
  FileCheck, 
  Info,
  Maximize2,
  ListOrdered,
  Columns
} from 'lucide-react';

interface FlowchartViewProps {
  onSelectStep?: (stepId: string) => void;
  onNavigateToGuide?: () => void;
}

export const FlowchartView: React.FC<FlowchartViewProps> = ({ onNavigateToGuide }) => {
  const [selectedNode, setSelectedNode] = useState<FlowchartNode | null>(FLOWCHART_STEPS[1]); // Step 2 (RAP 1) selected by default
  const [viewMode, setViewMode] = useState<'diagram' | 'swimlanes' | 'list'>('diagram');
  const [highlightFilter, setHighlightFilter] = useState<'all' | 'curricular' | 'didactica' | 'evaluacion'>('all');

  const filteredSteps = FLOWCHART_STEPS.filter((step) => {
    if (highlightFilter === 'all') return true;
    if (highlightFilter === 'curricular') return step.swimlane === 'Diseño Curricular';
    if (highlightFilter === 'didactica') return step.swimlane === 'Metodología Didáctica';
    if (highlightFilter === 'evaluacion') return step.swimlane === 'Evaluación Formativa';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-900/40">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Metodología Oficial de Formación por Competencias
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Diagrama de Flujo: Ruta Metodológica para Elaborar la Guía de Aprendizaje
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Representación sistemática de los 8 pasos para estructurar una guía formativa de alto impacto: 
            desde el análisis de la estructura curricular y focalización del <strong>Resultado de Aprendizaje 1 (RAP 1)</strong>, 
            hasta la definición de <strong>herramientas pedagógicas activas</strong> y el diseño de <strong>instrumentos de evaluación no-cuestionario</strong> 
            (rúbricas y listas de chequeo) que evidencian la apropiación auténtica del conocimiento.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> 1. Estructura Curricular
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-slate-200 font-semibold text-emerald-300 border border-emerald-400/30">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> 2. Focalización RAP 1
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> 3. Secuencia Didáctica
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-slate-200 font-semibold text-purple-300 border border-purple-400/30">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> 6. Evaluación Sin Cuestionarios
            </span>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg w-full md:w-auto">
          <button
            onClick={() => setViewMode('diagram')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'diagram' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Flujo Gráfico Interactivo
          </button>
          <button
            onClick={() => setViewMode('swimlanes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'swimlanes' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            Vista por Carriles (Swimlanes)
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'list' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            Lista Metodológica Detallada
          </button>
        </div>

        {/* Dimension Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <span className="text-xs text-slate-500 font-medium">Filtrar dimensión:</span>
          <select
            value={highlightFilter}
            onChange={(e) => setHighlightFilter(e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">Todas las dimensiones (8 pasos)</option>
            <option value="curricular">Dimensión Curricular (Pasos 1, 2, 8)</option>
            <option value="didactica">Dimensión Didáctica (Pasos 3, 4, 7)</option>
            <option value="evaluacion">Dimensión de Evaluación (Pasos 5, 6)</option>
          </select>
        </div>
      </div>

      {/* Main Flow Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Flow Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {viewMode === 'diagram' && (
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 shadow-inner relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Ruta Secuencial de Elaboración (Haga clic en un nodo para inspeccionarlo)
                </span>
                <span className="text-xs bg-indigo-50 text-indigo-700 font-medium px-2 py-0.5 rounded-full border border-indigo-100">
                  Total: 8 Pasos Críticos
                </span>
              </div>

              {/* Steps Flow Vertical Connector System */}
              <div className="space-y-4">
                {FLOWCHART_STEPS.map((step, index) => {
                  const isSelected = selectedNode?.id === step.id;
                  const isDimFiltered = highlightFilter === 'all' || 
                    (highlightFilter === 'curricular' && step.swimlane === 'Diseño Curricular') ||
                    (highlightFilter === 'didactica' && step.swimlane === 'Metodología Didáctica') ||
                    (highlightFilter === 'evaluacion' && step.swimlane === 'Evaluación Formativa');

                  // Distinct styling based on category
                  let nodeBorder = 'border-slate-300';
                  let nodeBg = 'bg-white';
                  let badgeBg = 'bg-slate-100 text-slate-700';
                  
                  if (step.id === 'step-2') {
                    nodeBorder = 'border-emerald-400 ring-2 ring-emerald-100';
                    nodeBg = 'bg-emerald-50/40';
                    badgeBg = 'bg-emerald-100 text-emerald-800 font-bold';
                  } else if (step.id === 'step-4') {
                    nodeBorder = 'border-blue-400 ring-2 ring-blue-100';
                    nodeBg = 'bg-blue-50/40';
                    badgeBg = 'bg-blue-100 text-blue-800 font-bold';
                  } else if (step.id === 'step-6') {
                    nodeBorder = 'border-purple-400 ring-2 ring-purple-100';
                    nodeBg = 'bg-purple-50/40';
                    badgeBg = 'bg-purple-100 text-purple-800 font-bold';
                  }

                  return (
                    <div key={step.id} className="relative">
                      {/* Connection Line */}
                      {index > 0 && (
                        <div className="flex justify-center -my-2 py-1">
                          <div className="flex flex-col items-center">
                            <div className="w-0.5 h-4 bg-slate-300" />
                            <ArrowDown className="w-3.5 h-3.5 text-slate-400 -mt-1" />
                          </div>
                        </div>
                      )}

                      {/* Node Card */}
                      <div
                        onClick={() => setSelectedNode(step)}
                        className={`rounded-xl p-4 sm:p-5 border transition-all cursor-pointer relative ${nodeBg} ${nodeBorder} ${
                          isSelected ? 'shadow-md scale-[1.01] ring-2 ring-indigo-500 border-indigo-500' : 'hover:shadow-sm hover:border-slate-400'
                        } ${!isDimFiltered ? 'opacity-40 grayscale-[40%]' : ''}`}
                      >
                        {/* Top tag & step number */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {step.phaseNumber}
                            </span>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${badgeBg}`}>
                              {step.swimlane}
                            </span>
                            {step.id === 'step-2' && (
                              <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                                ★ Foco RAP 1
                              </span>
                            )}
                            {step.id === 'step-6' && (
                              <span className="text-[10px] bg-purple-600 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                🚫 No Cuestionario
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400 font-mono">
                            ID: {step.id}
                          </span>
                        </div>

                        {/* Title & Short description */}
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {step.shortDesc}
                        </p>

                        {/* Special highlight badges for prompt requirements */}
                        {step.id === 'step-4' && (
                          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-blue-700 bg-blue-100/70 p-2 rounded-lg font-medium">
                            <Wrench className="w-3.5 h-3.5 shrink-0" />
                            <span><strong>Herramientas Pedagógicas:</strong> ABP, Estudios de Caso, Ishikawa y Mapas Conceptuales para interiorización.</span>
                          </div>
                        )}

                        {step.id === 'step-6' && (
                          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-purple-700 bg-purple-100/70 p-2 rounded-lg font-medium">
                            <FileCheck className="w-3.5 h-3.5 shrink-0" />
                            <span><strong>Instrumentos Alternativos:</strong> Rúbrica Socioformativa, Lista de Chequeo y Guía de Observación directa.</span>
                          </div>
                        )}

                        {/* Bottom action indicator */}
                        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                          <span className="italic truncate max-w-[80%]">
                            Salida: {step.outputs[0]}
                          </span>
                          <span className="font-medium text-indigo-600 flex items-center gap-1 shrink-0">
                            Ver detalles <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Swimlanes View */}
          {viewMode === 'swimlanes' && (
            <div className="space-y-6">
              {SWIMLANES_INFO.map((lane) => {
                const laneSteps = FLOWCHART_STEPS.filter(s => s.swimlane === lane.id);
                return (
                  <div key={lane.id} className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className={`p-4 border-b ${lane.color} flex items-center justify-between`}>
                      <div>
                        <h3 className="font-bold text-base flex items-center gap-2">
                          <Layers className="w-4 h-4" />
                          {lane.name}
                        </h3>
                        <p className="text-xs opacity-80 mt-0.5">{lane.description}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${lane.badge}`}>
                        {laneSteps.length} Pasos
                      </span>
                    </div>

                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {laneSteps.map((step) => (
                        <div
                          key={step.id}
                          onClick={() => setSelectedNode(step)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                            selectedNode?.id === step.id
                              ? 'border-indigo-500 bg-indigo-50/40 ring-2 ring-indigo-200'
                              : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/60'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-[11px] font-bold flex items-center justify-center">
                              {step.phaseNumber}
                            </span>
                            <span className="font-semibold text-xs text-slate-800">{step.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">{step.shortDesc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Detailed List View */}
          {viewMode === 'list' && (
            <div className="space-y-4">
              {FLOWCHART_STEPS.map((step) => (
                <div
                  key={step.id}
                  onClick={() => setSelectedNode(step)}
                  className={`bg-white p-5 rounded-xl border transition-all cursor-pointer ${
                    selectedNode?.id === step.id ? 'border-indigo-500 shadow-md ring-2 ring-indigo-200' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                        {step.phaseNumber}
                      </span>
                      <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                      {step.swimlane}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">{step.shortDesc}</p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1">
                    <strong className="text-slate-800 block">Acciones clave:</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {step.detailedSteps.slice(0, 3).map((st, i) => (
                        <li key={i}>{st}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Node Details Inspector */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-24 space-y-4">
          {selectedNode ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-5">
              {/* Header */}
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    Paso {selectedNode.phaseNumber} de 8
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                    {selectedNode.swimlane}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {selectedNode.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedNode.shortDesc}
                </p>
              </div>

              {/* Special Box: ¿Por qué No Cuestionario? */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wide">
                  <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0" />
                  Estrategia Alternativa al Cuestionario
                </div>
                <p className="text-xs text-purple-950 leading-relaxed">
                  {selectedNode.noQuestionnaireTip}
                </p>
              </div>

              {/* Steps Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Procedimiento Paso a Paso:
                </h4>
                <ul className="space-y-2">
                  {selectedNode.detailedSteps.map((stepDetail, idx) => (
                    <li key={idx} className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{stepDetail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pedagogical Key */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Clave Metodológica:
                </div>
                <p className="text-xs text-amber-950">
                  {selectedNode.pedagogicalKey}
                </p>
              </div>

              {/* Critical Rule Warning */}
              <div className="flex items-start gap-2 text-xs text-rose-800 bg-rose-50 p-3 rounded-lg border border-rose-200">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-rose-900">Regla Crítica:</strong>
                  {selectedNode.criticalRule}
                </div>
              </div>

              {/* Inputs and Outputs */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-700 block mb-1">Insumos (Entradas):</span>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5 text-[11px]">
                    {selectedNode.inputs.map((inp, i) => (
                      <li key={i}>{inp}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-700 block mb-1">Entregables (Salidas):</span>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5 text-[11px]">
                    {selectedNode.outputs.map((out, i) => (
                      <li key={i}>{out}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation button to Model Guide */}
              {onNavigateToGuide && (
                <button
                  onClick={onNavigateToGuide}
                  className="w-full mt-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Ver Guía de Aprendizaje Completa con RAP 1
                </button>
              )}
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-500">
              <BookOpen className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="text-sm font-medium">Seleccione cualquier nodo del diagrama de flujo para visualizar su sustento pedagógico detallado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
