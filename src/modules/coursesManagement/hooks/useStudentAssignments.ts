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
          const processedChanges = transformAssignments(changes);
          if (processedChanges.length > 0) {
            await updateStudentAssignments(studentId, periodId, periodCourseId, processedChanges);
            await loadData();
          }
        } else {
          setError("Course or course ID is missing");
        }
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
    const { gradeMax, grade, percentageMax } = assignment;
    if (grade === 100 && percentageMax) return percentageMax;
    const maxScore = gradeMax ?? 100; // Use 100 as default if not provided
    const proportion = grade / maxScore; // Proportion of the earned score
    const contribution = proportion * percentageMax!; // Contribution to the final average

    return contribution; // Return the contribution as a decimal value
  };

  // const updateAssignments = (changes: Record<string, Record<string, number>>) => {
  //   setData((prevAssignments) => {
  //     return prevAssignments.map((assignment) => {
  //       const updatedFields = changes[assignment.id!];

  //       if (updatedFields) {
  //         const { grade } = updatedFields;
  //         let percentage = assignment.percentage || 0;

  //         if (grade !== undefined) {
  //           percentage = calculatePercentage({ ...assignment, ...updatedFields });

  //         }
  //         return { ...assignment, ...updatedFields, percentage };
  //       }

  //       return assignment; // Retorna la asignación original si no hay cambios
  //     });
  //   });
  // };

  const transformAssignments = (assignmentsRecord: Record<string, Record<string, number>>): StudentAssignment[] => {
    const assignmentsArray: StudentAssignment[] = [];

    data &&
      data.map((assignment) => {
        const updatedFields = assignmentsRecord[assignment.id!];

        if (updatedFields) {
          const { grade } = updatedFields;
          let percentage = assignment.percentage || 0;

          console.log({ "grade !== undefined": grade !== undefined, "grade !== assignment.grade": grade !== assignment.grade });

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
    handleDeleteAssignment
  };
};

export default useStudentAssignments;
