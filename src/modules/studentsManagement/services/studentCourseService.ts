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
    const { periodId, courseId } = newCourse;

    if (!studentId) throw new Error(`Student ID is null or undefined`);
    if (!periodId) throw new Error(`Period ID is null or undefined`);
    if (!courseId) throw new Error(`Course ID is null or undefined`);

    const urlCourses = `students/${studentId}/periods/${newCourse.periodId}/courses`;
    const courseDocRef = doc(db, urlCourses, newCourse.periodCourseId);

    // Add the new course document
    await setDoc(courseDocRef, newCourse);
    console.log("Course added with ID: ", newCourse.periodCourseId);

    const enrollmentsCollection = collection(db, "enrollments");
    const enrollmentDocRef = doc(enrollmentsCollection);
    await setDoc(enrollmentDocRef, {
      studentId,
      courseId: newCourse.periodCourseId,
      periodId: newCourse.periodId,
    });

    const periodCourseDocRef = doc(db, `periods/${newCourse.periodId}/courses`, newCourse.periodCourseId);
    await updateDoc(periodCourseDocRef, {
      enrolledStudents: arrayUnion(studentId),
    });

    // Fetch and add assignments
    const originalAssignmentsCollection = collection(db, `periods/${newCourse.periodId}/courses/${newCourse.courseId}/assignments`);
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
  const q = query(
    enrollmentsCollection,
    where("periodId", "==", periodId),
    where("courseId", "==", courseId),
    where("studentId", "==", studentId)
  );
  const enrollmentsSnapshot = await getDocs(q);

  if (enrollmentsSnapshot.empty) {
    throw new Error("Enrollment not found");
  }
  else {
    const firstDoc = enrollmentsSnapshot.docs[0]
    await deleteDoc(firstDoc.ref);
    console.log("Enrollment deleted successfully");
  }


  const courseDocRef = doc(db, getUrl(studentId, periodId), courseId);
  console.log("deleteCourse", { studentId, periodId, courseId });

  // Get the course document data
  const courseDocSnapshot = await getDoc(courseDocRef);
  if (!courseDocSnapshot.exists()) {
    throw new Error("Course not found");
  }
  const courseData = courseDocSnapshot.data() as StudentCourse;
  await deleteDoc(courseDocRef);

  // Update the coursesIds in the period document
  const periodDocRef = doc(db, `students/${studentId}`);
  await updateDoc(periodDocRef, {
    coursesIds: arrayRemove(courseData.courseId), // Remove the course ID from the array
  });
};

export type { AvailableCourses };
