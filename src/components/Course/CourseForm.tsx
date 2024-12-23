// src/components/Course/CourseForm.tsx
import React, { useState } from 'react';

interface CourseFormProps {
  onAddCourse: (course: { name: string; teacher: string }) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onAddCourse }) => {
  const [courseName, setCourseName] = useState<string>('');
  const [teacherName, setTeacherName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCourse({ name: courseName, teacher: teacherName });
    setCourseName('');
    setTeacherName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre del Curso" 
        value={courseName} 
        onChange={(e) => setCourseName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Nombre del Profesor" 
        value={teacherName} 
        onChange={(e) => setTeacherName(e.target.value)} 
        required 
      />
      <button type="submit">Agregar Curso</button>
    </form>
  );
};

export default CourseForm;
