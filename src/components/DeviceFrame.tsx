import { useMemo } from 'react';

interface DeviceFrameProps {
  children: React.ReactNode;
}

interface BubbleConfig {
  size: number;
  left: number;
  delay: number;
  duration: number;
}

function generateBubbles(count: number): BubbleConfig[] {
  return Array.from({ length: count }, () => ({
    size: 16 + Math.random() * 34,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
  }));
}

export default function DeviceFrame({ children }: DeviceFrameProps) {
  const bubbles = useMemo(() => generateBubbles(22), []);

  return (
    <div className="min-h-screen ocean-deep-bg flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              bottom: '-50px',
              animation: `bubble ${b.duration}s ease-in ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-none device-stage">
        <div
          className="device-shell relative bg-ocean-deep-bg pixel-border-pink mx-auto"
          style={{ borderRadius: '2rem 2rem 1.5rem 1.5rem', padding: '1.5rem 1rem 1rem' }}
        >
          <div className="flex items-center justify-between px-2 sm:px-4 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ocean-pink-deep rounded-full" />
              <div className="w-3 h-3 bg-ocean-blue-deep rounded-full" />
              <div className="w-3 h-3 bg-ocean-gold rounded-full" />
            </div>
            <div className="device-brand font-pixel text-ocean-foam-dim tracking-widest">♡ PEARL POCKET ♡</div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-ocean-seaweed rounded-full animate-pulse" />
              <span className="device-power font-pixel text-ocean-seaweed">PWR</span>
            </div>
          </div>

          <div className="bg-ocean-deep border-4 border-ocean-deep-border-bright mx-2 sm:mx-4" style={{ borderRadius: '0.75rem' }}>
            <div className="virtual-screen ocean-bg grid-bg-ocean relative overflow-hidden" style={{ borderRadius: '0.5rem' }}>
              <div className="screen-bubble-layer" aria-hidden="true">
                {[
                  { left: 3, size: 58, delay: 0.2, duration: 10.5 },
                  { left: 12, size: 34, delay: 3.2, duration: 8.6 },
                  { left: 23, size: 82, delay: 1.1, duration: 12.4 },
                  { left: 38, size: 46, delay: 5.1, duration: 9.8 },
                  { left: 51, size: 68, delay: 2.7, duration: 11.7 },
                  { left: 64, size: 38, delay: 0.9, duration: 8.9 },
                  { left: 76, size: 92, delay: 4.3, duration: 13.2 },
                  { left: 89, size: 52, delay: 6.1, duration: 10.1 },
                  { left: 96, size: 28, delay: 2.1, duration: 8.4 },
                ].map((bubble, i) => (
                  <span
                    key={i}
                    className="screen-bubble"
                    style={{ left: `${bubble.left}%`, width: `${bubble.size}px`, height: `${bubble.size}px`, animationDelay: `${bubble.delay}s`, animationDuration: `${bubble.duration}s` }}
                  />
                ))}
              </div>

              <div className="reef-layer" aria-hidden="true">
                <div className="kelp kelp-a"><i/><i/><i/><i/></div>
                <div className="kelp kelp-b"><i/><i/><i/></div>
                <div className="coral coral-a"><i/><i/><i/><i/></div>
                <div className="coral coral-b"><i/><i/><i/></div>
                <div className="starfish-deco">★</div>
              </div>

              <div className="swimming-otter" aria-hidden="true">
                <svg viewBox="0 0 76 36" shapeRendering="crispEdges">
                  <g fill="#8a6b58"><rect x="18" y="11" width="34" height="16"/><rect x="10" y="14" width="12" height="10"/><rect x="8" y="11" width="5" height="5"/><rect x="8" y="22" width="5" height="5"/><rect x="50" y="15" width="13" height="7"/><rect x="61" y="13" width="8" height="4"/></g>
                  <g fill="#c9a988"><rect x="13" y="16" width="8" height="6"/><rect x="24" y="14" width="16" height="9"/></g>
                  <rect x="15" y="16" width="2" height="2" fill="#2e3440"/><rect x="8" y="18" width="3" height="2" fill="#2e3440"/>
                  <g fill="#bfe5f0"><rect x="3" y="7" width="5" height="5"/><rect x="0" y="1" width="3" height="3"/><rect x="69" y="7" width="4" height="4"/></g>
                </svg>
              </div>

              <div className="absolute inset-0 z-[3]">{children}</div>
              <div className="seabed pointer-events-none z-[2]" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 mb-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-ocean-pink-deep border-2 border-ocean-pink-dark flex items-center justify-center" style={{ borderRadius: '50%' }}><div className="w-2 h-2 bg-ocean-pearl rounded-full" /></div>
            <div className="flex flex-col gap-1"><div className="w-10 h-3 bg-ocean-blue-deep border border-ocean-blue-dark" style={{ borderRadius: '4px' }} /><div className="w-10 h-3 bg-ocean-blue-deep border border-ocean-blue-dark" style={{ borderRadius: '4px' }} /></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-ocean-blue-deep border-2 border-ocean-blue-dark flex items-center justify-center" style={{ borderRadius: '50%' }}><div className="w-2 h-2 bg-ocean-pearl rounded-full" /></div>
          </div>
        </div>

        <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-6 h-16 sm:w-8 sm:h-20 bg-ocean-pink-deep border-2 border-ocean-pink-dark hidden sm:block" style={{ borderRadius: '8px 0 0 8px' }} />
        <div className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-6 h-16 sm:w-8 sm:h-20 bg-ocean-blue-deep border-2 border-ocean-blue-dark hidden sm:block" style={{ borderRadius: '0 8px 8px 0' }} />
      </div>
    </div>
  );
}
