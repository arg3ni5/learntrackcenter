// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css';
import { Assignment } from '../../../types/types';
import useAssignments from '../../periodsManagement/hooks/useAssignments';
import { AssignmentsSelectorProps } from '../types';
import { BaseField } from '../../../shared/modules/DataManagementModule/types/types';
import DataManagementModule from '../../../shared/modules/DataManagementModule/DataManagementModule';

const AssignmentsSelector: React.FC<AssignmentsSelectorProps> = ({ periodId, courseId }) => {
    const { assignments, loading } = useAssignments({ periodId, courseId });
    const fields: BaseField[] = [
        { name: "title", placeholder: "Title of the assignment" },
        { name: "contributionPercentage", placeholder: "Contribution percentage to final grade", type: "number" },
    ];
    return (
        <div>
            {!loading && <DataManagementModule<Assignment>
                fields={fields}
                items={assignments}
                showForm={false}
                ableForm={false}
                loading={loading}>
            </DataManagementModule>}
        </div>
    );
};

export default AssignmentsSelector;
