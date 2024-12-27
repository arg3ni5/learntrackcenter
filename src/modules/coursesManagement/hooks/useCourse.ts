import { useState, useEffect } from 'react';
import { fetchCourses, addCourse, deleteCourse, Course, updateCourse } from '../services/courseService'; // Importar funciones del servicio

const useCourse = () => {
    const [courses, setCourses] = useState<Course[]>([]); // Estado para almacenar la lista de cursos
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    // Función para cargar los cursos
    const loadCourses = async () : Promise<Course[]> => {
        try {
            setLoading(true);
            const fetchedCourses = await fetchCourses(); // Obtener los cursos desde Firestore
            setCourses(fetchedCourses); // Actualizar el estado con los cursos obtenidos
            return fetchedCourses; // Retornar los cursos
        } catch (err) {
            setError('Error fetching courses'); // Manejar errores
            return [];
        } finally {
            setLoading(false); // Finalizar carga
        }
    };

    useEffect(() => {
        loadCourses(); // Cargar cursos al montar el componente
    }, []);

    // Función para agregar un nuevo curso
    const handleAddCourse = async (newCourse: Course) => {
        try {
            await addCourse(newCourse); // Agregar nuevo curso
            loadCourses(); // Recargar la lista de cursos después de agregar
        } catch (err) {
            setError('Error adding course'); // Manejar errores
        }
    };

    // Función para eliminar un curso por ID
    const handleDeleteCourse = async (id: string) => {
        try {
            await deleteCourse(id); // Eliminar curso por ID
            loadCourses(); // Recargar la lista de cursos después de eliminar
        } catch (err) {
            setError('Error deleting course'); // Manejar errores
        }
    };

    const handleUpdateCourse = async (id: string, course: Course) => {
        try {
            await updateCourse(id, course); // Eliminar curso por ID
            loadCourses(); // Recargar la lista de cursos después de eliminar
        } catch (err) {
            setError('Error updating course'); // Manejar errores
        }
    };

    return { courses, loadCourses, loading, error, setError, handleAddCourse, handleDeleteCourse, handleUpdateCourse }; // Retornar los datos y funciones necesarias
};

export default useCourse; // Exportar el hook personalizado
