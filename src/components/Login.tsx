// src/components/Login.tsx
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
    const { user } = useAuth(); // Obtener el estado del usuario
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Usuario autenticado con Google:", result.user);
            // Aquí puedes manejar cualquier lógica adicional si es necesario
        } catch (error) {
            console.error("Error iniciando sesión con Google:", error);
            setError("Error al iniciar sesión con Google.");
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h2>Bienvenido, {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL || ''} alt="Perfil" />
                </div>
            )}
        </div>
    );
};

export default Login;
