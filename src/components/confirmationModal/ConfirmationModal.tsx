import React from 'react';
import './ConfirmationModal.css'; // Asegúrate de tener un CSS adecuado para el modal.
import { FaQuestion } from 'react-icons/fa';

interface ConfirmationModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="card">
        
        <div className="header">
        <div className="image_v">
            <div className="image"><FaQuestion /></div>
        </div>
        </div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="message">{message}</p>
        </div>
        <div className="buttons-container flex">
          <button className="confirm-button" onClick={onConfirm}>Sí</button>
          <button className="cancel-button" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
