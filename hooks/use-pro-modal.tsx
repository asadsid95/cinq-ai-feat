import { create } from 'zustand'

interface useProModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

// gives global state control on modal
export const useProModal = create<useProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}))