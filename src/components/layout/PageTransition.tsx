import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTransition Component
 * -----------------------
 * Handles the cinematic entrance and exit animations for route changes.
 * Includes automatic scroll restoration and a blur-fade effect
 * consistent with the premium "Studio" aesthetic.
 */

// Animation Configuration
const variants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(12px)",
    scale: 0.98
  },
  enter: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "Apple-like" smoothing
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    filter: "blur(12px)",
    scale: 0.98,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll Reset on Route Change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Instant jump to top to prevent layout thrashing during anim
    });
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname} // Triggers animation on path change
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`relative w-full min-h-screen flex flex-col ${
        isHome ? "" : "pt-24 md:pt-32" // Offset for fixed navbar on inner pages
      }`}
    >
      {/* Optional: Add a subtle overlay wipe or curtain here if 
        you want an even more aggressive transition style.
        For now, we stick to the clean Blur+Fade+Scale effect.
      */}
      
      {children}
      
    </motion.div>
  );
}