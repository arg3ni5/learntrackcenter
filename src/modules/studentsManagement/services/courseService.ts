// src/modules/studentsManagement/services/courseService.ts

import { db } from '../../../services/firebase'; 
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { Course as AvailableCourses } from '../../coursesManagement/services/courseService';
import { Course } from '../types';
import { arrayUnion, arrayRemove  } from 'firebase/firestore';
import { StudentCourse } from '../../../types/types';



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
export const fetchCourses = async (studentId: string): Promise<StudentCourse[]> => {
   const coursesCollection = collection(db, `students/${studentId}/courses`);
   const coursesSnapshot = await getDocs(coursesCollection);
   return coursesSnapshot.docs.map(doc => ({
       id: doc.id,
       ...doc.data() as Omit<StudentCourse, 'id'>,
   }));
};

// Function to add a new course for a specific student
export const addCourse = async (studentId: string, newCourse: StudentCourse): Promise<void> => {
   const coursesCollection = collection(db, `students/${studentId}/courses`);

   // Add the new course document
   const courseDoc = await addDoc(coursesCollection, newCourse);
   console.log('Course added with ID: ', courseDoc.id);
   
    
   // Update the coursesIds in the period document
   const periodDocRef = doc(db, `students/${studentId}`);
   await updateDoc(periodDocRef, {
      coursesIds: arrayUnion(courseDoc.id) // Add the new course ID to the array
   });
   
};

// Function to delete a course by ID for a specific student
export const deleteCourse = async (studentId: string, courseId: string): Promise<void> => {
   const courseDoc = doc(db, `students/${studentId}/courses`, courseId);
   await deleteDoc(courseDoc);

   // Update the coursesIds in the period document
   const periodDocRef = doc(db, `students/${studentId}`);
   await updateDoc(periodDocRef, {
       coursesIds: arrayRemove(courseId) // Remove the course ID from the array
   });
};


export type { AvailableCourses };