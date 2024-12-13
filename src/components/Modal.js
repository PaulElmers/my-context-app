import React from 'react';
import { useModal } from './ModalContext';

const Modal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
      <div style={{ background: '#fff', padding: '20px' }}>
        <p>Це модальне вікно</p>
        <button onClick={closeModal}>Закрити</button>
      </div>
    </div>
  );
};

export default Modal;
