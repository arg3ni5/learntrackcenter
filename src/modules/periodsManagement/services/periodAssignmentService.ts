// src/modules/studentsManagement/services/assignmentService.ts

import { db } from '../../../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, arrayUnion, arrayRemove, writeBatch } from 'firebase/firestore';
import { Assignment } from '../../../types/types';

export const fetchAssignments = async (periodId: string, courseId: string): Promise<Assignment[]> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);
    const assignmentsSnapshot = await getDocs(assignmentsCollection);

    const docs = assignmentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Assignment, 'id'>
    })) as Assignment[];
    return docs;
};

export const addAssignment = async (periodId: string, courseId: string, newAssignment: Assignment): Promise<void> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);

    // Add the new course document
    const assignmentDoc = await addDoc(assignmentsCollection, {...newAssignment as Omit<Assignment, 'id'>});
    console.log('Assignment added with ID: ', assignmentDoc.id);


    // Update the assignmentsIds in the period document
    const courseDocRef = doc(db, `periods/${periodId}/courses/${courseId}`);
    await updateDoc(courseDocRef, {
        assignmentsIds: arrayUnion(assignmentDoc.id) // Add the new course ID to the array
    });

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


export const updateAssignment = async (periodId: string, courseId: string, assignmentId: string, updatedAssignment: Partial<Assignment>, sync?:boolean): Promise<void> => {
    const assignmentDocRef = doc(db, `periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    const {id,...assignment} = updatedAssignment;
    await updateDoc(assignmentDocRef, assignment);

    sync && await syncAssignments(periodId, courseId);
};

export const deleteAssignment = async (periodId: string, courseId: string, assignmentId: string): Promise<void> => {
    const assignmentDocRef = doc(db, `periods/${periodId}/courses/${courseId}/assignments/${assignmentId}`);
    await deleteDoc(assignmentDocRef);

    // Update the assignmentsIds in the period document
    const periodDocRef = doc(db, `periods/${periodId}`);
    await updateDoc(periodDocRef, {
        assignmentsIds: arrayRemove(courseId) // Remove the course ID from the array
    });
};

export const syncAssignments = async (periodId: string, courseId: string,): Promise<void> => {
    const assignmentsCollection = collection(db, `periods/${periodId}/courses/${courseId}/assignments`);
    const assignmentsSnapshot = await getDocs(assignmentsCollection);
    const ids = assignmentsSnapshot.docs.map(doc => doc.id);

    console.log({ids, periodId, courseId});


    const periodDocRef = doc(db, `periods/${periodId}/courses/${courseId}`);
    await updateDoc(periodDocRef, {
        assignmentsIds: ids
    });
};
