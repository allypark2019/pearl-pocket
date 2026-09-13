import { useEffect } from 'react';

interface BootSequenceProps { onComplete: () => void }

export default function BootSequence({ onComplete }: BootSequenceProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3800);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="pp-boot" aria-label="Pearl Pocket opening">
      <style>{`
        .pp-boot{
          position:absolute; inset:0; width:100%; height:100%; z-index:10000;
          display:flex; align-items:center; justify-content:center; overflow:hidden;
          background:radial-gradient(circle at 50% 52%,#3e78a2 0%,#24537d 38%,#132f55 72%,#08172f 100%);
          isolation:isolate; opacity:1; visibility:visible;
        }
        .pp-boot-bubbles{position:absolute;inset:0;pointer-events:none}
        .pp-boot-bubbles i{position:absolute;left:50%;top:52%;width:10px;height:10px;border:3px solid rgba(220,246,255,.82);border-radius:50%;opacity:0;animation:ppBubble 2.4s ease-out forwards}
        .pp-boot-bubbles i:nth-child(1){--x:-230px;--y:-125px;animation-delay:.05s}.pp-boot-bubbles i:nth-child(2){--x:220px;--y:-90px;animation-delay:.18s}.pp-boot-bubbles i:nth-child(3){--x:-280px;--y:95px;animation-delay:.30s}.pp-boot-bubbles i:nth-child(4){--x:270px;--y:120px;animation-delay:.42s}.pp-boot-bubbles i:nth-child(5){--x:-155px;--y:175px;animation-delay:.54s}.pp-boot-bubbles i:nth-child(6){--x:170px;--y:-175px;animation-delay:.66s}
        @keyframes ppBubble{0%{opacity:0;transform:translate(-50%,-50%) scale(.35)}20%{opacity:.9}100%{opacity:0;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(1.9)}}
        .pp-clam{position:absolute;left:50%;top:50%;width:210px;height:176px;transform:translate(-50%,-50%) scale(.78);transform-origin:50% 55%;animation:ppApproach 2.25s cubic-bezier(.2,.8,.25,1) forwards;filter:drop-shadow(0 15px 0 rgba(5,14,34,.34));z-index:3}
        .pp-top,.pp-bottom{position:absolute;left:13px;width:184px;height:78px;background:repeating-linear-gradient(90deg,#df91bb 0 22px,#f2b9d3 22px 44px);border:8px solid #704d83;box-shadow:inset 0 0 0 6px #f8d9e7}
        .pp-top{top:7px;border-radius:72% 72% 18% 18%;transform-origin:50% 100%;animation:ppOpenTop 2.65s ease-in-out forwards}
        .pp-bottom{bottom:4px;border-radius:18% 18% 60% 60%;transform-origin:50% 0%;animation:ppOpenBottom 2.65s ease-in-out forwards}
        .pp-top span,.pp-bottom span{position:absolute;top:10px;bottom:10px;width:5px;background:rgba(111,72,132,.24)}
        .pp-top span:nth-child(1),.pp-bottom span:nth-child(1){left:35px}.pp-top span:nth-child(2),.pp-bottom span:nth-child(2){left:70px}.pp-top span:nth-child(3),.pp-bottom span:nth-child(3){left:106px}.pp-top span:nth-child(4),.pp-bottom span:nth-child(4){left:141px}
        @keyframes ppApproach{0%{transform:translate(-50%,-50%) scale(.78);opacity:.96}52%{transform:translate(-50%,-50%) scale(1.02);opacity:1}100%{transform:translate(-50%,-50%) scale(1.28);opacity:1}}
        @keyframes ppOpenTop{0%,42%{transform:rotateX(0deg) translateY(0)}74%,100%{transform:perspective(400px) rotateX(-58deg) translateY(-24px)}}
        @keyframes ppOpenBottom{0%,42%{transform:rotateX(0deg) translateY(0)}74%,100%{transform:perspective(400px) rotateX(26deg) translateY(11px)}}
        .pp-pearl{position:absolute;left:50%;top:56%;width:62px;height:62px;border-radius:50%;transform:translate(-50%,-50%) scale(.55);background:radial-gradient(circle at 34% 27%,#fff 0 15%,#fff8dc 16% 40%,#f3cde4 62%,#c99bd0 100%);border:5px solid #765684;box-shadow:0 0 0 5px rgba(255,240,213,.25);opacity:.35;animation:ppPearl 2.8s ease-in forwards;z-index:4}
        @keyframes ppPearl{0%,38%{opacity:.35;transform:translate(-50%,-50%) scale(.55);box-shadow:0 0 0 rgba(255,255,255,0)}58%{opacity:1;transform:translate(-50%,-50%) scale(.9)}100%{opacity:1;transform:translate(-50%,-50%) scale(1.65);box-shadow:0 0 90px 58px rgba(255,248,225,.96)}}
        .pp-flash{position:absolute;inset:-25%;z-index:8;background:radial-gradient(circle,#fffdf4 0%,#fff3fb 32%,#f9d9ec 56%,rgba(255,255,255,0) 73%);opacity:0;transform:scale(.15);animation:ppFlash 3.45s ease-in forwards;pointer-events:none}
        @keyframes ppFlash{0%,66%{opacity:0;transform:scale(.15)}79%{opacity:1;transform:scale(2.35)}92%{opacity:.92;transform:scale(2.8)}100%{opacity:0;transform:scale(3.15)}}
        .pp-logo{position:absolute;left:50%;top:52%;z-index:10;display:flex;align-items:center;gap:14px;transform:translate(-50%,-50%) scale(.82);opacity:0;padding:15px 22px;border:3px solid #8b659f;background:#f7e5ef;color:#53406f;box-shadow:6px 7px 0 rgba(46,37,78,.28);font-family:'Press Start 2P',monospace;letter-spacing:2px;white-space:nowrap;animation:ppLogo 3.65s ease-out forwards}
        .pp-logo b{font-size:18px}.pp-logo span{font-size:16px;color:#b15486}
        @keyframes ppLogo{0%,76%{opacity:0;transform:translate(-50%,-50%) scale(.72)}86%{opacity:1;transform:translate(-50%,-50%) scale(1.04)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
      `}</style>

      <div className="pp-boot-bubbles" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      <div className="pp-clam" aria-hidden="true">
        <div className="pp-top"><span/><span/><span/><span/></div>
        <div className="pp-pearl" />
        <div className="pp-bottom"><span/><span/><span/><span/></div>
      </div>
      <div className="pp-flash" aria-hidden="true" />
      <div className="pp-logo"><span>♡</span><b>PEARL POCKET</b><span>♡</span></div>
    </div>
  );
}
