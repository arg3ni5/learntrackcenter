// src/modules/studentsManagement/services/courseService.ts

import { db } from '../../../services/firebase'; 
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { Course as AvailableCourses } from '../../coursesManagement/services/courseService';
import { arrayUnion, arrayRemove  } from 'firebase/firestore';
import { Course } from '../../../types/types';



// Function to fetch available courses
export const fetchAvailableCourses = async (): Promise<AvailableCourses[]> => {
   const coursesCollection = collection(db, 'courses'); // Adjust this path based on your Firestore structure
   const coursesSnapshot = await getDocs(coursesCollection);
   return coursesSnapshot.docs.map(doc => ({
       id: doc.id,
       ...doc.data() as Omit<AvailableCourses, 'id'>,
   }));
};

// Function to fetch courses for a specific student
export const fetchCourses = async (periodId: string): Promise<Course[]> => {
   const coursesCollection = collection(db, `periods/${periodId}/courses`);
   const coursesSnapshot = await getDocs(coursesCollection);
   return coursesSnapshot.docs.map(doc => ({
       id: doc.id,
       ...doc.data() as Omit<Course, 'id'>,
   }));
};

// Function to add a new course for a specific student
export const addCourse = async (periodId: string, newCourse: Course): Promise<void> => {
   const coursesCollection = collection(db, `periods/${periodId}/courses`);

   // Add the new course document
   const courseDoc = await addDoc(coursesCollection, {...newCourse as Omit<Course, 'id'>});
   console.log('Course added with ID: ', courseDoc.id);
   
    
   // Update the coursesIds in the period document
   const periodDocRef = doc(db, `periods/${periodId}`);
   await updateDoc(periodDocRef, {
      coursesIds: arrayUnion(courseDoc.id) // Add the new course ID to the array
   });
   
};

// Function to delete a course by ID for a specific student
export const deleteCourse = async (periodId: string, courseId: string): Promise<void> => {
   const courseDoc = doc(db, `periods/${periodId}/courses`, courseId);
   await deleteDoc(courseDoc);

   // Update the coursesIds in the period document
   const periodDocRef = doc(db, `periods/${periodId}`);
   await updateDoc(periodDocRef, {
       coursesIds: arrayRemove(courseId) // Remove the course ID from the array
   });
};


export type { AvailableCourses };