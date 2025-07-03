'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Flex, ThemeToggle, Button, Text, ToggleButton } from '@/components';
import { routes } from '@/resources';

const Header = () => {
  const pathname = usePathname() ?? '';
  const router = useRouter();

  return (
    <Flex horizontal="space-between" vertical="center" padding="16">
      <Text
        className="cursor-interactive"
        variant="heading-strong-l"
        onClick={() => router.push('/')}
      >
        Match Watch
      </Text>
      <Flex gap="20" vertical="center">
        {routes
          .filter((route) => route.display)
          .map((route) => (
            <Button
              key={route.href}
              href={route.href}
              label={route.label}
              variant="ghost"
              size="l"
              selected={pathname === route.href}
            />
          ))}
      </Flex>
      <Flex vertical="center" gap="4">
        <ToggleButton prefixIcon="search" size="l" />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

Header.displayName = 'Header';
export { Header };
