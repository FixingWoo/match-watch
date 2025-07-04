'use client';

import { useEffect } from 'react';

import { useThemeStore } from '@/stores';

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
}
