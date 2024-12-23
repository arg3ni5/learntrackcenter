import React from 'react';
import { useAuth } from './hooks/useAuth';
import Register from './components/Register';
import Login from './components/Login';

const App: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>LearnTrackCenter - Autenticación</h1>
            {user ? (
                <div>
                    <h2>Bienvenido, {user.email}</h2>
                    {/* Aquí puedes agregar más funcionalidades para usuarios autenticados */}
                </div>
            ) : (
                <>
                    <Register />
                    <Login />
                </>
            )}
        </div>
    );
};

export default App;
