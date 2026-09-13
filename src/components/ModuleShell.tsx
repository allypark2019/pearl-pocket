import { useEffect, useState } from 'react';
import { ArrowLeft, Shell } from 'lucide-react';
import type { ModuleConfig } from '@/data/modules';
import type { AccentColor } from '@/data/modules';

interface ModuleShellProps {
  module: ModuleConfig;
  onBack: () => void;
  children: React.ReactNode;
}

const ACCENT_TEXT: Record<AccentColor, string> = {
  pink: 'text-ocean-pink',
  blue: 'text-ocean-blue-light',
  coral: 'text-ocean-coral',
  gold: 'text-ocean-gold',
};

const ACCENT_BORDER: Record<AccentColor, string> = {
  pink: 'border-ocean-pink',
  blue: 'border-ocean-blue-light',
  coral: 'border-ocean-coral',
  gold: 'border-ocean-gold',
};

const ACCENT_GLOW: Record<AccentColor, string> = {
  pink: 'text-glow-pink',
  blue: 'text-glow-blue',
  coral: 'text-glow-coral',
  gold: 'text-glow-gold',
};

export default function ModuleShell({ module, onBack, children }: ModuleShellProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const accentText = ACCENT_TEXT[module.accent];
  const accentBorder = ACCENT_BORDER[module.accent];
  const accentGlow = ACCENT_GLOW[module.accent];

  return (
    <div className={`min-h-full flex flex-col pb-2 module-shell module-shell-${module.id}`}>
      {/* Module header */}
      <header
        className={`border-b-2 ${accentBorder} bg-ocean-deep-alt/80 px-3 sm:px-5 py-2.5 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-3xs font-pixel text-ocean-foam-dim hover:text-ocean-pink transition-colors group flex-shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">BACK</span>
            </button>
            <div className="h-4 w-px bg-ocean-deep-border" />
            <div className="flex items-center gap-1.5 min-w-0">
              <Shell className={`w-3.5 h-3.5 ${accentText} flex-shrink-0`} />
              <span className={`module-page-title font-pixel ${accentText} ${accentGlow} tracking-wider truncate`}>
                {module.name}
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Module description bar */}
      <div className="px-4 sm:px-8 mt-3">
        <div
          className={`pixel-panel border-l-4 ${accentBorder} px-3 py-2 transition-all duration-500 delay-100 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <p className="module-long-description font-mono text-ocean-foam-dim leading-relaxed">
            {module.longDescription}
          </p>
        </div>
      </div>

      {/* Module content */}
      <main
        className={`flex-1 px-4 sm:px-8 mt-4 transition-all duration-500 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
