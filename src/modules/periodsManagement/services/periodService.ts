// src/modules/periodsManagement/services/periodService.ts

import { db } from '../../../services/firebase'; // Adjust the import according to your Firebase setup
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';

// Define the interface for Period
export interface Period {
    id?: string; // Optional ID for Firestore
    periodId: string; // Unique identifier for the academic period
    periodName: string; // Descriptive name of the period
    startDate: Date; // Start date of the academic period
    endDate: Date; // End date of the academic period
    description?: string; // Brief description of the period
    status: string; // Current status of the period (e.g., "Active", "Finished", "Upcoming")
    assignedSubjects: string[]; // List of subject IDs associated with this academic period
}

// Function to fetch periods from Firestore
export const fetchPeriods = async (): Promise<Period[]> => {
    const periodsCollection = collection(db, 'periodos_academicos');
    const periodsSnapshot = await getDocs(periodsCollection);
    const periodsList: Period[] = periodsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Period, 'id'> // Exclude ID when mapping data
    }));
    return periodsList;
};

// Function to add a new period to Firestore
export const addPeriod = async (period: Period): Promise<void> => {
    const periodsCollection = collection(db, 'periodos_academicos');
    await addDoc(periodsCollection, period);
};

// Function to delete a period by ID from Firestore
export const deletePeriod = async (id: string): Promise<void> => {
    const periodDoc = doc(db, 'periodos_academicos', id);
    await deleteDoc(periodDoc);
};
