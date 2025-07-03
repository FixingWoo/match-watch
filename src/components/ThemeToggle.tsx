'use client';

import React from 'react';
import { ToggleButton } from '@/components';
import { useTheme } from '@/providers';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleButton
      prefixIcon={theme === 'dark' ? 'moon' : 'sun'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      selected={false}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    />
  );
};
