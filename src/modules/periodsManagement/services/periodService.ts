// src/modules/periodsManagement/services/periodService.ts

import { db } from '../../../services/firebase'; // Adjust the import according to your Firebase setup
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { Period } from '../types';

// Función para obtener la lista de cursos desde Firestore
export const fetchPeriods = async (): Promise<Period[]> => {
    const periodsCollection = collection(db, 'periods'); // Colección de cursos en Firestore
    const courseSnapshot = await getDocs(periodsCollection); // Obtener los documentos
    const courseList: Period[] = courseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Period, 'id'> // Excluir el ID al mapear los datos
    }));
    return courseList;
};

// Función para agregar un nuevo curso a Firestore
export const addPeriod = async (course: Period): Promise<void> => {
    const periodsCollection = collection(db, 'periods'); // Colección de cursos en Firestore
    await addDoc(periodsCollection, course); // Agregar el nuevo documento
};

// Función para eliminar un curso por ID en Firestore
export const deletePeriod = async (id: string): Promise<void> => {
    const courseDoc = doc(db, 'periods', id); // Referencia al documento del curso
    await deleteDoc(courseDoc); // Eliminar el documento
};

// Función para actualizar un curso por ID en Firestore
export const updatePeriod = async (id: string, updatedPeriod: Partial<Period>): Promise<void> => {
    const { id: _, ...period } = updatedPeriod;    
    const periodDoc = doc(db, 'periods', id); // Referencia al documento del curso
    await updateDoc(periodDoc, period); // Actualizar el documento con los nuevos datos
};
