// src/modules/studentsManagement/components/StudentDetailsManagement.tsx

import React from 'react';
import PeriodsManager from './PeriodsManager';

const StudentDetailsManagement: React.FC<{ studentId: string }> = ({ studentId }) => {
    return (
        <div>
            <h2>Student Details Management</h2>
            <PeriodsManager studentId={studentId} />
        </div>
    );
};

export default StudentDetailsManagement;
