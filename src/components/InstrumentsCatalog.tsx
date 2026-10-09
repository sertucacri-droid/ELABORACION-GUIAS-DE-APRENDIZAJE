import React, { useState } from 'react';
import { 
  SAMPLE_RUBRIC_RAP1, 
  SAMPLE_CHECKLIST_RAP1, 
  SAMPLE_OBSERVATION_RAP1 
} from '../data/evaluationInstruments';
import { 
  ClipboardCheck, 
  Table, 
  CheckSquare, 
  Eye, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Award,
  Layers,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface InstrumentsCatalogProps {
  onNavigateToSimulator?: () => void;
}

export const InstrumentsCatalog: React.FC<InstrumentsCatalogProps> = ({ onNavigateToSimulator }) => {
  const [selectedTab, setSelectedTab] = useState<'rubric' | 'checklist' | 'observation' | 'why-no-test'>('rubric');
  const [activeCriterionId, setActiveCriterionId] = useState<string>('crit-1');

  const rubric = SAMPLE_RUBRIC_RAP1;
  const checklist = SAMPLE_CHECKLIST_RAP1;
  const observation = SAMPLE_OBSERVATION_RAP1;

  const currentCriterion = rubric.criteria.find(c => c.id === activeCriterionId) || rubric.criteria[0];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-purple-950 via-indigo-950 to-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-purple-800/40">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide border border-purple-500/30">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Evaluación Alternativa y Auténtica del RAP 1
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Instrumentos de Evaluación Diferentes al Cuestionario
          </h2>
          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            Para valorar el primer <strong>Resultado de Aprendizaje (RAP 1)</strong> sin caer en la trampa memorística de los cuestionarios tradicionales, 
            diseñamos instrumentos auténticos basados en el <strong>enfoque socioformativo y competencias laborales</strong>: 
            Rúbricas Analíticas con descriptores cualitativos, Listas de Chequeo de producto técnico y Guías de Observación en vivo.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTab('rubric')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedTab === 'rubric'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Table className="w-4 h-4" />
          <span>1. Rúbrica Analítica de Apropiación (RUB-RAP1)</span>
        </button>

        <button
          onClick={() => setSelectedTab('checklist')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedTab === 'checklist'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>2. Lista de Chequeo de Producto (LCH-RAP1)</span>
        </button>

        <button
          onClick={() => setSelectedTab('observation')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedTab === 'observation'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>3. Guía de Observación Sistemática (GOS-RAP1)</span>
        </button>

        <button
          onClick={() => setSelectedTab('why-no-test')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedTab === 'why-no-test'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span>¿Por qué Superar el Cuestionario?</span>
        </button>
      </div>

      {/* TAB 1: RÚBRICA ANALÍTICA */}
      {selectedTab === 'rubric' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wide block">
                  Código: {rubric.code} | Enfoque Socioformativo
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {rubric.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  <strong>Asociado a:</strong> {rubric.rapAssociated}
                </p>
              </div>

              {onNavigateToSimulator && (
                <button
                  onClick={onNavigateToSimulator}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Award className="w-4 h-4" />
                  Abrir en Simulador Calificador
                </button>
              )}
            </div>

            <div className="bg-purple-50/70 p-3.5 rounded-xl border border-purple-200 text-xs text-purple-950">
              <strong>Instrucciones para el Evaluador:</strong> {rubric.instructions}
            </div>

            {/* Criteria Selector Pills */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Seleccione una dimensión para explorar sus 4 niveles descriptivos:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {rubric.criteria.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCriterionId(c.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeCriterionId === c.id
                        ? 'border-purple-600 bg-purple-50 ring-2 ring-purple-200 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-slate-900">{c.weight}%</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {c.evidenceTypeFocus}
                      </span>
                    </div>
                    <span className="font-semibold text-xs text-slate-800 line-clamp-2">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Criterion Descriptors Grid */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                    Descriptores de Dominio para:
                  </span>
                  <h4 className="font-bold text-slate-900 text-base">{currentCriterion.name}</h4>
                </div>
                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  Ponderación: {currentCriterion.weight}%
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Inicial */}
                <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-xs space-y-2">
                  <div className="border-b border-rose-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                      Nivel 1: Receptivo / Inicial
                    </span>
                    <span className="block text-xs font-bold text-rose-600 mt-1">
                      {currentCriterion.levels.inicial.scoreRange}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentCriterion.levels.inicial.description}
                  </p>
                </div>

                {/* Básico */}
                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-xs space-y-2">
                  <div className="border-b border-amber-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      Nivel 2: Resolutivo / Básico
                    </span>
                    <span className="block text-xs font-bold text-amber-600 mt-1">
                      {currentCriterion.levels.basico.scoreRange}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentCriterion.levels.basico.description}
                  </p>
                </div>

                {/* Autónomo */}
                <div className="bg-white p-4 rounded-xl border-2 border-emerald-400 shadow-xs space-y-2">
                  <div className="border-b border-emerald-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      Nivel 3: Autónomo / Competente ★
                    </span>
                    <span className="block text-xs font-bold text-emerald-600 mt-1">
                      {currentCriterion.levels.autonomo.scoreRange}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {currentCriterion.levels.autonomo.description}
                  </p>
                </div>

                {/* Estratégico */}
                <div className="bg-white p-4 rounded-xl border border-indigo-300 shadow-xs space-y-2">
                  <div className="border-b border-indigo-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                      Nivel 4: Estratégico / Experto
                    </span>
                    <span className="block text-xs font-bold text-indigo-600 mt-1">
                      {currentCriterion.levels.estrategico.scoreRange}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentCriterion.levels.estrategico.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LISTA DE CHEQUEO */}
      {selectedTab === 'checklist' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide block">
              Código: {checklist.code} | Instrumento de Verificación Técnica
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {checklist.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              <strong>Producto a Evaluar:</strong> {checklist.productName}
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[10px]">
                  <tr>
                    <th className="p-3 w-16">Ítem</th>
                    <th className="p-3">Criterio Técnico a Verificar</th>
                    <th className="p-3">Pregunta Orientadora de Verificación</th>
                    <th className="p-3">Estándar de Calidad Exigido</th>
                    <th className="p-3 text-center w-28">Cumplimiento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {checklist.items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/70">
                      <td className="p-3 font-mono font-bold text-slate-800">{item.code}</td>
                      <td className="p-3 font-semibold text-slate-900 max-w-xs">{item.criterionDescription}</td>
                      <td className="p-3 text-slate-600 max-w-sm">{item.verificationQuestion}</td>
                      <td className="p-3 text-slate-700 bg-slate-50/50 max-w-xs font-mono text-[11px]">{item.qualityStandard}</td>
                      <td className="p-3 text-center">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md font-bold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Cumple / No
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GUÍA DE OBSERVACIÓN SISTEMÁTICA */}
      {selectedTab === 'observation' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide block">
              Código: {observation.code} | Evaluación Directa de Desempeño
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {observation.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              <strong>Escenario:</strong> {observation.situation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {observation.items.map((obs) => (
              <div key={obs.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    {obs.dimension}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">ID: {obs.id}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{obs.indicator}</h4>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-800 block mb-0.5">Comportamientos observables en vivo:</strong>
                  {obs.observableBehaviors}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: METODOLOGÍA: ¿POR QUÉ SUPERAR EL CUESTIONARIO? */}
      {selectedTab === 'why-no-test' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
              Sustento Pedagógico y Epistemológico
            </span>
            <h3 className="text-xl font-bold text-slate-900 pt-2">
              ¿Por qué Evaluar el RAP 1 Mediante Instrumentos Diferentes al Cuestionario?
            </h3>
          </div>

          {/* Comparative Matrix: Cuestionario vs Rúbrica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cuestionario Tradicional */}
            <div className="bg-rose-50/60 border border-rose-200 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                El Cuestionario Tradicional (Limitaciones)
              </div>
              <ul className="space-y-2 text-xs text-rose-900/80 list-disc list-inside">
                <li>Solo evalúa memoria de corto plazo y reconocimiento pasivo de opciones.</li>
                <li>Vulnerable a la adivinación o reproducción mecánica sin comprensión real.</li>
                <li>No evidencia cómo el aprendiz reacciona ante situaciones imprevistas en el trabajo.</li>
                <li>Genera frustración y desconexión con el mundo productivo.</li>
                <li>Calificación cuantitativa fría (ej. "7/10") sin retroalimentación cualitativa sobre cómo mejorar.</li>
              </ul>
            </div>

            {/* Rúbrica y Métodos Auténticos */}
            <div className="bg-emerald-50/60 border border-emerald-300 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                La Rúbrica y la Evaluación Auténtica (Ventajas)
              </div>
              <ul className="space-y-2 text-xs text-emerald-900 list-disc list-inside font-medium">
                <li>Evalúa niveles taxonómicos superiores: <strong>Analizar, Diagnosticar, Evaluar y Crear</strong>.</li>
                <li>El aprendiz demuestra apropiación explicando el "por qué" y el "cómo" de sus decisiones.</li>
                <li>Fomenta la autorregulación: el aprendiz conoce la rúbrica desde el primer día y sabe exactamente qué se espera.</li>
                <li>Simula la práctica laboral real: los clientes no hacen cuestionarios, piden resultados explicados y sustentados.</li>
                <li>Retroalimentación formativa y descriptiva continua.</li>
              </ul>
            </div>
          </div>

          {/* Taxonomical Alignment */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              Alineación Taxonómica de la Apropiación (Modelo Socioformativo de Tobón & Bloom)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700 block text-xs">1. Nivel Receptivo</span>
                <span className="text-[11px] text-slate-500">Recuerda términos aislados</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700 block text-xs">2. Nivel Resolutivo</span>
                <span className="text-[11px] text-slate-500">Resuelve problemas sencillos conocidos</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-300">
                <span className="font-bold text-emerald-800 block text-xs">3. Nivel Autónomo ★</span>
                <span className="text-[11px] text-emerald-700 font-medium">Analiza causas, argumenta y propone</span>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                <span className="font-bold text-indigo-800 block text-xs">4. Nivel Estratégico</span>
                <span className="text-[11px] text-indigo-700">Innova y modela soluciones de impacto</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
