import React, { useMemo } from 'react';
import BaseModule from '../../../components/BaseModule/BaseModule';
import { StudentAssignment } from '../../../types/types';
import { StudentAssignmentsManagerProps } from '../types/types';
import useStudentAssignments from '../hooks/useStudentAssignments';
import { BaseField } from '../../../components/BaseModule/types/types';

const AssignmentsManager: React.FC<StudentAssignmentsManagerProps> = (
    { studentId, periodId, periodCourseId, courseId }) => {
    const { studentAssignment, loading, handleUpdateAssignment } = useStudentAssignments({ studentId, periodId, periodCourseId, courseId });

    const totalPercentage = useMemo(() => {
        return studentAssignment.reduce((sum, assignment) => sum + assignment.percentage, 0);
    }, [studentAssignment]);

    if (loading) return <div>Loading assignments...</div>;

    const fields : BaseField[] = [
        { name: "title", placeholder: "Assignment" },
        { name: "percentage", placeholder: "Percentage", type: "number" },
        { name: "grade", placeholder: "Grade", type: "number" },
    ];

    return (
        <>
            <div>Total Percentage: {totalPercentage}%</div>
            {!loading && <BaseModule<StudentAssignment>
                fields={fields}
                items={studentAssignment}
                onItemUpdated={handleUpdateAssignment}
                showForm={true}
                ableForm={true}
                loading={loading}>
            </BaseModule>}
        </>
    );
};

export default AssignmentsManager;
