// src/modules/studentsManagement/components/AssignmentsManager.tsx

import React from 'react';
import { Assignment, AssignmentsManagerProps } from '../types';
import BaseModule from '../../../components/BaseModule/BaseModule';
import useAssignments from '../hooks/useAssignments';

const AssignmentsManager: React.FC<AssignmentsManagerProps> = ({ studentId, periodId, courseId }) => {
    const { assignments, loading, error, handleAddAssignment } = useAssignments({ studentId, periodId, courseId });

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
                loading={loading}>
            </BaseModule>}
        </>
    );
};

export default AssignmentsManager;
