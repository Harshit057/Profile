import { useEffect, useRef } from 'react';

const SplineBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Load the scripts dynamically
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        // Load Three.js and Vanta.js if not already loaded
        if (!window.THREE) {
          await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js');
        }
        if (!window.VANTA) {
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js');
        }

        // Initialize Vanta effect
        if (vantaRef.current && window.VANTA) {
          vantaEffect.current = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x210b42
          });
        }
      } catch (error) {
        console.error('Failed to load Vanta.js:', error);
      }
    };

    initVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
};

export default SplineBackground; 