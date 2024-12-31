import React, { useEffect } from 'react';
import StudentManager from '../modules/studentsManagement/components/StudentManager';
import { useParams } from 'react-router-dom';
import useStudents from '../modules/studentsManagement/hooks/useStudents';

const StudentsCourses: React.FC = () => {
    const { loadStudent, student } = useStudents();
    const { id } = useParams<{ id: string }>();
    
    useEffect(() => {
        if (id && !student) {            
            loadStudent(id);
        }
    }, []);

    return (
        <div>
            {student && <StudentManager student={student}/>}
        </div>
    );
};

export default StudentsCourses;
