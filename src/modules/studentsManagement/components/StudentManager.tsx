// src/modules/studentsManagement/components/StudentDetailsManagement.tsx

import React from 'react';
import PeriodsManager from './PeriodsManager';
import StudentCard from './StudentCard';
import { Student } from '../../../types/types';

const StudentManager: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <div>
            <h2 className='title'>Student Details</h2>            
            {student && <StudentCard student={student} />}
            {student && student.id && <PeriodsManager student={student} />}
        </div>
    );
};

export default StudentManager;
