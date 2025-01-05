import { useEffect, useState, useCallback } from "react";
import {
  deleteStudentAssignment,
  fetchStudentAssignment,
  fetchAvalaibleAssignments,
  updateStudentAssignment,
  updateStudentAssignments,
} from "../services/studentAssignmentService";
import { StudentAssignment } from "../../../types/types";
import { StudentAssignmentsManagerProps } from "../types/types";

const useStudentAssignments = (props: StudentAssignmentsManagerProps) => {
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
          const { percentage, grade } = updatedAssignment;
          const newPercentage = (!percentage || percentage === 0) && grade ? calculatePercentage(updatedAssignment as StudentAssignment) : Number(percentage);

          console.log(newPercentage);

          // return;
          const processedAssignment = {
            ...updatedAssignment,
            grade: grade !== undefined ? Number(grade) : undefined,
            percentage: newPercentage,
          };
          await updateStudentAssignment(studentId, periodId, periodCourseId, assignmentId, processedAssignment);
        } else {
          setError("Course or course ID is missing");
        }
        await loadData();
      } catch (err) {
        console.error(err);

        setError(err instanceof Error ? err.message : "Error updating assignment");
      } finally {
        setLoading(false);
      }
    },
    [studentId, courseId, loadData, setLoading]
  );

  const handleUpdateAssignments = useCallback(
    async (changes: Record<string, Record<string, number>>) => {
      setLoading(true);
      try {
        if (periodCourseId) {
          // const processedAssignments = updatedAssignments.map((assignment) => {
          //   return {
          //     ...assignment,
          //     grade: assignment.grade !== undefined ? Number(assignment.grade) : undefined,
          //     percentage: assignment.percentage !== undefined ? Number(assignment.percentage) : undefined,
          //   };
          // });
          await updateStudentAssignments(studentId, periodId, periodCourseId, transformAssignments(changes));
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

  const calculatePercentage = (assignment: StudentAssignment): number => {
    const maxScore = assignment.gradeMax ?? 100; // Use 100 as default if not provided
    const proportion = assignment.grade / maxScore; // Proportion of the earned score
    const contribution = proportion * assignment.percentageMax!; // Contribution to the final average
    console.log(maxScore, proportion, contribution);

    return contribution; // Return the contribution as a decimal value
  };

  const updateAssignments = (changes: Record<string, Record<string, number>>) => {
    setData((prevAssignments) => {
      return prevAssignments.map((assignment) => {
        const updatedFields = changes[assignment.id!];

        if (updatedFields) {
          const { grade } = updatedFields;
          let percentage = assignment.percentage || 0;

          if (grade !== undefined && grade !== assignment.grade) {
            percentage = calculatePercentage({ ...assignment, ...updatedFields });
          }
          return { ...assignment, ...updatedFields, percentage };
        }

        return assignment; // Retorna la asignación original si no hay cambios
      });
    });
  };

  const transformAssignments = (assignmentsRecord: Record<string, Record<string, number>>): StudentAssignment[] => {
    const assignmentsArray: StudentAssignment[] = [];

    data &&
      data.map((assignment) => {
        const updatedFields = assignmentsRecord[assignment.id!];
        if (updatedFields) {
          const { grade } = updatedFields;
          let percentage = assignment.percentage || 0;

          if (grade !== undefined && grade !== assignment.grade) {
            percentage = calculatePercentage({ ...assignment, ...updatedFields });
          }
          
          assignmentsArray.push({ ...assignment, ...updatedFields, percentage }); // Actualiza los campos según los cambios
        }
        return assignment; // Retorna la asignación original si no hay cambios
      });

    return assignmentsArray;
  };

  return {
    studentAssignment: data,
    loadAssignments: loadData,
    handleLoadAvalaibleAssignment,
    loading,
    error,
    handleUpdateAssignment,
    handleUpdateAssignments,
    handleDeleteAssignment,
    updateAssignments,
  };
};

export default useStudentAssignments;
