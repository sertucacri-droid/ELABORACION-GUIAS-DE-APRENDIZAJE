import React, { useState } from 'react';
import { SAMPLE_LEARNING_GUIDE_ADSO } from '../data/sampleGuides';
import { 
  Printer, 
  Copy, 
  Check, 
  BookOpen, 
  Target, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  UserCheck, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';

interface ModelGuideViewProps {
  onSelectInstrument?: (instrumentId: string) => void;
}

export const ModelGuideView: React.FC<ModelGuideViewProps> = ({ onSelectInstrument }) => {
  const guide = SAMPLE_LEARNING_GUIDE_ADSO;
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<'all' | 'curricular' | 'activities' | 'evaluation' | 'resources'>('all');

  const handleCopyText = () => {
    const textToCopy = `GUÍA DE APRENDIZAJE: ${guide.denomination}\nCódigo: ${guide.code}\nPrograma: ${guide.program.name}\nCompetencia: ${guide.competence.name}\nRAP 1: ${guide.learningOutcomes.rap1.statement}\nEvaluación: Evaluado mediante Rúbrica Analítica y Lista de Chequeo sin cuestionario.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Caso Real Aplicado
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Formato GFPI-G-001 | Versión 03
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {guide.denomination}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Estructurada con la metodología oficial para evaluar el <strong>RAP 1</strong> mediante evidencias auténticas.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <button
            onClick={handleCopyText}
            className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copiado' : 'Copiar Resumen'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Exportar PDF</span>
          </button>
        </div>
      </div>

      {/* Section Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
            activeSection === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Ver Guía Completa
        </button>
        <button
          onClick={() => setActiveSection('curricular')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
            activeSection === 'curricular' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          1. Identificación y RAP 1
        </button>
        <button
          onClick={() => setActiveSection('activities')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
            activeSection === 'activities' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          2. Secuencia de Actividades (4 Fases)
        </button>
        <button
          onClick={() => setActiveSection('evaluation')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
            activeSection === 'evaluation' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          3. Evaluación sin Cuestionarios
        </button>
        <button
          onClick={() => setActiveSection('resources')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
            activeSection === 'resources' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          4. Recursos y Glosario
        </button>
      </div>

      {/* Document Body (Styled like an official educational guide) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-10 print:border-none print:shadow-none print:p-0">
        
        {/* Document Header Table */}
        <div className="border border-slate-300 rounded-xl overflow-hidden">
          <div className="bg-slate-50 p-4 border-b border-slate-300 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                SENA
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Sistema de Gestión de la Calidad</span>
                <span className="font-bold text-slate-800 text-sm">PROCESO GESTIÓN DE FORMACIÓN PROFESIONAL</span>
              </div>
            </div>
            <div className="text-center md:border-x border-slate-300 px-4">
              <span className="text-xs font-extrabold text-slate-900 block">FORMATO GUÍA DE APRENDIZAJE</span>
              <span className="text-[11px] text-slate-500">{guide.code}</span>
            </div>
            <div className="text-right text-xs text-slate-600 space-y-0.5">
              <div><strong>Versión:</strong> 03</div>
              <div><strong>Vigencia:</strong> Formación Activa</div>
            </div>
          </div>
        </div>

        {/* 1. IDENTIFICACIÓN DE LA GUÍA DE APRENDIZAJE */}
        {(activeSection === 'all' || activeSection === 'curricular') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Identificación de la Guía de Aprendizaje
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Programa de Formación:</span>
                <span className="font-bold text-slate-900 text-sm">{guide.program.name}</span>
                <div className="text-slate-600 pt-1">
                  <strong>Código del Programa:</strong> {guide.program.code} | <strong>Nivel:</strong> {guide.program.level}
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Proyecto Formativo:</span>
                <span className="font-bold text-slate-900 text-sm">{guide.project.name}</span>
                <div className="text-slate-600 pt-1">
                  <strong>Fase del Proyecto:</strong> <span className="text-indigo-600 font-semibold">{guide.project.phase}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1 md:col-span-2">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Actividad de Proyecto:</span>
                <p className="text-slate-800">{guide.project.activity}</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Competencia Laboral:</span>
                <span className="font-bold text-slate-900">{guide.competence.name}</span>
                <div className="text-slate-600 pt-1">
                  <strong>Código:</strong> {guide.competence.code} | <strong>Duración:</strong> {guide.competence.durationHours} horas
                </div>
              </div>

              {/* Foco Central: RAP 1 */}
              <div className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-800 font-extrabold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-emerald-600" />
                    Resultado de Aprendizaje Focalizado (RAP 1)
                  </span>
                  <span className="bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full font-bold text-[10px]">
                    {guide.learningOutcomes.rap1.hours} Horas
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-1">
                  {guide.learningOutcomes.rap1.statement}
                </h4>
                <p className="text-emerald-900 text-[11px]">
                  <strong>Código Oficial:</strong> {guide.learningOutcomes.rap1.code}
                </p>
              </div>
            </div>

            {/* Desglose Tridimensional de Saberes del RAP 1 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Desglose Metodológico de Saberes del RAP 1 (Saber, Saber Hacer y Saber Ser)
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Saber: Conceptos */}
                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                  <span className="font-bold text-blue-700 uppercase tracking-wide text-[11px] block border-b border-blue-100 pb-1">
                    1. Saber (Conceptos y Principios)
                  </span>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    {guide.learningOutcomes.rap1.knowledgeDimensions.concepts.map((item, i) => (
                      <li key={i} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Saber Hacer: Procesos */}
                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                  <span className="font-bold text-emerald-700 uppercase tracking-wide text-[11px] block border-b border-emerald-100 pb-1">
                    2. Saber Hacer (Procedimientos)
                  </span>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    {guide.learningOutcomes.rap1.knowledgeDimensions.procedures.map((item, i) => (
                      <li key={i} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Saber Ser: Actitudes */}
                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                  <span className="font-bold text-purple-700 uppercase tracking-wide text-[11px] block border-b border-purple-100 pb-1">
                    3. Saber Ser (Actitudes y Ética)
                  </span>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    {guide.learningOutcomes.rap1.knowledgeDimensions.attitudes.map((item, i) => (
                      <li key={i} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. PRESENTACIÓN / INTRODUCCIÓN */}
        {(activeSection === 'all' || activeSection === 'curricular') && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Presentación de la Guía
              </h3>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-serif">
              {guide.introduction}
            </div>
          </section>
        )}

        {/* 3. FORMULACIÓN DE LAS ACTIVIDADES DE APRENDIZAJE */}
        {(activeSection === 'all' || activeSection === 'activities') && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Formulación de las Actividades de Aprendizaje
              </h3>
            </div>

            <p className="text-xs text-slate-600">
              Secuencia didáctica de 4 fases articulada mediante herramientas pedagógicas activas para garantizar la <strong>apropiación del conocimiento</strong> sin recurrir a cuestionarios:
            </p>

            <div className="space-y-6">
              {guide.activities.map((act) => {
                let badgeColor = 'bg-slate-100 text-slate-700';
                let borderColor = 'border-slate-200';

                if (act.phase === 'reflexion') {
                  badgeColor = 'bg-amber-100 text-amber-900 border border-amber-200';
                  borderColor = 'border-amber-200 bg-amber-50/20';
                } else if (act.phase === 'contextualizacion') {
                  badgeColor = 'bg-blue-100 text-blue-900 border border-blue-200';
                  borderColor = 'border-blue-200 bg-blue-50/20';
                } else if (act.phase === 'apropiacion') {
                  badgeColor = 'bg-emerald-100 text-emerald-900 border-2 border-emerald-400 font-bold';
                  borderColor = 'border-emerald-300 bg-emerald-50/30 ring-1 ring-emerald-200';
                } else if (act.phase === 'transferencia') {
                  badgeColor = 'bg-purple-100 text-purple-900 border border-purple-200';
                  borderColor = 'border-purple-200 bg-purple-50/20';
                }

                return (
                  <div key={act.id} className={`p-5 sm:p-6 rounded-2xl border ${borderColor} space-y-4`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2.5 py-1 rounded-md font-semibold ${badgeColor}`}>
                          {act.phaseName}
                        </span>
                        {act.phase === 'apropiacion' && (
                          <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            ★ Núcleo de Apropiación
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5" /> {act.estimatedHours} Horas
                        </span>
                        <span className="flex items-center gap-1 font-medium bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
                          <UserCheck className="w-3.5 h-3.5" /> {act.deliveryMethod}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Actividad {act.code}: {act.title}
                      </h4>
                      <div className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-white/70 p-4 rounded-xl border border-slate-200">
                        {act.description}
                      </div>
                    </div>

                    {/* Pedagogical Tool Applied */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="bg-indigo-50/70 p-3.5 rounded-xl border border-indigo-100 space-y-1">
                        <span className="font-bold text-indigo-900 flex items-center gap-1.5 text-[11px] uppercase tracking-wide">
                          <Wrench className="w-3.5 h-3.5 text-indigo-600" />
                          Herramienta Pedagógica Utilizada:
                        </span>
                        <p className="font-semibold text-slate-900">{act.pedagogicalTool}</p>
                        <p className="text-slate-600 text-[11px]">{act.toolDetails}</p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px] uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Evidencia Generada:
                        </span>
                        <p className="text-slate-700 font-medium">{act.evidenceProduced}</p>
                      </div>
                    </div>

                    {/* Roles definition */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                      <div>
                        <strong className="text-slate-900">Rol del Aprendiz:</strong> {act.learnerRole}
                      </div>
                      <div>
                        <strong className="text-slate-900">Rol del Instructor:</strong> {act.instructorRole}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. ACTIVIDADES DE EVALUACIÓN (SISTEMA SIN CUESTIONARIOS) */}
        {(activeSection === 'all' || activeSection === 'evaluation') && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-purple-600 pb-2">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                4
              </span>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Plan de Evaluación del RAP 1 (Instrumentos Diferentes al Cuestionario)
              </h3>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl text-xs text-purple-900 space-y-1">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                Principio Pedagógico: Evaluación Auténtica de la Apropiación
              </div>
              <p className="leading-relaxed">
                Para evaluar el primer resultado de aprendizaje se descartan exámenes teóricos o tests de opción múltiple. 
                El conocimiento se evidencia mediante la aplicación práctica en casos reales, matrices causales y sustentaciones orales, 
                garantizando que el aprendiz internalice los conceptos y sea capaz de resolver contingencias operativas.
              </p>
            </div>

            {/* Matrix of Evidences & Non-Questionnaire Instruments */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-100 p-3 font-bold text-xs text-slate-800 uppercase tracking-wide flex items-center justify-between">
                <span>Matriz de Evidencias e Instrumentos de Evaluación Alternativos</span>
                <span className="text-[10px] text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full font-bold">
                  Sin Cuestionarios
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Tipo de Evidencia</th>
                      <th className="p-3">Descripción de la Evidencia</th>
                      <th className="p-3">Criterios de Evaluación Curriculares</th>
                      <th className="p-3">Instrumento de Evaluación No-Cuestionario</th>
                      <th className="p-3 text-center">Peso</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {guide.evaluationPlan.evidencias.map((ev, i) => (
                      <tr key={i} className="hover:bg-slate-50/80">
                        <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded-md text-[11px] ${
                            ev.tipo === 'Conocimiento' ? 'bg-blue-100 text-blue-800 font-bold' :
                            ev.tipo === 'Producto' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {ev.tipo}
                          </span>
                        </td>
                        <td className="p-3 text-slate-700 max-w-xs">{ev.descripcion}</td>
                        <td className="p-3 text-slate-600 max-w-xs text-[11px]">
                          {guide.evaluationPlan.criterios[i] || guide.evaluationPlan.criterios[0]}
                        </td>
                        <td className="p-3 font-medium text-indigo-700">
                          {ev.instrumentoNoCuestionario}
                        </td>
                        <td className="p-3 text-center font-bold text-slate-900">{ev.ponderacion}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Deep view of the 3 Instruments */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guide.evaluationPlan.instruments.map((inst) => (
                <div key={inst.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider block">
                      {inst.type.replace('_', ' ')}
                    </span>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{inst.name}</h5>
                    <p className="text-slate-600 text-xs">{inst.description}</p>
                    <div className="pt-1 text-[11px] text-slate-500">
                      <strong>Evidencia objetivo:</strong> {inst.targetEvidence}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectInstrument && onSelectInstrument(inst.id)}
                    className="w-full mt-3 py-1.5 px-3 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-indigo-600 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    Examinar Instrumento en Detalle
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. GLOSARIO Y REFERENTES BIBLIOGRÁFICOS */}
        {(activeSection === 'all' || activeSection === 'resources') && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-slate-400 pb-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center">
                5
              </span>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Glosario de Términos y Referentes Bibliográficos
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Glosario */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-indigo-700">
                  Glosario Técnico de Términos (RAP 1):
                </h4>
                <div className="space-y-2">
                  {guide.glossary.slice(0, 4).map((item, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <strong className="text-slate-900 block text-xs">{item.term}:</strong>
                      <p className="text-slate-600 text-[11px] mt-0.5">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referentes Bibliográficos */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-indigo-700">
                  Referentes Bibliográficos (Normas APA):
                </h4>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2">
                  <ul className="space-y-2 text-slate-600 text-[11px] list-disc list-inside">
                    {guide.references.map((ref, i) => (
                      <li key={i} className="leading-snug pl-1">{ref}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-emerald-950 text-[11px]">
                  <strong>Ambientes de Formación:</strong> {guide.environmentAndResources.ambientes[0]}
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
