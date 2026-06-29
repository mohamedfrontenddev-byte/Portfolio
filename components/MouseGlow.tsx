'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

 return (
  <motion.div
    className="pointer-events-none fixed top-0 left-0 z-[100]"
    style={{
      x: springX,
      y: springY,
    }}
  >
    <div
      className="rounded-full"
      style={{
        width: 20,
        height: 20,
        marginLeft: -25,
        marginTop: -25,

        // Border أزرق غامق
        border: '1px solid rgba(30,64,175,0.8)',

       background: isDark
  ? 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)'
  : 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 40%, transparent 70%)',

        // Glow
        boxShadow: isDark
          ? `
            0 0 25px rgba(255,255,255,0.35),
            inset 0 0 15px rgba(255,255,255,0.15)
          `
          : `
            0 0 25px rgba(30,64,175,0.25),
            inset 0 0 15px rgba(255,255,255,0.2)
          `,

        backdropFilter: 'blur(1px)',

        transition: 'all 0.3s ease',
          
        willChange: 'transform',
      }}
    />
  </motion.div>
);
}
