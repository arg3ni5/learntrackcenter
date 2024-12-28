// src/modules/studentsManagement/services/periodService.ts

import { db } from '../../../services/firebase'; 
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'; 
import { Period } from '../types';
import { Period as AvailablePeriod, fetchPeriods} from '../../periodsManagement/services/periodService';


export const fetchAvailablePeriods = async (): Promise<AvailablePeriod[]> => {
    return fetchPeriods();
};

// Function to fetch periods for a specific student
export const fetchStudentPeriods = async (studentId: string): Promise<Period[]> => {
    const periodsCollection = collection(db, `students/${studentId}/periods`);
    const periodsSnapshot = await getDocs(periodsCollection);
    return periodsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Period, 'id'>,
    }));
};

// Function to add a new period for a specific student
export const addPeriod = async (studentId: string, newPeriod: Period): Promise<void> => {
    const periodsCollection = collection(db, `students/${studentId}/periods`);
    await addDoc(periodsCollection, newPeriod);
};

// Function to delete a period by ID for a specific student
export const deletePeriod = async (studentId: string, periodId: string): Promise<void> => {
    const periodDoc = doc(db, `students/${studentId}/periods`, periodId);
    await deleteDoc(periodDoc);
};

export const updatePeriod = async (studentId: string, periodId: string, updatedStudent: Partial<Period>): Promise<void> => {
    const periodDoc = doc(db, `students/${studentId}/periods`, periodId); // Referencia al documento del curso
    await updateDoc(periodDoc, updatedStudent); // Actualizar el documento con los nuevos datos
};


export type { AvailablePeriod };