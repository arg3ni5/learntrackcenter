// src/modules/studentsManagement/hooks/useAssignments.ts

import { useEffect, useState } from "react";
import { Assignment, AssignmentsManagerProps } from "../types";
import { addAssignment, deleteAssignment, fetchAssignments, updateAssignment } from "../services/assignmentService";
import { useLoading } from "../../../components/loading/LoadingContext";

const useAssignments = (props: AssignmentsManagerProps) => {
  const { courseId } = props;
  const [data, setData] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setIsLoading } = useLoading();

  const setLoad = (state: boolean) => {
    setLoading(state);
    setIsLoading(state);
  };

  const loadAssignments = async (): Promise<Assignment[]> => {
    setLoad(true);
    try {
      await loadData();
      return data;
    } catch (err) {
      setError("Error al cargar las calificaciones");
      return [];
    } finally {
      setLoad(false);
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      setIsLoading(true);
      const data = await fetchAssignments(props.studentId, props.periodId, props.courseId);
      setData(data);
    } catch (err) {
      setError("Error al cargar las calificaciones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(); // Cargar cursos al montar el componente
  }, [courseId]);

  const handleAddAssignment = async (newAssignment: Assignment) => {
    try {
      await addAssignment(props.studentId, props.periodId, props.courseId, newAssignment);
      loadData(); // Reload assignments after adding
    } catch (err) {
      setError("Error adding assignment");
    }
  };

  const handleUpdateAssignment = async (assignmentId: string, updatedAssignment: Partial<Assignment>) => {
    try {
      await updateAssignment(props.studentId, props.periodId, props.courseId, assignmentId, updatedAssignment);
      loadData(); // Reload assignments after updating
    } catch (err) {
      setError("Error updating assignment");
    }
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    try {
      await deleteAssignment(props.studentId, props.periodId, props.courseId, assignmentId);
      loadData(); // Reload assignments after deleting
    } catch (err) {
      setError("Error deleting assignment");
    }
  };

  return { assignments: data, loadAssignments: loadData, loading, error, handleAddAssignment, handleUpdateAssignment, handleDeleteAssignment };
};

export default useAssignments;
