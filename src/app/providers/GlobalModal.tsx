'use client';

import { Modal } from '../../shared/ui/model/Modal';
import { useModalStore } from '../store/useModalStore';

export const GlobalModal = () => {
  const { isOpen, title, description, buttons, closeModal } = useModalStore();

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title={title}
      description={description}
      buttons={buttons}
    />
  );
};
