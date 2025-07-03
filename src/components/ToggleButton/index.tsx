'use client';

import cn from 'classnames';
import styles from './style.module.scss';

import { ElementType, Flex, Icon } from '@/components';
import { IconName } from '@/resources';

interface ToggleButtonProps extends CommonProps {
  href?: string;
  variant?: 'ghost' | 'outline';
  size?: 's' | 'm' | 'l';
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
  selected?: boolean;
  label?: string;
  justifyContent?: 'start' | 'center' | 'end' | 'space-between';
  prefixIcon?: IconName;
}
const ToggleButton = ({
  ref,
  href,
  className,
  variant = 'ghost',
  size = 'm',
  radius,
  selected = false,
  label,
  style,
  children,
  justifyContent = 'center',
  prefixIcon,
  ...props
}: ToggleButtonProps) => {
  return (
    <ElementType
      ref={ref}
      href={href}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        selected && styles.selected,
        radius === 'none'
          ? 'radius-none'
          : radius
          ? `radius-${size}-${radius}`
          : `radius-${size}`,
        'text-decoration-none',
        className
      )}
      style={style}
      {...props}
    >
      {prefixIcon && (
        <Icon name={prefixIcon} size={size === 'l' ? 's' : 'xs'} />
      )}
      <Flex horizontal={justifyContent} position="static">
        {label || children}
      </Flex>
    </ElementType>
  );
};

export { ToggleButton };
