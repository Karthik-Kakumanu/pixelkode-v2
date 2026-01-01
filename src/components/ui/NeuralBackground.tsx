import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

/**
 * NeuralBackground Component
 * --------------------------
 * A cinematic, ambient background layer that establishes the "Studio" aesthetic.
 * Features:
 * 1. Deep fluid aurora gradients (Lumina/Void theme).
 * 2. Retro-futuristic perspective grid.
 * 3. Floating "dust" particles for depth.
 * 4. Vignette for focus.
 * * Performance Note:
 * Uses optimized framer-motion values and GPU-accelerated properties (transform, opacity).
 */

export default function NeuralBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#050505]">
      
      {/* --- 1. Deep Ambient Auroras --- */}
      {/* Top-Left Lumina Glow */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3], 
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen"
      />
      
      {/* Bottom-Right Void/Indigo Glow */}
      <motion.div
        animate={{ 
          opacity: [0.2, 0.4, 0.2], 
          scale: [1, 1.1, 1],
          x: [20, -20, 20],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[140px] mix-blend-screen"
      />

      {/* --- 2. Digital Horizon Grid --- */}
      {/* Uses CSS gradients for performance over SVG */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"
        style={{ 
          transform: "perspective(1000px) rotateX(20deg) scale(1.5) translateY(-100px)",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)"
        }}
      />

      {/* --- 3. Floating Star Particles --- */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      {/* --- 4. Cinematic Vignette --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
      
      {/* Optional: Subtle Grain Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />
    </div>
  );
}

// Optimized Particle Sub-component
function Particle() {
  const randomX = Math.random() * 100; // %
  const randomY = Math.random() * 100; // %
  const duration = Math.random() * 10 + 15;
  const delay = Math.random() * 5;
  const size = Math.random() * 2 + 1; // px

  return (
    <motion.div
      initial={{ 
        x: `${randomX}vw`, 
        y: `${randomY}vh`, 
        opacity: 0 
      }}
      animate={{ 
        y: [null, `${parseFloat(`${randomY}`) - 20}vh`], // Float upwards
        opacity: [0, 0.6, 0] 
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "linear",
        delay 
      }}
      style={{ width: size, height: size }}
      className="absolute bg-white/30 rounded-full blur-[0.5px]"
    />
  );
}