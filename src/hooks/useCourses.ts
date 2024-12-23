// src/hooks/useCourses.ts
import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Course } from '../types/Course'; // Importa el tipo desde types/Course

const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]); // Estado para almacenar los cursos

  const fetchCourses = async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Course[];
    setCourses(coursesData);
  };

  const addCourse = async (course: Course) => {
    await addDoc(collection(db, "courses"), course);
    fetchCourses(); // Refresca la lista de cursos después de agregar uno nuevo.
  };

  const removeCourse = async (id: string) => {
    await deleteDoc(doc(db, "courses", id));
    fetchCourses(); // Refresca la lista de cursos después de eliminar uno.
  };

  useEffect(() => {
    fetchCourses(); // Carga los cursos al montar el componente.
  }, []);

  return { courses, addCourse, removeCourse };
};

export default useCourses;
