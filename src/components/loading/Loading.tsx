import React from 'react';
import './Loading.css'; // Asegúrate de tener estilos para el componente

interface LoadingProps {
  className?: string
  text?: string
  type?: 'spinner' | 'loader';
  children?: any;
}

const Loading: React.FC<LoadingProps> = ({ type = 'loader', children, text, className }) => {
  return (
    <div className="overlay">
      <div className={`loading-container ${className|| ''}`}>
        {type === 'spinner' || children ? (
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
    </div>
  );
};

export default Loading;
