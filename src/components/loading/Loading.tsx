import React from 'react';
import './Loading.css'; // Asegúrate de tener estilos para el componente

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Cargando...</p>
        </div>
    );
};

export default Loading;
