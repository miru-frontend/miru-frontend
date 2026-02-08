import { create } from 'zustand';
import { ModalButton } from '../../shared/ui/model/Modal';

interface ModalState {
  isOpen: boolean;
  title: string;
  description?: string;
  buttons?: ModalButton[];
  openModal: (config: {
    title: string;
    description?: string;
    buttons?: ModalButton[];
  }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  description: '',
  buttons: [],
  openModal: (config) => set({ ...config, isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
