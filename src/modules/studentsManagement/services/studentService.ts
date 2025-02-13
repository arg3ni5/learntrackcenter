import { db } from "../../../services/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId } from "firebase/firestore";
import { Student } from "../../../types/types";

// Function to add a new student
export const addStudent = async (student: Student): Promise<void> => {
  const studentsCollection = collection(db, "students"); // Reference to the students collection
  await addDoc(studentsCollection, student); // Add the student document to the collection
};

// Function to add multiple students in a batch
export const addStudentsBatch = async (students: Student[]): Promise<void> => {
  const batch = writeBatch(db); // Create a new batch instance
  const studentsCollection = collection(db, "students"); // Reference to the students collection

  // Add students to the batch
  students.forEach((student) => {
    const studentRef = doc(studentsCollection); // Create a new reference with a unique ID
    batch.set(studentRef, student); // Add the operation to the batch
  });

  try {
    await batch.commit(); // Execute all operations in the batch
  } catch (error) {
    console.error("Error committing batch:", error);
    throw new Error("Error adding students"); // Throw an error to handle it in the component
  }
};

// Function to fetch all students
export const fetchStudents = async (): Promise<Student[]> => {
  const studentsCollection = collection(db, "students");
  const studentsSnapshot = await getDocs(studentsCollection);

  // Map documents to Student interface
  return studentsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Student, "id">),
  })) as Student[];
};

// Function to fetch a student by ID
export const fetchStudentById = async (studentId: string): Promise<Student | null> => {
  try {
    const docRef = doc(db, "students", studentId); // Reference to the specific student document
    const docSnap = await getDoc(docRef); // Get the document snapshot

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Student; // Return the student data with ID
    } else {
      console.log("No such document!"); // Log if no document exists
      return null; // Return null if no document found
    }
  } catch (error) {
    console.error("Error fetching student:", error);
    throw error; // Throw error for handling in the calling code
  }
};

// Function to delete a student by ID
export const deleteStudent = async (id: string): Promise<void> => {
  const studentDoc = doc(db, "students", id); // Reference to the specific student document
  await deleteDoc(studentDoc); // Delete the document from Firestore
};

// Function to update a student's details by ID
export const updateStudent = async (id: string, updatedStudent: Partial<Student>): Promise<void> => {
  const { id: _, ...student } = updatedStudent;
  const studentDoc = doc(db, "students", id); // Reference to the specific student document
  await updateDoc(studentDoc, student); // Update the document with new data
};

export const getStudentsInCourse = async (periodId: string, courseId: string): Promise<Student[]> => {
  const enrollmentsCollection = collection(db, "enrollments");
  const q = query(enrollmentsCollection, where("periodId", "==", periodId), where("courseId", "==", courseId));
  const enrollmentsSnapshot = await getDocs(q);

  const studentIds = enrollmentsSnapshot.docs.map((doc) => doc.data().studentId);

  // Fetch student details
  const studentsPromises = studentIds.map((id) => fetchStudentById(id));
  const students = await Promise.all(studentsPromises);

  return students.filter((student) => student !== null) as Student[];
};

export const getStudentsNotInCourse = async (periodId: string, courseId: string): Promise<Student[]> => {
  // Obtener los estudiantes en el curso
  const enrollmentsCollection = collection(db, "enrollments");
  const q = query(enrollmentsCollection, where("periodId", "==", periodId), where("courseId", "==", courseId));
  const enrollmentsSnapshot = await getDocs(q);
  const enrolledStudentIds = enrollmentsSnapshot.docs.map((doc) => doc.data().studentId);

  if (enrolledStudentIds.length === 0) {
    return await fetchStudents();
  }

  const studentsCollection = collection(db, "students");
  const studentChunks = [];
  for (let i = 0; i < enrolledStudentIds.length; i += 10) {
    studentChunks.push(enrolledStudentIds.slice(i, i + 10));
  }

  const promises = studentChunks.map(async (chunk) => {
    const q = query(studentsCollection, where(documentId(), "not-in", chunk));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Student, "id">),
    }));
  });

  const studentsArrays = await Promise.all(promises);
  return studentsArrays.flat();
};
