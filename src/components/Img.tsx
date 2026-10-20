import type { CSSProperties } from 'react';
import type { ImageRef } from '../data/types';

interface ImgProps {
  image: ImageRef;
  sizes?: string;
  className?: string;
  eager?: boolean;
  style?: CSSProperties;
}

const base = import.meta.env.BASE_URL;
const prefix = base.endsWith('/') ? base : `${base}/`;

/**
 * Local, responsive image. Both width variants are generated at build-time
 * quality and live in /public/images with the source attribution in Credits.
 */
export function Img({ image, sizes = '100vw', className, eager = false, style }: ImgProps) {
  const src = `${prefix}images/${image.slug}`;
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${src}-800.webp 800w, ${src}-1600.webp 1600w`}
        sizes={sizes}
      />
      <img
        className={className}
        src={`${src}-800.jpg`}
        sizes={sizes}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        fetchPriority={eager ? 'high' : 'auto'}
        style={{ objectPosition: image.position, ...style }}
        draggable={false}
      />
    </picture>
  );
}
