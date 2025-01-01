// src/modules/studentsManagement/components/StudentDetailsManagement.tsx

import React from 'react';
import PeriodsManager from './PeriodsManager';
import { Student } from '../types';

const StudentDetailsManagement: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <div>
            <h2 className='title'>Student Details</h2>
            {student.id && <PeriodsManager student={student} />}
        </div>
    );
};

export default StudentDetailsManagement;
