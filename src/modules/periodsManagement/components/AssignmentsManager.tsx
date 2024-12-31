import React, { useMemo } from 'react';
import BaseModule from '../../../components/BaseModule/BaseModule';
import useAssignments, { AssignmentsManagerProps } from '../hooks/useAssignments';
import { Assignment } from '../../../types/types';

const AssignmentsManager: React.FC<AssignmentsManagerProps> = ({ periodId, courseId }) => {
    const { assignments, loading, error, handleAddAssignment, handleDeleteAssignment } = useAssignments({ periodId, courseId });

    const totalPercentage = useMemo(() => {
        return assignments.reduce((sum, assignment) => sum + (Number(assignment.contributionPercentage) || 0), 0);
    }, [assignments]);

    const fields = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "contributionPercentage", placeholder: "Contribution percentage to final grade" },
    ];

    if (loading) return <div>Loading assignments...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <p><b>Total Percentage: </b>({totalPercentage})%</p>
            <BaseModule<Assignment>
                fields={fields}
                items={assignments}
                onItemAdded={handleAddAssignment}
                onItemDeleted={handleDeleteAssignment}
                loading={loading}
            />
        </>
    );
};

export default AssignmentsManager;
