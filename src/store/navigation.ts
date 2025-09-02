import { create } from 'zustand';

interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'home',
  isMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));