import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { FlowchartView } from './components/FlowchartView';
import { ModelGuideView } from './components/ModelGuideView';
import { PedagogicalToolsView } from './components/PedagogicalToolsView';
import { InstrumentsCatalog } from './components/InstrumentsCatalog';
import { EvaluationSimulator } from './components/EvaluationSimulator';
import { GuideBuilder } from './components/GuideBuilder';
import { 
  GitBranch, 
  FileText, 
  Wrench, 
  ClipboardCheck, 
  Award, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('flowchart');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'flowchart' && (
          <FlowchartView
            onNavigateToGuide={() => setActiveTab('model-guide')}
          />
        )}

        {activeTab === 'model-guide' && (
          <ModelGuideView
            onSelectInstrument={() => setActiveTab('instruments')}
          />
        )}

        {activeTab === 'pedagogical-tools' && (
          <PedagogicalToolsView
            onSelectToolForBuilder={() => setActiveTab('builder')}
          />
        )}

        {activeTab === 'instruments' && (
          <InstrumentsCatalog
            onNavigateToSimulator={() => setActiveTab('simulator')}
          />
        )}

        {activeTab === 'simulator' && (
          <EvaluationSimulator />
        )}

        {activeTab === 'builder' && (
          <GuideBuilder />
        )}
      </main>

      {/* Educational & Methodological Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
              GP
            </div>
            <div>
              <p className="font-bold text-slate-800">
                Metodología para la Elaboración de Guías de Aprendizaje por Competencias
              </p>
              <p className="text-[11px] text-slate-500">
                Alineamiento Constructivo de John Biggs • Enfoque Socioformativo de Sergio Tobón • Evaluación Auténtica
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              onClick={() => setActiveTab('flowchart')}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Diagrama de Flujo
            </button>
            <button
              onClick={() => setActiveTab('model-guide')}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Guía Modelo RAP 1
            </button>
            <button
              onClick={() => setActiveTab('pedagogical-tools')}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Herramientas Pedagógicas
            </button>
            <button
              onClick={() => setActiveTab('instruments')}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Instrumentos sin Cuestionarios
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Simulador Evaluativo
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
