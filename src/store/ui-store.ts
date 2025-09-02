// src/store/ui-store.ts
import { create } from 'zustand'

interface UIState {
  currentCarouselIndex: number
  expertiseCarouselIndex: number
  partnersCarouselIndex: number
  setCarouselIndex: (index: number) => void
  setExpertiseCarouselIndex: (index: number) => void
  setPartnersCarouselIndex: (index: number) => void
  nextCarousel: () => void
  prevCarousel: () => void
  nextExpertiseCarousel: () => void
  prevExpertiseCarousel: () => void
  nextPartnersCarousel: () => void
  prevPartnersCarousel: () => void
}

const useUIStore = create<UIState>((set, get) => ({
  currentCarouselIndex: 0,
  expertiseCarouselIndex: 0,
  partnersCarouselIndex: 0,
  setCarouselIndex: (index) => set({ currentCarouselIndex: index }),
  setExpertiseCarouselIndex: (index) => set({ expertiseCarouselIndex: index }),
  setPartnersCarouselIndex: (index) => set({ partnersCarouselIndex: index }),
  nextCarousel: () => {
    const { currentCarouselIndex } = get()
    set({ currentCarouselIndex: (currentCarouselIndex + 1) % 3 })
  },
  prevCarousel: () => {
    const { currentCarouselIndex } = get()
    set({ currentCarouselIndex: currentCarouselIndex === 0 ? 2 : currentCarouselIndex - 1 })
  },
  nextExpertiseCarousel: () => {
    const { expertiseCarouselIndex } = get()
    set({ expertiseCarouselIndex: (expertiseCarouselIndex + 1) % 4 })
  },
  prevExpertiseCarousel: () => {
    const { expertiseCarouselIndex } = get()
    set({ expertiseCarouselIndex: expertiseCarouselIndex === 0 ? 3 : expertiseCarouselIndex - 1 })
  },
  nextPartnersCarousel: () => {
    const { partnersCarouselIndex } = get()
    set({ partnersCarouselIndex: (partnersCarouselIndex + 1) % 3 })
  },
  prevPartnersCarousel: () => {
    const { partnersCarouselIndex } = get()
    set({ partnersCarouselIndex: partnersCarouselIndex === 0 ? 2 : partnersCarouselIndex - 1 })
  },
}))

export { useUIStore }