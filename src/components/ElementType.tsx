import React, { ReactNode } from 'react';
import Link from 'next/link';

import { Flex } from '@/components';

interface ElementTypeProps {
  href?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
  onLinkClick?: (e: React.MouseEvent<any>) => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const isExternalLink = (url: string) => /^https?:\/\//.test(url);

const ElementType = ({
  ref,
  href,
  type,
  onClick,
  onLinkClick,
  children,
  className,
  style,
  ...props
}: ElementTypeProps) => {
  if (href) {
    const isExternal = isExternalLink(href);

    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noreferrer" // 외부 링크를 열 때 개인 정보 유출이나 추적을 막고 싶을때 사용
          className={className}
          style={style}
          onClick={onLinkClick}
          {...props}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          href={href}
          className={className}
          style={style}
          onClick={onLinkClick}
          {...props}
        >
          {children}
        </Link>
      );
    }
  }

  if (onClick || type === 'submit' || type === 'button') {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={className}
        style={style}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Flex
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Flex>
  );
};

ElementType.displayName = 'ElementType';
export { ElementType };
