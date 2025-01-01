// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { Assignment } from '../../../types/types';

export const fetchAssignments = async (periodId: string, courseId: string): Promise<Assignment[]> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);
    const assignmentsSnapshot = await getDocs(assignmentsCollection);
    const docs = assignmentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Assignment, 'id'>
    }))  
    return docs;
};

export const addAssignment = async (periodId: string, courseId: string, newAssignment: Assignment): Promise<void> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);

    // Add the new course document
    const assignmentDoc = await addDoc(assignmentsCollection, {...newAssignment as Omit<Assignment, 'id'>});
    console.log('Assignment added with ID: ', assignmentDoc.id);    
       
        
    // Update the assignmentIds in the period document
    const courseDocRef = doc(db, `periods/${periodId}/courses/${courseId}`);
    await updateDoc(courseDocRef, {
        assignmentIds: arrayUnion(assignmentDoc.id) // Add the new course ID to the array
    });
    
};

export const updateAssignment = async (periodId: string, courseId: string, assignmentId: string, updatedAssignment: Partial<Assignment>, sync?:boolean): Promise<void> => {
    const assignmentDocRef = doc(db, `periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await updateDoc(assignmentDocRef, updatedAssignment);

    sync && await syncAssignments(periodId, courseId);
};

export const deleteAssignment = async (periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);

    // Update the coursesIds in the period document
    const periodDocRef = doc(db, `periods/${periodId}`);
    await updateDoc(periodDocRef, {
        coursesIds: arrayRemove(courseId) // Remove the course ID from the array
    });
};

const syncAssignments = async (periodId: string, courseId: string,): Promise<void> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);
    const assignmentsSnapshot = await getDocs(assignmentsCollection);
    const ids = assignmentsSnapshot.docs.map(doc => doc.id);    

    const periodDocRef = doc(db, `periods/${periodId}`);
    await updateDoc(periodDocRef, {
        coursesIds: ids 
    });
};
