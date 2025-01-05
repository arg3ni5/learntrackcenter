import React from 'react';
import { StudentCourseDetails } from '../../../types/types';
import Card, { CardField } from '../../../components/card/card';

interface StudentCourseCardProps {
    student: StudentCourseDetails;
    // onEdit?: (student: Student) => void;
    onDelete?: (id: string) => void;
}

const fields: CardField[] = [    
    { name: "identificationNumber", placeholder: "Identification" },
    { name: "email", placeholder: "Email Address" },
    { name: "status", placeholder: "Status" },
    { name: "finalGrade", placeholder: "Final Grade" },
    { name: "assignmentsIds", placeholder: "assignments" },
];    

const StudentCourseCard: React.FC<StudentCourseCardProps> = ({ student, onDelete }) => {
    return (
        <>
        <Card<StudentCourseDetails> titleName="fullName" fields={fields} data={student} onDelete={onDelete} />
        </>
    );
};

export default StudentCourseCard;
