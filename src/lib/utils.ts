import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility Function: cn
 * --------------------
 * Merges Tailwind CSS classes with clsx logic.
 * Solves conflicts (e.g., 'p-4 px-2' -> 'px-2 p-4' resolved correctly).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Animation Constants
 * -------------------
 * Centralized motion settings for the "Studio" aesthetic.
 * Ensures consistent timing and easing across the entire application.
 */

// Custom Bezier for "Cinematic/Premium" feel (Apple-style easing)
export const EASING = [0.22, 1, 0.36, 1]; 

export const TRANSITION = { 
  duration: 0.8, 
  ease: EASING 
};

// Standard Stagger definitions for Framer Motion lists
export const STAGGER = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: EASING }
    },
  },
};

/**
 * Helper: wait
 * ------------
 * Simple promise-based delay.
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));