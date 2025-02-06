// NotificationContext.tsx

import React, { createContext, useContext, useState } from 'react';
import Notification from './Notification'; // Asegúrate de que la ruta sea correcta

interface NotificationData {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
    timeout?: number; // Tiempo en milisegundos para cerrar la notificación (opcional)
}

interface NotificationContextType {
    showNotification: (message: string, type: 'success' | 'error' | 'info', timeout?: number) => void;
    showError: (message: string, timeout?: number) => void;
    showSuccess: (message: string, timeout?: number) => void;
    showInfo: (message: string, timeout?: number) => void;
}



const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<NotificationData[]>([]);

    const showNotification = (message: string, type: 'success' | 'error' | 'info', timeout?: number) => {
        const id = Date.now();
        setNotifications((prev) => {
            const newNotifications = [...prev, { id, message, type, timeout }];
            // Limitar a un máximo de 5 notificaciones
            return newNotifications.length > 5 ? newNotifications.slice(-5) : newNotifications;
        });

        // Configurar un temporizador solo si el timeout es mayor que 0
        if (timeout && timeout > 0) {
            setTimeout(() => {
                removeNotification(id);
            }, timeout);
        }
    };

    const showError = (message: string, timeout?: number) => showNotification(message, "error", timeout);
    const showSuccess = (message: string, timeout?: number) => showNotification(message, "success", timeout);
    const showInfo = (message: string, timeout?: number) => showNotification(message, "info", timeout);

    const removeNotification = (id: number) => {
        setNotifications((prev) => prev.filter(notification => notification.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ showNotification, showError, showSuccess, showInfo }}>
            <div className="notification-container">
                {notifications.map(notification => (
                    <Notification
                        key={notification.id}
                        message={notification.message}
                        type={notification.type}
                        onClose={() => removeNotification(notification.id)}
                        timeout={notification.timeout}
                    />
                ))}
            </div>
            {children}
        </NotificationContext.Provider>
    );
};
