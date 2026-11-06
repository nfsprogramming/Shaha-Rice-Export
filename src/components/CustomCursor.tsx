import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  isVisible?: boolean;
}

export const CustomCursor = ({ isVisible = true }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], .product-card, .clickable, input, textarea, select')) {
        setIsHovering(true);
        if (target.matches('.product-card')) {
          setCursorText('VIEW SPECS');
        } else if (target.matches('a[href*="contact"], button:has-text("Quote")')) {
          setCursorText('REQUEST QUOTE');
        } else if (target.matches('a[href^="mailto:"], a[href^="tel:"]')) {
          setCursorText('CONTACT');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide native cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-gold-dark rounded-full pointer-events-none z-[9999] transition-opacity duration-200"
        style={{
          transform: `translate(${position.x - 1}px, ${position.y - 1}px)`,
          opacity: isHovering ? 0 : 1,
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      {/* Follower ring */}
      <motion.div
        ref={followerRef}
        className="fixed top-0 left-0 w-32 h-32 border-2 border-brand-gold-dark/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isHovering ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1 : 0.8,
          borderColor: isHovering ? 'rgba(197, 162, 102, 0.6)' : 'rgba(197, 162, 102, 0.3)',
        }}
        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
        aria-hidden="true"
      />

      {/* Hover text */}
      {isHovering && cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(${position.x}px, ${position.y + 30}px)` }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <span className="px-3 py-1.5 bg-charcoal/95 backdrop-blur-xl border border-brand-gold-dark/50 rounded-sm text-label font-sans uppercase tracking-widest text-brand-gold-dark whitespace-nowrap">
            {cursorText}
          </span>
        </motion.div>
      )}
    </>
  );
};