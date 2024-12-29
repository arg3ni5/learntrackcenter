import React from 'react';
import './Loading.css'; // Asegúrate de tener estilos para el componente

interface LoadingProps {
  type?: 'spinner' | 'loader';
}

const Loading: React.FC<LoadingProps> = ({ type = 'loader' }) => {
  return (
    <div className="loading-container">
      {type === 'spinner' ? (
        <>
          <div className="spinner"></div>
          <p>Cargando...</p>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Loading;
