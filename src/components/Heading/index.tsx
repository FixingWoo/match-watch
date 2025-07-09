'use client';

import { ElementType, ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';

import { getVariantClasses, generateClassName } from '@/utils';

type IProps<T extends ElementType> = TextProps<T> &
  CommonProps &
  SpacingProps &
  ComponentPropsWithoutRef<T>;

const Heading = <T extends ElementType = 'h1'>({
  as,
  align,
  variant,
  wrap = 'balance',
  size,
  weight,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  children,
  style,
  className,
  ...props
}: IProps<T>) => {
  const Component = as || 'h1';

  const sizeClass = size ? `font-${size}` : 'font-m';
  const weightClass = weight ? `font-${weight}` : 'font-strong';

  const classes = variant
    ? getVariantClasses(variant)
    : [sizeClass, weightClass];

  const combinedClasses = cn(
    ...classes,
    className,
    generateClassName('p', padding),
    generateClassName('pl', paddingLeft),
    generateClassName('pr', paddingRight),
    generateClassName('pt', paddingTop),
    generateClassName('pb', paddingBottom),
    generateClassName('px', paddingX),
    generateClassName('py', paddingY),
    generateClassName('m', margin),
    generateClassName('ml', marginLeft),
    generateClassName('mr', marginRight),
    generateClassName('mt', marginTop),
    generateClassName('mb', marginBottom),
    generateClassName('mx', marginX),
    generateClassName('my', marginY)
  );

  return (
    <Component
      className={combinedClasses}
      style={{
        textAlign: align,
        textWrap: wrap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.displayName = 'Heading';
export { Heading };
