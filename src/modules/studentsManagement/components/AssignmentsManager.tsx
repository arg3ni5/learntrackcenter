// src/modules/studentsManagement/components/AssignmentsManager.tsx

import React from 'react';
import { StudentAssignmentsManagerProps } from '../types';
import DataManagementModule from '../../../shared/modules/DataManagementModule/DataManagementModule';
import useStudentAssignments from '../hooks/useStudentAssignments';
import { StudentAssignment } from '../../../types/types';

const AssignmentsManager: React.FC<StudentAssignmentsManagerProps> = ({ studentId, periodId, periodCourseId, courseId }) => {
    const { studentAssignment: assignments, loading, error, handleAddAssignment } = useStudentAssignments({ studentId, periodId, periodCourseId, courseId });

    if (loading) return <div>Loading assignments...</div>;
    if (error) return <div>Error: {error}</div>;
    const fields = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "grade", placeholder: "Grade obtained for the assignment" },
        { name: "contributionPercentage", placeholder: "Contribution percentage to final grade" },
    ];

    return (
        <>
            {!loading && <DataManagementModule<StudentAssignment>
                fields={fields}
                items={assignments}
                onItemAdded={handleAddAssignment}
                showForm={true}
                ableForm={true}
                loading={loading}>
            </DataManagementModule>}
        </>
    );
};

export default AssignmentsManager;
