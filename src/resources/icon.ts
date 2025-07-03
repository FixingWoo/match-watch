import { IconType } from 'react-icons';

import { HiMoon, HiSun } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';

const iconLibrary: Record<string, IconType> = {
  moon: HiMoon,
  sun: HiSun,
  search: FaSearch,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

export { iconLibrary };
