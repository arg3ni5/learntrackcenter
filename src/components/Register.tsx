import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Asegúrate de importar el CSS
import { useNotification } from './notification/NotificationContext';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | null } | null>(null);
    const navigate = useNavigate();
    const { showNotification } = useNotification();


    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage({ text: "Usuario registrado exitosamente", type: 'success' });
            // Redirigir a la página de inicio de sesión
            navigate('/login'); // Cambia '/login' según la ruta correcta en tu aplicación
        } catch (error) {
            setMessage({ text: "Error registrando usuario: " + (error as any).message, type: 'error' });
            showNotification("Error registrando usuario", "error"); // Mostrar notificación de error
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Registrar</button>
            </form>
            {message && (
                <p className={`message ${message.type}`}>{message.text}</p> // Usar className condicional
            )}
        </div>
    );
};

export default Register;
