import { db } from '../../../services/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Student } from '../../../types/types';

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

export const deleteStudent = async (id: string): Promise<void> => {
    const studentDoc = doc(db, 'students', id);
    await deleteDoc(studentDoc);
};

export const updateStudent = async (id: string, updatedStudent: Partial<Student>): Promise<void> => {
    const { id: _, ...student } = updatedStudent;    
    const studentDoc = doc(db, 'students', id); // Referencia al documento del curso
    await updateDoc(studentDoc, student); // Actualizar el documento con los nuevos datos
};