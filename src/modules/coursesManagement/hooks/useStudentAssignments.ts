import { useEffect, useState, useCallback } from "react";
import { deleteStudentAssignment, fetchStudentAssignment, fetchAvalaibleAssignments, updateStudentAssignment } from "../services/studentAssignmentService";
import { StudentAssignment } from "../../../types/types";
import { StudentAssignmentsManagerProps } from "../types/types";

const useStudentAssignments = (props: StudentAssignmentsManagerProps) => {
  console.log({props});
  
  const { studentId, periodId, periodCourseId, courseId } = props;
  const [data, setData] = useState<StudentAssignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchStudentAssignment(studentId, periodId, periodCourseId);
      setData(fetchedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar las calificaciones");
    } finally {
      setLoading(false);
    }
  }, [studentId]);

  useEffect(() => {
      loadData();
  }, [studentId]);

  const handleLoadAvalaibleAssignment = useCallback(async () => {
    setLoading(true);
    try {
      await fetchAvalaibleAssignments(periodId, periodCourseId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error adding assignment");
    } finally {
      setLoading(false);
    }
  }, [studentId, periodId, courseId, loadData, setLoading]);

  const handleUpdateAssignment = useCallback(
    async (assignmentId: string, updatedAssignment: Partial<StudentAssignment>) => {
      setLoading(true);
      try {
        if (periodCourseId) {
          const processedAssignment = {
            ...updatedAssignment,
            grade: updatedAssignment.grade !== undefined ? Number(updatedAssignment.grade) : undefined,
            percentage: updatedAssignment.percentage !== undefined ? Number(updatedAssignment.percentage) : undefined
          };
          await updateStudentAssignment(studentId, periodId, periodCourseId, assignmentId, processedAssignment);
        } else {
          setError("Course or course ID is missing");
        }
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error updating assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, courseId, loadData, setLoading]
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
    [studentId, courseId, loadData, setLoading]
  );

  return {
    studentAssignment: data,
    loadAssignments: loadData,
    handleLoadAvalaibleAssignment,
    loading,
    error,
    handleUpdateAssignment,
    handleDeleteAssignment,
  };
};

export default useStudentAssignments;
