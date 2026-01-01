import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * CyberGrid Component
 * -------------------
 * A high-performance, cinematic background component featuring:
 * 1. Infinite scrolling perspective grid (Retro/Synthwave aesthetic).
 * 2. Floating ambient particles with random trajectories.
 * 3. Deep atmospheric glows for depth.
 * 4. Fully responsive and optimized for low GPU usage.
 */

export default function CyberGrid() {
  // Store window dimensions for particle boundaries
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Optional: Handle resize if needed (debounced in prod, simple here)
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#020205]">
      
      {/* --- Layer 1: Moving Perspective Grid --- */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_5%,black_40%,black_80%,transparent_95%)]">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "0px 64px"], // 64px matches the grid size
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-full h-[200%] origin-top"
          style={{
            // CSS Gradients for the grid lines
            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            // 3D Perspective Transform
            transform: "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
          }}
        />
      </div>

      {/* --- Layer 2: Ambient Glow Orbs --- */}
      {/* Top Left - Purple/Blue */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" 
      />
      {/* Bottom Right - Indigo/Pink */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full mix-blend-screen" 
      />

      {/* --- Layer 3: Floating Particles --- */}
      {dimensions.width > 0 && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Particle key={i} width={dimensions.width} height={dimensions.height} />
          ))}
        </div>
      )}
      
      {/* --- Layer 4: Vignette Overlay --- */}
      <div className="absolute inset-0 bg-radial-gradient-to-b from-transparent via-transparent to-black/80" />
    </div>
  );
}

// Sub-component for individual particles to keep main cleaner
function Particle({ width, height }: { width: number; height: number }) {
  // Random start position
  const x = Math.random() * width;
  const y = Math.random() * height;
  
  // Random duration and delay
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;

  return (
    <motion.div
      initial={{ 
        x, 
        y, 
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        y: y - 200, // Move up
        opacity: [0, 0.8, 0], // Fade in then out
        scale: [0, 1.5, 0] // Grow then shrink
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay, 
        ease: "linear" 
      }}
      className="absolute w-1 h-1 bg-purple-400 rounded-full blur-[1px] shadow-[0_0_10px_rgba(168,85,247,0.5)]"
    />
  );
}