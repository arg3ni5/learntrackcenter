import React from 'react';
import './Loading.css'; // Asegúrate de tener estilos para el componente

interface LoadingProps {
  type?: 'spinner' | 'loader';
  children?: any;
}

const Loading: React.FC<LoadingProps> = ({ type = 'loader', children }) => {
  return (
    <div className="loading-container">
      {type === 'spinner' || children  ? (
        <>
          <div className="spinner"></div>
          <p>{children}</p>
        </>
      ) : (
        <div className="loader">{children}</div>
      )}
    </div>
  );
};

export default Loading;
