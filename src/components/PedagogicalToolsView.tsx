import React, { useState } from 'react';
import { PEDAGOGICAL_TOOLS } from '../data/pedagogicalTools';
import { PedagogicalToolInfo } from '../types/guide';
import { 
  Wrench, 
  Lightbulb, 
  Users, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  GitFork, 
  Network, 
  Table, 
  Briefcase, 
  LayoutGrid,
  ShieldCheck,
  Search
} from 'lucide-react';

interface PedagogicalToolsViewProps {
  onSelectToolForBuilder?: (toolName: string) => void;
}

export const PedagogicalToolsView: React.FC<PedagogicalToolsViewProps> = ({ onSelectToolForBuilder }) => {
  const [selectedTool, setSelectedTool] = useState<PedagogicalToolInfo>(PEDAGOGICAL_TOOLS[0]);
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Cognitiva' | 'Práctica / Simulación'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = PEDAGOGICAL_TOOLS.filter((tool) => {
    const matchesCategory = categoryFilter === 'All' || tool.category === categoryFilter;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'GitFork': return <GitFork className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Table': return <Table className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-emerald-950 via-teal-950 to-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-800/40">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-500/30">
            <Brain className="w-3.5 h-3.5" />
            Mediación Activa y Apropiación del Conocimiento
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Catálogo de Herramientas Pedagógicas Activas
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Las herramientas pedagógicas estructuran el pensamiento del aprendiz para que deje de ser un receptor pasivo 
            y se convierta en un analista crítico. Cada herramienta aquí seleccionada permite generar <strong>evidencia tangible del saber</strong> 
            (organizadores visuales, matrices, diagnósticos y modelos) que reemplazan cualquier cuestionario de opción múltiple.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setCategoryFilter('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              categoryFilter === 'All' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todas ({PEDAGOGICAL_TOOLS.length})
          </button>
          <button
            onClick={() => setCategoryFilter('Cognitiva')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              categoryFilter === 'Cognitiva' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Cognitivas / Estructura Mental
          </button>
          <button
            onClick={() => setCategoryFilter('Práctica / Simulación')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              categoryFilter === 'Práctica / Simulación' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Prácticas / Simulación Real
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar herramienta..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Grid: Tools List & Selected Tool Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Tools Cards Column */}
        <div className="lg:col-span-5 space-y-3">
          {filteredTools.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-200'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      {getToolIcon(tool.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">{tool.name}</h4>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <ChevronRightIcon className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-600 translate-x-1' : 'text-slate-300'}`} />
                </div>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Tool Details Column */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 sticky top-24">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                {selectedTool.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 pt-1">
                {selectedTool.name}
              </h3>
            </div>
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
              {getToolIcon(selectedTool.icon)}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedTool.description}
          </p>

          {/* Core Mechanism of Knowledge Appropriation */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wide">
              <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
              ¿Cómo Garantiza la Apropiación del Conocimiento?
            </div>
            <p className="text-xs text-emerald-950 leading-relaxed font-medium">
              {selectedTool.knowledgeAppropriationMechanism}
            </p>
          </div>

          {/* Implementation Steps */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Pasos para su Aplicación en la Actividad de Aprendizaje:
            </h4>
            <div className="space-y-2">
              {selectedTool.howToApply.map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Learner and Instructor Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wide">
                Rol del Aprendiz:
              </span>
              <p className="text-slate-600 leading-relaxed">{selectedTool.learnerRole}</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wide">
                Rol del Instructor:
              </span>
              <p className="text-slate-600 leading-relaxed">{selectedTool.instructorRole}</p>
            </div>
          </div>

          {/* Compatible Non-Questionnaire Instruments */}
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 space-y-2">
            <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              Instrumentos No-Cuestionario Recomendados para Evaluarla:
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedTool.recommendedInstruments.map((inst, i) => (
                <span key={i} className="text-xs bg-white text-purple-900 px-3 py-1 rounded-lg border border-purple-200 font-semibold shadow-xs">
                  {inst}
                </span>
              ))}
            </div>
          </div>

          {onSelectToolForBuilder && (
            <button
              onClick={() => onSelectToolForBuilder(selectedTool.name)}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              Usar {selectedTool.name} en el Diseñador de Guías <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
