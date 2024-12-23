// src/components/Login.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario iniciado sesión exitosamente");
        } catch (error) {
            console.error("Error iniciando sesión:", error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Usuario autenticado con Google:", result.user);
        } catch (error) {
            console.error("Error iniciando sesión con Google:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
        </div>
    );
};

export default Login;
