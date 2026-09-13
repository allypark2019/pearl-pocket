import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MODULES, type ModuleId, type AccentColor } from '@/data/modules';

interface HomeScreenProps {
  onSelectModule: (id: ModuleId) => void;
}

type PixelIconProps = { className?: string };

function ShellPearlIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#8b659f"><rect x="10" y="20" width="44" height="27"/><rect x="14" y="16" width="36" height="4"/><rect x="14" y="47" width="36" height="4"/></g>
    <g fill="#f2b8d0"><rect x="12" y="18" width="18" height="27"/><rect x="34" y="18" width="18" height="27"/></g>
    <g fill="#fff3d5"><rect x="15" y="21" width="13" height="20"/><rect x="36" y="21" width="13" height="20"/></g>
    <g fill="#7393c5"><rect x="30" y="18" width="4" height="29"/><rect x="18" y="25" width="8" height="2"/><rect x="38" y="25" width="8" height="2"/></g>
    <g fill="#e3ad55"><rect x="8" y="15" width="4" height="4"/><rect x="52" y="13" width="4" height="4"/><rect x="5" y="29" width="3" height="3"/><rect x="56" y="30" width="3" height="3"/></g>
    <g fill="#fff8e7"><rect x="9" y="10" width="3" height="3"/><rect x="53" y="8" width="3" height="3"/></g>
  </svg>;
}
function BottleIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#956b91"><rect x="12" y="15" width="36" height="5"/><rect x="9" y="20" width="40" height="5"/><rect x="13" y="25" width="34" height="5"/><rect x="10" y="30" width="38" height="5"/><rect x="14" y="35" width="30" height="5"/></g>
    <g fill="#ffe8d4"><rect x="15" y="17" width="29" height="3"/><rect x="13" y="22" width="31" height="3"/><rect x="16" y="27" width="27" height="3"/></g>
    <g fill="#d99dbb"><rect x="17" y="18" width="2" height="18"/><rect x="38" y="18" width="2" height="18"/></g>
    <g fill="#e5b257"><rect x="43" y="28" width="4" height="22"/><rect x="36" y="35" width="18" height="4"/><rect x="43" y="23" width="4" height="7"/></g>
    <g fill="#f6b8d1"><rect x="42" y="32" width="6" height="14"/><rect x="38" y="36" width="14" height="5"/></g>
    <g fill="#fff4bf"><rect x="46" y="14" width="3" height="9"/><rect x="43" y="17" width="9" height="3"/></g>
  </svg>;
}
function TurtleIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#795a9d"><rect x="20" y="8" width="24" height="4"/><rect x="14" y="12" width="36" height="5"/><rect x="10" y="17" width="44" height="19"/><rect x="14" y="36" width="36" height="5"/></g>
    <g fill="#c69de1"><rect x="16" y="15" width="32" height="20"/><rect x="20" y="11" width="24" height="28"/></g>
    <g fill="#f4ddff"><rect x="21" y="16" width="18" height="14"/><rect x="18" y="20" width="24" height="7"/></g>
    <g fill="#8d6bb0"><rect x="16" y="39" width="5" height="15"/><rect x="25" y="39" width="5" height="18"/><rect x="35" y="39" width="5" height="14"/><rect x="44" y="37" width="5" height="18"/></g>
    <g fill="#a8e0e1"><rect x="23" y="18" width="5" height="4"/><rect x="34" y="18" width="5" height="4"/></g>
    <g fill="#fff5c7"><rect x="8" y="11" width="3" height="3"/><rect x="51" y="8" width="3" height="3"/></g>
  </svg>;
}
function MirrorStarIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#a46b92"><rect x="20" y="8" width="24" height="4"/><rect x="14" y="12" width="36" height="5"/><rect x="11" y="17" width="42" height="29"/><rect x="15" y="46" width="34" height="5"/></g>
    <g fill="#e6ad59"><rect x="18" y="10" width="28" height="4"/><rect x="13" y="16" width="4" height="30"/><rect x="47" y="16" width="4" height="30"/></g>
    <g fill="#f4b8d0"><rect x="17" y="17" width="30" height="27"/><rect x="21" y="13" width="22" height="35"/></g>
    <g fill="#fff0f7"><rect x="21" y="20" width="22" height="20"/></g>
    <g fill="#b86e9c"><rect x="29" y="23" width="6" height="14"/><rect x="25" y="27" width="14" height="6"/></g>
    <g fill="#ffe9a9"><rect x="7" y="16" width="3" height="10"/><rect x="4" y="19" width="9" height="4"/><rect x="52" y="9" width="3" height="10"/><rect x="49" y="12" width="9" height="4"/></g>
  </svg>;
}



function BookArchiveIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#684d86"><rect x="7" y="13" width="23" height="39"/><rect x="34" y="13" width="23" height="39"/><rect x="29" y="16" width="6" height="39"/></g>
    <g fill="#fff1df"><rect x="11" y="17" width="17" height="30"/><rect x="36" y="17" width="17" height="30"/></g>
    <g fill="#e8a8c8"><rect x="14" y="22" width="11" height="3"/><rect x="14" y="29" width="9" height="3"/><rect x="39" y="22" width="11" height="3"/><rect x="39" y="29" width="9" height="3"/></g>
    <g fill="#f4cc68"><rect x="8" y="8" width="4" height="8"/><rect x="6" y="10" width="8" height="4"/><rect x="52" y="5" width="3" height="9"/><rect x="49" y="8" width="9" height="3"/></g>
  </svg>;
}
function FishFriendIcon({ className = '' }: PixelIconProps) {
  return <img src="/assets/manta-idle.png" className={className} aria-hidden="true" alt="" />;
}
function LegacyFishFriendIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#5b648f"><rect x="13" y="23" width="30" height="19"/><rect x="18" y="18" width="20" height="29"/><rect x="43" y="26" width="8" height="13"/><rect x="50" y="20" width="8" height="9"/><rect x="50" y="36" width="8" height="9"/></g>
    <g fill="#a7dce2"><rect x="18" y="25" width="21" height="15"/><rect x="22" y="21" width="13" height="23"/></g>
    <rect x="20" y="29" width="4" height="4" fill="#313955"/><rect x="25" y="35" width="8" height="3" fill="#e99cbe"/>
    <g fill="#f4cc68"><rect x="8" y="15" width="3" height="3"/><rect x="5" y="9" width="5" height="5"/><rect x="10" y="45" width="4" height="4"/></g>
  </svg>;
}

function PotionLabIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#5a477c"><rect x="25" y="6" width="14" height="6"/><rect x="22" y="12" width="20" height="5"/><rect x="26" y="17" width="12" height="8"/><rect x="16" y="25" width="32" height="5"/><rect x="12" y="30" width="40" height="22"/><rect x="17" y="52" width="30" height="5"/></g>
    <g fill="#cda7e8"><rect x="17" y="32" width="30" height="17"/><rect x="20" y="28" width="24" height="5"/></g>
    <g fill="#f1a9d0"><rect x="17" y="42" width="30" height="7"/><rect x="22" y="37" width="8" height="5"/><rect x="35" y="34" width="7" height="6"/></g>
    <g fill="#fff0a8"><rect x="10" y="20" width="4" height="4"/><rect x="48" y="15" width="4" height="4"/><rect x="8" y="11" width="3" height="8"/><rect x="5" y="14" width="9" height="3"/></g>
  </svg>;
}
function TreasureChestIcon({ className = '' }: PixelIconProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true" shapeRendering="crispEdges">
    <g fill="#68472f"><rect x="10" y="19" width="44" height="9"/><rect x="7" y="28" width="50" height="28"/></g>
    <g fill="#bb7a45"><rect x="13" y="16" width="38" height="5"/><rect x="10" y="22" width="44" height="5"/><rect x="11" y="31" width="42" height="21"/></g>
    <g fill="#f0c35e"><rect x="7" y="27" width="50" height="4"/><rect x="10" y="51" width="44" height="5"/><rect x="29" y="30" width="7" height="13"/></g>
    <g fill="#fff1a9"><rect x="31" y="34" width="3" height="5"/><rect x="17" y="12" width="3" height="3"/><rect x="46" y="10" width="4" height="4"/></g>
  </svg>;
}
function RoamingCatfish() {
  return (
    <div className="roaming-catfish-layer" aria-hidden="true">
      <div className="roaming-catfish ashe-roamer">
        <svg viewBox="0 0 42 28" shapeRendering="crispEdges">
          <g fill="#66666f"><rect x="6" y="6" width="17" height="14"/><rect x="8" y="3" width="4" height="4"/><rect x="18" y="3" width="4" height="4"/></g>
          <g fill="#b8d6aa"><rect x="9" y="10" width="4" height="3"/><rect x="17" y="10" width="4" height="3"/></g>
          <g fill="#273044"><rect x="11" y="10" width="1" height="3"/><rect x="19" y="10" width="1" height="3"/><rect x="14" y="14" width="3" height="2"/></g>
          <g fill="#88b8c9"><rect x="23" y="9" width="8" height="9"/><rect x="29" y="7" width="7" height="4"/><rect x="29" y="16" width="7" height="4"/><rect x="35" y="5" width="3" height="6"/><rect x="35" y="16" width="3" height="6"/></g>
          <rect x="4" y="15" width="3" height="1" fill="#f5edf2"/><rect x="3" y="17" width="4" height="1" fill="#f5edf2"/>
        </svg>
        <span>ASHE</span>
      </div>
      <div className="roaming-catfish otter-roamer">
        <svg viewBox="0 0 42 28" shapeRendering="crispEdges">
          <g fill="#9a806b"><rect x="6" y="6" width="17" height="14"/><rect x="8" y="3" width="4" height="4"/><rect x="18" y="3" width="4" height="4"/></g>
          <g fill="#493f3d"><rect x="9" y="6" width="2" height="5"/><rect x="14" y="6" width="2" height="4"/><rect x="19" y="6" width="2" height="5"/><rect x="7" y="15" width="4" height="2"/><rect x="18" y="15" width="4" height="2"/></g>
          <g fill="#e5d79a"><rect x="9" y="11" width="4" height="3"/><rect x="17" y="11" width="4" height="3"/></g>
          <g fill="#273044"><rect x="11" y="11" width="1" height="3"/><rect x="19" y="11" width="1" height="3"/><rect x="14" y="15" width="3" height="2"/></g>
          <g fill="#7eb0c6"><rect x="23" y="9" width="8" height="9"/><rect x="29" y="7" width="7" height="4"/><rect x="29" y="16" width="7" height="4"/><rect x="35" y="5" width="3" height="6"/><rect x="35" y="16" width="3" height="6"/></g>
          <rect x="4" y="15" width="3" height="1" fill="#f5edf2"/><rect x="3" y="17" width="4" height="1" fill="#f5edf2"/>
        </svg>
        <span>OTTER</span>
      </div>
    </div>
  );
}

function CursorCatfish({ kind, x, y }: { kind: 'ashe' | 'otter'; x: number; y: number }) {
  return (
    <div className={`cursor-catfish companion-art ${kind}`} style={{ left: x, top: y }} aria-hidden="true">
      <img src={`/assets/${kind}-cursor.png`} alt="" draggable={false}/>
    </div>
  );
}

const ICON_MAP: Record<string, React.ComponentType<PixelIconProps>> = {
  BookOpen: BookArchiveIcon,
  FlaskConical: PotionLabIcon,
  PawPrint: FishFriendIcon,
  Users: TreasureChestIcon,
};

const ACCENT_STYLES: Record<
  AccentColor,
  {
    text: string;
    border: string;
    selectedBorder: string;
    panel: string;
    iconBox: string;
    number: string;
    footer: string;
  }
> = {
  pink: {
    text: 'text-[#b54f83]',
    border: 'border-[#dfa1c2]',
    selectedBorder: 'border-[#c95f93]',
    panel: 'bg-[#ffe3f0] hover:bg-[#ffd8ea]',
    iconBox: 'bg-[#fff4fa] border-[#d986af]',
    number: 'text-[#c85f92] bg-[#fff0f7]',
    footer: 'border-[#e8a9c8]',
  },
  blue: {
    text: 'text-[#547fb8]',
    border: 'border-[#9abfe7]',
    selectedBorder: 'border-[#6f9fd3]',
    panel: 'bg-[#ddecff] hover:bg-[#d2e6ff]',
    iconBox: 'bg-[#f4f9ff] border-[#7fa9d8]',
    number: 'text-[#5e8fc7] bg-[#edf6ff]',
    footer: 'border-[#a6c7e9]',
  },
  coral: {
    text: 'text-[#c86f7f]',
    border: 'border-[#efabb4]',
    selectedBorder: 'border-[#d87989]',
    panel: 'bg-[#ffe1df] hover:bg-[#ffd8d5]',
    iconBox: 'bg-[#fff5f3] border-[#e5909d]',
    number: 'text-[#d27382] bg-[#fff0ef]',
    footer: 'border-[#efb0b7]',
  },
  gold: {
    text: 'text-[#a47b32]',
    border: 'border-[#e7c975]',
    selectedBorder: 'border-[#cfa845]',
    panel: 'bg-[#fff0bd] hover:bg-[#ffeaaa]',
    iconBox: 'bg-[#fff9e8] border-[#d8b653]',
    number: 'text-[#b98c36] bg-[#fff8df]',
    footer: 'border-[#e4c86f]',
  },
};

export default function HomeScreen({ onSelectModule }: HomeScreenProps) {
  const [selected, setSelected] = useState<number>(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cursorBuddy, setCursorBuddy] = useState<'shell' | 'ashe' | 'otter'>('ashe');
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setSelected((s) => (s + 1) % MODULES.length);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelected((s) => (s - 1 + MODULES.length) % MODULES.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        onSelectModule(MODULES[selected].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, onSelectModule]);

  return (
    <div
      className={`min-h-full flex flex-col pb-2 relative aquarium-home ${cursorBuddy === 'shell' ? '' : 'custom-cat-cursor'}`}
      onPointerMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >
      <header className="pt-5 sm:pt-8 px-4 sm:px-8">
        <div
          className={`transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="pearl-garland" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>
          <div className="ribbon-bow" aria-hidden="true"><i/><i/><b/></div>
          <div className="flex items-center justify-center gap-2 archive-kicker mb-2">
            <span>♡</span>
            <span className="pocket-label">PEARL POCKET</span>
            <span>♡</span>
          </div>
          <h1 className="archive-title text-center mb-1">ALLY'S ARCHIVE</h1>
          <div className="flex items-center justify-center gap-2 archive-subtitle">
            <span className="h-[2px] w-8 bg-[#7fa9d8]" />
            <span>a collection of curious things</span>
            <span className="h-[2px] w-8 bg-[#7fa9d8]" />
          </div>
          <div className="cursor-buddy-picker cursor-companion-bar" aria-label="Choose cursor companion">
            <span className="cursor-label">Cursor Companion:</span>
            <button type="button" title="Shell" aria-label="Use shell cursor" onClick={() => setCursorBuddy('shell')} className={cursorBuddy === 'shell' ? 'active' : ''}>
              <img className="companion-thumb" src="/assets/shell-portrait-final.png" alt="" />
            </button>
            <button type="button" title="Otter" aria-label="Use Otter cursor companion" onClick={() => setCursorBuddy('otter')} className={cursorBuddy === 'otter' ? 'active' : ''}>
              <img className="companion-thumb" src="/assets/otter-portrait-final.png" alt="" />
            </button>
            <button type="button" title="Ashe" aria-label="Use Ashe cursor companion" onClick={() => setCursorBuddy('ashe')} className={cursorBuddy === 'ashe' ? 'active' : ''}>
              <img className="companion-thumb" src="/assets/ashe-portrait-final.png" alt="" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-8 mt-6 sm:mt-8 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="menu-label">✦ choose a treasure ✦</div>
          <div className="menu-hint hidden sm:block">♡ arrows to swim · enter to open ♡</div>
        </div>

        <div className="treasure-grid grid gap-4">
          {MODULES.map((module, i) => {
            const Icon = ICON_MAP[module.icon];
            const styles = ACCENT_STYLES[module.accent];
            const isSelected = selected === i;

            return (
              <button
                key={module.id}
                onClick={() => onSelectModule(module.id)}
                onMouseEnter={() => setSelected(i)}
                className={`treasure-card group relative ${styles.panel} ${styles.border} ${
                  isSelected ? `${styles.selectedBorder} is-selected` : ''
                } p-4 sm:p-5 text-left animate-slide-up cursor-pointer`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`module-hover-banner hover-${module.id}`} aria-hidden="true" />
                <div className="module-card-main">
                  <div className={`pixel-icon-box ${styles.iconBox}`}><Icon className={`module-pixel-icon idle-card-icon ${styles.text}`} /><span className={`hover-card-icon hover-icon-${module.id}`} aria-hidden="true" /></div>
                  <div className="module-copy"><h2 className={`module-title ${styles.text}`}>{module.name}</h2><p className="module-description">{module.description}</p></div>
                </div>
                <div className="module-preview">
                  {module.id==='lab'&&<><b>🔥 CURRENT OBSESSION</b><span>Ally Archive Cyberdeck</span></>}
                  {module.id==='encyclopedia'&&<><b>✦ LATEST ENTRY</b><span>Collected notes & curious things</span></>}
                  {module.id==='creatures'&&<><b>♡ CREATURE WATCH</b><span>Ashe · Otter</span></>}
                  {module.id==='log'&&<><b>♡ LATEST RIPPLE</b><span>Your little guestbook</span></>}
                </div>
                <div className={`module-card-footer ${styles.footer}`}><span className={`module-open ${styles.text}`}>OPEN <ArrowRight/></span></div>
                {isSelected && <div className="pixel-cursor" aria-hidden="true">♥</div>}
              </button>
            );
          })}
        </div>
      </main>

      <footer className="px-4 sm:px-8 mt-6 mb-5 relative z-10">
        <div className="home-footer">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#76a8a5] rounded-full animate-pulse" />
            <span>ocean calm · memories safe</span>
          </div>
          <div>pearls · ribbons · little treasures</div>
        </div>
      </footer>

      {(cursorBuddy==='ashe'||cursorBuddy==='otter')&&<CursorCatfish kind={cursorBuddy} x={cursorPos.x} y={cursorPos.y} />}
    </div>
  );
}
