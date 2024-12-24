import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Bienvenido, {user?.displayName}</h1>
            <h2>Resumen Académico</h2>
            {/* Aquí puedes añadir componentes para mostrar calificaciones y asistencia */}
        </div>
    );
};

export default Dashboard;
