// src/hooks/useTeachers.ts

import { useState, useEffect } from 'react';
import { fetchTeachers, addTeacher, deleteTeacher, Teacher } from '../services/teacherService'; // Importar funciones del servicio

const useTeachers = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]); // Estado para almacenar la lista de profesores
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    // Función para cargar los profesores
    const loadTeachers = async () => {
        try {
            setLoading(true);
            const fetchedTeachers = await fetchTeachers(); // Obtener los profesores desde Firestore
            setTeachers(fetchedTeachers); // Actualizar el estado con los profesores obtenidos
        } catch (err) {
            setError('Error fetching teachers'); // Manejar errores
        } finally {
            setLoading(false); // Finalizar carga
        }
    };

    // Efecto para cargar profesores al montar el componente
    useEffect(() => {
        loadTeachers();
    }, []);

    // Función para agregar un nuevo profesor
    const handleAddTeacher = async (newTeacher: Teacher) => {
        try {
            await addTeacher(newTeacher); // Agregar nuevo profesor
            loadTeachers(); // Recargar la lista de profesores después de agregar
        } catch (err) {
            setError('Error adding teacher'); // Manejar errores
        }
    };

    // Función para eliminar un profesor por ID
    const handleDeleteTeacher = async (id: string) => {
        try {
            await deleteTeacher(id); // Eliminar profesor por ID
            loadTeachers(); // Recargar la lista de profesores después de eliminar
        } catch (err) {
            setError('Error deleting teacher'); // Manejar errores
        }
    };

    return { teachers, loading, error, handleAddTeacher, handleDeleteTeacher }; // Retornar los datos y funciones necesarias
};

export default useTeachers; // Exportar el hook personalizado
