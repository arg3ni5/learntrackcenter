// src/modules/studentsManagement/components/StudentDetailsManagement.tsx

import React from 'react';
import PeriodsManager from './PeriodsManager';
import { Student } from '../types';
import StudentCard from './StudentCard';

const StudentManager: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <div>
            <h2 className='title'>Student Details Management</h2>            
            {student && <StudentCard student={student} />}
            {student && student.id && <PeriodsManager studentId={student.id} />}
        </div>
    );
};

export default StudentManager;
