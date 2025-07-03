import { IconType } from 'react-icons';

import { HiMoon, HiSun } from 'react-icons/hi2';

const iconLibrary: Record<string, IconType> = {
  moon: HiMoon,
  sun: HiSun,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

export { iconLibrary };
