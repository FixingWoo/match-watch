'use client';

import { forwardRef } from 'react';
import { IconType } from 'react-icons';
import cn from 'classnames';
import styles from './style.module.scss';

import { IconName, iconLibrary } from '@/resources';

import { Flex } from '@/components';

interface IProps extends React.ComponentProps<typeof Flex> {
  name: IconName;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const Icon = forwardRef<HTMLDivElement, IProps>(
  ({ name, size = 'm', ...rest }, ref) => {
    const IconComponent: IconType | undefined = iconLibrary[name];

    if (!IconComponent) {
      console.warn(`"${name}" 해당 아이콘은 존재하지 않습니다.`);
      return null;
    }
    return (
      <Flex
        className={cn(styles[size])}
        as="span"
        inline
        fit
        ref={ref}
        {...rest}
      >
        <IconComponent />
      </Flex>
    );
  }
);

Icon.displayName = 'Icon';
export { Icon };
