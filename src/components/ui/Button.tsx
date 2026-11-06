import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Props to exclude from spreading to motion.button to avoid conflicts with Framer Motion
const excludedProps = [
  'onDrag', 'onDragEnd', 'onDragStart',
  'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration',
  'onTransitionStart', 'onTransitionEnd', 'onTransitionRun', 'onTransitionCancel',
  'whileHover', 'whileTap', 'whileFocus', 'whileInView',
  'animate', 'initial', 'exit', 'transition', 'variants',
] as const;

type ExcludedProps = typeof excludedProps[number];

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-sans font-medium uppercase tracking-[0.15em]
      transition-all duration-normal ease-out-expo
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-dark focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal
      disabled:opacity-40 disabled:pointer-events-none
      relative overflow-hidden
    `;

    const variants = {
      primary: `
        bg-brand-gold-dark text-charcoal
        hover:bg-brand-gold hover:text-charcoal
        active:scale-[0.98]
        shadow-glow-gold-sm
      `,
      secondary: `
        bg-charcoal-card text-rice-white border border-white/10
        hover:bg-white/5 hover:border-brand-gold-dark/50
        active:scale-[0.98]
      `,
      outline: `
        border border-brand-gold-dark/30 text-brand-gold-dark bg-transparent
        hover:bg-brand-gold-dark/10 hover:border-brand-gold-dark
        active:scale-[0.98]
      `,
      ghost: `
        text-gray-400 hover:text-rice-white
        hover:bg-white/5
        active:scale-[0.98]
      `,
      link: `
        text-brand-gold-dark hover:text-brand-gold
        underline underline-offset-4 decoration-brand-gold-dark/30 hover:decoration-brand-gold-dark
        px-0 py-0
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-micro h-9',
      md: 'px-6 py-3 text-label h-11',
      lg: 'px-8 py-4 text-label h-12',
      xl: 'px-10 py-5 text-xs h-14',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    // Filter out excluded props
    const filteredProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !excludedProps.includes(key as ExcludedProps))
    );

    return (
      <motion.button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], widthStyles, className)}
        disabled={disabled || loading}
        whileHover={!disabled && !loading && variant !== 'link' ? { scale: 1.02 } : undefined}
        whileTap={!disabled && !loading && variant !== 'link' ? { scale: 0.98 } : undefined}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        onClick={handleClick}
        {...filteredProps}
      >
        {loading ? (
          <>
            <motion.span
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
          </>
        )}
        <motion.div
          className="absolute inset-0 bg-white/10 translate-x-[-100%]"
          initial={false}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-hidden="true"
        />
      </motion.button>
    );
  }
);

Button.displayName = 'Button';