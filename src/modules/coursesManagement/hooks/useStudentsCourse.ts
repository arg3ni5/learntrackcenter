import { useState, useEffect } from 'react';
import { PeriodCourse, StudentsCourse } from '../../../types/types';
import { getStudentsInCourse, getStudentsNotInCourse } from '../../studentsManagement/services/studentService';

const useStudentsCourse = (periodCourse: PeriodCourse) => {
  const {id: courseId, periodId}  = periodCourse;
  const [students, setStudents] = useState<StudentsCourse[]>([]);
  const [availableStudents, setAvailableStudents] = useState<StudentsCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStudents = async () => {
    try {
      setLoading(true);      
      const studentsData = await getStudentsInCourse(periodId, courseId!);
      setStudents(studentsData);
    } catch (err) {
      setError('Error loading getStudentsInCourse');
    } finally {
      setLoading(false);
    }
  };

  const loadAvailableStudents = async () => {
    try {
      setLoading(true);
      const studentsData = await getStudentsNotInCourse(periodId, courseId!);
      setAvailableStudents(studentsData);
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
    availableStudents,
    loadAvailableStudents,
    loading,
    error,
    loadStudents
  };
};

export default useStudentsCourse;
