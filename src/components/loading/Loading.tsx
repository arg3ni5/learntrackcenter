import React from 'react';
import './Loading.css'; // Asegúrate de tener estilos para el componente

interface LoadingProps {
  text?: string
  type?: 'spinner' | 'loader';
  children?: any;
}

const Loading: React.FC<LoadingProps> = ({ type = 'loader', children, text }) => {
  return (
    <div className="loading-container">
      {type === 'spinner' || children  ? (
        <>
          <div className="spinner"></div>
          {text && (<p>{text}</p>)}
          <p>{children}</p>
        </>
      ) : (
        <>
          {text && (
            <div className="loading-text">
              <p>{text}</p>
            </div>)
          }
          <div className="loader">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Loading;
