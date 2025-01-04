import { useState, useEffect } from 'react';
import { Student } from '../../../types/types';
import { fetchStudentsByCourseId } from '../../studentsManagement/services/studentService';

const useStudentsCourse = (courseId: string) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStudents = async () => {
    try {
      setLoading(true);
      const studentsData = await fetchStudentsByCourseId(courseId);
      setStudents(studentsData);
    } catch (err) {
      setError('Error loading students');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, [courseId]);

  return {
    students,
    loading,
    error,
    loadStudents
  };
};

export default useStudentsCourse;
