// src/modules/studentsManagement/components/AssignmentsManager.tsx

import React from 'react';
import BaseModule from '../../../components/BaseModule/BaseModule';
import { StudentAssignment } from '../../../types/types';
import { StudentAssignmentsManagerProps } from '../types/types';
import useStudentAssignments from '../hooks/useStudentAssignments';



const AssignmentsManager: React.FC<StudentAssignmentsManagerProps> = (
    { studentId, periodId, periodCourseId, courseId }) => {
    const { studentAssignment, loading, error, handleAddAssignment } = useStudentAssignments({ studentId, periodId, periodCourseId, courseId });

    if (loading) return <div>Loading assignments...</div>;
    if (error) return <div>Error: {error}</div>;
    const fields = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "grade", placeholder: "Grade obtained for the assignment" },
        { name: "contributionPercentage", placeholder: "Contribution percentage to final grade" },
    ];

    return (
        <>
            {!loading && <BaseModule<StudentAssignment>
                fields={fields}
                items={studentAssignment}
                onItemAdded={handleAddAssignment}
                showForm={true}
                ableForm={true}
                loading={loading}>
            </BaseModule>}
        </>
    );
};

export default AssignmentsManager;
