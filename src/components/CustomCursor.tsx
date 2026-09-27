import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices and small screens
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"]')
        );
        setIsPointer(isClickable);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#E5B842] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isVisible ? 1 : 0
        }}
      />
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#E5B842]/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isPointer
            ? 'w-10 h-10 border-[#E5B842]/80 bg-[#E5B842]/10 scale-110'
            : 'w-6 h-6 scale-100 opacity-60'
        }`}
        style={{
          transform: `translate3d(${position.x - (isPointer ? 20 : 12)}px, ${
            position.y - (isPointer ? 20 : 12)
          }px, 0)`
        }}
      />
    </div>
  );
}
