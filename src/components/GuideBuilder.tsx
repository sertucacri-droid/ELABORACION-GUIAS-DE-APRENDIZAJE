import React, { useState } from 'react';
import { PEDAGOGICAL_TOOLS } from '../data/pedagogicalTools';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Copy, 
  Printer, 
  FileText, 
  Target, 
  Layers, 
  Wrench, 
  ClipboardCheck, 
  Save, 
  CheckCircle2,
  BookOpen,
  Table
} from 'lucide-react';

export const GuideBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Form State
  const [guideData, setGuideData] = useState({
    programName: 'Tecnología en Gestión de Redes y Ciberseguridad',
    programCode: '228120',
    projectPhase: 'Fase 1: Análisis y Diagnóstico de Vulnerabilidades',
    competenceName: 'Implementar la estructura de la red de acuerdo con el diseño técnico y estándares vigentes.',
    competenceCode: '220501012',
    rap1Statement: 'Diagnosticar el estado de la infraestructura de red aplicando herramientas de auditoría física y lógica.',
    rap1Hours: 40,
    knowledgeConcepts: 'Arquitectura TCP/IP, Tipología de cableado estructurado ANSI/TIA-568, Modelo OSI, Métricas de latencia y atenuación.',
    knowledgeProcedures: 'Manejo de certificador de cableado, inspección de racks, escaneo de puertos no destructivo con Nmap, diagramación topológica.',
    knowledgeAttitudes: 'Rigor en el cumplimiento de normas de seguridad eléctrica, ética y confidencialidad en el manejo de credenciales.',
    // Activities
    reflexionTitle: 'El Colapso del Centro de Datos Hospitalario por Cableado Inadecuado',
    reflexionTool: 'Estudio de Caso Situacional y Preguntas Socráticas',
    contextualizacionTitle: 'Inspección Intuitiva y Mapeo de Saberes Previos en Redes',
    contextualizacionTool: 'Cuadro SQA y Lluvia de Ideas Estructurada',
    apropiacionTitle: 'Análisis Causal de Cuellos de Botella y Matriz Comparativa de Topologías',
    apropiacionTool: 'Diagrama Causa-Efecto (Ishikawa) y Matriz Multicriterio',
    transferenciaTitle: 'Auditoría Física y Lógica de la Red del Cliente con Sustentación Técnica',
    transferenciaTool: 'Aprendizaje Basado en Proyectos Reales (ABPr) + Panel de Defensa',
    // Evaluation Non-Questionnaire
    evaluationToolType: 'rubrica_analitica',
    evidenceName: 'Dossier de Diagnóstico de Red con Mapa Topológico y Sustentación Oral',
    instrumentName: 'Rúbrica Analítica de Apropiación Técnica y Diagnóstico de Redes (4 Niveles Socioformativos)'
  });

  const handleChange = (field: string, value: any) => {
    setGuideData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCopyGuide = () => {
    const fullText = `=== GUÍA DE APRENDIZAJE GENERADA ===
PROGRAMA: ${guideData.programName} (${guideData.programCode})
COMPETENCIA: ${guideData.competenceName}
RAP 1: ${guideData.rap1Statement} (${guideData.rap1Hours} horas)

SABERES DEL RAP 1:
- Conceptos (Saber): ${guideData.knowledgeConcepts}
- Procedimientos (Saber Hacer): ${guideData.knowledgeProcedures}
- Actitudes (Saber Ser): ${guideData.knowledgeAttitudes}

SECUENCIA DIDÁCTICA:
1. Reflexión Inicial: ${guideData.reflexionTitle} [Herramienta: ${guideData.reflexionTool}]
2. Contextualización: ${guideData.contextualizacionTitle} [Herramienta: ${guideData.contextualizacionTool}]
3. Apropiación: ${guideData.apropiacionTitle} [Herramienta: ${guideData.apropiacionTool}]
4. Transferencia: ${guideData.transferenciaTitle} [Herramienta: ${guideData.transferenciaTool}]

EVALUACIÓN SIN CUESTIONARIOS:
Evidencia: ${guideData.evidenceName}
Instrumento No-Cuestionario: ${guideData.instrumentName}
`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-indigo-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-800/40">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Asistente Paso a Paso
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Diseñador Interactivo de Guías de Aprendizaje
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
            Construya o adapte su propia Guía de Aprendizaje en 5 pasos metodológicos. 
            El asistente le guiará para definir la estructura curricular, focalizar el <strong>RAP 1</strong>, 
            articular las actividades con <strong>herramientas pedagógicas activas</strong> y blindar la evaluación con <strong>instrumentos sin cuestionario</strong>.
          </p>
        </div>
      </div>

      {/* Stepper Progress Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {[
            { num: 1, label: 'Currículo & RAP 1' },
            { num: 2, label: 'Saberes Tridimensionales' },
            { num: 3, label: 'Secuencia Didáctica' },
            { num: 4, label: 'Evaluación Alternativa' },
            { num: 5, label: 'Guía Consolidada' }
          ].map((step, idx) => (
            <React.Fragment key={step.num}>
              <div 
                onClick={() => setCurrentStep(step.num)}
                className="flex flex-col items-center gap-1 cursor-pointer group"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  currentStep === step.num
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-xs'
                    : currentStep > step.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  {currentStep > step.num ? <Check className="w-4 h-4" /> : step.num}
                </div>
                <span className={`text-[11px] font-semibold hidden md:block ${
                  currentStep === step.num ? 'text-indigo-600' : 'text-slate-500'
                }`}>
                  {step.label}
                </span>
              </div>
              {idx < 4 && (
                <div className={`flex-1 h-0.5 mx-2 ${
                  currentStep > step.num ? 'bg-emerald-600' : 'bg-slate-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Form Body */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        
        {/* STEP 1: CURRÍCULO & RAP 1 */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Paso 1 de 5</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Estructura Curricular y Focalización del RAP 1
              </h3>
              <p className="text-xs text-slate-500">
                Identifique el programa, la fase del proyecto formativo y el primer Resultado de Aprendizaje.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Denominación del Programa de Formación:</label>
                <input
                  type="text"
                  value={guideData.programName}
                  onChange={(e) => handleChange('programName', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Código del Programa:</label>
                <input
                  type="text"
                  value={guideData.programCode}
                  onChange={(e) => handleChange('programCode', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="font-bold text-slate-700">Fase del Proyecto Formativo:</label>
                <input
                  type="text"
                  value={guideData.projectPhase}
                  onChange={(e) => handleChange('projectPhase', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="font-bold text-slate-700">Competencia Laboral:</label>
                <input
                  type="text"
                  value={guideData.competenceName}
                  onChange={(e) => handleChange('competenceName', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>

              {/* Foco Central: RAP 1 */}
              <div className="space-y-1 md:col-span-2 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-emerald-600" />
                    Enunciado del Primer Resultado de Aprendizaje (RAP 1):
                  </label>
                  <span className="text-[11px] font-bold text-emerald-700">Duración: {guideData.rap1Hours} horas</span>
                </div>
                <textarea
                  rows={2}
                  value={guideData.rap1Statement}
                  onChange={(e) => handleChange('rap1Statement', e.target.value)}
                  className="w-full p-2.5 bg-white border border-emerald-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-semibold"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: SABERES TRIDIMENSIONALES */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Paso 2 de 5</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Desglose de Saberes del RAP 1
              </h3>
              <p className="text-xs text-slate-500">
                Defina qué conceptos (Saber), procedimientos prácticos (Saber Hacer) y actitudes éticas (Saber Ser) debe dominar el aprendiz.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-200 space-y-1.5">
                <label className="font-bold text-blue-900 block">
                  1. Saber (Conocimientos de Conceptos y Principios):
                </label>
                <textarea
                  rows={2}
                  value={guideData.knowledgeConcepts}
                  onChange={(e) => handleChange('knowledgeConcepts', e.target.value)}
                  placeholder="Teorías, normas técnicas, definiciones y fundamentos..."
                  className="w-full p-2.5 bg-white border border-blue-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-[11px] text-blue-700 block">
                  Tip: Estos conceptos se evaluarán mediante organizadores gráficos y sustentaciones, nunca con cuestionarios cerrados.
                </span>
              </div>

              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 space-y-1.5">
                <label className="font-bold text-emerald-900 block">
                  2. Saber Hacer (Conocimientos de Proceso y Técnicas):
                </label>
                <textarea
                  rows={2}
                  value={guideData.knowledgeProcedures}
                  onChange={(e) => handleChange('knowledgeProcedures', e.target.value)}
                  placeholder="Destrezas prácticas, algoritmos, pruebas, mediciones..."
                  className="w-full p-2.5 bg-white border border-emerald-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-200 space-y-1.5">
                <label className="font-bold text-purple-900 block">
                  3. Saber Ser (Criterios Actitudinales y Ética Profesional):
                </label>
                <textarea
                  rows={2}
                  value={guideData.knowledgeAttitudes}
                  onChange={(e) => handleChange('knowledgeAttitudes', e.target.value)}
                  placeholder="Valores, puntualidad, trabajo en equipo, bioseguridad, ética..."
                  className="w-full p-2.5 bg-white border border-purple-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SECUENCIA DIDÁCTICA Y HERRAMIENTAS */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Paso 3 de 5</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Secuencia Didáctica y Selección de Herramientas Pedagógicas
              </h3>
              <p className="text-xs text-slate-500">
                Estructure las 4 fases de actividades y elija las herramientas pedagógicas activas que faciliten la apropiación cognitiva.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Reflexión */}
              <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                <span className="font-bold text-amber-900 uppercase tracking-wide text-[11px] block">
                  3.1 Actividad de Reflexión Inicial
                </span>
                <input
                  type="text"
                  value={guideData.reflexionTitle}
                  onChange={(e) => handleChange('reflexionTitle', e.target.value)}
                  className="w-full p-2 bg-white border border-amber-200 rounded-lg font-medium"
                />
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">Herramienta:</span>
                  <input
                    type="text"
                    value={guideData.reflexionTool}
                    onChange={(e) => handleChange('reflexionTool', e.target.value)}
                    className="flex-1 p-1.5 bg-white border border-slate-200 rounded-md text-[11px]"
                  />
                </div>
              </div>

              {/* Contextualización */}
              <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-200 space-y-2">
                <span className="font-bold text-blue-900 uppercase tracking-wide text-[11px] block">
                  3.2 Actividad de Contextualización e Identificación de Conocimientos
                </span>
                <input
                  type="text"
                  value={guideData.contextualizacionTitle}
                  onChange={(e) => handleChange('contextualizacionTitle', e.target.value)}
                  className="w-full p-2 bg-white border border-blue-200 rounded-lg font-medium"
                />
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">Herramienta:</span>
                  <input
                    type="text"
                    value={guideData.contextualizacionTool}
                    onChange={(e) => handleChange('contextualizacionTool', e.target.value)}
                    className="flex-1 p-1.5 bg-white border border-slate-200 rounded-md text-[11px]"
                  />
                </div>
              </div>

              {/* Apropiación (Núcleo) */}
              <div className="p-4 bg-emerald-50 rounded-xl border-2 border-emerald-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-950 uppercase tracking-wide text-[11px] block">
                    3.3 Actividad de Apropiación del Conocimiento (Núcleo Crítico)
                  </span>
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">
                    Apropiación
                  </span>
                </div>
                <input
                  type="text"
                  value={guideData.apropiacionTitle}
                  onChange={(e) => handleChange('apropiacionTitle', e.target.value)}
                  className="w-full p-2 bg-white border border-emerald-300 rounded-lg font-semibold text-slate-900"
                />
                <div className="flex items-center gap-2">
                  <span className="text-emerald-900 font-semibold">Herramienta Pedagógica:</span>
                  <select
                    value={guideData.apropiacionTool}
                    onChange={(e) => handleChange('apropiacionTool', e.target.value)}
                    className="flex-1 p-2 bg-white border border-emerald-300 rounded-md text-xs font-medium"
                  >
                    {PEDAGOGICAL_TOOLS.map(t => (
                      <option key={t.id} value={t.name}>{t.name}</option>
                    ))}
                    <option value="Diagrama Causa-Efecto (Ishikawa) y Matriz Multicriterio">Diagrama Causa-Efecto (Ishikawa) y Matriz Multicriterio</option>
                  </select>
                </div>
              </div>

              {/* Transferencia */}
              <div className="p-3.5 bg-purple-50/50 rounded-xl border border-purple-200 space-y-2">
                <span className="font-bold text-purple-900 uppercase tracking-wide text-[11px] block">
                  3.4 Actividad de Transferencia del Conocimiento (Aplicación Real)
                </span>
                <input
                  type="text"
                  value={guideData.transferenciaTitle}
                  onChange={(e) => handleChange('transferenciaTitle', e.target.value)}
                  className="w-full p-2 bg-white border border-purple-200 rounded-lg font-medium"
                />
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">Herramienta:</span>
                  <input
                    type="text"
                    value={guideData.transferenciaTool}
                    onChange={(e) => handleChange('transferenciaTool', e.target.value)}
                    className="flex-1 p-1.5 bg-white border border-slate-200 rounded-md text-[11px]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: EVALUACIÓN SIN CUESTIONARIOS */}
        {currentStep === 4 && (
          <div className="space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Paso 4 de 5</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Diseño del Instrumento de Evaluación Alternativo (NO CUESTIONARIO)
              </h3>
              <p className="text-xs text-slate-500">
                Seleccione el tipo de instrumento que evaluará auténticamente el RAP 1 sin recurrir a pruebas memorísticas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  id: 'rubrica_analitica',
                  title: 'Rúbrica Analítica Socioformativa',
                  desc: 'Evalúa niveles de dominio (Inicial a Estratégico) y descriptores cualitativos de argumentación.',
                  icon: Table
                },
                {
                  id: 'lista_chequeo',
                  title: 'Lista de Chequeo Técnica',
                  desc: 'Verifica estándares objetivos y normativas técnicas en el entregable tangible del aprendiz.',
                  icon: ClipboardCheck
                },
                {
                  id: 'guia_observacion',
                  title: 'Guía de Observación Sistemática',
                  desc: 'Registra en tiempo real la defensa oral, el vocabulario técnico y la respuesta ante contingencias.',
                  icon: Target
                }
              ].map((inst) => (
                <div
                  key={inst.id}
                  onClick={() => handleChange('evaluationToolType', inst.id)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    guideData.evaluationToolType === inst.id
                      ? 'border-purple-600 bg-purple-50/70 ring-2 ring-purple-200 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <inst.icon className={`w-5 h-5 mb-2 ${guideData.evaluationToolType === inst.id ? 'text-purple-600' : 'text-slate-400'}`} />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{inst.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{inst.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-xs pt-2">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Evidencia de Aprendizaje Objetivo:</label>
                <input
                  type="text"
                  value={guideData.evidenceName}
                  onChange={(e) => handleChange('evidenceName', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nombre del Instrumento de Evaluación:</label>
                <input
                  type="text"
                  value={guideData.instrumentName}
                  onChange={(e) => handleChange('instrumentName', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: VISTA PREVIA Y CONSOLIDACIÓN */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Paso 5 de 5</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Guía de Aprendizaje Diseñada y Lista para Publicación
                </h3>
                <p className="text-xs text-slate-500">
                  Revise la consolidación final de su documento estructurado.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyGuide}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar Texto'}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir</span>
                </button>
              </div>
            </div>

            {/* Structured Card Preview */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-5 text-xs">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Programa & Competencia</span>
                <h4 className="font-bold text-slate-900 text-base">{guideData.programName} ({guideData.programCode})</h4>
                <p className="text-slate-600 mt-0.5">{guideData.competenceName}</p>
              </div>

              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-300">
                <span className="text-[10px] font-bold text-emerald-800 uppercase block tracking-wider">
                  Resultado de Aprendizaje 1 (RAP 1 - {guideData.rap1Hours} Horas)
                </span>
                <p className="font-bold text-emerald-950 text-sm mt-1">{guideData.rap1Statement}</p>
              </div>

              {/* Activities Flow */}
              <div className="space-y-2">
                <strong className="text-slate-800 block text-xs uppercase tracking-wide">
                  Secuencia Didáctica de 4 Fases:
                </strong>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-amber-800 text-[11px] block">3.1 Reflexión:</span>
                    <span className="text-slate-800 font-medium">{guideData.reflexionTitle}</span>
                    <span className="text-slate-500 block text-[10px] mt-1">Herramienta: {guideData.reflexionTool}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-blue-800 text-[11px] block">3.2 Contextualización:</span>
                    <span className="text-slate-800 font-medium">{guideData.contextualizacionTitle}</span>
                    <span className="text-slate-500 block text-[10px] mt-1">Herramienta: {guideData.contextualizacionTool}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border-2 border-emerald-400">
                    <span className="font-bold text-emerald-800 text-[11px] block">3.3 Apropiación (Núcleo):</span>
                    <span className="text-slate-900 font-bold">{guideData.apropiacionTitle}</span>
                    <span className="text-emerald-700 block text-[10px] mt-1">Herramienta: {guideData.apropiacionTool}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-purple-800 text-[11px] block">3.4 Transferencia:</span>
                    <span className="text-slate-800 font-medium">{guideData.transferenciaTitle}</span>
                    <span className="text-slate-500 block text-[10px] mt-1">Herramienta: {guideData.transferenciaTool}</span>
                  </div>
                </div>
              </div>

              {/* Alternative Evaluation */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 space-y-1">
                <span className="font-bold text-purple-900 text-xs uppercase block tracking-wider">
                  Evaluación Sin Cuestionarios:
                </span>
                <p className="text-slate-800">
                  <strong>Evidencia:</strong> {guideData.evidenceName}
                </p>
                <p className="text-purple-800 font-semibold">
                  <strong>Instrumento Seleccionado:</strong> {guideData.instrumentName}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              currentStep === 1 ? 'opacity-40 cursor-not-allowed text-slate-400' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </button>

          {currentStep < 5 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              Siguiente Paso <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              Crear Otra Guía
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
