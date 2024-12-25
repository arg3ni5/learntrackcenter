import { db } from '../../../services/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

// Define la interfaz para una calificación
export interface Student {
    id?: string; // Optional ID property, used when fetching from Firestore
    fullName: string; // Full name of the student
    identificationNumber?: string; // Unique identification number for the student
    email?: string; // Email address of the student
}

// Función para agregar una nueva calificación
export const addStudent = async (student: Student): Promise<void> => {
    const studentsCollection = collection(db, 'students');
    await addDoc(studentsCollection, student);
};

// Función para obtener todas las calificaciones
export const fetchStudents = async (): Promise<Student[]> => {
    const studentsCollection = collection(db, 'students');
    const studentsSnapshot = await getDocs(studentsCollection);
    
    // Asegúrate de mapear correctamente los campos a la interfaz Student
    return studentsSnapshot.docs.map(doc => ({
        id: doc.id,
        fullName: doc.data().fullName,
        identificationNumber: doc.data().identificationNumber,
        email: doc.data().email,
    })) as Student[];
};

// Función para eliminar una calificación por ID
export const deleteStudent = async (id: string): Promise<void> => {
    const studentDoc = doc(db, 'students', id);
    await deleteDoc(studentDoc);
};

