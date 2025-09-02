import { create } from 'zustand';

interface SliderState {
  currentSlide: number;
  totalSlides: number;
  isAutoPlaying: boolean;
  setCurrentSlide: (slide: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  setTotalSlides: (total: number) => void;
  toggleAutoPlay: () => void;
}

export const useSliderStore = create<SliderState>((set, get) => ({
  currentSlide: 0,
  totalSlides: 0,
  isAutoPlaying: true,
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
  nextSlide: () => {
    const { currentSlide, totalSlides } = get();
    set({ currentSlide: (currentSlide + 1) % totalSlides });
  },
  prevSlide: () => {
    const { currentSlide, totalSlides } = get();
    set({ currentSlide: currentSlide === 0 ? totalSlides - 1 : currentSlide - 1 });
  },
  setTotalSlides: (total) => set({ totalSlides: total }),
  toggleAutoPlay: () => set((state) => ({ isAutoPlaying: !state.isAutoPlaying })),
}));