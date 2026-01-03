
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorSpotlight: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfigGlow = { damping: 40, stiffness: 200, mass: 0.8 };
  const glowX = useSpring(mouseX, springConfigGlow);
  const glowY = useSpring(mouseY, springConfigGlow);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* For white theme, we use a very soft light leak instead of a glow */}
      <motion.div
        className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full opacity-[0.03] mix-blend-multiply"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          // A very subtle bone/grey shadow-like glow to provide depth
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
};

export default CursorSpotlight;
