import React, { useMemo } from 'react';
import DataManagementModule from '../../../shared/modules/DataManagementModule/DataManagementModule';
import useAssignments, { AssignmentsManagerProps } from '../hooks/useAssignments';
import { Assignment } from '../../../types/types';
import Loading from '../../../components/loading/Loading';
import { BaseField } from '../../../shared/modules/DataManagementModule/types/types';

const CourseAssignmentsManager: React.FC<AssignmentsManagerProps> = ({ periodId, courseId }) => {
    const { assignments, loading, error, handleAddAssignment, handleAddAssignments, handleDeleteAssignment, handleUpdateAssignment } = useAssignments({ periodId, courseId });

    const totalPercentage = useMemo(() => {
        return assignments.reduce((sum, assignment) => sum + (Number(assignment.contributionPercentage) || 0), 0);
    }, [assignments]);

    const fields: BaseField[] = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "contributionPercentage", placeholder: "percentage", type: "number-view" },
        { name: "link", placeholder: "URL", type: "link", required: false },
    ];

    if (loading) return <Loading text="Loading assignments" className="h30vh"></Loading>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="assignments-manager">
            {/* <div className="item button-container">
                <button className='save-button' onClick={handleSyncAssignments}>Sync</button>
            </div> */}
            <DataManagementModule<Assignment>
                title="Assignments"
                alias={courseId}
                fields={fields}
                items={assignments}
                handlers={{
                    onItemAdded: handleAddAssignment,
                    onItemUpdated: handleUpdateAssignment,
                    onItemDeleted: handleDeleteAssignment,
                    onItemsAdded: handleAddAssignments
                }}
                loading={loading}
                clearFormAfterAdd={false}
                showForm={false}
                ableForm={true}
                ableImport={true}>

                <div className="container-grid">
                    <p><b>Total Percentage: </b>({totalPercentage})%</p>
                    {totalPercentage < 100 && <p><b>Pending Percentage: </b>({100 - totalPercentage})%</p>}
                </div>
            </DataManagementModule>
        </div>
    );
};

export default CourseAssignmentsManager;
