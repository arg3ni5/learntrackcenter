import React, { useEffect } from 'react';
import { FaXmark } from "react-icons/fa6";
import './Notification.css'; // Asegúrate de tener estilos para el componente

interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info'; // Tipos de notificación
    timeout?: number; // Tiempo en milisegundos para cerrar la notificación (opcional)
    onClose: () => void; // Función para cerrar la notificación
}

const Notification: React.FC<NotificationProps> = ({ message, type, timeout = 5000, onClose }) => {
    useEffect(() => {
        // Si el timeout es 0, no hacemos nada
        if (timeout === 0) {
            return;
        }

        const timer = setTimeout(() => {
            onClose(); // Cerrar automáticamente después del tiempo especificado
        }, timeout);

        return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
    }, [onClose, timeout]);

    return (
        <div className={`notification ${type}`}>
            <span>{message} <button className="close-button" onClick={onClose}><FaXmark/></button></span>
        </div>
    );
};

export default Notification;
