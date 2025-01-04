import { useEffect, useState, useCallback } from "react";
import { addStudentAssignment, deleteStudentAssignment, fetchStudentAssignment, fetchAvalaibleAssignments, updateStudentAssignment } from "../services/studentAssignmentService";
import { StudentAssignment } from "../../../types/types";
import { StudentAssignmentsManagerProps } from "../types/types";

const useStudentAssignments = (props: StudentAssignmentsManagerProps) => {
  const { courseId, studentId, periodId, periodCourseId } = props;
  const [data, setData] = useState<StudentAssignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchStudentAssignment(studentId, periodId, courseId);      
      setData(fetchedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar las calificaciones");
    } finally {
      setLoading(false);
    }
  }, [studentId, periodId, courseId, setLoading]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) await loadData();
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [courseId, loadData]);

  const handleAddAssignment = useCallback(
    async (newAssignment: StudentAssignment) => {
      setLoading(true);
      try {
        await addStudentAssignment(studentId, periodId, courseId, newAssignment);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error adding assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, periodId, courseId, loadData, setLoading]
  );

  const handleLoadAvalaibleAssignment = useCallback(async () => {
      setLoading(true);
      try {
        await fetchAvalaibleAssignments(studentId, periodId, periodCourseId);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error adding assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, periodId, courseId, loadData, setLoading]
  );

  const handleUpdateAssignment = useCallback(
    async (assignmentId: string, updatedAssignment: Partial<StudentAssignment>) => {
      setLoading(true);
      try {
        await updateStudentAssignment(studentId, periodId, courseId, assignmentId, updatedAssignment);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error updating assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, periodId, courseId, loadData, setLoading]
  );

  const handleDeleteAssignment = useCallback(
    async (assignmentId: string) => {
      setLoading(true);
      try {
        await deleteStudentAssignment(studentId, periodId, courseId, assignmentId);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error deleting assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, periodId, courseId, loadData, setLoading]
  );

  return {
    studentAssignment: data,
    loadAssignments: loadData,
    handleLoadAvalaibleAssignment,
    loading,
    error,
    handleAddAssignment,
    handleUpdateAssignment,
    handleDeleteAssignment,
  };
};

export default useStudentAssignments;
