import React, { useMemo } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";
import { StudentAssignment } from "../../../types/types";
import { StudentAssignmentsManagerProps } from "../types/types";
import useStudentAssignments from "../hooks/useStudentAssignments";
import { BaseField } from "../../../components/BaseModule/types/types";
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
    // console.log(item);
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
          <BaseModule<StudentAssignment>
            alias={"AssignmentsManager"}
            fields={fields}
            items={studentAssignment}
            onItemUpdated={handleUpdateAssignment}
            onItemDeleted={handleDelete}
            ableFilter={true}
            showForm={false}
            ableForm={true}
            initialFormData={currentAssignment}
            onSelect={handleOnSelect}
            onItemsUpdated={onItemsUpdated}
            loading={loading}></BaseModule>
        )}
      </div>
    </>
  );
};

export default AssignmentsManager;
