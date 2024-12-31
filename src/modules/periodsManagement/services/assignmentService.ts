// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Assignment } from '../../../types/types';

export const fetchAssignments = async (periodId: string, courseId: string): Promise<Assignment[]> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);
    const coursesSnapshot = await getDocs(assignmentsCollection);    
    return coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Assignment, 'id'>
    }));
};

export const addAssignment = async (periodId: string, courseId: string, newAssignment: Assignment): Promise<void> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);
    await addDoc(assignmentsCollection, newAssignment);
};

export const updateAssignment = async (periodId: string, courseId: string, assignmentId: string, updatedAssignment: Partial<Assignment>): Promise<void> => {
    const assignmentDocRef = doc(db, `periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await updateDoc(assignmentDocRef, updatedAssignment);
};

export const deleteAssignment = async (periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);
};
