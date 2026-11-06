import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface AnimatedTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  splitBy?: 'lines' | 'words' | 'chars';
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  viewport?: { once?: boolean; margin?: string };
  initial?: { opacity: number; y: number; scale?: number; rotateX?: number };
  animate?: { opacity: number; y: number; scale?: number; rotateX?: number };
}

const defaultInitial = { opacity: 0, y: 20 };
const defaultAnimate = { opacity: 1, y: 0 };
const easeOutExpo = [0.19, 1, 0.22, 1] as const;

const MotionComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

export const AnimatedText = ({
  children,
  as = 'div',
  splitBy = 'lines',
  className,
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  viewport = { once: true, margin: '-100px' },
  initial = defaultInitial,
  animate = defaultAnimate,
}: AnimatedTextProps) => {
  const text = typeof children === 'string' ? children : String(children);
  const MotionComponent = MotionComponents[as] || motion.div;
  
  if (splitBy === 'lines') {
    const lines = text.split('\n').filter(line => line.trim());
    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        className={clsx('overflow-hidden', className)}
      >
        {lines.map((line, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: initial,
              visible: { ...animate, transition: { duration, ease: easeOutExpo } },
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  if (splitBy === 'words') {
    const words = text.split(' ').filter(word => word);
    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        className={clsx('inline-flex flex-wrap', className)}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { ...initial, rotateX: 90 },
              visible: { ...animate, rotateX: 0, transition: { duration, ease: easeOutExpo } },
            }}
            className="inline-block"
            style={{ display: 'inline-block' }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  if (splitBy === 'chars') {
    const chars = text.split('');
    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: stagger / 2,
              delayChildren: delay,
            },
          },
        }}
        className={clsx('inline-flex', className)}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { ...initial, rotateX: 90 },
              visible: { ...animate, rotateX: 0, transition: { duration: duration / 2, ease: easeOutExpo } },
            }}
            className="inline-block"
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={{ duration, ease: easeOutExpo, delay }}
      className={clsx(className)}
    >
      {children}
    </MotionComponent>
  );
};

export interface CounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const Counter = ({
  value,
  duration = 2,
  className,
  prefix = '',
  suffix = '',
  decimals = 0,
}: CounterProps) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          let startTime: number;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * value);
            setCount(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector(`[data-counter="${value}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const formatted = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span
      data-counter={value}
      className={clsx('font-display tabular-nums', className)}
    >
      {prefix}{formatted}{suffix}
    </span>
  );
};

export interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
}

export const Typewriter = ({
  text,
  speed = 50,
  delay = 0,
  className,
  cursor = true,
  cursorChar = '|',
  onComplete,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    
    const timer = setTimeout(() => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          setTimeout(type, speed);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      };
      type();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={clsx('font-sans', className)}>
      {displayText}
      {cursor && !isComplete && (
        <motion.span
          className="ml-1 text-brand-gold-dark"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};