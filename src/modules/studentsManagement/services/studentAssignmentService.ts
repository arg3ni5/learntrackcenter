// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { fetchAssignments } from '../../periodsManagement/services/assignmentService';
import { Assignment, StudentAssignment } from '../../../types/types';

export const fetchStudentAssignment = async (studentId: string, periodId: string, courseId: string): Promise<StudentAssignment[]> => {
    const assignmentsCollection = collection(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments`);
    const coursesSnapshot = await getDocs(assignmentsCollection);    
    return coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<StudentAssignment, 'id'>
    }));
};

export const addStudentAssignment = async (studentId: string, periodId: string, courseId: string, newAssignment: StudentAssignment): Promise<void> => {
    const assignmentsCollection = collection(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments`);
    await addDoc(assignmentsCollection, newAssignment);
};

export const fetchAvalaibleAssignments = async (studentId: string, periodId: string, courseId: string): Promise<void> => {
    console.log({periodId, studentId, courseId});    
    const avalaibleAssignments = await fetchAssignments(periodId, courseId);
    console.log("avalaibleAssignments", avalaibleAssignments);
    return;
};

export const updateStudentAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string, updatedAssignment: Partial<Assignment>): Promise<void> => {
    const assignmentDocRef = doc(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await updateDoc(assignmentDocRef, updatedAssignment);
};

export const deleteStudentAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `students/${studentId}/periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);
};
