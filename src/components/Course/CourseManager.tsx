// src/components/Course/CourseManager.tsx
import React from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import useCourses from '../../hooks/useCourses';

const CourseManager: React.FC = () => {
  const { courses, addCourse, removeCourse } = useCourses();

  return (
    <div>
      <h1>Gestión de Cursos</h1>
      <CourseForm onAddCourse={addCourse} />
      <CourseList courses={courses} onRemoveCourse={removeCourse} />
    </div>
  );
};

export default CourseManager;
