import React from 'react';
import Login from '../components/Login';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a LearnTrackCenter</h1>
            <p>Tu plataforma para gestionar calificaciones y asistencia.</p>
            <Login />
        </div>
    );
};

export default Home;
