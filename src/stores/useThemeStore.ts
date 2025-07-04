import { create } from 'zustand';
import Cookies from 'js-cookie';

const initialState = {
  theme: 'dark',
};

interface ThemeStore {
  theme: Theme;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: initialState.theme as Theme,
  setTheme: () => {
    const cookieTheme = Cookies.get('theme') as Theme;
    const theme = cookieTheme === 'light' ? 'dark' : 'light';

    Cookies.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    set({ theme });
  },
}));
