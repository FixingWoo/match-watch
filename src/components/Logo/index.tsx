'use client';

import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export const Logo = ({ src, alt, width, height, objectFit }: LogoProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
    />
  );
};
