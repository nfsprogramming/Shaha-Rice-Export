import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

export interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeader = ({
  label,
  title,
  subtitle,
  align = 'center',
  className,
  labelClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) => {
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
      className={clsx('flex flex-col gap-4', alignClasses[align], className)}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, x: align === 'right' ? 20 : align === 'left' ? -20 : 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
          className={clsx(
            'inline-flex items-center gap-2 text-label font-sans text-brand-gold-dark',
            labelClassName
          )}
        >
          <span className="w-8 h-[1px] bg-brand-gold-dark" aria-hidden="true" />
          {label.toUpperCase()}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: label ? 0.2 : 0.1, ease: easeOutExpo }}
        className={clsx('font-display text-display-md text-rice-white', titleClassName)}
      >
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: label ? 0.3 : 0.2, ease: easeOutExpo }}
          className={clsx('font-sans text-body-lg text-gray-400 max-w-2xl', subtitleClassName)}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export interface DividerProps {
  length?: 'sm' | 'md' | 'lg' | 'full';
  color?: 'gold' | 'white' | 'subtle';
  className?: string;
}

export const Divider = ({
  length = 'md',
  color = 'gold',
  className,
}: DividerProps) => {
  const lengthClasses = {
    sm: 'w-16',
    md: 'w-24',
    lg: 'w-32',
    full: 'w-full',
  };

  const colorClasses = {
    gold: 'bg-brand-gold-dark',
    white: 'bg-white/20',
    subtle: 'bg-white/5',
  };

  return (
    <div
      className={clsx(
        'h-[1px]',
        lengthClasses[length],
        colorClasses[color],
        className
      )}
      aria-hidden="true"
    />
  );
};

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'subtle' | 'earth';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge = ({ children, variant = 'gold', size = 'sm', className }: BadgeProps) => {
  const variants = {
    gold: 'bg-brand-gold-dark/10 text-brand-gold-dark border border-brand-gold-dark/20',
    outline: 'bg-transparent text-brand-gold-dark border border-brand-gold-dark/30',
    subtle: 'bg-white/5 text-gray-300 border border-white/10',
    earth: 'bg-earth-warm/10 text-earth-light border border-earth-warm/20',
  };

  const sizes = {
    sm: 'px-3 py-1 text-micro',
    md: 'px-4 py-1.5 text-label',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center font-sans font-medium uppercase tracking-widest rounded-sm',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};