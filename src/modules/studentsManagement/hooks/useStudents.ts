// src/modules/studentsManagement/hooks/useStudents.ts
import { useEffect, useState } from 'react';
import { fetchStudents, addStudent, deleteStudent, updateStudent, fetchStudentById } from '../services/studentService';
import { useNotification } from '../../../components/notification/NotificationContext';
import { useLoading } from '../../../components/loading/LoadingContext';
import { Student } from '../../../types/types';

const useStudents = () => {
    const { setIsLoading, setLoadingText } = useLoading();
    const [students, setStudents] = useState<Student[]>([]);
    const [student, setStudent] = useState<Student | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { showNotification } = useNotification();

    useEffect(() => {
        setLoadingText("Loading Student");
        setIsLoading(loading);
    }, [loading, setIsLoading]);
    

    const loadStudents = async () => {
        try {
            setLoading(true);
            const studentsData = await fetchStudents();
            setStudents(studentsData);
        } catch (err) {
            setError('Error al cargar los estudiantes');
        } finally {
            setLoading(false);
        }
    };

    const loadStudent = async (id: string) => {
        try {
            if (!id) {
                console.error(`id Student null or undefined`);
                return
            }
            setLoading(true);
            const studentData = await fetchStudentById(id);
            console.log("studentData",studentData);            
            setStudent(studentData);
        } catch (err) {
            setError('Error al cargar el estudiante');
            showNotification('Error al cargar el estudiante', 'error');
            console.error(`Error al cargar el estudiante ${id}`);
            
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

    return { students, student, loadStudents, loadStudent, loading, error, handleAddStudent, handleRemoveStudent, handleUpdateStudent };
};

export default useStudents;
