// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { fetchAssignments } from '../../periodsManagement/services/periodAssignmentService';
import { Assignment, StudentAssignment } from '../../../types/types';


const getUrl = (studentId: string, periodId: string, courseId: string): string => {
    return `students/${studentId}/periods/${periodId}/courses/${courseId}`;
};
  
export const fetchStudentAssignment = async (studentId: string, periodId: string, courseId: string): Promise<StudentAssignment[]> => {
    const url = `${getUrl(studentId,periodId,courseId)}/assignments`;
    console.log({url, studentId, periodId, courseId});
    
    const assignmentsCollection = collection(db, url);
    const assignmentsSnapshot = await getDocs(assignmentsCollection);

    console.log({url, studentId, courseId});

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
    const avalaibleAssignments = await fetchAssignments(periodId, courseId);
    console.log("avalaibleAssignments", avalaibleAssignments);
    return;
};

export const updateStudentAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string, updatedAssignment: Partial<Assignment>): Promise<void> => {
    const url = `${getUrl(studentId,periodId,courseId)}/assignments/${assignmentId}`;
    console.log({url, studentId, courseId, assignmentId, updatedAssignment});    
    const assignmentDocRef = doc(db, url);
    await updateDoc(assignmentDocRef, updatedAssignment);
};

export const deleteStudentAssignment = async (studentId: string, periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `${getUrl(studentId,periodId,courseId)}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);
};
