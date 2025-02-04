// src/modules/studentsManagement/services/courseService.ts

import { db } from "../../../services/firebase";
import { collection, deleteDoc, doc, getDocs, updateDoc, getDoc, setDoc, writeBatch, query, where } from "firebase/firestore";
import { Course as AvailableCourses } from "../../coursesManagement/services/courseService";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { Assignment, StudentAssignment, StudentCourse } from "../../../types/types";

const getUrl = (studentId: string, periodId: string): string => {
  return `students/${studentId}/periods/${periodId}/courses`;
};

// Function to fetch available courses
export const fetchAvailableCourses = async (): Promise<AvailableCourses[]> => {
  const coursesCollection = collection(db, "courses"); // Adjust this path based on your Firestore structure
  const coursesSnapshot = await getDocs(coursesCollection);
  return coursesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<AvailableCourses, "id">),
  }));
};

// Function to fetch courses for a specific student
export const fetchCourses = async (studentId: string, periodId: string): Promise<StudentCourse[]> => {
  const coursesCollection = collection(db, getUrl(studentId, periodId));
  const coursesSnapshot = await getDocs(coursesCollection);
  return coursesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<StudentCourse, "id">),
  }));
};

// Function to add a new course for a specific student
export const addCourse = async (studentId: string, newCourse: StudentCourse): Promise<void> => {
  try {
    const { periodId, periodCourseId } = newCourse;

    if (!studentId) throw new Error(`Student ID is null or undefined`);
    if (!periodId) throw new Error(`Period ID is null or undefined`);
    if (!periodCourseId) throw new Error(`Course ID is null or undefined`);

    const urlCourses = `students/${studentId}/periods/${periodId}/courses`;
    const courseDocRef = doc(db, urlCourses, periodCourseId);

    // Add the new course document
    await setDoc(courseDocRef, newCourse);
    console.log("Course added with ID: ", periodCourseId);

    const enrollmentsCollection = collection(db, "enrollments");
    const enrollmentDocRef = doc(enrollmentsCollection);
    await setDoc(enrollmentDocRef, {
      studentId,
      periodId,
      courseId: periodCourseId,
    });

    const periodCourseDocRef = doc(db, `periods/${periodId}/courses`, periodCourseId);
    await updateDoc(periodCourseDocRef, {
      enrolledStudents: arrayUnion(studentId),
    });

    // Fetch and add assignments
    const originalAssignmentsCollection = collection(db, `periods/${periodId}/courses/${periodCourseId}/assignments`);
    const assignmentsSnapshot = await getDocs(originalAssignmentsCollection);

    const assignmentsCollection = collection(courseDocRef, "assignments");
    const batch = writeBatch(db);

    assignmentsSnapshot.docs.forEach((docSnapshot) => {
      const { title, contributionPercentage } = docSnapshot.data() as Assignment;
      const { grade, percentage } = docSnapshot.data() as StudentAssignment;

      const assignmentData: StudentAssignment = {
        id: docSnapshot.id,
        assignmentId: docSnapshot.id,
        title,
        grade: grade || 0,
        percentage: percentage || 0,
        percentageMax: Number(contributionPercentage),
      };

      const assignmentDocRef = doc(assignmentsCollection, docSnapshot.id);
      batch.set(assignmentDocRef, assignmentData);
    });

    await batch.commit();

    console.log("Assignments added successfully");
  } catch (error) {
    console.error("Error adding course: ", error);
    throw new Error("Failed to add course");
  }
};

// Function to delete a course by ID for a specific student
export const deleteCourse = async (studentId: string, periodId: string, courseId: string): Promise<void> => {
  const enrollmentsCollection = collection(db, "enrollments");
  const q = query(enrollmentsCollection, where("periodId", "==", periodId), where("courseId", "==", courseId), where("studentId", "==", studentId));
  const enrollmentsSnapshot = await getDocs(q);

  if (enrollmentsSnapshot.empty) {
    console.error("Enrollment not found");
  } else {
    const firstDoc = enrollmentsSnapshot.docs[0];
    await deleteDoc(firstDoc.ref);
  }
  const courseDocRef = doc(db, getUrl(studentId, periodId), courseId);

  // Get the course document data
  const courseDocSnapshot = await getDoc(courseDocRef);
  if (!courseDocSnapshot.exists()) {
    throw new Error("Course not found");
  } else {
    await deleteDoc(courseDocRef);
  }
};

export type { AvailableCourses };
