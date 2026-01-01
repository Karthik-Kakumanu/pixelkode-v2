import React, { useRef, useState, ReactElement, cloneElement } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic Component
 * ------------------
 * A premium UI utility that creates a magnetic attraction effect for interactive elements.
 * Best used on Buttons, Links, and Social Icons to enhance the "premium" feel.
 * * Features:
 * - Uses framer-motion springs for fluid physics.
 * - responsive to cursor position relative to element center.
 * - Auto-resets on mouse leave.
 */

interface MagneticProps {
  children: ReactElement; // Restricted to a single React Element
  strength?: number;      // Pull strength (0.1 = subtle, 1.0 = extreme)
}

export default function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    
    // Safety check for ref
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Update position with strength factor
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { type, stiffness, damping, mass } = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type, stiffness, damping, mass }}
      className="relative w-fit h-fit"
    >
      {/* We clone the child to ensure events don't get blocked, 
        though the wrapper handles the movement.
      */}
      {cloneElement(children, {
        className: `${children.props.className || ""} block`, // Ensure block display for transform
      })}
    </motion.div>
  );
}