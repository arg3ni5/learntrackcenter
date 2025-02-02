import React, { useMemo } from "react";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import { StudentAssignment } from "../../../types/types";
import { StudentAssignmentsManagerProps } from "../types/types";
import useStudentAssignments from "../hooks/useStudentAssignments";
import { BaseField } from "../../../shared/modules/DataManagementModule/types/types";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Loading from "../../../components/loading/Loading";

const AssignmentsManager: React.FC<StudentAssignmentsManagerProps> = ({ studentId, periodId, periodCourseId, courseId }) => {
  const [currentAssignment, setCurrentAssignment] = useLocalStorage<StudentAssignment | null>("currentAssignment", null);
  const { studentAssignment, loading, handleUpdateAssignment, handleUpdateAssignments } = useStudentAssignments({ studentId, periodId, periodCourseId, courseId });

  const totalPercentage = useMemo(() => {
    return studentAssignment.reduce((sum, assignment) => sum + assignment.percentage, 0);
  }, [studentAssignment]);

  const fields: BaseField[] = [
    { name: "title", placeholder: "Assignment" },
    { name: "percentage", placeholder: "Percentage", type: "number" },
    { name: "grade", placeholder: "Grade", type: "number" },
  ];

  const handleDelete = async (id: string) => {
    console.log(id);
  };

  const handleOnSelect = (item: StudentAssignment | null) => {
    setCurrentAssignment(item);
  };

  const onItemsUpdated = (changes: Record<string, Record<string, number>>) => {
    handleUpdateAssignments(changes);
  };

  return (
    loading ? <Loading type='spinner' className="item h30vh"></Loading> : <>
      <div className="item">
        <div>Total Percentage: {totalPercentage}%</div>
        {!loading && (
          <DataManagementModule<StudentAssignment>
            alias={"AssignmentsManager"}
            fields={fields}
            items={studentAssignment}
            ableFilter={true}
            showForm={false}
            ableForm={true}
            initialFormData={currentAssignment}
            loading={loading}
            handlers={{
              onItemUpdated: handleUpdateAssignment,
              onItemDeleted: handleDelete,
              onSelect: handleOnSelect,
              onItemsUpdated: onItemsUpdated,
            }}></DataManagementModule>
        )}
      </div>
    </>
  );
};

export default AssignmentsManager;
