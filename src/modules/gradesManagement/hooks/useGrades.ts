// src/modules/gradesManagement/hooks/useGrades.ts
import { useEffect, useState } from 'react';
import { fetchGrades, addGrade, deleteGrade, Grade } from '../services/gradeService';

const useGrades = () => {
    const [grades, setGrades] = useState<Grade[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Función para cargar las calificaciones
    const loadGrades = async () => {
        try {
            setLoading(true);
            const gradesData = await fetchGrades();
            setGrades(gradesData);
        } catch (err) {
            setError('Error al cargar las calificaciones');
        } finally {
            setLoading(false);
        }
    };

    // Efecto para cargar las calificaciones al montar el hook
    useEffect(() => {
        loadGrades();
    }, []);

    // Función para agregar una nueva calificación
    const addNewGrade = async (newGrade: Grade) => {
        try {
            await addGrade(newGrade);
            loadGrades(); // Refresca la lista después de agregar
        } catch (err) {
            setError('Error al agregar la calificación');
        }
    };

    // Función para eliminar una calificación
    const removeGrade = async (id: string) => {
        try {
            await deleteGrade(id);
            loadGrades(); // Refresca la lista después de eliminar
        } catch (err) {
            setError('Error al eliminar la calificación');
        }
    };

    return { grades, loading, error, addNewGrade, removeGrade };
};

export default useGrades;
