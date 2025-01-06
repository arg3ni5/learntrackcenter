// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, updateDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { fetchAssignments } from '../../periodsManagement/services/periodAssignmentService';
import { Assignment, StudentAssignment } from '../../../types/types';


const getUrl = (studentId: string, periodId: string, courseId: string): string => {
    return `students/${studentId}/periods/${periodId}/courses/${courseId}`;
};
  
export const fetchStudentAssignment = async (studentId: string, periodId: string, courseId: string): Promise<StudentAssignment[]> => {
    const url = `${getUrl(studentId,periodId,courseId)}/assignments`;
    const assignmentsCollection = collection(db, url);
    const assignmentsSnapshot = await getDocs(assignmentsCollection);

    return assignmentsSnapshot.docs.map(doc => {
        const { title } = doc.data() as Assignment;
        const { grade, percentage, percentageMax } = doc.data() as StudentAssignment;

        return {
            id: doc.id,
            title,
            grade: grade || 0,
            gradeMax: 100,
            percentage: percentage || 0,
            percentageMax
        } as StudentAssignment;        
    });
};

export const fetchAvalaibleAssignments = async (periodId: string, courseId: string): Promise<void> => {   
    await fetchAssignments(periodId, courseId);
};

export const updateStudentAssignment = async (
    studentId: string,
    periodId: string,
    courseId: string,
    assignmentId: string,
    updatedAssignment: Partial<Assignment>
): Promise<void> => {
    const url = `${getUrl(studentId,periodId,courseId)}/assignments/${assignmentId}`;
    console.log({url, studentId, courseId, assignmentId, updatedAssignment});    
    const assignmentDocRef = doc(db, url);
    await updateDoc(assignmentDocRef, updatedAssignment);
};

export const updateStudentAssignments = async (
    studentId: string,
    periodId: string,
    courseId: string,
    assignments: Partial<Assignment>[]
): Promise<void> => {
    const batch = writeBatch(db);

    assignments.forEach((assignment) => {
        const { id, ...updatedAssignment } = assignment;
        const assignmentDocRef = doc(db, `${getUrl(studentId, periodId, courseId)}/assignments/${id}`);
        batch.update(assignmentDocRef, updatedAssignment);
    });

    await batch.commit();
};

export const deleteStudentAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `${getUrl(studentId,periodId,courseId)}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);
};


export const addAssignmentsBatch = async (assignments: Assignment[], periodId: string, courseId: string): Promise<void> => {
    const batch = writeBatch(db);
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);

    assignments.forEach(assignment => {
        const assignmentRef = doc(assignmentsCollection);
        batch.set(assignmentRef, {
            title: assignment.title,
            contributionPercentage: assignment.contributionPercentage
        });
    });

    try {
        await batch.commit();
    } catch (error) {
        console.error('Error committing batch:', error);
        throw new Error('Error adding assignments');
    }
};
