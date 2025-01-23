import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStudents from '../modules/studentsManagement/hooks/useStudents';
import StudentManager from '../modules/studentsManagement/components/StudentManager';

const StudentsCourses: React.FC = () => {
    const { loadStudent, student, loading } = useStudents("Loading Student");
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id && !student) {
            loadStudent(id);
        }
    }, [id, student]);


    return (
        <>
            {!loading && student && <StudentManager student={student}/>}
        </>
    );
};

export default StudentsCourses;
