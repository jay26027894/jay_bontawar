import { useEffect } from 'react';
import gsap from 'gsap';

export default function BackgroundShapes() {
  useEffect(() => {
    const shapes = document.querySelectorAll('.shape');
    const handler = (e) => {
      shapes.forEach((el, i) => {
        const factor = 0.01 * (i + 1);
        gsap.to(el, {
          x: (e.clientX - window.innerWidth / 2) * factor,
          y: (e.clientY - window.innerHeight / 2) * factor,
          duration: 1,
          ease: 'power2.out',
        });
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const baseStyles = {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.15,
    mixBlendMode: 'screen',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
  };

  return (
    <div id="bg-shapes" className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="shape bg-purple-500" style={{ ...baseStyles, width: '180px', height: '180px', top: '10%', left: '15%' }} />
      <div className="shape bg-pink-500" style={{ ...baseStyles, width: '140px', height: '140px', top: '35%', left: '75%' }} />
      <div className="shape bg-indigo-500" style={{ ...baseStyles, width: '160px', height: '160px', top: '60%', left: '35%' }} />
    </div>
  );
}
