// src/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../services/firebase'; // Asegúrate de que este archivo esté configurado correctamente

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null); // Estado para almacenar el usuario autenticado
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Actualiza el estado del usuario
            setLoading(false); // Cambia el estado de carga a false
        });
        return () => unsubscribe(); // Limpiar la suscripción al desmontar el componente
    }, []);

    return { user, loading }; // Devuelve el usuario y el estado de carga
};
