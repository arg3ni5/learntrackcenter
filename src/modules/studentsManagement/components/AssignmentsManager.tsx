// src/modules/studentsManagement/components/AssignmentsManager.tsx

import React from 'react';
import { Assignment, StudentAssignmentsManagerProps } from '../types';
import BaseModule from '../../../components/BaseModule/BaseModule';
import useStudentAssignments from '../hooks/useAssignments';

const AssignmentsManager: React.FC<StudentAssignmentsManagerProps> = ({ studentId, periodId, periodCourseId, courseId }) => {
    const { assignments, loading, error, handleAddAssignment } = useStudentAssignments({ studentId, periodId, periodCourseId, courseId });

    if (loading) return <div>Loading assignments...</div>;
    if (error) return <div>Error: {error}</div>;
    const fields = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "grade", placeholder: "Grade obtained for the assignment" },
        { name: "contributionPercentage", placeholder: "Contribution percentage to final grade" },
    ];

    return (
        <>
            {!loading && <BaseModule<Assignment>
                fields={fields}
                items={assignments}
                onItemAdded={handleAddAssignment}
                showForm={true}
                ableForm={true}
                loading={loading}>
            </BaseModule>}
        </>
    );
};

export default AssignmentsManager;
