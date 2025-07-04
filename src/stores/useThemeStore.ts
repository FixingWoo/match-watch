import { create } from 'zustand';
import Cookies from 'js-cookie';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  toggleTheme: () => {
    const cookieTheme = Cookies.get('theme') as Theme;
    const theme = cookieTheme === 'light' ? 'dark' : 'light';

    Cookies.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    set({ theme });
  },
  setTheme: (theme: Theme) => {
    Cookies.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    set({ theme });
  },
}));
