import { BookOpen, Plus, Search, FolderOpen } from 'lucide-react';

export default function EncyclopediaView() {
  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex items-center gap-2 pixel-panel border-ocean-deep-border px-3 py-2 flex-1">
          <Search className="w-4 h-4 text-ocean-pink-deep flex-shrink-0" />
          <input
            type="text"
            placeholder="SEARCH ENCYCLOPEDIA..."
            className="bg-transparent border-none outline-none text-xs font-mono text-ocean-foam placeholder-ocean-foam-dim/50 flex-1 min-w-0"
          />
        </div>
        <button className="flex items-center justify-center gap-2 pixel-panel border-ocean-pink hover:bg-ocean-pink/10 px-4 py-2 text-3xs font-pixel text-ocean-pink text-glow-pink transition-all cursor-pointer">
          <Plus className="w-3.5 h-3.5" />
          <span>NEW ENTRY</span>
        </button>
      </div>

      {/* Empty state */}
      <div className="pixel-panel border-ocean-deep-border p-8 sm:p-12 flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-ocean-pink/5 border-2 border-ocean-deep-border flex items-center justify-center mb-3 animate-float">
          <BookOpen className="w-7 h-7 text-ocean-pink-deep" />
        </div>
        <h3 className="font-pixel text-xs text-ocean-pink text-glow-pink mb-2 tracking-wider">NO ENTRIES</h3>
        <p className="font-mono text-xs text-ocean-foam-dim max-w-sm leading-relaxed mb-4">
          The encyclopedia is empty. Create your first knowledge entry to begin building your personal archive.
        </p>
        <div className="flex items-center gap-2 text-3xs font-pixel text-ocean-foam-dim/70">
          <FolderOpen className="w-3 h-3" />
          <span>0 ARTICLES · 0 CATEGORIES · LOCAL</span>
        </div>
      </div>
    </div>
  );
}
