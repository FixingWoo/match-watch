'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';

import { Flex, ThemeToggle, Button, Text, ToggleButton } from '@/components';
import { routes } from '@/resources';

const Header = () => {
  const pathname = usePathname() ?? '';

  return (
    <Flex horizontal="space-between" vertical="center" padding="16">
      <Link href="/">
        <Text className="cursor-interactive" variant="heading-strong-l">
          Match Watch
        </Text>
      </Link>
      <Flex gap="20" vertical="center">
        {routes
          .filter((route) => route.display)
          .map((route) => (
            <Link href={route.href} key={route.href}>
              <Button
                key={route.href}
                label={route.label}
                variant="ghost"
                size="l"
                selected={pathname === route.href}
              />
            </Link>
          ))}
      </Flex>
      <Flex className={styles.toggle} vertical="center" gap="4">
        <ToggleButton prefixIcon="search" size="l" />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

Header.displayName = 'Header';
export { Header };
