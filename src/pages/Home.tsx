import React from 'react';
import './Home.css'; // Asegúrate de tener un archivo CSS para estilos

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a LearnTrackCenter</h1>
            <p>Tu plataforma para gestionar calificaciones y asistencia.</p>
            {/* Puedes añadir más contenido aquí */}
        </div>
    );
};

export default Home;
