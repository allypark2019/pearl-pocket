import { useEffect, useState } from 'react';
import { Droplet, HardDrive, Waves, Clock } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = time.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = time.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="border-t-2 border-ocean-deep-border-bright bg-ocean-deep-alt/90 px-3 py-1.5">
      <div className="flex items-center justify-between text-2xs font-pixel">
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="flex items-center gap-1.5 text-ocean-seaweed">
            <Droplet className="w-3 h-3" />
            <span className="hidden sm:inline">TIDE:CALM</span>
            <span className="sm:hidden">TIDE</span>
          </span>
          <span className="flex items-center gap-1.5 text-ocean-blue-dark">
            <HardDrive className="w-3 h-3" />
            <span className="hidden sm:inline">SHELL:LOCAL</span>
            <span className="sm:hidden">SHELL</span>
          </span>
          <span className="flex items-center gap-1.5 text-ocean-gold">
            <Waves className="w-3 h-3" />
            <span className="hidden sm:inline">NET:OFFLINE</span>
            <span className="sm:hidden">NET</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-ocean-pink-dark">
          <Clock className="w-3 h-3" />
          <span className="hidden sm:inline">{dateStr}</span>
          <span>{timeStr}</span>
        </div>
      </div>
    </div>
  );
}
