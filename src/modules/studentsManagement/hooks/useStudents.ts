// src/modules/studentsManagement/hooks/useStudents.ts
import { useEffect, useState } from 'react';
import { fetchStudents, addStudent, deleteStudent, Student, updateStudent } from '../services/studentService';
import { useNotification } from '../../../components/notification/NotificationContext';

const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { showNotification } = useNotification();

    const loadStudents = async (): Promise<Student[]> => {
        try {
            setLoading(true);
            const studentsData = await fetchStudents();
            setStudents(studentsData);
            return studentsData; // Devuelve el array de estudiantes
        } catch (err) {
            setError('Error al cargar las calificaciones');
            return []; // Devuelve un array vacío en caso de error
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        loadStudents();
    }, []);

    const handleAddStudent = async (newStudent: Student) => {
        try {
            if (students.filter(student => student.fullName === newStudent.fullName).length > 0) {
                showNotification('El estudiante ya existe', 'error');
                return;
            }
            await addStudent(newStudent);            
            showNotification("Elemento agregado", "success"); // Muestra la notificación
            loadStudents();
        } catch (err) {
            setError('Error al agregar la calificación');
        }
    };

    const handleRemoveStudent = async (id: string) => {
        try {
            await deleteStudent(id);
            loadStudents();
        } catch (err) {
            setError('Error al eliminar la calificación');
        }
    };

    const handleUpdateStudent = async (id: string, student: Student) => {
        try {
            await updateStudent(id, student); // Eliminar curso por ID
            loadStudents(); // Recargar la lista de cursos después de eliminar
        } catch (err) {
            setError('Error updating period'); // Manejar errores
        }
    };

    return { students, loadStudents, loading, error, handleAddStudent, handleRemoveStudent, handleUpdateStudent };
};

export default useStudents;
