import { useEffect, useState, useCallback } from "react";
import { addAssignment, addAssignmentsBatch, deleteAssignment, fetchAssignments, updateAssignment, syncAssignments } from "../services/periodAssignmentService";
import { Assignment } from "../../../types/types";
import { useNotification } from "../../../components/notification/NotificationContext";

export interface AssignmentsManagerProps {
  periodId: string;
  courseId: string;
}

const useAssignments = (props: AssignmentsManagerProps) => {
  const { courseId, periodId } = props;
  const [data, setData] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { showNotification } = useNotification();
  

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
        const { id, ...assignment } = newAssignment;
        await addAssignment(periodId, courseId, assignment);
        await loadData();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error adding assignment");
      } finally {
        setLoading(false);
      }
    },
    [periodId, courseId, loadData, setLoading]
  );

  const handleAddAssignments = async (assignmentsToAdd: Assignment[]) => {
    try {
      // Filter to get unique assignments that do not already exist
      const uniqueAssignments = assignmentsToAdd.filter((newAssignment) => !data.some((existingAssignment) => existingAssignment.title === newAssignment.title));

      // Check if there are no unique assignments to add
      if (uniqueAssignments.length === 0) {
        showNotification("All assignments already exist", "error");
        return;
      }

      // Validate each assignment before adding
      const invalidAssignments = uniqueAssignments.filter((assignment) => !validateAssignment(assignment));
      if (invalidAssignments.length > 0) {
        showNotification("Some assignments have invalid data", "error");
        return;
      }

      // Use batch function to add unique assignments
      await addAssignmentsBatch(uniqueAssignments, periodId, courseId);

      // Show notification for successful addition
      showNotification(`${uniqueAssignments.length} assignments added`, "success");

      // Reload the list of assignments
      loadData();
    } catch (err) {
      console.error("Error adding assignments:", err);
      setError("Error adding assignments");
    }
  };

  const validateAssignment = (assignment: Assignment): boolean => {
    // Check if the assignment already exists
      const exists = data.some(existingAssignment => existingAssignment.title === assignment.title);
      if (exists) {
          showNotification('The assignment already exists', 'error');
          return false;
      }

      // Validate assignment data
      if (!assignment.title || typeof assignment.contributionPercentage !== 'number' || assignment.contributionPercentage < 0 || assignment.contributionPercentage > 100) {
          showNotification('Invalid assignment data', 'error');
          return false;
      }

      return true;
  };




  const handleUpdateAssignment = useCallback(
    async (assignmentId: string, updatedAssignment: Partial<Assignment>) => {
      setLoading(true);
      try {
        await updateAssignment(periodId, courseId, assignmentId, updatedAssignment);
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

  const handleSyncAssignments = async () => {
    try {
      console.log('Syncing assignments for period:', periodId, 'course:', courseId);
      if (!periodId || !courseId) {
        setError('Invalid period or course ID');
        return;
      }
      setLoading(true);
      
      await syncAssignments(periodId, courseId);
      // Optionally, you can reload students or perform any other necessary actions after syncing
      await loadData();
    } catch (err) {
      setError('Error syncing assignments');
    } finally {
      setLoading(false);
    }
  };

  return {
    assignments: data,
    loadAssignments: loadData,
    loading,
    setLoading,
    error,
    handleAddAssignment,
    handleAddAssignments,
    handleUpdateAssignment,
    handleDeleteAssignment,
    handleSyncAssignments
  };
};

export default useAssignments;
