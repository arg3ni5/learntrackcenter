import { useEffect, useState, useCallback } from "react";
import { addAssignment, deleteAssignment, fetchAssignments, updateAssignment } from "../services/assignmentService";
import { Assignment } from "../../../types/types";


export interface AssignmentsManagerProps {
    periodId: string;
    courseId: string;
}

const useAssignments = (props: AssignmentsManagerProps) => {
  const { courseId, periodId } = props;
  const [data, setData] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchAssignments(periodId, courseId);
      setData(fetchedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar las calificaciones");
    } finally {
      setLoading(false);
    }
  }, [periodId, courseId, setLoading]);

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
    async (newAssignment: Assignment) => {
      setLoading(true);
      try {
        await addAssignment(periodId, courseId, newAssignment);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error adding assignment");
      } finally {
        setLoading(false);
      }
    },
    [periodId, courseId, loadData, setLoading]
  );

  const handleUpdateAssignment = useCallback(
    async (assignmentId: string, updatedAssignment: Partial<Assignment>) => {
      setLoading(true);
      try {
        await updateAssignment(periodId, courseId, assignmentId, updatedAssignment, true);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error updating assignment");
      } finally {
        setLoading(false);
      }
    },
    [periodId, courseId, loadData, setLoading]
  );

  const handleDeleteAssignment = useCallback(
    async (assignmentId: string) => {
      setLoading(true);
      try {
        await deleteAssignment(periodId, courseId, assignmentId);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error deleting assignment");
      } finally {
        setLoading(false);
      }
    },
    [periodId, courseId, loadData, setLoading]
  );

  return {
    assignments: data,
    loadAssignments: loadData,
    loading, setLoading,
    error,
    handleAddAssignment,
    handleUpdateAssignment,
    handleDeleteAssignment,
  };
};

export default useAssignments;
