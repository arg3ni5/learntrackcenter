// src/modules/studentsManagement/hooks/useStudents.ts
import { useEffect, useState } from 'react';
import { fetchStudents, addStudent, deleteStudent, Student } from '../services/studentService';

const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Función para cargar las calificaciones
    const loadStudents = async () => {
        try {
            setLoading(true);
            const studentsData = await fetchStudents();
            setStudents(studentsData);
        } catch (err) {
            setError('Error al cargar las calificaciones');
        } finally {
            setLoading(false);
        }
    };

    // Efecto para cargar las calificaciones al montar el hook
    useEffect(() => {
        loadStudents();
    }, []);

    // Función para agregar una nueva calificación
    const addNewStudent = async (newStudent: Student) => {
        try {
            await addStudent(newStudent);
            loadStudents(); // Refresca la lista después de agregar
        } catch (err) {
            setError('Error al agregar la calificación');
        }
    };

    // Función para eliminar una calificación
    const removeStudent = async (id: string) => {
        try {
            await deleteStudent(id);
            loadStudents(); // Refresca la lista después de eliminar
        } catch (err) {
            setError('Error al eliminar la calificación');
        }
    };

    return { students, loading, error, addNewStudent, removeStudent };
};

export default useStudents;
