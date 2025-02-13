import { db } from '../../../services/firebase';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { Teacher } from '../../../types/types';

// Función para obtener la lista de profesores desde Firestore
export const fetchTeachers = async (): Promise<Teacher[]> => {
    const teachersCollection = collection(db, 'teachers'); // Colección de profesores en Firestore
    const teacherSnapshot = await getDocs(teachersCollection); // Obtener los documentos
    const teacherList: Teacher[] = teacherSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Teacher, 'id'> // Excluir el ID al mapear los datos
    }));
    return teacherList;
};

// Función para agregar un nuevo profesor a Firestore
export const addTeacher = async (teacher: Teacher): Promise<void> => {
    const teachersCollection = collection(db, 'teachers'); // Colección de profesores en Firestore
    await addDoc(teachersCollection, teacher); // Agregar el nuevo documento
};

export const updateTeacher = async (teacherId: string, updatedTeacher: Partial<Teacher>): Promise<void> => {
    const assignmentDocRef = doc(db, `teachers/${teacherId}`);
    const {id,...assignment} = updatedTeacher;
    await updateDoc(assignmentDocRef, assignment);
};

// Función para eliminar un profesor por ID en Firestore
export const deleteTeacher = async (id: string): Promise<void> => {
    const teacherDoc = doc(db, 'teachers', id); // Referencia al documento del profesor
    await deleteDoc(teacherDoc); // Eliminar el documento
};
