import React, { useRef, useState, ButtonHTMLAttributes, forwardRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have this utility from previous steps

// --- Magnetic Component (Required Dependency) ---
// This handles the "magnetic" attraction effect on hover
interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // How strong the pull is (default: 0.5)
}

const Magnetic = ({ children, strength = 0.5 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const position = { x: useMotionValue(0), y: useMotionValue(0) };

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(position.x, springConfig);
  const springY = useSpring(position.y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    position.x.set(middleX * strength);
    position.y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    position.x.set(0);
    position.y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative w-fit h-fit"
    >
      {React.cloneElement(children, {
        // We don't need to pass refs here for this implementation
      })}
    </motion.div>
  );
};

// --- Button Component ---

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    isMagnetic = true, 
    children, 
    ...props 
  }, ref) => {
    
    // Size Configurations
    const sizeStyles = {
      sm: "px-5 py-2.5 text-xs",
      md: "px-7 py-3.5 text-sm",
      lg: "px-9 py-5 text-base",
    };

    // Variant Configurations
    const variantStyles = {
      primary: "bg-white text-black border border-transparent hover:text-white",
      secondary: "bg-white/10 text-white border border-white/5 hover:bg-white/20 backdrop-blur-md",
      outline: "bg-transparent text-white border border-white/20 hover:border-white hover:text-black",
      ghost: "bg-transparent text-neutral-400 hover:text-white",
    };

    // The circle fill animation logic
    // We use a separate element that scales up on hover
    const Overlay = () => {
      if (variant === "ghost") return null;
      
      return (
        <span className="absolute inset-0 overflow-hidden rounded-full">
           <span className={cn(
             "absolute inset-0 rounded-full translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]",
             variant === "primary" ? "bg-purple-600" : 
             variant === "outline" ? "bg-white" : 
             "bg-white/10"
           )} />
        </span>
      );
    };

    const Comp = (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {/* Background Animation Layer */}
        <Overlay />

        {/* Text Content Layer */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );

    if (isMagnetic) {
      return <Magnetic>{Comp}</Magnetic>;
    }

    return Comp;
  }
);

Button.displayName = "Button";

export { Button, Magnetic };
export default Button;