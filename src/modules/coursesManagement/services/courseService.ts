
import { db } from '../../../services/firebase';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';

// Define la interfaz Course
export interface Course {
    id?: string; // ID opcional para Firestore
    title: string; // Título del curso
    description?: string; // Descripción del curso
    duration?: number; // Duración del curso en horas
}

// Función para obtener la lista de cursos desde Firestore
export const fetchCourses = async (): Promise<Course[]> => {
    const coursesCollection = collection(db, 'courses'); // Colección de cursos en Firestore
    const courseSnapshot = await getDocs(coursesCollection); // Obtener los documentos
    const courseList: Course[] = courseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Course, 'id'> // Excluir el ID al mapear los datos
    }));
    return courseList;
};

// Función para agregar un nuevo curso a Firestore
export const addCourse = async (course: Course): Promise<void> => {
    const coursesCollection = collection(db, 'courses'); // Colección de cursos en Firestore
    await addDoc(coursesCollection, course); // Agregar el nuevo documento
};

// Función para eliminar un curso por ID en Firestore
export const deleteCourse = async (id: string): Promise<void> => {
    const courseDoc = doc(db, 'courses', id); // Referencia al documento del curso
    await deleteDoc(courseDoc); // Eliminar el documento
};
