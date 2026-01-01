import { ReactNode, HTMLAttributes } from "react";
import { cn } from "../../lib/utils"; // Adjust path based on your project structure, e.g., "@/lib/utils"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
  /**
   * If true, removes the max-width constraint for full-bleed layouts.
   * Default: false
   */
  fullWidth?: boolean;
  /**
   * If true, removes default vertical padding.
   * Default: false
   */
  noPadding?: boolean;
}

/**
 * Section Component
 * -----------------
 * The fundamental layout block for the application.
 * Enforces consistent vertical rhythm (padding) and horizontal constraints (max-width).
 * * * Design System alignment:
 * - Mobile padding: py-20 px-6
 * - Desktop padding: py-32 px-12 or px-20
 * - Max Width: 7xl (approx 1280px) or 1400px for ultra-wide feel.
 */
export default function Section({ 
  children, 
  className, 
  id, 
  fullWidth = false,
  noPadding = false,
  ...props 
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        // Vertical Rhythm
        !noPadding && "py-20 md:py-32 lg:py-40",
        // Horizontal Constraint (unless fullWidth)
        !fullWidth && "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}