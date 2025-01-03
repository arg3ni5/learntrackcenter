// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Assignment } from '../types';
import { fetchAssignments as fetchAvalaibleAssignments } from '../../periodsManagement/services/assignmentService';

export const fetchAssignments = async (studentId: string, periodId: string, courseId: string): Promise<Assignment[]> => {
    const assignmentsCollection = collection(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments`);
    const coursesSnapshot = await getDocs(assignmentsCollection);    
    return coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Assignment, 'id'>
    }));
};

export const addAssignment = async (studentId: string, periodId: string, courseId: string, newAssignment: Assignment): Promise<void> => {
    const assignmentsCollection = collection(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments`);
    await addDoc(assignmentsCollection, newAssignment);
};

export const loadAssignment = async (studentId: string, periodId: string, courseId: string): Promise<void> => {
    console.log({periodId, courseId});    
    const avalaibleAssignments = await fetchAvalaibleAssignments(periodId, courseId);
    console.log("avalaibleAssignments", avalaibleAssignments);
    return;
};

export const updateAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string, updatedAssignment: Partial<Assignment>): Promise<void> => {
    const assignmentDocRef = doc(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await updateDoc(assignmentDocRef, updatedAssignment);
};

export const deleteAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);
};
