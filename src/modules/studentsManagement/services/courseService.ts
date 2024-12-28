// src/modules/studentsManagement/services/courseService.ts

import { db } from '../../../services/firebase'; 
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Course as AvailableCourses } from '../../coursesManagement/services/courseService';
import { Course } from '../types';

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
export const fetchCourses = async (studentId: string, periodId: string): Promise<Course[]> => {
   const coursesCollection = collection(db, `students/${studentId}/periods/${periodId}/courses`);
   const coursesSnapshot = await getDocs(coursesCollection);
   return coursesSnapshot.docs.map(doc => ({
       id: doc.id,
       ...doc.data() as Omit<Course, 'id'>,
   }));
};

// Function to add a new course for a specific student
export const addCourse = async (studentId: string, periodId: string, newCourse: Course): Promise<void> => {
   const coursesCollection = collection(db, `students/${studentId}/periods/${periodId}/courses`);
   await addDoc(coursesCollection, newCourse);
};

// Function to delete a course by ID for a specific student
export const deleteCourse = async (studentId: string, periodId: string, id: string): Promise<void> => {
   const courseDoc = doc(db, `students/${studentId}/periods/${periodId}/courses`, id);
   await deleteDoc(courseDoc);
};


export type { AvailableCourses };