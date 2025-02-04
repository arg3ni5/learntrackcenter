// src/components/Login.tsx
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import UserProfile from './UserProfile/UserProfile';

const Login: React.FC = () => {
    const { user } = useAuth(); // Obtener el estado del usuario
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error iniciando sesión con Google:", error);
            setError("Error al iniciar sesión con Google.");
        }
    };

    return (
        <div>
            {!user ? (
                <>
                    <h1>Iniciar Sesión</h1>
                    <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
                </>
            ) : (
                <UserProfile />
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
