import React from 'react';
import { 
  GitBranch, 
  FileText, 
  Wrench, 
  ClipboardCheck, 
  Award, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export type ActiveTab = 'flowchart' | 'model-guide' | 'pedagogical-tools' | 'instruments' | 'simulator' | 'builder';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      id: 'flowchart' as ActiveTab,
      label: 'Diagrama de Flujo',
      icon: GitBranch,
      badge: 'Metodología'
    },
    {
      id: 'model-guide' as ActiveTab,
      label: 'Guía Modelo (RAP 1)',
      icon: FileText,
      badge: 'Caso Real'
    },
    {
      id: 'pedagogical-tools' as ActiveTab,
      label: 'Herramientas Pedagógicas',
      icon: Wrench,
      badge: 'Apropiación'
    },
    {
      id: 'instruments' as ActiveTab,
      label: 'Instrumentos (No Cuestionario)',
      icon: ClipboardCheck,
      badge: 'Evaluación'
    },
    {
      id: 'simulator' as ActiveTab,
      label: 'Simulador Evaluativo',
      icon: Award,
      badge: 'Interactivo'
    },
    {
      id: 'builder' as ActiveTab,
      label: 'Diseñador de Guías',
      icon: Sparkles,
      badge: 'Asistente'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-indigo-100">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-lg">GuíaPedagógica</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Formación por Competencias
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Metodología de Guías, RAP 1 y Evaluación Alternativa sin Cuestionarios
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
