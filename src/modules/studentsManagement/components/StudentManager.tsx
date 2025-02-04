// src/modules/studentsManagement/components/StudentDetailsManagement.tsx

import React from 'react';
import StudentPeriodsManager from './StudentPeriodsManager';
import StudentCard from './StudentCard';
import { Student } from '../../../types/types';

const StudentManager: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <div>
            <h2 className='title'>Student Details</h2>
            {student && <StudentCard student={student} />}
            {student && student.id && <StudentPeriodsManager student={student} />}
        </div>
    );
};

export default StudentManager;
