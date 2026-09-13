import { useEffect } from 'react';

interface BootSequenceProps { onComplete: () => void }

export default function BootSequence({ onComplete }: BootSequenceProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3600);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="pearl-boot" aria-label="Pearl Pocket opening">
      <div className="pearl-depth" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      <div className="boot-clam" aria-hidden="true">
        <div className="clam-top"><span/><span/><span/><span/></div>
        <div className="clam-pearl" />
        <div className="clam-bottom"><span/><span/><span/><span/></div>
      </div>
      <div className="pearl-flash" aria-hidden="true" />
      <div className="boot-logo"><span>♡</span><b>PEARL POCKET</b><span>♡</span></div>
    </div>
  );
}
