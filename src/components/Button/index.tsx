'use client';

import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

import { ElementType, Flex } from '@/components';

interface ICommonProps extends CommonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 's' | 'm' | 'l';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between';
  radius?:
    | 'none'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left';
  label?: string;
  fillWidth?: boolean;
  href?: string;
  weight?: 'default' | 'strong';
}

export type ButtonProps = ICommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AnchorProps = ICommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({
  variant = 'primary',
  size = 'm',
  justifyContent = 'center',
  radius,
  label,
  children,
  href,
  fillWidth = false,
  weight = 'strong',
  className,
  style,
  id,
  ref,
  ...props
}: ButtonProps | AnchorProps) => {
  const radiusSize = size === 's' || size === 'm' ? 'm' : 'l';

  return (
    <ElementType
      id={id}
      ref={ref}
      href={href}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        radius === 'none'
          ? 'radius-none'
          : radius
          ? `radius-${radiusSize}-${radius}`
          : `radius-${radiusSize}`,
        'text-decoration-none',
        'button',
        'cursor-interactive',
        {
          ['fill-width']: fillWidth,
          ['fit-width']: !fillWidth,
          ['justify-' + justifyContent]: justifyContent,
        },
        className
      )}
      style={style}
      {...props}
    >
      {(label || children) && (
        <Flex
          paddingX="4"
          paddingY="0"
          textWeight={weight}
          textSize={size}
          className="font-label"
        >
          {label || children}
        </Flex>
      )}
    </ElementType>
  );
};

Button.displayName = 'Button';
export { Button };
