import { create } from 'zustand';

interface NavigationState {
  activeSection: string;
  locale: string;
  isMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  changeLocale: (locale: string) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'home',
  locale: 'fr', 
  isMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  changeLocale: (locale) => set({ locale }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));