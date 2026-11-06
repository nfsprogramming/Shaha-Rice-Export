import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | 'custom';
  customAspectRatio?: string;
  revealDelay?: number;
  revealDuration?: number;
  scaleOnHover?: boolean;
  scaleAmount?: number;
  parallax?: boolean;
  priority?: boolean;
  sizes?: string;
}

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

export const ImageReveal = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = 'landscape',
  customAspectRatio,
  revealDelay = 0,
  revealDuration = 1.2,
  scaleOnHover = true,
  scaleAmount = 1.05,
  parallax = false,
  priority = false,
  sizes,
}: ImageRevealProps) => {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
    custom: customAspectRatio ? `aspect-[${customAspectRatio}]` : 'aspect-[4/3]',
  };

  const containerVariants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: revealDuration,
        delay: revealDelay,
        ease: easeOutExpo,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.15 },
    visible: {
      scale: 1,
      transition: {
        duration: revealDuration + 0.4,
        delay: revealDelay,
        ease: easeOutExpo,
      },
    },
  };

  return (
    <motion.div
      className={clsx(
        'relative overflow-hidden bg-charcoal-elevated',
        aspectClasses[aspectRatio],
        containerClassName
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      style={{ willChange: 'clip-path' }}
    >
      {parallax && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ willChange: 'transform' }}
        >
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            sizes={sizes}
            className={clsx(
              'w-full h-full object-cover',
              className
            )}
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            whileHover={scaleOnHover ? { scale: scaleAmount } : undefined}
            transition={{ duration: 1.2, ease: easeOutExpo }}
          />
        </motion.div>
      )}

      {!parallax && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          className={clsx(
            'w-full h-full object-cover',
            className
          )}
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          whileHover={scaleOnHover ? { scale: scaleAmount } : undefined}
          transition={{ duration: 1.2, ease: easeOutExpo }}
          style={{ willChange: 'transform' }}
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
    </motion.div>
  );
};

export interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    href?: string;
    caption?: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  className?: string;
}

export const ImageGrid = ({
  images,
  columns = 3,
  gap = 'md',
  aspectRatio = 'landscape',
  className,
}: ImageGridProps) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div
      className={clsx(
        'grid',
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: easeOutExpo }}
          className="group relative"
        >
          {image.href ? (
            <a href={image.href} className="block relative overflow-hidden">
              <ImageReveal
                src={image.src}
                alt={image.alt}
                aspectRatio={aspectRatio}
                scaleOnHover
                scaleAmount={1.08}
              />
            </a>
          ) : (
            <ImageReveal
              src={image.src}
              alt={image.alt}
              aspectRatio={aspectRatio}
              scaleOnHover
              scaleAmount={1.08}
            />
          )}
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent z-10">
              <p className="text-sm font-sans text-rice-white/90">{image.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};