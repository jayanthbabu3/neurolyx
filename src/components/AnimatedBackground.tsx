import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, #000 80%)' }} />
      <div className="absolute inset-0 bg-grid opacity-40 mix-blend-multiply" />

      {/* Orb 1: Top Left */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-200/40 blur-[120px]"
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Orb 2: Top Right */}
      <motion.div
        className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-200/40 blur-[100px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
      
      {/* Orb 3: Bottom Left */}
      <motion.div
        className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-[150px]"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />

      {/* Orb 4: Center Right */}
      <motion.div
        className="absolute top-[40%] -right-[20%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[120px]"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      />
    </div>
  );
}
