import { useState, useEffect } from 'react';
import { fetchPeriodCourseById } from '../services/courseService'; // Importar funciones del servicio
import { useNotification } from '../../../components/notification/NotificationContext';
import { PeriodCourse } from '../../../types/types';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { Teacher } from '../../teachersManagement/services/teacherService';



const useCourse = (
    periodId: string | undefined,
    courseId: string | undefined,
) => {
    const [course, setCourse] = useState<PeriodCourse| null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const {showNotification} = useNotification();
    const [ availableTeachers, setAvailableTeachers ] = useLocalStorage<Teacher[]>('availableTeachers', []); 


    const load = async () => {
        try {
            if (!courseId) {
                console.error(`Course ID is null or undefined`); // Log if ID is invalid
                return;
            }
            if (!periodId) {
                console.error(`Period ID is null or undefined`); // Log if ID is invalid
                return;
            }
            setLoading(true);
            const courseData = await fetchPeriodCourseById(periodId,courseId) as PeriodCourse; // Fetch course data by ID
            if (courseData) {
                const teacher = availableTeachers.find(t => t.id === courseData.teacherId);
                courseData.teacherName = teacher ? teacher.name : 'Unknown Teacher';

            }
            console.log("courseData", courseData);            
            setCourse(courseData); // Update state with fetched course data
        } catch (err) {
            setError('Error loading course'); // Set error message if fetching fails
            showNotification('Error loading course', 'error'); // Show notification for the error
            console.error(`Error loading course ${courseId}`); // Log the error with the course ID
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    useEffect(() => {
        load();
    }, []);

    return { course, loading, error, setError }; // Retornar los datos y funciones necesarias
};

export default useCourse; // Exportar el hook personalizado
