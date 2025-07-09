'use client';

import React from 'react';

import { ToggleButton } from '@/components';
import { useThemeStore } from '@/stores';

export const ThemeToggle: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <ToggleButton
      size="l"
      prefixIcon={theme === 'dark' ? 'moon' : 'sun'}
      onClick={toggleTheme}
      selected={false}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    />
  );
};
