import { useEffect, useState, useCallback } from "react";
import { Assignment, StudentAssignmentsManagerProps } from "../types";
import { addAssignment, deleteAssignment, fetchAssignments, loadAssignment, updateAssignment } from "../services/assignmentService";

const useStudentAssignments = (props: StudentAssignmentsManagerProps) => {
  const { courseId, studentId, periodId, periodCourseId } = props;
  const [data, setData] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchAssignments(studentId, periodId, courseId);
      console.log("fetchedData", fetchedData);
      
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
    handleLoadAssignment();
    return () => {
      isMounted = false;
    };
  }, [courseId, loadData]);

  const handleAddAssignment = useCallback(
    async (newAssignment: Assignment) => {
      setLoading(true);
      try {
        await addAssignment(studentId, periodId, courseId, newAssignment);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error adding assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, periodId, courseId, loadData, setLoading]
  );

  const handleLoadAssignment = useCallback(async () => {
      setLoading(true);
      try {
        await loadAssignment(studentId, periodId, periodCourseId);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error adding assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, periodId, courseId, loadData, setLoading]
  );

  const handleUpdateAssignment = useCallback(
    async (assignmentId: string, updatedAssignment: Partial<Assignment>) => {
      setLoading(true);
      try {
        await updateAssignment(studentId, periodId, courseId, assignmentId, updatedAssignment);
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
        await deleteAssignment(studentId, periodId, courseId, assignmentId);
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
    assignments: data,
    loadAssignments: loadData,
    handleLoadAssignment,
    loading,
    error,
    handleAddAssignment,
    handleUpdateAssignment,
    handleDeleteAssignment,
  };
};

export default useStudentAssignments;
