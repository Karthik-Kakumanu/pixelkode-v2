import { useState, useEffect } from "react";

/**
 * useMousePosition Hook
 * ---------------------
 * A utility hook to track the global mouse cursor position.
 * Useful for custom cursors, magnetic effects, and spotlight interactions.
 * * * Usage:
 * const { x, y } = useMousePosition();
 */

interface MousePosition {
  x: number;
  y: number;
}

export default function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ 
    x: 0, 
    y: 0 
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}