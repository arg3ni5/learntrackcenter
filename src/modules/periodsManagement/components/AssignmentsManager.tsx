import React, { useMemo } from 'react';
import BaseModule from '../../../components/BaseModule/BaseModule';
import useAssignments, { AssignmentsManagerProps } from '../hooks/useAssignments';
import { Assignment } from '../../../types/types';
import Loading from '../../../components/loading/Loading';
import { BaseField } from '../../../components/BaseModule/types';

const AssignmentsManager: React.FC<AssignmentsManagerProps> = ({ periodId, courseId }) => {
    const { assignments, loading, error, handleAddAssignment, handleAddAssignments, handleDeleteAssignment, handleUpdateAssignment } = useAssignments({ periodId, courseId });

    const totalPercentage = useMemo(() => {
        return assignments.reduce((sum, assignment) => sum + (Number(assignment.contributionPercentage) || 0), 0);
    }, [assignments]);

    const fields : BaseField[] = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "contributionPercentage", placeholder: "Contribution percentage to final grade", type: "number" },
    ];

    if (loading) return <Loading text="Loading assignments" className="h30vh"></Loading>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <p><b>Total Percentage: </b>({totalPercentage})%</p>
            {totalPercentage < 100 && <p><b>Pending Percentage: </b>({100-totalPercentage})%</p>}
            <BaseModule<Assignment>
                fields={fields}
                items={assignments}
                onItemAdded={handleAddAssignment}
                onItemsAdded={handleAddAssignments}
                onItemUpdated={handleUpdateAssignment}
                onItemDeleted={handleDeleteAssignment}
                loading={loading}
                clearFormAfterAdd={false}
                showForm={true}
                ableForm={true}
                ableImport={true}
            />
        </>
    );
};

export default AssignmentsManager;
