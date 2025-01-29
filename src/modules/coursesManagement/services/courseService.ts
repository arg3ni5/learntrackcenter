import { db } from '../../../services/firebase';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, getDoc } from 'firebase/firestore';
import { PeriodCourse } from '../../../types/types';

// Define the Course interface
export interface Course {
    id: string; // Optional ID for Firestore
    name: string; // Course title
    description: string; // Course description
    duration?: number; // Course duration in weeks
    hours?: number; // Hours per week
}

// Function to fetch the list of courses from Firestore
export const fetchCourses = async (): Promise<Course[]> => {
    const coursesCollection = collection(db, 'courses'); // Courses collection in Firestore
    const courseSnapshot = await getDocs(coursesCollection); // Get the documents
    const courseList: Course[] = courseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Course, 'id'> // Exclude ID when mapping data
    }));
    return courseList;
};

// Function to add a new course to Firestore
export const addCourse = async (course: Course): Promise<void> => {
    const coursesCollection = collection(db, 'courses'); // Courses collection in Firestore
    await addDoc(coursesCollection, course); // Add the new document
};

// Function to delete a course by ID in Firestore
export const deleteCourse = async (id: string): Promise<void> => {
    const courseDoc = doc(db, 'courses', id); // Reference to the course document
    await deleteDoc(courseDoc); // Delete the document
};

// Function to update a course by ID in Firestore
export const updateCourse = async (id: string, updatedCourse: Partial<Course>): Promise<void> => {
    const { id: _, ...course } = updatedCourse;    
    const courseDoc = doc(db, 'courses', id); // Reference to the course document
    await updateDoc(courseDoc, course); // Update the document with new data
};


export const fetchPeriodCourseById = async (
    periodId: string ,
    courseId: string ,
): Promise<PeriodCourse | null> => {
    try {
        const docRef = doc(db, `periods/${periodId}/courses`, courseId); // Reference to the specific student document
        const docSnap = await getDoc(docRef); // Get the document snapshot
        
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as PeriodCourse; // Return the student data with ID
        } else {
            console.log("No such document!"); // Log if no document exists
            return null; // Return null if no document found
        }
    } catch (error) {
        console.error("Error fetching student:", error);
        throw error; // Throw error for handling in the calling code
    }
};
