// src/components/Course/CourseList.tsx
import React from 'react';
import { Course } from '../../types/Course'; // Importa el tipo desde types/Course

interface CourseListProps {
  courses: Course[]; // Lista de cursos.
  onRemoveCourse: (id: string) => void; // Función para eliminar un curso.
}

const CourseList: React.FC<CourseListProps> = ({ courses, onRemoveCourse }) => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.name} - Profesor: {course.teacher}
          <button onClick={() => onRemoveCourse(course.id!)}>Eliminar</button> {/* Asegúrate de usar "!" porque id es opcional */}
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
