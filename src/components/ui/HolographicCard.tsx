import React, { useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate 
} from "framer-motion";
import { Cpu, Fingerprint, Activity, Zap } from "lucide-react";
import logoImg from "../../assets/logo.png"; // Adjust path as needed

/**
 * HolographicCard Component
 * -------------------------
 * A high-fidelity 3D tilt card component that tracks mouse movement
 * to generate a holographic spotlight and perspective distortion.
 * * Features:
 * - Real-time 3D perspective rotation (preserve-3d).
 * - Dynamic spotlight gradient based on cursor position.
 * - Floating depth elements (parallax effect).
 * - Glassmorphism UI details.
 */

export default function HolographicCard() {
  const ref = useRef<HTMLDivElement>(null);

  // Motion Values for Mouse Position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Animation for Tilt
  const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

  // Map Mouse Values to Rotation Degrees
  // Range: [-200, 200] pixels from center -> [-15, 15] degrees tilt
  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

  // Dynamic Spotlight Gradient
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 80%)`;

  function onMouseMove({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    // Calculate center-relative coordinates
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    // Reset to center on leave
    x.set(0);
    y.set(0);
  }

  return (
    <div className="perspective-1000 w-full h-full flex items-center justify-center py-20">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative w-[300px] h-[440px] md:w-[340px] md:h-[480px] rounded-[30px] bg-[#050505] border border-white/10 shadow-2xl cursor-pointer group select-none transition-transform duration-200 ease-out"
      >
        {/* --- Dynamic Holographic Spotlight --- */}
        <motion.div 
          style={{ background: spotlightBg }} 
          className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 mix-blend-overlay" 
        />
        
        {/* --- Ambient Static Glow --- */}
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-50 pointer-events-none z-0" />

        {/* --- 3D Floating Content Layer --- */}
        <div 
          style={{ transform: "translateZ(50px)" }} 
          className="absolute inset-5 rounded-2xl border border-white/5 flex flex-col justify-between py-8 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] z-10"
        >
          {/* Header Status */}
          <div className="w-full px-6 flex justify-between items-center opacity-80">
            <Fingerprint className="w-6 h-6 text-purple-400/80" />
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] font-mono text-white tracking-widest uppercase">System Active</span>
            </div>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden">
               {/* Animated Scan Line inside Logo Box */}
               <motion.div 
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 right-0 h-[1px] bg-purple-500/50 shadow-[0_0_10px_#a855f7]"
               />
               <img src={logoImg} alt="PixelKode" className="w-14 h-14 object-contain opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-purple-200 transition-colors">
              PixelKode
            </h3>
            <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase">
              Creative Intelligence
            </p>
          </div>

          {/* Footer Metrics */}
          <div className="w-full px-6 pt-6 border-t border-white/5">
             <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] text-neutral-600 uppercase tracking-wider">Version</span>
                   <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
                      <Cpu className="w-3 h-3 text-purple-500" />
                      <span>v.4.2.0</span>
                   </div>
                </div>
                <div className="flex flex-col gap-1 text-right">
                   <span className="text-[10px] text-neutral-600 uppercase tracking-wider">Latency</span>
                   <div className="flex items-center justify-end gap-1.5 text-xs text-neutral-300 font-mono">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      <span>12ms</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}